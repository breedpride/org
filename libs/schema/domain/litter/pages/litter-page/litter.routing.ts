import { computed, inject, Signal } from '@angular/core';
import { Route, Routes } from '@angular/router';
import { LitterPage } from '@bh/types';
import {
  fragmentCheckerFn,
  pageTabFrament,
} from '@bp/page-tab-store';
import {MaybeBoolean} from '@bh/page-store';
import { injectLitterPage, PageStore } from '@bh/page-store';
import {
  provideTabStore,
  TabStoreStateV2,
  initilalTab,
} from '@bp/page-tab-store';
import{ canMatchWithPageModel,  } from '@bh/page-store';
import { PageDetailsOutletComponent } from '@breedpride/page-template';
import { LitterAchievementsComponent } from '../../lib/litter-achievements/litter-achievements.component';
import { LitterNameComponent } from '../../lib/litter-name/litter-name.component';
import { LitterChildrenComponent } from './components/litter-children/litter-children.component';
import { LitterInfoComponent } from './components/litter-info/litter-info.component';
import { LitterOffersComponent } from './components/litter-offers/litter-offers.component';
import { LitterPedigreeComponent } from './components/litter-pedigree/litter-pedigree.component';

export const litterNameRoute = {
  path: '',
  component: LitterNameComponent,
  outlet: 'name',
  resolve: {
    entityPage: (): null | LitterPage => inject(PageStore).litterPage(),
  },
};

const offersTab = {
  ...initilalTab,
  fragment: 'offers',
  icon: 'local-offer',
  tabIndex: 0,
  hiddenFn: (): Signal<boolean> => {
    const entityPage = injectLitterPage() as Signal<{ PetsForSale: any[] }>;
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
const pedigreeTab = {
  ...initilalTab,
  fragment: 'pedigree',
  icon: 'pi pi-fw pi-sitemap',
  tabIndex: 2,
  label: 'Pedigree',
};
const childrenTab = {
  ...initilalTab,
  fragment: 'children',
  icon: 'pi pi-fw pi-list',
  tabIndex: 3,
  label: 'Children',
};

export const litterFragments: Partial<TabStoreStateV2> = {
  tabs: [offersTab, generalTab, pedigreeTab, childrenTab],
};

export const litterPageFeaturesRoutes: Routes = [
  {
    canActivate: [fragmentCheckerFn],
    path: '',
    resolve: {},
    children: [
      {
        ...pageTabFrament(offersTab),
        component: LitterOffersComponent,
      },
      {
        ...pageTabFrament(generalTab),
        component: LitterInfoComponent,
      },
      {
        ...pageTabFrament(pedigreeTab),
        component: LitterPedigreeComponent,
      },
      {
        ...pageTabFrament(childrenTab),
        component: LitterChildrenComponent,
      },
    ],
  },
];

export const publicLitterRoute: Route[] = [
  {
    path: '',
    canMatch: [(): MaybeBoolean => canMatchWithPageModel(['Litter'])],
    children: [
      litterNameRoute,
      {
        path: '',
        pathMatch: 'full',
        component: LitterAchievementsComponent,
        outlet: 'achievements',
        resolve: {
          mode: () => 'component',
          expanded: () => false,
        },
      },
      {
        providers: [provideTabStore(litterFragments)],
        path: '',
        pathMatch: 'full',
        component: PageDetailsOutletComponent,
        resolve: {},
        children: litterPageFeaturesRoutes,
      },
    ],
  },
];
