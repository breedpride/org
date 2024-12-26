import { computed, inject, Signal } from '@angular/core';
import { Route, Routes } from '@angular/router';
import { KennelPage } from '@bh/types';
import {

  fragmentCheckerFn,

  pageTabFrament,
} from '@bp/page-tab-store';

import { injectKennelPage, PageStore, canMatchWithPageModel,MaybeBoolean } from '@bh/page-store';
import {
  initilalTab,
  TabStoreStateV2,
  provideTabStore,
} from '@bp/page-tab-store';
import { PageDetailsOutletComponent } from '@breedpride/page-template';
import { KennelAchievementsComponent } from '../kennel-achievements/kennel-achievements.component';
import { KennelNameComponent } from '../kennel-name/kennel-name.component';
import { KennelInfoComponent } from './ui/kennel-info/kennel-info.component';
import { KennelMomentsComponent } from './ui/kennel-moments/kennel-moments.component';
import { KennelOffersComponent } from './ui/kennel-offers/kennel-offers.component';
import { KennelOffspringsComponent } from './ui/kennel-offsprings/kennel-offsprings.component';
import { KennelPetsComponent } from './ui/kennel-pets/kennel-pest.component';

export const kennelNameRoute = {
  path: '',
  component: KennelNameComponent,
  outlet: 'name',
  resolve: {
    entityPage: (): null | KennelPage => inject(PageStore).kennelPage(),
  },
};

const offersTab = {
  ...initilalTab,
  icon: 'local-offer',
  fragment: 'offers',
  tabIndex: 0,
  hiddenFn: (): Signal<boolean> => {
    const entityPage = injectKennelPage() as Signal<{
      PetsForSale: any[];
    }>;
    return computed(
      () => !entityPage()?.PetsForSale || entityPage()?.PetsForSale.length === 0
    );
  },
  label: 'Offers',
};
const generalTab = {
  ...initilalTab,
  fragment: 'general',
  icon: 'pi pi-fw pi-home',
  tabIndex: 1,
  label: 'General',
};
const kennelPetsTab = {
  ...initilalTab,
  icon: 'paw',
  fragment: 'kennel-pets',
  tabIndex: 2,
  label: 'Pets',
};
const offspringsTab = {
  ...initilalTab,
  fragment: 'offsprings',
  icon: 'pi pi-fw pi-th-large',
  tabIndex: 3,
  label: 'Offsprings',
};
const momentsTab = {
  ...initilalTab,
  fragment: 'moments',
  icon: 'pi pi-fw pi-images',
  tabIndex: 4,
  label: 'Moments',
};

export const kennelFragments: Partial<TabStoreStateV2> = {
  tabs: [offersTab, generalTab, kennelPetsTab, offspringsTab, momentsTab],
};

export const kennelPageFeaturesRoutes: Routes = [
  {
    canActivate: [fragmentCheckerFn],
    path: '',
    resolve: {},
    children: [
      {
        ...pageTabFrament(offersTab),
        component: KennelOffersComponent,
      },
      {
        ...pageTabFrament(generalTab),
        component: KennelInfoComponent,
      },
      {
        ...pageTabFrament(kennelPetsTab),
        component: KennelPetsComponent,
      },
      {
        ...pageTabFrament(offspringsTab),
        component: KennelOffspringsComponent,
      },
      {
        ...pageTabFrament(momentsTab),
        component: KennelMomentsComponent,
      },
    ],
  },
];

export const publicKennelRoute: Route[] = [
  {
    path: '',
    canMatch: [
      (): MaybeBoolean => canMatchWithPageModel(['Kennel', 'Account']),
    ],
    children: [
      kennelNameRoute,
      {
        path: '',
        pathMatch: 'full',
        component: KennelAchievementsComponent,
        outlet: 'achievements',
        resolve: {
          mode: () => 'component',
          expanded: () => false,
        },
      },
      {
        providers: [provideTabStore(kennelFragments)],
        path: '',
        pathMatch: 'full',
        component: PageDetailsOutletComponent,
        resolve: {},
        children: kennelPageFeaturesRoutes,
      },
    ],
  },
];
