import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, Route, UrlSegment } from '@angular/router';
import { ENTITY_STORE } from '@bh/entity-store';
import { PageStore } from '@bh/page-store';
import { storeReadyFn } from '@bh/page-store';
import {
  LitterInfoFormComponent,
  LitterNameComponent,
  LitterNotesFormComponent,
  LitterOffersFormComponent,
  LitterPetsFormComponent,
  LitterWeightFormComponent,
  litterNameRoute,
} from '@breedpride/litter';
import { petFieldsConfig } from '@breedpride/pet';
import { TabStoreStateV2 } from '@bp/page-tab-store';
import { initilalTab } from '@bp/page-tab-store';
import { provideTabStore } from '@bp/page-tab-store';
import { PageTemplateV3Component } from '@breedpride/page-template';
import { defaultGeneralRedirect } from './common.routing';

const simpleLitterNamingRoute = {
  path: '',
  outlet: 'name',
  component: LitterNameComponent,
  resolve: {
    viewMode: () => 'simple',
    entityPage: () => inject(PageStore).litterPage(),
  },
};
const setLitterId = (route: ActivatedRouteSnapshot) => {
  const spaceStore = inject(ENTITY_STORE);
  const pageStore = inject(PageStore);
  const id = route.params['id'];
  spaceStore.setEntity(null);
  pageStore.setSelectedIdRx(id + 'Litter');
  spaceStore.getEntityForEditorById(id);
};
const loadLitter = (route: Route, segments: UrlSegment[]) => {
  const id = segments[0].path;
  const spaceStore = inject(ENTITY_STORE);
  spaceStore.getEntityForEditorById(id);
  return true;
};

const litterEditfragments: Partial<TabStoreStateV2> = {
  tabs: [
    {
      ...initilalTab,
      fragment: 'general',
      icon: 'pi pi-fw pi-home',
      tabIndex: 0,
      label: 'General',
    },
    {
      ...initilalTab,
      fragment: 'children',
      icon: 'pi pi-fw pi-list',
      id: 'childrenID',
      tabIndex: 1,
      label: 'Children',
    },
    {
      ...initilalTab,
      icon: 'weight',
      fragment: 'weight',
      id: 'weightID',
      tabIndex: 2,
      label: 'Weight',
    },
    {
      ...initilalTab,
      icon: 'local-offer',
      fragment: 'offers',
      id: 'offersID',
      tabIndex: 3,
      label: 'Offers',
    },
    {
      ...initilalTab,
      fragment: 'notes',
      icon: 'pi pi-fw pi-bookmark',
      id: 'notesID',
      tabIndex: 4,
      label: 'Notes',
    },
  ],
};

export const editLitterRoutes: Route[] = [
  {
    path: '',
    children: [
      {
        path: ':id',
        resolve: {
          setLitterId: setLitterId,
        },
        canMatch: [
          loadLitter,
          (route: Route, segments: UrlSegment[]) => {
            inject(PageStore).setSelectedIdRx(segments[0].path + 'Litter');
            return storeReadyFn();
          },
        ],

        children: [
          defaultGeneralRedirect,
          {
            path: '',
            children: [
              {
                path: 'general',
                pathMatch: 'full',
                children: [
                  litterNameRoute,
                  {
                    path: '',
                    children: [
                      {
                        path: '',
                        outlet: '0',
                        component: LitterInfoFormComponent,
                        resolve: {
                          entityPage: () => inject(PageStore).litterPage(),
                          fieldsConfig: () => petFieldsConfig,
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            component: PageTemplateV3Component,
          },
          {
            path: '',
            component: PageTemplateV3Component,
            resolve: {
              mode: () => 'shrink',
            },
            children: [
              {
                path: 'children',
                children: [
                  simpleLitterNamingRoute,
                  {
                    path: '',
                    component: LitterPetsFormComponent,
                  },
                ],
              },
              {
                path: 'weight',
                children: [
                  simpleLitterNamingRoute,
                  {
                    path: '',
                    component: LitterWeightFormComponent,
                  },
                ],
              },
              {
                path: 'offers',
                children: [
                  simpleLitterNamingRoute,
                  {
                    path: '',
                    component: LitterOffersFormComponent,
                  },
                ],
              },
              {
                path: 'notes',
                children: [
                  simpleLitterNamingRoute,
                  {
                    path: '',
                    component: LitterNotesFormComponent,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    providers: [ provideTabStore(litterEditfragments)],
  },
];
