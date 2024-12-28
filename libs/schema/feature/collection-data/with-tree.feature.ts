import { effect, inject } from '@angular/core';
import {
  getState,
  signalStoreFeature,
  type,
  withHooks,
  withProps,
  withState,
} from '@ngrx/signals';

import { withFilledNamedCollection } from '@bh/collection-data';
import { FilterFieldConfig, SpaceConfig } from '@bh/superfield';
import { StoreConfig } from '@bh/collection-store';

// export type SpaceConfig = { ide: string };
// export type Space = { id: string };
type SuperConfig = SpaceConfig | StoreConfig | FilterFieldConfig;
const configCollectionConfig = {
  entity: type<SuperConfig>(),
  collection: 'config' as const,
  selectId: (c: SuperConfig) => c.type + '-' +c.id,
};




export function withSuperStoreFeatue() {
  return signalStoreFeature(
    // withState<{parent: any}>({parent: null}),
      withFilledNamedCollection<
      SuperConfig,
        typeof configCollectionConfig.collection
      >(configCollectionConfig),
  );
}
