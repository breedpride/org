import { inject } from '@angular/core';
import { Route, Routes } from '@angular/router';
import { TabStoreStateV2 } from '@bp/page-tab-store';
import { EventPage } from '@bh/types';
import {

  fragmentCheckerFn,

  pageTabFrament,
} from '@bp/page-tab-store';
import { PageStore,  canMatchWithPageModel,MaybeBoolean, } from '@bh/page-store';
import { initilalTab } from '@bp/page-tab-store';
import { provideTabStore } from '@bp/page-tab-store';
import { PageDetailsOutletComponent } from '@breedpride/page-template';
import { EventNameComponent } from '../lib/event-name/event-name.component';
import { EventInfoComponent } from './components/event-info/event-info.component';
import { EventResultsComponent } from './components/event-results/event-results.component';

export const eventNameRoute = {
  path: '',
  component: EventNameComponent,
  outlet: 'name',
  resolve: {
    entityPage: (): null | EventPage => inject(PageStore).eventPage(),
  },
};
const generalTab = {
  ...initilalTab,
  fragment: 'general',
  icon: 'pi pi-fw pi-home',
  tabIndex: 0,
  label: 'General',
};
const resultsTab = {
  ...initilalTab,
  icon: 'results',
  fragment: 'results',
  tabIndex: 1,
  label: 'Results',
};
export const eventFragments: Partial<TabStoreStateV2> = {
  tabs: [generalTab, resultsTab],
};

export const eventPageFeaturesRoutes: Routes = [
  {
    canActivate: [fragmentCheckerFn],
    path: '',
    resolve: {},
    children: [
      {
        ...pageTabFrament(generalTab),
        component: EventInfoComponent,
      },
      {
        ...pageTabFrament(resultsTab),
        component: EventResultsComponent,
      },
    ],
  },
];

export const publicEventRoute: Route[] = [
  {
    path: '',
    canMatch: [(): MaybeBoolean => canMatchWithPageModel(['Project'])],
    children: [
      eventNameRoute,
      // {
      //   path: '',
      //   pathMatch: 'full',
      //   component: ,
      //   outlet: 'achievements',
      //   resolve: {
      //     mode: () => 'component',
      //     expanded: () => false,
      //   },
      // },
      {
        providers: [provideTabStore(eventFragments)],
        path: '',
        pathMatch: 'full',
        component: PageDetailsOutletComponent,
        resolve: {},
        children: eventPageFeaturesRoutes,
      },
    ],
  },
];
