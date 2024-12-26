import { inject, Signal } from '@angular/core';
import { injectSortColumns } from '@bh/collection-sorting';

import {

  NullableFilterGroup,
  SortColumn,
  SpaceConfig,
  WithCreatioId,
  WithSpaceConfig,
} from '@bh/superfield';
import {
  setFulfilled,
  setPending,
  withRequestStatus,
} from '@bp/with-request-status';
import { ApiService, getParamsFromConfig, AnyEnityList } from '@breedpride/api';
import { tapResponse } from '@ngrx/operators';
import {
  patchState,
  signalStoreFeature,
  type,
  withMethods,
  withState,
} from '@ngrx/signals';
import {
  addEntities,
  NamedEntityState,
  SelectEntityId,
  setAllEntities,
} from '@ngrx/signals/entities';
import { NamedEntityProps } from '@ngrx/signals/entities/src/models';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { AutoCompleteLazyLoadEvent } from 'primeng/autocomplete';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { TableLazyLoadEvent } from 'primeng/table';
import { filter, map, pairwise, pipe, startWith, switchMap, tap } from 'rxjs';
import {isEqual} from 'lodash-es';
import { emptyFilterQuery, withFilterQuery } from '@bh/store-feature';
import { getCreatioEntitesConfig } from './const';
import { WithEntitiesExt, WithSelectedId } from '@bh/collection-selection';

export function withCreatioMethods<
  Entity extends WithCreatioId,
  Collection extends string
>(options: {
  entity: Entity;
  collection: Collection;
  selectId: SelectEntityId<NoInfer<Entity>>;
}) {
  const creatioConfig = getCreatioEntitesConfig<Entity>();

  return signalStoreFeature(
    {
      state: type<
        WithSelectedId<Entity, ''> &
          NamedEntityState<Entity, ''> &
          WithSpaceConfig
      >(),
      props: type<NamedEntityProps<Entity, ''> & WithEntitiesExt<Entity, ''>>(),
      methods: type<{}>(),
    },
    withFilterQuery(),
    withRequestStatus(),
    withState({ total: -1, nextFrom: 0 }),
    withState<{ ref: DynamicDialogRef | null }>({ ref: null }),
    withMethods((store) => {
      return {
        patchFirstListResponse({
          entities,
          total,
          nextFrom,
        }: AnyEnityList<Entity>) {
          patchState(
            store,
            setAllEntities<Entity, ''>(entities, creatioConfig),
            {
              total,
              nextFrom,
            }
          );
        },
        patchNextListResponse({
          entities,
          total,
          nextFrom,
        }: AnyEnityList<Entity>) {
          patchState(store, addEntities(entities, creatioConfig), {
            total,
            nextFrom,
          });
        },
        setRef(ref: DynamicDialogRef) {
          patchState(store, { ref });
        },
        repackEntities: () => {
          patchState(
            store,
            setAllEntities([...store.Entities()], creatioConfig),
            setFulfilled()
          );
        },
        setDefaults(config: SpaceConfig): void {
          patchState(store, {
            config,
          });
        },
        completeSelect: () => {
          const selected = store.SelectedEntity();
          const ref = store.ref();
          if (ref) ref.close(selected);
        },
      };
    }),
    withMethods((store, api = inject(ApiService)) => ({
      firstPageResponse: (sort: Signal<SortColumn[]>) => {
        // console.log('🚀 ~ sort:', sort());
        const config = store.config();
        const params = getParamsFromConfig(config)
          .set('filters', JSON.stringify(store.filterQuery()))
          .set('from', JSON.stringify(0))
          .set('orderColumns', JSON.stringify(sort()));

        return api.listEntities<Entity>(config, params).pipe(
          tapResponse({
            error: console.error,
            finalize: () => patchState(store, setFulfilled()),
            next: (response: AnyEnityList<Entity>) => {
              store.patchFirstListResponse(response);
            },
          })
        );
      },
      nextPageResponse: (sort: Signal<SortColumn[]>) => {
        const config = store.config();
        const params = getParamsFromConfig(config)
          .set('filters', JSON.stringify(store.filterQuery()))
          .set('from', JSON.stringify(store.EntitiesCount()))
          .set('orderColumns', JSON.stringify(sort()));

        return api.listEntities<Entity>(config, params).pipe(
          tapResponse({
            error: console.error,
            finalize: () => patchState(store, setFulfilled()),
            next: (response: AnyEnityList<Entity>) => {
              store.patchNextListResponse(response);
            },
          })
        );
      },
    })),
    withMethods((store, sort = injectSortColumns()) => ({
      loadFirstPage: rxMethod<NullableFilterGroup>(
        pipe(
          startWith(emptyFilterQuery),
          pairwise(),
          tap(([prev, next]) =>
            isEqual(prev, next) && store.repackEntities()
          ),
          filter(([prev, next]) => !isEqual(prev, next)),
          map(([, next]) => next),
          map((filterQuery) => {
            // console.log('🚀 ~ filterQuery:', getState(store));
            patchState(
              store,
              setPending(),
              { filterQuery },
              { total: -1 },
              { nextFrom: 0 }
            );
            return filterQuery;
          }),
          switchMap(() => store.firstPageResponse(sort))
        )
      ),
      loadNextPage: rxMethod<number>(
        pipe(
          filter(() => !(store.total() === store.nextFrom())),
          filter(() => !store.isLoading()),
          filter(
            (last) => store.total() > last && store.EntitiesCount() <= last
          ),
          tap(() => patchState(store, setPending())),
          switchMap(() => store.nextPageResponse(sort))
        )
      ),
    })),
    withMethods((store) => ({
      refresh() {
        store.loadFirstPage(store.filterQuery());
      },
      onLazyLoad(event: AutoCompleteLazyLoadEvent | TableLazyLoadEvent) {
        const isPending = store.isLoading();
        const needMore =
          store.total() > event.last && store.Entities().length <= event.last;
        if (isPending || !needMore) return;
        store.loadNextPage(event.last);
      },
    }))
  );
}
