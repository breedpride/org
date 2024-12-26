import { computed } from '@angular/core';
import { signalStoreFeature, type, withComputed } from '@ngrx/signals';
import {
  NamedEntityProps,
  NamedEntityState,
} from '@ngrx/signals/entities/src/models';

import { PageTabStore } from '../page-tab.token';
import { WithEntitiesExt, WithSelectedId } from '@bh/collection-selection';

export function withPageTabsVisibility() {
  return signalStoreFeature(
    {
      state: type<
        WithSelectedId<PageTabStore, ''> & NamedEntityState<PageTabStore, ''>
      >(),
      props: type<
        NamedEntityProps<PageTabStore, ''> & WithEntitiesExt<PageTabStore, ''>
      >(),
      methods: type<{}>(),
    },
    withComputed((store) => ({
      visibleTabs: computed(() =>
        store
          .Entities()
          .filter((e: PageTabStore) => !e.hidden())
          .sort((a, b) => {
            return Number(a.tabIndex) > Number(b.tabIndex) ? -1 : 1;
          })
      ),
    })),
    withComputed((store) => ({
      visibleTabsFragments: computed(
        () => store.visibleTabs().map((e: PageTabStore) => e.fragment()) || []
      ),
    })),
    withComputed((store) => ({
      hasVisibleFragments: computed(
        () => store.visibleTabsFragments().length > 0
      ),
    })),
    // TODO - rename ActiveTab
    withComputed((store) => ({
      // activeTab: computed(() => store.EntityMap()[store.SelectedId()]),
      activeTab: computed(() => store.SelectedEntity()),
      firstVisibleFragment: computed(() =>
        store.hasVisibleFragments() ? store.visibleTabsFragments()[0] : ''
      ),
      firstViewportTab: computed(() =>
        store.Entities().find((e) => e.bodyVisibility() > 0.02)
      ),
    })),

    withComputed((store) => ({
      firstVisibleTab: computed(() => {
        return store.hasVisibleFragments() ? store.visibleTabs()[0] : null;
      }),
    }))
  );
}
