import { inject, InputSignal } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  createUrlTreeFromSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Tab } from './tab-store-state-va2';
import { TabStoreV2 } from './tab.storeV2.service';
import { provideTabConfig } from './page-tab.token';

// import { provideTabConfig, TabStoreV2, Tab } from '@bp/page-tab-store';

export const fragmentCheckerFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const { fragment } = route;
  const tabStore = inject(TabStoreV2);
  console.log('fragmentCheckerFn', fragment);
  if (fragment && tabStore.visibleTabsFragments().includes(fragment)) {
    // tabStore.setFragmentWithScrollerTo(fragment);
    return true;
  }
  const visibleFragment = tabStore.firstVisibleFragment();
  if (visibleFragment) {
    return createUrlTreeFromSnapshot(
      route,
      [],
      route.queryParams,
      visibleFragment
    );
  }
  return true;
};

export const pageTabFrament = (tab: Tab) => {
  const outlet =
    tab.tabIndex && tab.tabIndex > 0 ? tab.tabIndex.toString() : '0';
  return {
    path: '',
    outlet,
    resolve: {
      // tab: () => pedigreeTab,
      // tabmode: () => 'page',
      // setActiveDetail: () => inject(ACTIVE_DETAIL).set(tab.fragment),
    },
    providers: [provideTabConfig(() => tab)],
  };
};

// TODO - input types
type ComponentInputs<T> = {
  [P in keyof T]: T[P] extends InputSignal<infer A> ? A : never;
};
