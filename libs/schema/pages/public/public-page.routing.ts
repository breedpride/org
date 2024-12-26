import { inject, signal } from '@angular/core';
import { ActivatedRouteSnapshot, Route, UrlSegment } from '@angular/router';
import { PageStore, canMatchWithPageModel, MaybeBoolean } from '@bh/page-store';
import { ACTIVE_DETAIL } from '@bh/collection-store';

import { TabStoreStateV2 } from '@bp/page-tab-store';
import { initilalTab } from '@bp/page-tab-store';
import { SUPER_STORE } from '@bh/collection-store';
import { BasePageComponent, PageTemplateV3Component } from '@breedpride/page-template';
const showsTab = {
  ...initilalTab,
  fragment: '',
  icon: 'pi pi-fw pi-globe',
  tabIndex: 0,
  label: 'Shows',
};

export const skeletonFragments: Partial<TabStoreStateV2> = {
  tabs: [showsTab],
};

export const publicRoutes: Route = {
  providers: [],
  path: ':slug',
  canMatch: [
    (route: Route, segments: UrlSegment[]): boolean => {
      inject(PageStore).setSelectedIdRx(segments[0].path);
      return true;
    },
  ],
  resolve: {
    setSlug: (route: ActivatedRouteSnapshot): void => {
      const spaceStore = inject(SUPER_STORE, { optional: true });
      if (spaceStore) spaceStore.setSelectedId(route.params['slug']);
    },
  },
  component: BasePageComponent,
  // loadComponent: () =>
  //   import('@breedpride/page-template').then((m) => m.BasePageComponent),

  runGuardsAndResolvers: 'pathParamsOrQueryParamsChange',
  children: [
    {
      path: '',
      component:PageTemplateV3Component,

      children: [
        {
          path: '',
          loadChildren: () =>
            import('@breedpride/pet').then((m) => m.publicPetRoute),
          canMatch: [(): MaybeBoolean => canMatchWithPageModel(['Pet'])],
          canActivate: [(): MaybeBoolean => canMatchWithPageModel(['Pet'])],
        },
        {
          path: '',
          loadChildren: () =>
            import('@breedpride/breed').then((m) => m.publicBreedRoute),
          canMatch: [(): MaybeBoolean => canMatchWithPageModel(['Breed'])],
          canActivate: [(): MaybeBoolean => canMatchWithPageModel(['Breed'])],
        },
        {
          path: '',
          loadChildren: () =>
            import('@breedpride/litter').then((m) => m.publicLitterRoute),
          canMatch: [(): MaybeBoolean => canMatchWithPageModel(['Litter'])],
          canActivate: [(): MaybeBoolean => canMatchWithPageModel(['Litter'])],
        },
        {
          path: '',
          loadChildren: () =>
            import('@breedpride/contact').then((m) => m.publicContactRoute),
          canMatch: [(): MaybeBoolean => canMatchWithPageModel(['Contact'])],
          canActivate: [(): MaybeBoolean => canMatchWithPageModel(['Contact'])],
        },
        {
          path: '',
          loadChildren: () =>
            import('@breedpride/event').then((m) => m.publicEventRoute),
          canMatch: [(): MaybeBoolean => canMatchWithPageModel(['Project'])],
          canActivate: [(): MaybeBoolean => canMatchWithPageModel(['Project'])],
        },
        {
          path: '',
          loadChildren: () =>
            import('@breedpride/kennel').then((m) => m.publicKennelRoute),
          canMatch: [
            (): MaybeBoolean => canMatchWithPageModel(['Kennel', 'Account']),
          ],
          canActivate: [
            (): MaybeBoolean => canMatchWithPageModel(['Kennel', 'Account']),
          ],
        },
      ],
      providers: [
        {
          provide: ACTIVE_DETAIL,
          useValue: signal(''),
        },
      ],
    },
  ],
};
