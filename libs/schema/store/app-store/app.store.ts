
import { inject } from '@angular/core';
import { ConfigStore, EntityListStore } from '@bh/collection-store';

import { withLogger } from '@bp/with-logger';
import { signalStore, type, withProps, withState } from '@ngrx/signals';

import { withSuperStoreFeatue } from 'libs/schema/feature/collection-data/with-tree.feature';

// export type Space = { id: string };
const spaceCollectionConfig = {
  entity: type<EntityListStore>(),
  collection: 'store' as const,
  selectId: (c: EntityListStore) => c.config().type + '-' + c.config().id,
};

export const AppStore = signalStore(
  { providedIn: 'root',
    protectedState: false
  },
  withProps(() => ({
    configStore: inject(ConfigStore),
    // logger: inject(Logger),
  })),
  // withProps((configStore = inject(ConfigStore))=>({config =configStore})),
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

// Stores with Data
//space-store-data
// pets=> space (qeury)? Selected???

// TODO - tag collections  boolean, optional, required, readonly
// option-petType-1
//type-key-value = PetType-ID-Value
//TODO - database mutation// 
