import { inject, signal } from '@angular/core';
import { ActivatedRouteSnapshot, Route, UrlSegment } from '@angular/router';
import {  provideEntityListStoreWithConfig, spaceStoreFactory, SUPER_STORE } from '@bh/collection-store';
import {
  DEFAULT_TABLE,
  provideEntitiesViews,
} from '@bh/collection-view-change';
import { provideEntitiesFieldsConfigValue } from '@bh/collection-view-scroller';
import { Note_SCHEMA, Pet_SCHEMA, TitleInPet_SCHEMA } from '@bh/entity/config';
import { ENTITY_STORE, provideEntityStoreWithFn } from '@bh/entity-store';
import {provideEntitiesFilterFn } from '@bh/collection-filtration';
import { detailFilter, injectPetPage, PageStore } from '@bh/page-store';
import { ACTIVE_DETAIL, SUPER_CONFIG } from '@bh/collection-store';
import { TabStoreStateV2 } from '@bp/page-tab-store';
import { storeReadyFn } from '@bh/page-store';
import { PetNoteConfig } from '@breedpride/note';
import {
  PET_SPACE_TOKEN,
  petFieldsConfig,
  PetGeneralFormComponent,
  PetHealthFormComponent,
  PetIdentifiersFormComponent,
  petNameRoute,
} from '@breedpride/pet';
import { provideEntitiesSort, SortDirection } from '@bh/collection-sorting';
import { initilalTab } from '@bp/page-tab-store';
import { provideTabStore } from '@bp/page-tab-store';
import { PageFormDetailComponent } from '@bp/page-form-detail';
import {
  PageDetailsOutletComponent,
  PageTemplateV3Component,
} from '@breedpride/page-template';
import { PrimeIcons } from 'primeng/api';
import { Observable } from 'rxjs';
import { withDetailEntityProviders } from '@bh/entity-store';
import { defaultGeneralRedirect } from './common.routing';
import { editDetailRoute } from './edit-detail';

const setPetId = (route: ActivatedRouteSnapshot): void => {
  const spaceStore = inject(ENTITY_STORE);
  const pageStore = inject(PageStore);
  const id = route.params['id'];
  spaceStore.setEntity(null);
  pageStore.setSelectedId(id + 'Pet');

  spaceStore.getEntityForEditorById(id);
};
const loadPet = (route: Route, segments: UrlSegment[]): boolean => {
  const id = segments[0].path;

  const spaceStore = inject(ENTITY_STORE);
  spaceStore.getEntityForEditorById(id);
  return true;
};

const petEditfragments: Partial<TabStoreStateV2> = {
  tabs: [
    {
      ...initilalTab,
      fragment: 'general',
      url: 'general',
      id: 'general',
      icon: 'pi pi-fw pi-home',
      tabIndex: 0,
      label: 'General',
    },
    {
      ...initilalTab,
      icon: 'cup',
      tabIndex: 1,
      fragment: 'titles',
      url: 'titles',
      id: 'titles',
      label: 'Titles',
    },
    {
      ...initilalTab,
      fragment: 'identifiers',
      url: 'identifiers',
      icon: 'pi pi-fw pi-check-circle',
      id: 'identifiersID',
      tabIndex: 2,
      label: 'Identifiers',
    },
    {
      ...initilalTab,
      fragment: 'health',
      url: 'health',
      icon: 'troubleshoot',
      id: 'health',
      tabIndex: 3,
      label: 'Health',
    },
    {
      ...initilalTab,
      fragment: 'offers',
      url: 'offers',
      icon: 'local-offer',
      id: 'offers',
      tabIndex: 4,
      label: 'Offers',
    },
    {
      ...initilalTab,
      fragment: 'notes',
      url: 'notes',
      icon: 'pi pi-fw pi-bookmark',
      id: 'notes',
      tabIndex: 5,
      label: 'Notes',
    },
  ],
};

export const editPetRoutes: Route[] = [
  {
    path: '',
    children: [
      {
        component: PageTemplateV3Component,
        path: ':id',
        resolve: {
          setPetId: () => setPetId,
        },
        canMatch: [
          (route: Route, segments: UrlSegment[]): Observable<boolean> => {
            inject(PageStore).setSelectedIdRx(segments[0].path + 'Pet');
            return storeReadyFn();
          },
          loadPet,
        ],
        children: [
          defaultGeneralRedirect,
          petNameRoute,
          {
            path: '',
            component: PageDetailsOutletComponent,
            resolve: {
              mode: () => 'shrink',
            },

            children: [
              {
                path: 'general',
                children: [
                  {
                    path: '',
                    component: PetGeneralFormComponent,
                    resolve: {
                      setActiveDetail: () => {
                        inject(ENTITY_STORE).getEntityForEditorById(
                          injectPetPage()()?.Id || ''
                        );
                        inject(ACTIVE_DETAIL).set('general');
                      },
                      fieldsConfig: () => petFieldsConfig,
                    },
                  },
                ],
              },
              editDetailRoute(
                {
                  id: 'titles',
                  entitySchemaToken: TitleInPet_SCHEMA,
                },
                [
                  provideEntitiesFilterFn(detailFilter('Pet')),
                  provideEntitiesSort([
                    {
                      id: 'Date',
                      name: 'Date',
                      icon: PrimeIcons.SORT_AMOUNT_DOWN,
                      sortColumns: [
                        {
                          column: 'Date',
                          direction: SortDirection.DESC,
                          position: 10,
                        } as const,
                      ],
                    },
                  ]),
                  provideEntitiesFieldsConfigValue(() => {
                    const config = inject(TitleInPet_SCHEMA).fieldsConfig;
                    return [
                      config.Id,
                      config.Date,
                      config.Title,
                      config.Country,
                    ];
                  }),
                  provideEntitiesViews([
                    {
                      ...DEFAULT_TABLE,
                      viewStrategy: 'modal',
                      loadEditComponent: () =>
                        import(
                          '@breedpride/pet'
                        ).then((m) => m.PetTitlesFormComponent),
                    },
                  ]),
                ]
              ),
              // {
              //   path: 'titles',
              //   children: [
              //     {
              //       path: '',
              //       component: PageFormDetailComponent,
              //       resolve: {
              //         setActiveDetail: () =>
              //           inject(ACTIVE_DETAIL).set('titles'),
              //       },
              //     },
              //   ],

              //   providers: [
              //     withDetailEntityProviders(
              //       () => inject(TitleInPet_SCHEMA).fieldsConfig
              //     ),

              //     provideEntitiesViews([
              //       {
              //         ...DEFAULT_TABLE,
              //         viewStrategy: 'modal',
              //         loadEditComponent: () =>
              //           import(
              //             'libs/schema/domain/pet/pet-form/pet-titles-form/pet-tietles-form.component'
              //           ).then(m => m.PetTitlesFormComponent),
              //       },
              //     ]),
              //     provideEntityListStoreWithConfig(
              //       TitleInPet_SCHEMA,
              //       {
              //         naming: {
              //           editCompomentHeaderString: 'Title',
              //         },
              //       },
              //       [
              //         provideEntitiesFilterFn(detailFilter('Pet')),
              //         provideEntitiesSort([
              //           {
              //             id: 'Date',
              //             name: 'Date',
              //             icon: PrimeIcons.SORT_AMOUNT_DOWN,
              //             sortColumns: [
              //               {
              //                 column: 'Date',
              //                 direction: SortDirection.DESC,
              //                 position: 10,
              //               } as const,
              //             ],
              //           },
              //         ]),
              //         provideEntitiesFieldsConfigValue(() => {
              //           const config = inject(TitleInPet_SCHEMA).fieldsConfig;
              //           return [
              //             config.Id,
              //             config.Date,
              //             config.Title,
              //             config.Country,
              //           ];
              //         }),
              //       ]
              //     ),
              //   ],
              // },
              {
                path: 'identifiers',
                children: [
                  // simplePetNamingRoute,
                  {
                    path: '',
                    resolve: {
                      setActiveDetail: () =>
                        inject(ACTIVE_DETAIL).set('identifiers'),
                      // setActiveTab: () =>
                      //   inject(TabStoreV2).setFragment('identifiers'),
                    },
                    component: PetIdentifiersFormComponent,
                  },
                ],
              },
              {
                path: 'health',
                children: [
                  // simplePetNamingRoute,
                  {
                    path: '',
                    resolve: {
                      setActiveDetail: () =>
                        inject(ACTIVE_DETAIL).set('health'),
                      // setActiveTab: () =>
                      //   inject(TabStoreV2).setFragment('health'),
                    },
                    component: PetHealthFormComponent,
                  },
                ],
              },
              // {
              //   path: 'offers',
              //   children: [
              //     simplePetNamingRoute,
              //     {
              //       path: '',
              //       resolve: {
              //         setActiveTab: () =>
              //           inject(TabStoreV2).setFragment('offers'),
              //       },
              //       component: PetServicesFormComponent,
              //     },
              //   ],
              // },
              {
                path: 'notes',
                children: [
                  {
                    component: PageFormDetailComponent,
                    path: '',
                    outlet: '0',
                    resolve: {
                      setActiveDetail: () => inject(ACTIVE_DETAIL).set('notes'),
                    },
                  },
                ],
                providers: [
                  provideEntityListStoreWithConfig(
                    Note_SCHEMA,
                    {
                      naming: {
                        editCompomentHeaderString: 'Note',
                      },
                    },
                    [
                      provideEntitiesFilterFn(detailFilter('Pet')),
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
                    ]
                  ),

                  provideEntitiesViews([
                    {
                      ...DEFAULT_TABLE,
                      viewStrategy: 'modal',
                      loadEditComponent: () =>
                        import(
                          '@breedpride/pet'
                        ).then((m) => m.PetNotesFormComponent),
                    },
                  ]),
                  //TODO  factory for Detail
                  {
                    provide: SUPER_CONFIG,
                    useValue: PetNoteConfig,
                  },
                  {
                    provide: SUPER_STORE,
                    useFactory: spaceStoreFactory,
                  }

                ],
              },
            ],
          },
        ],
      },
    ],
    providers: [
      withDetailEntityProviders(() => inject(Pet_SCHEMA).fieldsConfig),
      provideEntityStoreWithFn(() => inject(PET_SPACE_TOKEN)),
      provideTabStore(petEditfragments),
      {
        provide: ACTIVE_DETAIL,
        useValue: signal(''),
      },
    ],
  },
];
