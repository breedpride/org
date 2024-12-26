import { inject, Provider } from '@angular/core';
import { BPFormGroup } from '@bh/form';
import { withCustomConfig } from '@bh/store-feature';
import { signalStore } from '@ngrx/signals';
import { createInjectionToken } from 'ngxtension/create-injection-token';
import { EntityStoreConfig } from '@bh/superfield';
import { EntityConfig, EntityStore } from './entity.store';
import { withEntityForm } from './with-entity-form';

export function entityStoreFactory(options: {
  config: EntityConfig;
  entityForm: BPFormGroup;
}): EntityStore {
  const config = options?.config;
  const entityForm = options?.entityForm || new BPFormGroup({});
  const Store = signalStore(
    { protectedState: false },
    withCustomConfig<EntityConfig>({
      config: config,
      default: () => inject(ENTITY_STORE_CONFIG),
    }),
    withEntityForm({ entityForm, config })
  );

  return new Store();
}

export const [
  injetEntityStoreConfig,
  provideEntityStoreConfig,
  ENTITY_STORE_CONFIG,
] = createInjectionToken((config: EntityConfig): EntityConfig => {
  return config;
});

export const [injectEntityStore, provideEntityStore, ENTITY_STORE] =
  createInjectionToken(entityStoreFactory, {
    deps: [ENTITY_STORE_CONFIG],
  });

// export const provideEntityStoreWithConfig = (
//   config: EntityStoreConfig
// ): Provider[] => {
//   return [
//     {
//       provide: ENTITY_STORE_CONFIG,
//       useValue: config,
//     },
//     provideEntityStore(),
//   ];
// };
export const provideEntityStoreWithFn = (
  fn: () => EntityStoreConfig
): Provider[] => {
  return [
    {
      provide: ENTITY_STORE_CONFIG,
      useFactory: () => fn(),
    },
    provideEntityStore(),
  ];
};
