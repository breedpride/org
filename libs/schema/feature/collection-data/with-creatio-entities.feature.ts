import { computed, inject } from '@angular/core';
import { STORE_CONFIG } from '@bh/collection-store';
import { SpaceConfig, WithCreatioId } from '@bh/superfield';
import { signalStoreFeature, withComputed } from '@ngrx/signals';
import { withCustomConfig } from '@bh/store-feature';
import { getCreatioEntitesConfig } from './const';
import { withCreatioMethods } from './with-creatio-methods.feature';
import { withFilledNamedCollection } from './with-named-collection.feature';


export function withConfigurableCreatioEntities<Entity extends WithCreatioId>(
  config?: SpaceConfig
) {
  const creatioConfig = getCreatioEntitesConfig<Entity>();
  return signalStoreFeature(
    withCustomConfig<SpaceConfig>({
      config: config || ({} as SpaceConfig),
      default: () => inject(STORE_CONFIG),
    }),
    withFilledNamedCollection<Entity, typeof creatioConfig.collection>(
      creatioConfig
    ),
    withComputed((store) => ({
      model: computed(
        () => store.config().model || store.config().entitySchemaName
      ),
    })),
    withCreatioMethods(creatioConfig)
  );
}
