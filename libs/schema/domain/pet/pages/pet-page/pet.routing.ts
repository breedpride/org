import {
  computed,
  inject,
  InjectionToken,
  Provider,
  Signal,
} from '@angular/core';
import { Route, Routes } from '@angular/router';
import { ACTIVE_DETAIL, provideService } from '@bh/collection-store';

import  {FilterFieldConfig,} from '@bh/superfield';
import { PetPage } from '@bh/types';
import {
  TabStoreStateV2,
  provideTabStore,
  initilalTab,
} from '@bp/page-tab-store';
import { PetNameComponent } from '../../lib/pet-name/pet-name.component';
import { injectPetPage, PageStore } from '@bh/page-store';
import { PedigreeStore } from '@bp/pedigree-store';
import { PageDetailsOutletComponent } from '@breedpride/page-template';
import { PedigreePageComponent } from '../../lib/pedigree-page/pedigree-page.component';
import { PetTitlesComponent } from '../../lib/pet-titles/pet-titles.component';
import { PetChildrenComponent } from './components/pet-children/pet-children.component';
import { PetGeneralComponent } from './components/pet-general/pet-general.component';
import { PetHealthComponent } from './components/pet-health/pet-health.component';
import { PetIdentifiersComponent } from './components/pet-identifiers/pet-identifiers.component';
import { PetMomentsComponent } from './components/pet-moments/pet-moments.component';
import { PetServicesComponent } from './components/pet-services/pet-services.component';
import { PetShowResultsComponent } from './components/pet-show-results/pet-show-results.component';
import { PetSiblingsComponent } from './components/pet-siblings/pet-siblings.component';
import { PetTimelineComponent } from './components/pet-timeline/pet-timeline.component';
import {  canMatchWithPageModel,
  detailMatcher,
  MaybeBoolean,}
  from '@bh/page-store';
import {

  pageTabFrament,
} from '@bp/page-tab-store';
import { DinamicChildrenComponent } from './components/pet-children/dinamic-children.component';
import { signal } from '@angular/core';
import {
  provideEntityListStoreWithConfig,
} from '@bh/collection-store';
import {
  DEFAULT_TABLE,

  provideEntitiesViews,
} from '@bh/collection-view-change';
import {provideEntitiesFieldsConfigValue,} from '@bh/collection-view-scroller'
import { Note_SCHEMA } from '@bh/entity/config';
import { provideEntityStoreWithFn } from '@bh/entity-store';

import { PET_SPACE_TOKEN } from './pet-space';
import {
  provideEntitiesSort,
  SortDirection,
} from '@bh/collection-sorting';
import { PageFormDetailComponent } from '@bp/page-form-detail';
import { PrimeIcons } from 'primeng/api';
import { withDetailEntityProviders } from '@bh/entity-store';

export const detailRoute = (
  input: {
    id: string;
    entitySchemaToken: InjectionToken<{
      fieldsConfig: Record<string, FilterFieldConfig>;
    }>;
  },
  extraProviders: Provider[] = []
): Route => {
  const id = input.id;
  const schemaToken = input.entitySchemaToken;
  return {
    path: id,
    children: [
      {
        path: '',
        component: PageFormDetailComponent,
        resolve: {
          // setActiveDetail: () => inject(ACTIVE_DETAIL).set(id),
        },
      },
    ],
    providers: [
      withDetailEntityProviders(() => inject(schemaToken).fieldsConfig),
      provideEntityListStoreWithConfig(
        schemaToken,
        {
          naming: {
            editCompomentHeaderString: 'Title',
          },
        },
        extraProviders
      ),
    ],
  };
};

export const detailPetNameRoute = {
  path: '',
  outlet: 'name',
  component: PetNameComponent,
  resolve: {
    viewMode: (): string => 'simple',
    entityPage: (): null | PetPage => inject(PageStore).petPage(),
  },
};

export const offersTab = {
  ...initilalTab,
  icon: 'local-offer',
  fragment: 'offers',
  tabIndex: 0,
  hiddenFn: (): Signal<boolean> => {
    const entityPage = injectPetPage() as Signal<{ Services: any[] }>;
    return computed(
      () => !entityPage()?.Services || entityPage()?.Services.length === 0
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
const titlesTab = {
  ...initilalTab,
  icon: 'cup',
  fragment: 'titles',
  tabIndex: 2,
  hiddenFn: (): Signal<boolean> => {
    const entityPage = injectPetPage() as Signal<{ PetTitles: any[] }>;
    return computed(
      () => !entityPage()?.PetTitles || entityPage()?.PetTitles.length < 30
    );
  },
  label: 'Titles',
};
const identifiersTab = {
  ...initilalTab,
  fragment: 'identifiers',
  icon: 'pi pi-fw pi-check-circle',
  tabIndex: 3,
  label: 'Identifiers',
};
const pedigreeTab = {
  ...initilalTab,
  fragment: 'pedigree',
  icon: 'pi pi-fw pi-sitemap',
  tabIndex: 4,
  label: 'Pedigree',
  url: 'pedigree',
};
const showsTab = {
  ...initilalTab,
  fragment: 'shows',
  icon: 'pi pi-fw pi-globe',
  tabIndex: 5,
  label: 'Shows',
};
const healthTab = {
  ...initilalTab,
  icon: 'troubleshoot',
  fragment: 'health',
  tabIndex: 6,
  label: 'Health',
};
const childrenTab = {
  ...initilalTab,
  fragment: 'children',
  icon: 'pi pi-fw pi-list',
  tabIndex: 7,
  label: 'Children',
  url: 'children',
};
const siblingsTab = {
  ...initilalTab,
  fragment: 'siblings',
  icon: 'pi pi-fw pi-th-large',
  tabIndex: 8,
  label: 'Siblings',
};
const timelineTab = {
  ...initilalTab,
  icon: 'timeline',
  fragment: 'timeline',
  tabIndex: 9,
  label: 'Timeline',
};
const momentsTab = {
  ...initilalTab,
  fragment: 'moments',
  icon: 'pi pi-fw pi-images',
  tabIndex: 10,
  label: 'Moments',
};
const notesTab = {
  ...initilalTab,
  fragment: 'notes',
  icon: 'pi pi-fw pi-images',
  tabIndex: 10,
  label: 'Notes',
};
//ts-ignore
export const petFragments: Partial<TabStoreStateV2> = {
  tabs: [
    offersTab,
    generalTab,
    titlesTab,
    identifiersTab,
    pedigreeTab,
    showsTab,
    healthTab,
    childrenTab,
    siblingsTab,
    timelineTab,
    momentsTab,
  ],
};

export const petNameRoute = {
  path: '',
  component: PetNameComponent,
  outlet: 'name',
};
export const petPageFeaturesRoutes: Routes = [
  {
    // TODO  -rework cheker - (onStore)
    // canActivate: [fragmentCheckerFn],
    path: '',
    resolve: {},
    children: [
      {
        ...pageTabFrament(offersTab),
        component: PetServicesComponent,
      },
      {
        ...pageTabFrament(generalTab),
        component: PetGeneralComponent,
      },
      {
        ...pageTabFrament(titlesTab),
        component: PetTitlesComponent,
        resolve: {
          options: () => ({
            mode: 'detail',
          }),
        },
      },
      {
        ...pageTabFrament(identifiersTab),
        component: PetIdentifiersComponent,
      },
      {
        ...pageTabFrament(pedigreeTab),
        component: PedigreePageComponent,
      },
      {
        ...pageTabFrament(showsTab),
        component: PetShowResultsComponent,
      },
      {
        ...pageTabFrament(healthTab),
        component: PetHealthComponent,
      },
      {
        ...pageTabFrament(childrenTab),
        component: PetChildrenComponent,
      },
      {
        ...pageTabFrament(siblingsTab),
        component: PetSiblingsComponent,
      },
      {
        ...pageTabFrament(timelineTab),
        component: PetTimelineComponent,
      },
      {
        ...pageTabFrament(momentsTab),
        component: PetMomentsComponent,
      },
    ],
  },
];

export const publicPetRoute: Route[] = [
  {
    path: '',
    canMatch: [(): MaybeBoolean => canMatchWithPageModel(['Pet'])],
    children: [
      petNameRoute,
      {
        path: '',
        pathMatch: 'full',
        component: PetTitlesComponent,
        outlet: 'achievements',
        resolve: {
          mode: () => 'component',
          expanded: () => false,
        },
      },
      {
        providers: [provideTabStore(petFragments), provideService()],
        path: '',
        pathMatch: 'full',
        component: PageDetailsOutletComponent,
        resolve: {},
        children: petPageFeaturesRoutes,
      },
      {
        path: '',
        children: [
          {
            resolve: {
              tab: () => pedigreeTab,
              tabmode: () => 'page',
              setActiveDetail: () => inject(ACTIVE_DETAIL).set('pedigree'),
            },
            path: 'pedigree',
            canMatch: [detailMatcher(pedigreeTab)],
            children: [
              // detailPetNameRoute,
              {
                path: '',
                component: PedigreePageComponent,
                resolve: {
                  setSixGenerations: () =>
                    inject(PedigreeStore).setGenerationsDisplayCount(6),
                  inSeparatedUrl: () => true,
                  mode: () => 'component',
                  entityPage: () => inject(PageStore).petPage(),
                },
              },
            ],
          },

          {
            path: 'children',
            // canMatch: [detailMatcher(notesTab)],
            component: DinamicChildrenComponent,
            resolve: {
              tabmode: () => 'page',
              setActiveDetail: () => inject(ACTIVE_DETAIL).set('children'),
              // children: () => inject(PageStore).petPage()?.Children,
              pet: () => inject(PageStore).petPage(),
            },

            providers: [
              // [

              provideEntitiesSort([
                {
                  id: 'Date',
                  name: 'Date',
                  icon: PrimeIcons.SORT_AMOUNT_DOWN,
                  sortColumns: [
                    {
                      column: 'CreatedOn',
                      direction: SortDirection.DESC,
                      position: 10,
                    } as const,
                  ],
                },
              ]),
              provideEntitiesFieldsConfigValue(() => {
                return inject(Note_SCHEMA).fieldsConfig;
              }),
              // ],
              // ),

              provideEntitiesViews([
                {
                  ...DEFAULT_TABLE,
                  viewStrategy: 'modal',
                  loadEditComponent: () =>
                    import(
                      '../../pet-form/pet-notes-form/pet-notes-form.component'
                    ).then((m) => m.PetNotesFormComponent),
                },
              ]),
              // EntityListStore,
              // { provide: STORE, useClass: EntityListStore },
            ],
          },
        ],
      },
    ],
    providers: [
      // withDetailEntityProviders(() => inject(Pet_SCHEMA).fieldsConfig),
      provideEntityStoreWithFn(() => inject(PET_SPACE_TOKEN)),
      // provideTabStore(petEditfragments),
      {
        provide: ACTIVE_DETAIL,
        useValue: signal(''),
      },
    ],
  },
];
