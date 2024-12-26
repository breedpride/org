import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { FIELD_NAMES_LOOKUP_MINIMUN } from '@bh/filtering';
import {

  CreatioPage,
  CrmResponse,

  ICreatioMetaResponseResult,
  MetaPage,

} from '@bh/types';
import { WithCreatioId,  FilterFieldConfig,  SpaceConfig, NullableFilterGroup,} from '@bh/superfield';
import { environment } from './core-utils';
import { uniq } from 'lodash-es';
import { ConfirmationService, MessageService } from 'primeng/api';
import {
  BehaviorSubject,
  Observable,
  forkJoin,
  map,
  of,
  take,
  tap,
} from 'rxjs';
import { deserialize, logPage } from './api-utils';
import {
  Entity,
  getEntityColumnValues,
  groupObjectFields,
  transormDateFields,
} from './core-utils';
import {
  AnyEnityList,
  decodeDataProperty,
  EntitiesListResponse,
  fromLocalStorage,
  mapCreatioResult,
  mapDateFields,
  mapGroupObjects,
  tapSaveToLocalStorage,
} from './utils';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  http = inject(HttpClient);
  confirmationService = inject(ConfirmationService);
  messageService = inject(MessageService);

  checkAddResponse = map((response: CrmResponse) => {
    if (response.result?.isSuccess) {
      this.messageService.add({
        detail: 'You have accepted',
        life: 3000,
        severity: 'info',
        summary: 'Record created',
      });
      return response;
    } else {
      this.showErrorResponse();
      return null;
    }
  });

  checkDeleteResponse = map((response: CrmResponse) => {
    if (response.result?.isSuccess) {
      this.messageService.add({
        detail: 'You have accepted',
        life: 3000,
        severity: 'info',
        summary: 'Record deleted',
      });
      return response;
    } else {
      this.showErrorResponse();
      return null;
    }
  });
  checkEditResponse = map((response: CrmResponse) => {
    if (response.result?.isSuccess) {
      this.messageService.add({
        detail: 'You have accepted',
        life: 3000,
        severity: 'info',
        summary: 'Record updated',
      });
      return response;
    } else {
      this.showErrorResponse();
      return null;
    }
  });

  checkReadResponse = map((response: CrmResponse) => {
    if (response.result?.isSuccess) {
      return response;
    } else {
      this.showErrorResponse();
      return null;
    }
  });

  showErrorResponse = (): void => {
    this.messageService.add({
      detail: 'You have rejected',
      life: 3000,
      severity: 'error',
      summary: 'Server error',
    });
  };

  transofrmEntityPipe = [
    // tap(console.log),
    map(deserialize),
    // tap(console.log),
    map(groupObjectFields),
  ] as const;

  // TODO entityColumns must contain all entitiesColumns for chenge in current entitiesList
  createEntity<T extends Entity>(config: any, entity: T): Observable<T> {
    const body = {
      columnsValues: getEntityColumnValues(config, entity),
    };
    const url = `${environment.api.url}${config.entitySchemaName}`;
    return this.post(url, body).pipe(
      this.checkAddResponse,
      ...this.transofrmEntityPipe,
      map((o) => transormDateFields(o, config.dateFields))
    );
  }

  delete(url: string): Observable<unknown> {
    return this.http.delete(url);
  }
  massDelete(
    config: { entitySchemaName: string },
    ids: any[]
  ): Observable<boolean | null> {
    const _deleted$: BehaviorSubject<boolean | null> = new BehaviorSubject<
      boolean | null
    >(null);
    this.confirmationService.confirm({
      accept: () => {
        forkJoin(
          ids.map((id: string) =>
            this.delete(
              `${environment.api.url}${config.entitySchemaName}/${id}`
            )
          )
        )
          .pipe(take(1))
          .subscribe(() => {
            //TODO negative result
            // TODO partitial result
            _deleted$.next(true);
          });
      },
      header: 'Delete confirmation',
      icon: 'pi pi-info-circle',
      message: `The record will be deleted. Do you want to delete this data? `,
    });
    return _deleted$.asObservable();
  }

  public get(url: string, params: HttpParams): Observable<CrmResponse> {
    return this.http.get<CrmResponse>(url, { params });
  }

  public getPageByIdAndModel(
    entityName: string,
    recordId: string
  ): Observable<CreatioPage> {
    const url = `GetByModel?entityName=${entityName}&recordId=${recordId}&modelName=&url=`;
    return this.http.get(`${environment.api.basePublicUrl}${url}`).pipe(
      take(1),
      logPage,
      map((data: CrmResponse) => data.result)
    ) as Observable<CreatioPage>;
  }

  getPageBySlug(slug: string): Observable<CreatioPage> {
    return this.http.get(`${environment.api.publicUrl}?Url=${slug}`).pipe(
      take(1),
      logPage,
      map((data: CrmResponse) => data.result)
    );
  }

  getSchema(url: string): Observable<MetaPage> {
    return this.http
      .get<ICreatioMetaResponseResult>(`${environment.api.schemaUrl}${url}`)
      .pipe(
        take(1),
        map((response) => response.result)
        // tap(console.log)
      ) as Observable<MetaPage>;
  }

  getById<T>(
    config: {
      dateFields?: string[];
      entitySchemaName: string;
      entityColumns?: string[];
    },
    id: string
  ): Observable<T> {
    const entitySchemaName = config.entitySchemaName;
    const params: HttpParams = new HttpParams().appendAll({
      columns: uniq(config.entityColumns || FIELD_NAMES_LOOKUP_MINIMUN),
    });
    const url = `${environment.api.url}${config.entitySchemaName}/${id}`;

    return this.getTyped<CrmResponse, T>(config, entitySchemaName, url, params);
  }
  // TODO - T - entity type setter
  listEntities<T>(
    config: Partial<FilterFieldConfig | SpaceConfig>,
    params: HttpParams
  ): Observable<AnyEnityList<T>> {
    const entitySchemaName = config.entitySchemaName;
    const url = config.isPublic
      ? `${environment.api.spaceUrl}${entitySchemaName}`
      : `${environment.api.collectionUrl}${entitySchemaName}`;
    if (config.isPublic) params = params.set('force', true);

    return this.getTyped<EntitiesListResponse, AnyEnityList<T>>(
      config,
      entitySchemaName,
      url,
      params
    );
  }
  getTyped<T, K>(
    config: { dateFields?: string[] },
    entitySchemaName: string | undefined,
    url: string,
    params: HttpParams
  ): Observable<K> {
    const { cachable, finalKey, data } = fromLocalStorage(
      entitySchemaName,
      params
    );
    if (data) {
      return of(data).pipe(take(1), mapDateFields(config.dateFields || []));
    }
    return this.http
      .get<T>(url, { params })
      .pipe(
        take(1),
        mapCreatioResult(),
        decodeDataProperty(),
        mapGroupObjects(),
        tapSaveToLocalStorage(cachable, finalKey),
        mapDateFields(config.dateFields || [])
      );
  }

  patch(url: string, body: { columnsValues: any[] }): Observable<CrmResponse> {
    return this.http.patch<CrmResponse>(url, body);
  }

  //TODO move to http service
  post(url: string, body: { columnsValues: any[] }): Observable<CrmResponse> {
    return this.http.post<CrmResponse>(url, body);
  }

  updateEntity<T extends WithCreatioId>(
    config: { entitySchemaName: string; dateFields?: string[] },
    entity: Partial<T>
  ): Observable<T> {
    const body: { columnsValues: any[] } = {
      columnsValues: getEntityColumnValues(config, entity),
    };
    const url = `${environment.api.url}${config.entitySchemaName}/${entity.Id}`;
    return this.patch(url, body).pipe(
      take(1),
      tap((r: CrmResponse) => {
        console.log(r);
      }),
      this.checkEditResponse,
      ...this.transofrmEntityPipe,
      map((o: any) => transormDateFields(o, config.dateFields))
    );
  }

  selectTopOne<T>(
    config: Partial<FilterFieldConfig | SpaceConfig>,
    filters: NullableFilterGroup
  ) {
    const params = getParamsFromConfig({ ...config, rows: 1 })
      .set('filters', JSON.stringify(filters))
      .set('from', JSON.stringify(0));

    return this.listEntities<T>(config, params).pipe(
      map((e) => e.entities),
      map((list) => (list?.length === 1 ? list[0] : null))
    );
  }
}
const defaultRowCount = 60;
// TODO _ --- REWORK !!!!
export const getParamsFromConfig = (config: {
  entitiesColumns?: any;
  rows?: number;
}): HttpParams => {
  return new HttpParams()
    .set('rows', JSON.stringify(config.rows || defaultRowCount))
    .set('customQuery', JSON.stringify(true))
    .appendAll({
      columns: config.entitiesColumns || FIELD_NAMES_LOOKUP_MINIMUN,
    });
};
