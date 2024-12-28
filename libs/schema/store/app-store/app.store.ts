import { withFilledNamedCollection } from '@bh/collection-data';
import { EntityListStore } from '@bh/collection-store';
import { FilterFieldConfig, SpaceConfig } from '@bh/superfield';
import { withLogger } from '@bp/with-logger';
import { signalStore, type, withProps, withState } from '@ngrx/signals';
import { WithType } from 'libs/schema/column-type/common/typing';
import { withSuperStoreFeatue } from 'libs/schema/feature/collection-data/with-tree.feature';

// export type Space = { id: string };
const spaceCollectionConfig = {
  entity: type<EntityListStore>(),
  collection: 'store' as const,
  selectId: (c: EntityListStore) => c.config().type + '-' + c.config().id,
};

// const withTypedCollection<T extends FilterFieldConfig>(config: T) {
  
//   return withFilledNamedCollection<T, T['type']>(spaceCollectionConfig);
// }
// const collectionConfig<T extends WithType>(config: { entity: T; collection: string }) {

const ConfigStore = signalStore(withSuperStoreFeatue());
export const configStore = new ConfigStore();
type ConfigStore = InstanceType<typeof ConfigStore>;
export const AppStore = signalStore(
  { providedIn: 'root',
    protectedState: false
  },
  withProps(()=>({configStore, collections: new Map()})),
  // withState(()=>{ 
  //   const withSuperStoreFeatue = withSuperStoreFeatue();
  //   return {
  //   configStore : new signalStore(withSuperStoreFeatue());
  //   }
  // }),
  
  // withFilledNamedCollection<
  // EntityListStore,
  //   typeof spaceCollectionConfig.collection
  // >(spaceCollectionConfig),

  withLogger('[APP STORE]')
);

// pets=> space (qeury)? Selected???
