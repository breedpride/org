import { inject } from '@angular/core';
import {
  patchState,
  signalStoreFeature,
  type,
  withHooks,
  withState,
} from '@ngrx/signals';
import { addEntities, entityConfig } from '@ngrx/signals/entities';
import { TabStoreStateV2 } from '../tab-store-state-va2';
import { PageTabStore } from '../page-tab.token';
import { TAB_CONFIG_V2 } from '../tab.storeV2.service';
import { withFilledNamedCollection } from '@bh/collection-data';
import { withPageTabsVisibility } from './page-tabs-visibility.feature';

export function withPageTabs() {
  const tabEntitiesConfig = entityConfig({
    entity: type<PageTabStore>(),
    collection: '' as const,
    selectId: (tab: PageTabStore) => tab.fragment() || 'test',
  });
  return signalStoreFeature(
    withFilledNamedCollection<
      PageTabStore,
      typeof tabEntitiesConfig.collection
    >(tabEntitiesConfig),
    withPageTabsVisibility(),
    withState<TabStoreStateV2>((config = inject(TAB_CONFIG_V2)) => {
      // console.log('TabStoreConstructor!!!');
      // console.log(config);
      return { ...config };
    }),
    withHooks((store) => {
      return {
        onInit: () => {
          const tabs = store.tabs();
          //todo provide
          const stores = tabs.map(() => new PageTabStore());
          stores.forEach((newstore, i) => {
            patchState(newstore, { ...tabs[i] });
          });
          patchState(store, addEntities(stores, tabEntitiesConfig));
        },
      };
    })
  );
}
