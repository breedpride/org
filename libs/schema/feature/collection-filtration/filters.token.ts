import { Provider } from '@angular/core';
import { BPFormGroup } from '@bh/form';
import { FilterFieldConfig, SpaceConfig } from '@bh/superfield';
import { createInjectionToken } from 'ngxtension/create-injection-token';
import {  withMethods } from '@ngrx/signals';
import { And, byAny } from '@bh/filter';
import { MULTI_ENTITY_FIELD_NAMES } from '@bh/filtering';
import { computed, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Params } from '@angular/router';
import { isValidUUID } from '@bh/column-type/guid';
import { withFilledNamedCollection, withFilteredCreatioEntities } from  "@bh/collection-data";
import { ApiHelper, ApiService } from '@breedpride/api';
import {
  patchState,
  signalStore,
  withComputed,
} from '@ngrx/signals';
import { FormFieldCode } from '@bh/consts';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { isEqual } from 'lodash-es';
import { distinctUntilChanged, pipe, switchMap, take } from 'rxjs';
import { effect } from '@angular/core';
import { signalStoreFeature, type, withHooks, withState } from '@ngrx/signals';



export type FilterFormState = {
  queryParams: Params;
  entity: Record<string, any>;
};

export const [
  injectFilterFormGroup,
  provideFilterFormGroup,
  FILTER_FORM_GROUP,
] = createInjectionToken(() => new BPFormGroup({}), { isRoot: false });


export function withFilterStoreFilter() {
  return signalStoreFeature(
    {
      methods: type<{ loadFirstPage(filter: any): void }>(),
    },
    withState({}),
    withHooks({
      onInit(
        store,
        filterStore = injectFiltersStore(),
        form = injectFilterFormGroup()
      ) {
        effect(
          () => {
            const ready = form.filterReady;
            if (ready && ready()) {
              const combinedFilter = filterStore.getFilters();
              store.loadFirstPage(combinedFilter);
            }
          },
        );
      },
    })
  );
}


export function withFilteredByFilterStore( { config }: { config?: SpaceConfig; } = {}) {
  return signalStoreFeature(
      withFilteredCreatioEntities({ config }),
      withFilterStoreFilter(),
    );
}







export const [, , FILTERS_CONFIG] = createInjectionToken(
  () => [],
  { isRoot: true }
);
export const filterStoreFabric = (data: FilterFieldConfig[]) => {
  const config = {
    entity: type<FilterFieldConfig>(),
    collection: 'filter' as const,
    selectId: (c: FilterFieldConfig): string => c.id,
    data
  };
  const FilterStore =
    signalStore(
      { protectedState: false },
      withState<FilterFormState>(() => {
        return {
          queryParams: { a: 1 },
          entity: {},
        };
      }),
      withFilledNamedCollection(config),
      withComputed((store) => ({
        filteredQueryParams: computed(() => {
          const queryParams = store.queryParams();
          if (Object.keys(queryParams).length > 0) {
            return store
              .filterEntities()
              .reduce((acc: Record<string, FilterFieldConfig>, formField) => {
                if (queryParams[formField.id]) {
                  acc[formField.id] = formField;
                }
                return acc;
              }, {});
          } else {
            return {};
          }
        }),
      })),
      withComputed((store) => {
        return {
          filteredQueryParamsLength: computed(
            () => Object.keys(store.filteredQueryParams()).length
          ),
          entityFieldsObjectLenght: computed(
            () => Object.keys(store.entity()).length
          ),
        };
      }),
      withMethods((store, form = injectFilterFormGroup()) => ({
        async fillByFilterFields(entity: any, helper: ApiHelper): Promise<void> {
          await form.clearFormGroup();
          const fieldsConfigArray = store.filterEntities();
          fieldsConfigArray.forEach((filterField: FilterFieldConfig) => {
            const id = filterField.id;
            const value = entity[id];
            form.addControl(id, new FormControl(value, filterField.validators));
          });

          for (const filterField of fieldsConfigArray) {
            if (filterField.initBeforeChangeFn) {
              await filterField.initBeforeChangeFn(form, {
                helper,
              });
            }
          }

          fieldsConfigArray.forEach((filterField: FilterFieldConfig) => {
            const id = filterField.id;
            form.onChangeSubscribe(filterField, id, entity[id], helper);
          });

          for (const filterField of fieldsConfigArray) {
            if (filterField.initFn) {
              await filterField.initFn(form, {
                helper,
              });
            }
          }
        },
      })),
      withMethods(
        (
          store,
          apiHelper = inject(ApiHelper),
          form = injectFilterFormGroup()
        ) => ({
          getActiveFilters() {
            const t = store.filterEntities().filter((e: FilterFieldConfig) => {
              return e && e.active && e.active(form);
            });
            return t;
          },
          async prepareFormWithoutSignal(): Promise<void> {
            await store.fillByFilterFields(store.entity(), apiHelper);
          },
        })
      ),
      withMethods((store, form = injectFilterFormGroup()) => ({
        async prepareForm(): Promise<void> {
          await store.prepareFormWithoutSignal();
          form.filterReady.set(true);
        },
        getFilters() {
          const filters = store
            .getActiveFilters()
            ?.map((e) => e.getFilter && e.getFilter({ form }));
          return And(...(filters || null));
        },
      })),
      withMethods((store, form = injectFilterFormGroup()) => ({
        //TODO rework
        setFormValue(fieldId: string, value: any): void {
          store.entity()[fieldId] = value;
          //All values setted
          if (
            Object.keys(store.entity()).length ===
            store.filteredQueryParamsLength()
          ) {
            // TODO - signal with computed
            store.prepareForm();
          }
        },
        // TODO -retRowValue
        newEntityFromForm(): Record<string, any> {
          return Object.keys(form.controls).reduce(
            (updatedMap: Record<string, any>, controlName) => {
              updatedMap[controlName] = form.get(controlName)?.value;
              return updatedMap;
            },
            {}
          );
        },
      })),
      withMethods((store, api = inject(ApiService)) => ({
        applyFilter(): Record<string, any> {
          const entity = store.newEntityFromForm();

          patchState(store, { entity });
          const filterWithValues = store.getActiveFilters;
          const queryParams: Record<string, any> = {};
          if (filterWithValues()) {
            filterWithValues().forEach((e: FilterFieldConfig) => {
              switch (e.component) {
                case FormFieldCode.AUTOCOMPLETE: {
                  const lookupValue = entity[e.id];
                  if (lookupValue) {
                    queryParams[e.id] = lookupValue.Url || lookupValue.Id;
                  }
                  break;
                }
                case FormFieldCode.DROPDOWN: {
                  const lookupValue = entity[e.id];
                  if (lookupValue) {
                    queryParams[e.id] = lookupValue.Url || lookupValue.Id;
                  }
                  break;
                }
                case FormFieldCode.DATE_RANGE: {
                  const dateRangeValue = entity[e.id];
                  if (dateRangeValue) {
                    queryParams[e.id] = JSON.stringify(dateRangeValue);
                  }
                  break;
                }
                case FormFieldCode.HeaderFilterManager: {
                  const filter = entity[e.id];
                  if (filter) {
                    queryParams[e.id] = filter.id;
                  }
                  break;
                }
                case FormFieldCode.SearchName: {
                  const nameValue = entity[e.id];
                  if (nameValue) {
                    queryParams[e.id] = nameValue;
                  }
                  break;
                }
                case FormFieldCode.BOOLEAN: {
                  const booleanValue = entity[e.id];
                  if (booleanValue) {
                    queryParams[e.id] = booleanValue;
                  }
                  break;
                }
                default:
                  console.error('Unknown filter type', e.component);
                  break;
              }
            });
          }
          //TODO - save decoded parameters Values
          return queryParams;
        },
        getFormValuesMap(
          queryParamMap: Params,
          queryFields: Record<string, FilterFieldConfig>
        ): void {
          Object.values(queryFields).forEach((field: FilterFieldConfig) => {
            const value = queryParamMap[field.id];
            switch (field.component) {
              // TODO - dedup
              case FormFieldCode.AUTOCOMPLETE:
                if (isValidUUID(value)) {
                  api.getById(field, value).subscribe((lookup) => {
                    store.setFormValue(field.id, lookup);
                  });
                } else {
                  api
                    .selectTopOne(
                      field,
                      byAny(MULTI_ENTITY_FIELD_NAMES.URL, value)
                    )
                    .pipe(take(1))
                    .subscribe((lookupValue) => {
                      store.setFormValue(field.id, lookupValue);
                    });
                }
                break;
              case FormFieldCode.DROPDOWN:
                if (isValidUUID(value)) {
                  api.getById(field, value).subscribe((lookup) => {
                    store.setFormValue(field.id, lookup);
                  });
                } else {
                  api
                    .selectTopOne(
                      field,
                      byAny(MULTI_ENTITY_FIELD_NAMES.URL, value)
                    )
                    .pipe(take(1))
                    .subscribe((lookupValue) => {
                      store.setFormValue(field.id, lookupValue);
                    });
                }
                break;
              case FormFieldCode.DATE_RANGE:
                store.setFormValue(
                  field.id,
                  JSON.parse(value).map((e: string) => new Date(e))
                );
                break;
              case FormFieldCode.SearchName:
                console.log('SearchName', value);
                store.setFormValue(field.id, value);
                break;
              case FormFieldCode.HeaderFilterManager:
                store.setFormValue(
                  field.id,
                  field.filterConfig?.find((e) => e.id === value)
                );
                break;
              case FormFieldCode.BOOLEAN:
                store.setFormValue(
                  field.id,
                  field.filterConfig?.find((e) => e.id === value)
                );
                break;
              default:
                console.log('Not implemented');
                console.log(field);
            }
          });
        },
      })),

      withMethods((store, form = injectFilterFormGroup()) => ({
        setFilterParams: rxMethod<Params>(
          pipe(
            distinctUntilChanged((prev, next) => isEqual(prev, next)),
            switchMap((queryParams) => {
              form.filterReady.set(false);
              patchState(store, { queryParams });
              return [];
            })
          )
        ),
      })),

      withHooks((store) => {
        return {
          onInit: () => {
            // const filterFieldsSignal = inject(FILTERS_CONFIG);
            // console.log('filterFieldsSignal', filterFieldsSignal);
            // patchState(
            //   store,
            //   setAllEntities(filterFieldsSignal, filterCollectionConfig)
            // );
            effect(
              () => {
                const filteredQueryParams = store.filteredQueryParams();
                if (Object.keys(filteredQueryParams).length > 0) {
                  patchState(store, { entity: {} });
                  store.getFormValuesMap(
                    store.queryParams(),
                    filteredQueryParams
                  );
                } else {
                  patchState(store, { entity: {} });
                  store.prepareForm();
                }
              },
            );
          },
        };
      })
    );
  return new FilterStore();
};

export const [injectFiltersStore, provideFiltersStore, FILTERS_STORE] =
  createInjectionToken(filterStoreFabric, {
    isRoot: false,
    deps: [FILTERS_CONFIG],
  });

export const provideEntitiesFilter = (
  value: FilterFieldConfig[]
): Provider[] => [
  {
    provide: FILTER_FORM_GROUP,
    useValue: new BPFormGroup({}),
  },
  {
    provide: FILTERS_CONFIG,
    useValue: [...value],
  },
  provideFiltersStore(),
];

export const provideEntitiesFilterFn = (
  fn: () => FilterFieldConfig[]
): Provider[] => {
  return [
    {
      provide: FILTER_FORM_GROUP,
      useValue: new BPFormGroup({}),
    },

    {
      provide: FILTERS_CONFIG,
      useFactory: () => fn(),
    },
    provideFiltersStore(),
  ];
};

