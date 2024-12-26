import { inject } from '@angular/core';
import { Route, Routes } from '@angular/router';
import { BreedPage } from '@bh/types';
import {canMatchWithPageModel, MaybeBoolean,} from '@bh/page-store';
import {  pageTabFrament } from '@bp/page-tab-store';
import { PageStore } from '@bh/page-store';
import {
  initilalTab,
  TabStoreStateV2,
  provideTabStore,
} from '@bp/page-tab-store';
import { PageDetailsOutletComponent } from '@breedpride/page-template';
import { BreedAchievementsComponent } from '../../lib/breed-achievements/breed-achievements.component';
import { BreedNameComponent } from '../../lib/breed-name/breed-name.component';
import { BreedMomentsComponent } from './components/breed-moments/breed-moments.component';
import { BreedPatronsComponent } from './components/breed-patrons/breed-patrons.component';
import { BreedSupportLevelsComponent } from './components/breed-support-levels/breed-support-levels.component';
import { BreedTopKennelsComponent } from './components/breed-top-kennels/breed-top-kennels.component';
import { BreedTopPetsComponent } from './components/breed-top-pets/breed-top-pets.component';

export const breedNameRoute = {
  path: '',
  component: BreedNameComponent,
  outlet: 'name',
  resolve: {
    entityPage: (): null | BreedPage => inject(PageStore).breedPage(),
  },
};
const achievementsTab = {
  ...initilalTab,
  fragment: 'achievements',
  icon: 'pi pi-fw pi-check-circle',
  tabIndex: 0,
  label: 'Breed achievements',
};
const patronsTab = {
  ...initilalTab,
  fragment: 'patrons',
  icon: 'pi pi-fw pi-heart',
  tabIndex: 1,
  label: 'Patrons',
};
const topPetsTab = {
  ...initilalTab,
  icon: 'cup',
  fragment: 'topPets',
  tabIndex: 2,
  label: 'Pets',
};
const topKennelsTab = {
  ...initilalTab,
  fragment: 'topKennels',
  icon: 'pi pi-fw pi-home',
  tabIndex: 3,
  label: 'Kennels',
};
const momentsTab = {
  ...initilalTab,
  fragment: 'moments',
  icon: 'pi pi-fw pi-images',
  tabIndex: 4,
  label: 'Moments',
};
export const breedFragments: Partial<TabStoreStateV2> = {
  tabs: [achievementsTab, patronsTab, topPetsTab, topKennelsTab, momentsTab],
};
export const breedPageFeaturesRoutes: Routes = [
  {
    // canActivate: [fragmentCheckerFn],
    path: '',
    resolve: {},
    children: [
      {
        ...pageTabFrament(achievementsTab),
        component: BreedSupportLevelsComponent,
      },
      {
        ...pageTabFrament(patronsTab),
        component: BreedPatronsComponent,
      },
      {
        ...pageTabFrament(topPetsTab),
        component: BreedTopPetsComponent,
      },
      {
        ...pageTabFrament(topKennelsTab),
        component: BreedTopKennelsComponent,
      },
      {
        ...pageTabFrament(momentsTab),
        component: BreedMomentsComponent,
      },
    ],
  },
];

export const publicBreedRoute: Route[] = [
  {
    path: '',
    canMatch: [(): MaybeBoolean => canMatchWithPageModel(['Breed'])],
    children: [
      breedNameRoute,
      {
        path: '',
        pathMatch: 'full',
        component: BreedAchievementsComponent,
        outlet: 'achievements',
        resolve: {
          mode: () => 'component',
          expanded: () => false,
        },
      },
      {
        providers: [provideTabStore(breedFragments)],
        path: '',
        pathMatch: 'full',
        component: PageDetailsOutletComponent,
        resolve: {},
        children: breedPageFeaturesRoutes,
      },
    ],
  },
];
