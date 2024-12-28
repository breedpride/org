import { withFilledNamedCollection } from '@bh/collection-data';
import { FilterFieldConfig, SpaceConfig } from '@bh/superfield';
import { withLogger } from '@bp/with-logger';
import { signalStore, type, withState } from '@ngrx/signals';
import { WithType } from 'libs/schema/column-type/common/typing';
import { withSuperStoreFeatue } from 'libs/schema/feature/collection-data/with-tree.feature';

// export type Space = { id: string };
const spaceCollectionConfig = {
  entity: type<SpaceConfig>(),
  collection: 'space' as const,
  selectId: (c: SpaceConfig) => c.id,
};

// const withTypedCollection<T extends FilterFieldConfig>(config: T) {
  
//   return withFilledNamedCollection<T, T['type']>(spaceCollectionConfig);
// }
// const collectionConfig<T extends WithType>(config: { entity: T; collection: string }) {

export const AppStore = signalStore(
  { providedIn: 'root',
    protectedState: false
  },
  withState({}),
  withSuperStoreFeatue(),
  withFilledNamedCollection<
    SpaceConfig,
    typeof spaceCollectionConfig.collection
  >(spaceCollectionConfig),

  withLogger('[APP STORE]')
);

// pets=> space (qeury)? Selected???
