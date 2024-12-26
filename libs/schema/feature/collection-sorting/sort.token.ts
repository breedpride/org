import { forwardRef, inject, Provider, Signal, signal } from '@angular/core';
import { STORE_CONFIG } from '@bh/collection-store';
import { SortColumn, SpaceConfig } from '@bh/superfield';
import { SortField } from '@bh/superfield';
import { createInjectionToken } from 'ngxtension/create-injection-token';
import {
  NEW_DEFAULT_SORT_COLUMNS,
  PET_SPACE_SORT_CONFIG,
} from './sort.collection';
import { SortStore, SortStoreType } from './sort.store';

export const [injectSortColumns, provideSortColumns, SORT_COLUMNS] =
  createInjectionToken(
    (): Signal<SortColumn[]> => {
      const store: SortStoreType | null = inject(SORT_COLUMNS_STORE, {
        optional: true,
      });
      if (store) {
        return store.sortColumns;
      }

      return signal(NEW_DEFAULT_SORT_COLUMNS);
    },
    { isRoot: false }
  );

export const [, provideSortColumnsConfig, SORT_COLUMNS_CONFIG] =
  createInjectionToken(
    (storeConfig: SpaceConfig) => {
      if (storeConfig.sortConfig) {
        return storeConfig.sortConfig;
      }
      return PET_SPACE_SORT_CONFIG;
    },
    {
      deps: [STORE_CONFIG],
    }
  );

export const [
  injectSortColumnsStore,
  provideSortColumnsStore,
  SORT_COLUMNS_STORE,
] = //TODO  - create injection from QeryParams
  createInjectionToken((_: SortField[]) => new SortStore(), {
    extraProviders: [
      {
        provide: SORT_COLUMNS,
        useExisting: forwardRef(
          () => injectSortColumnsStore().sort()?.sortColumns
        ),
      },
      provideSortColumns(),
    ],
    isRoot: false,
    deps: [SORT_COLUMNS_CONFIG],
  });

export const provideEntitiesSort = (value: SortField[]): Provider[] => [
  {
    provide: SORT_COLUMNS_CONFIG,
    useValue: [...value],
  },
  provideSortColumnsStore(),
];

export const provideEntitiesSortFn = (fn: () => SortField[]): Provider[] => {
  return [
    {
      provide: SORT_COLUMNS_CONFIG,
      useFactory: () => fn(),
    },
    provideSortColumnsStore(),
  ];
};

// export const provideEntitiesSortFromConfig = (
