import { inject, InjectionToken } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Route,
  RouterStateSnapshot,
} from '@angular/router';
import { spaceStoreFactory } from '@bh/collection-store';
import {
  injectViewsStore,
  provideViewsStore,
  VIEW_CONFIG,
} from '@bh/collection-view-change';
import { injectFiltersStore, provideEntitiesFilterFn } from '@bh/collection-filtration';
import { BPNavStore } from '@bh/nav-store';
import { PageStore } from '@bh/page-store';
import { provideEntitiesSortFn } from '@bh/collection-sorting';
import { SUPER_CONFIG, provideList } from '@bh/collection-store';
import {  SideBarStore } from '@bh/store-feature';
import { SpaceConfig } from '@bh/superfield';
import { publicRoutes } from '@breedpride/page';
import { SUPER_STORE } from '@bh/collection-store'
import { EmptyOutletComponent } from './one-space-outlet.component';
import { SpaceComponent } from '@bh/space-ui';
import { provideEntitiesFieldsConfigValue } from '@bh/collection-view-scroller';

export const setSlug = (route: ActivatedRouteSnapshot): void => {
  const space = inject(SUPER_STORE, { optional: true });
  if (space) space.setSelectedId(route.params['slug']);
};

export const pageSlugSetter = (route: ActivatedRouteSnapshot): void => {
  inject(PageStore).setSelectedIdRx(route.params['slug']);
};

export const refParamSetter = (route: ActivatedRouteSnapshot): void => {
  const ref = route.queryParams['ref'];
  const oldRef = localStorage.getItem('ref');
  if (ref && !oldRef) {
    localStorage.setItem('ref', ref);
  }
};

export const buildSpaceRoutesByToken = (): Route[] => {
  return [
    {
      component: SpaceComponent,
      resolve: {
        _storeQueryParamsSetter: (route: ActivatedRouteSnapshot): void => {
          injectFiltersStore().setFilterParams(route.queryParams);
        },
      },
      path: '',
      // canActivate: [spaceAutoFiller],
      data: {
        //TODO - mayby store for FilterForm??? та можна просто провайдити - бо в лісті редагування не буде.
      },
      providers: [
        provideEntitiesFilterFn(() => inject(SUPER_CONFIG).filterConfig || []),
        provideList(
          provideEntitiesSortFn(() => inject(SUPER_CONFIG).sortConfig),
          provideEntitiesFieldsConfigValue(
            () => inject(SUPER_CONFIG).fieldsConfig
          ),
          SideBarStore,
          {
            provide: SUPER_STORE,
            useFactory: spaceStoreFactory,
          }
        ),
      ],
      runGuardsAndResolvers: 'pathParamsOrQueryParamsChange',
      children: [publicRoutes],
    },
  ];
};

export const spaceAutoFiller = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  navStore = inject(BPNavStore),
  spaceConfig = inject(SUPER_CONFIG)
) => {
  if (!spaceConfig.url) return true;
  // Temporary for my spaces desicion
  if (spaceConfig.url.indexOf('/') > 0) return true;
  if (
    route.root?.children.length === 1 &&
    Object.keys(route.queryParams).length === 0
  ) {
    const redirectUrl = localStorage.getItem(spaceConfig.url);
    if (redirectUrl) {
      navStore.gotoUrl(redirectUrl);
      return false;
    }
    return true;
  } else {
    localStorage.setItem(spaceConfig.url, state.url);
    return true;
  }
};

export const buildSpaceRouteWithKey = (
  TOKENS: Record<string, InjectionToken<SpaceConfig>>,
  layout: Partial<Route>
): Route[] =>
  Object.entries(TOKENS).map(([path, token]) => ({
    ...layout,
    resolve: {
      setView: (route: ActivatedRouteSnapshot): void => {
        injectViewsStore().setSelectedId(route.params['view'] || '');
      },
    },
    loadChildren: () => buildSpaceRoutesByToken(),
    component: EmptyOutletComponent,
    providers: [
      {
        provide: SUPER_CONFIG,
        useFactory: () => {
          return { ...inject(token), url: path } as SpaceConfig;
        },
      },
      {
        provide: VIEW_CONFIG,
        useFactory: () => inject(SUPER_CONFIG).viewConfig || [],
        deps: [SUPER_CONFIG],
      },
      provideViewsStore(),
    ],
    path,
  }));
