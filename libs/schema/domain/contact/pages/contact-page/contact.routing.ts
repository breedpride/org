import { computed, inject, Signal } from '@angular/core';
import { Route, Routes } from '@angular/router';
import { TabStoreStateV2 } from '@bp/page-tab-store';
import { ContactPage } from '@bh/types';
import {

  fragmentCheckerFn,

  pageTabFrament,
} from '@bp/page-tab-store';
import { injectContactPage, PageStore,  MaybeBoolean, canMatchWithPageModel,} from '@bh/page-store';
import { initilalTab } from '@bp/page-tab-store';
import { provideTabStore } from '@bp/page-tab-store';
import { PageDetailsOutletComponent } from '@breedpride/page-template';
import { ContactNameComponent } from '../../lib/contact-name/contact-name.component';
import { ContactBreederComponent } from './components/contact-breeder/contact-breeder.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { ContactJudgeComponent } from './components/contact-judge/contact-judge.component';

export const contactNameRoute = {
  path: '',
  component: ContactNameComponent,
  outlet: 'name',
  resolve: {
    entityPage: (): null | ContactPage => inject(PageStore).contactPage(),
  },
};

const generalTab = {
  ...initilalTab,
  fragment: 'general',
  icon: 'pi pi-fw pi-home',
  tabIndex: 0,
  label: 'General',
};
const breederTab = {
  ...initilalTab,
  icon: 'paw',
  fragment: 'breeder',
  tabIndex: 1,
  hiddenFn: (): Signal<boolean> => {
    const entityPage = injectContactPage() as Signal<{
      Career: { Breeder: any[] };
    }>;
    return computed(
      () =>
        !entityPage()?.Career?.Breeder ||
        entityPage()?.Career?.Breeder.length === 0
    );
  },
  label: 'Breeder',
};

const judgeTab = {
  ...initilalTab,
  icon: 'cup',
  fragment: 'judge',
  tabIndex: 2,
  hiddenFn: (): Signal<boolean> => {
    const entityPage = injectContactPage() as Signal<{
      Career: { Judge: any[] };
    }>;
    return computed(
      () =>
        !entityPage()?.Career?.Judge || entityPage()?.Career?.Judge.length === 0
    );
  },
  label: 'Judge',
};

export const contactFragments: Partial<TabStoreStateV2> = {
  tabs: [generalTab, breederTab, judgeTab],
};

export const contactPageFeaturesRoutes: Routes = [
  {
    canActivate: [fragmentCheckerFn],
    path: '',
    resolve: {},
    children: [
      {
        ...pageTabFrament(generalTab),
        component: ContactInfoComponent,
      },

      {
        ...pageTabFrament(breederTab),
        component: ContactBreederComponent,
      },

      {
        ...pageTabFrament(judgeTab),
        component: ContactJudgeComponent,
      },
    ],
  },
];

export const publicContactRoute: Route[] = [
  {
    path: '',
    canMatch: [(): MaybeBoolean => canMatchWithPageModel(['Contact'])],
    children: [
      contactNameRoute,
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
        providers: [provideTabStore(contactFragments)],
        path: '',
        pathMatch: 'full',
        component: PageDetailsOutletComponent,
        resolve: {},
        children: contactPageFeaturesRoutes,
      },
    ],
  },
];
