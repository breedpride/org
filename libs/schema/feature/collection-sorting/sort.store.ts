import { computed, effect, inject, signal } from '@angular/core';
import { withFilledNamedCollection } from '@bh/collection-data';
import { SortField } from '@bh/superfield';
import {
  patchState,
  signalStore,
  type,
  withComputed,
  withHooks,
} from '@ngrx/signals';
import { setAllEntities } from '@ngrx/signals/entities';
import { injectQueryParams } from 'ngxtension/inject-query-params';
import { NEW_DEFAULT_SORT_COLUMNS } from './sort.collection';
import { SORT_COLUMNS_CONFIG } from './sort.token';
import { BPNavStore } from '@bh/nav-store';
import { PrimeIcons } from 'primeng/api';
import { DESC } from './sort.const';

const sortCollectionConfig = {
  entity: type<SortField>(),
  collection: 'sort' as const,
  selectId: (c: SortField) => c.id,
};

export const injectSectionSort = () => {
  // const sortConfig = injectSortConfig();
  const data = inject(SORT_COLUMNS_CONFIG);
  console.log('SORT CONFIG', data);
  const sortIdSignal = injectQueryParams('sort') || signal('');
  // return data;
  const Sort = signalStore(
    { protectedState: false },
    withFilledNamedCollection({
      ...sortCollectionConfig,
      data,
      // TODO - rework
      selectedIdSource: sortIdSignal as any,
    }),
    withComputed((store) => ({
      sortColumns: computed(() => {
        const selectedEntity = store.sort();
        if (selectedEntity && selectedEntity.sortColumns)
          return selectedEntity.sortColumns;
        return NEW_DEFAULT_SORT_COLUMNS;
      }),
    })),
    withComputed((store, navStore = inject(BPNavStore)) => ({
      items: computed(() =>
        store.sortEntities().map((f) => ({
          ...f,
          command: () => navStore.changePublicStoreSort(f.id),
          icon: f.icon
            ? f.icon
            : f.sortColumns[0].direction === DESC
              ? PrimeIcons.SORT_AMOUNT_DOWN
              : PrimeIcons.SORT_AMOUNT_DOWN_ALT,
          isActive: true,
          label: f.name,
        }))
      ),
    }))
  );
  return new Sort();
};

export const SortStore = signalStore(
  { protectedState: false },
  withFilledNamedCollection(sortCollectionConfig),
  withComputed((store) => ({
    sortColumns: computed(() => {
      const selectedEntity = store.sort();
      if (selectedEntity && selectedEntity.sortColumns)
        return selectedEntity.sortColumns;
      return NEW_DEFAULT_SORT_COLUMNS;
    }),
  })),
  withHooks((store) => {
    return {
      onInit: () => {
        const sortIdSignal = injectQueryParams('sort');

        const entities = inject(SORT_COLUMNS_CONFIG);
        patchState(store, setAllEntities(entities, sortCollectionConfig));
        effect(
          () => {
            store.setSelectedId(sortIdSignal() || '');
            // console.log('SORT STORE change', store.sortColumns());
          },

        );
      },
    };
  })
);
export type SortStoreType = InstanceType<typeof SortStore>;
