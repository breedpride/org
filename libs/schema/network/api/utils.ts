import { HttpParams } from '@angular/common/http';
export type EntitiesListResponse = {
  result: EntitiesQueryResult;
};
// export type Query = {};
type WithNextForm = { nextFrom: number };
type WithTotal = { total: number };
type WithError = { error?: string };


export type EntitiesQuery = WithNextForm &
  WithTotal &
  WithEncodedData &
  WithError;
type WithSuccess = { isSuccess: boolean };
export type EntitiesQueryResult = WithNextForm &
  WithTotal &
  WithEncodedData &
  WithError &
  WithSuccess &
  IsSerializedData;
export type WithEncodedData = { data: string };
export type WithDecodedData = { data: any };
export type IsSerializedData = { isSerializedData: boolean };
export type WithDecodedData2<T> = { data: Array<T> };

import { simpleHash } from '@bh/utils';
import { Observable, map, tap } from 'rxjs';
import { groupObjectFields, transormDateFields } from './core-utils';
import { LOOKUPS } from './lookups';
export type AnyEnityList<T> = {
  entities: T[];
  nextFrom: number;
  total: number;
};
const getStorageKey = (
  params: HttpParams,
  entitySchemaName: string,
  id = ''
): string =>
  entitySchemaName + simpleHash(entitySchemaName + id + params.toString());

export function decodeDataProperty() {
  return function <T extends EntitiesQueryResult>(
    source: Observable<T & WithEncodedData>
  ): Observable<T & WithDecodedData> {
    return new Observable((subscriber) => {
      return source.subscribe({
        next(value) {
          if (
            value !== undefined &&
            value !== null &&
            value.isSerializedData &&
            value.data
          ) {
            // TODO try catch
            const data = JSON.parse(value.data);
            subscriber.next({ ...value, data, isSerializedData: false });
          }
        },
        error(error) {
          subscriber.error(error);
        },
        complete() {
          subscriber.complete();
        },
      });
    });
  };
}

export function getCreatioResult() {
  return map((data: any) => {
    // TODO check for success
    return data.result;
  });
}
const isAnyEntityList = (data: any): boolean => {
  return data && data.data && data.total && data.nextFrom;
};
// TODO - dateFields  before gouping First!!!! (couse )

export function tapSaveToLocalStorage(cachable: boolean, finalKey: string) {
  return tap((data: any) => {
    if (!cachable) return;
    localStorage.setItem(finalKey, JSON.stringify(data));
  });
}

export function mapDateFields(dateFields: string[]) {
  return map((data: AnyEnityList<any> | any) => {
    if (dateFields.length === 0) return data;
    if (isAnyEntityList(data)) {
      const entities = data.entities.map((o: any) =>
        transormDateFields(o, dateFields)
      );
      // console.log(
      //   `LIST [${config.entitySchemaName}] - total: ${data.total}, nextFrom: ${data.nextFrom} `,
      //   entities
      // );
      return {
        ...data,
        entities,
      };
    } else {
      return transormDateFields(data, dateFields);
    }
  });

}
const containAnyEntityList = (data: any) =>
  data
    ? Object.hasOwn(data, 'data') &&
      Object.hasOwn(data, 'total') &&
      Object.hasOwn(data, 'nextFrom')
    : false;
export function mapGroupObjects() {
  return map((data: any) => {
    if (containAnyEntityList(data)) {
      // console.log('LIST', data);
      const values = data.data;
      const list = Array.isArray(values) ? values : [];
      const entities = list.map((o) => groupObjectFields(o));
      return {
        entities,
        nextFrom: data.nextFrom,
        total: data.total,
      };
    } else {
      // entity
      if (data && data.data) {
        // console.log('NOT ENTITY LIST', data);
        return groupObjectFields(data.data);
      }
    }
  });
}

export function fromLocalStorage(
  entitySchemaName = 'none',
  params: HttpParams,
  id = ''
): { cachable: boolean; finalKey: string; data: any } {
  const cachable =
    LOOKUPS.some((e) => e === entitySchemaName) || params.get('rows') === '1';

  if (cachable) {
    const finalKey = getStorageKey(params, entitySchemaName, id);
    const cachedData = localStorage.getItem(finalKey);
    if (cachedData) {
      const data = JSON.parse(cachedData);
      if (data) {
        console.log(`LOCALCACHE =>  [LIST] ${entitySchemaName}`, data);
        return { cachable, finalKey, data };
      } else {
        return { cachable, finalKey, data };
      }
    } else {
      return { cachable, finalKey, data: null };
    }
  } else {
    return { cachable, finalKey: '', data: null };
  }
}

export function mapCreatioResult() {
  return map((data: any) => {
    // TODO check for success
    return data.result;
  });
}
