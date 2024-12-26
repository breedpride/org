import { computed, Provider, signal } from '@angular/core';
import { FilterFieldConfig, NullableField, StoreType } from '@bh/types';
import { signalStore, withComputed, withState } from '@ngrx/signals';
import { createInjectionToken } from 'ngxtension/create-injection-token';

import { DEFAULT_FIELD_CONFIG } from './field.collection';

export const [, , FIELD_CONFIG] = createInjectionToken(
  () => signal(DEFAULT_FIELD_CONFIG),
  { isRoot: true }
);

export const field = (config: FilterFieldConfig): StoreType<any> => {
  // const typedEntity: Record<string, any> = {};
  // console.log('config', config);
  const FStore = signalStore(
    // withTreeFeature(),
    // {
    //   protectedState: false,
    //   providedIn: 'root',
    // },
    { protectedState: false },
    withState({
      id: config.id,
      entitySchemaName: config.entitySchemaName,
      isRequired: config.isRequired,
      readonly: config.readonly,
      component: config.component,
      columnNgClass: config.columnNgClass,
      columnClass: config.columnClass,
      validators: config.validators,
      placeholder: config.placeholder,
    }),
    withComputed((store) => ({
      // validators: computed(() => {
      //   return uniqBy(
      //     compact(
      //       [
      //         store.isRequired() ? [Validators.required] : [],
      //         store.validators() || [],
      //       ].flat()
      //     ),
      //     e => e
      //   );
      // }),
      // // TODO - parent placeholder for Name Id^ etc
      // placeholder: computed(() => config?.customPlaceholder || ''),
    })),
    withComputed((store) => ({
      // value: computed(() => store.entity),
      columns: computed(() => {
        return [];
        // if (store.entitySchemaName() === 'LookupField') {
        //   return ['Id', 'Name'];
        // } else {
        //   const parentColumns = store.parent()?.columns();
        //   if (parentColumns && parentColumns?.length > 0) {
        //     return (
        //       parentColumns?.map(column =>
        //         store.fieldName() ? store.fieldName() + '.' + column : column
        //       ) || null
        //     );
        //   } else {
        //     return [store.fieldName()];
        //   }
        // }
      }),
    }))
    // withMethods(() => ({
    //   filterFn: config?.filterFn || (() => null),
    //   parse: typedEntity['parse'],
    //   stringify: typedEntity['stringify'],
    // }))
  );
  const result = new FStore();

  return result;
};

export const [injectFieldStore, provideFieldStore, FIELD_STORE] =
  createInjectionToken(field, {
    extraProviders: [],
    isRoot: false,
    deps: [FIELD_CONFIG],
  });

export const provideFieldWithConfig = (
  value: NullableField<any>
): Provider[] => [
  {
    provide: FIELD_CONFIG,
    useValue: signal(value),
  },
  provideFieldStore(),
];
