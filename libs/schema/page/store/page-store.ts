import { computed, inject } from '@angular/core';
import {
  patchState,
  signalStore,
  type,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';

import { isValidUUID } from '@bh/column-type/guid';
import { BPNavStore } from '@bh/nav-store';
import { withSelectedId } from '@bh/collection-selection';
import {
  BreedPage,
  ContactPage,
  CreatioPage,
  EventPage,
  KennelPage,
  LitterPage,
  PetPage,
} from '@bh/types';
import { withLogger } from '@bp/with-logger';
import {
  setFulfilled,
  setPending,
  withRequestStatus,
} from '@bp/with-request-status';
import { ApiService } from '@breedpride/api';
import { tapResponse } from '@ngrx/operators';
import { setEntities, withEntities } from '@ngrx/signals/entities';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { distinctUntilChanged, pipe, switchMap, tap } from 'rxjs';

type PageState = {
  creatioPage: CreatioPage | null;
};

type EntityPage = {
  creatioPage: CreatioPage;
  id: string; // id+model or slug (url)
};

const initialState: PageState = {
  creatioPage: null,
};

const publicPageConfig = {
  entity: type<EntityPage>(),
  collection: '' as const,
  selectId: (entity: EntityPage) =>
    entity?.creatioPage?.data?.Url ||
    entity?.creatioPage?.data?.Id + entity.creatioPage?.model,
};
export const PageStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withSelectedId<EntityPage, ''>(publicPageConfig),
  withEntities<EntityPage>(),
  // withSelectedPageId(),
  // withSelectedEntity(),
  withRequestStatus(),
  withLogger('[PageStore]'),
  withComputed(({ creatioPage, isLoading }) => ({
    entityPage: computed(() => creatioPage()?.data || null),
    loadedModel: computed(() => creatioPage()?.model || ''),
    pageTitle: computed(() => creatioPage()?.data?.Name),
    // TODO check selectedEntityId and creatioPage.urlID
    ready: computed(
      () => !isLoading() && !!creatioPage()?.model && !!creatioPage()?.data
    ),
  })),
  withComputed((store) => ({
    petPage: computed(() => {
      if (store.ready() && store.loadedModel() === 'Pet') {
        return store.entityPage() as PetPage;
      } else {
        return null;
      }
    }),
    litterPage: computed(() => {
      if (store.ready() && store.loadedModel() === 'Litter') {
        return store.entityPage() as LitterPage;
      } else {
        return null;
      }
    }),
    breedPage: computed(() => {
      if (store.ready() && store.loadedModel() === 'Breed') {
        return store.entityPage() as BreedPage;
      } else {
        return null;
      }
    }),
    contactPage: computed(() => {
      if (store.ready() && store.loadedModel() === 'Contact') {
        return store.entityPage() as ContactPage;
      } else {
        return null;
      }
    }),
    kennelPage: computed(() => {
      if (
        store.ready() &&
        (store.loadedModel() === 'Account' || store.loadedModel() === 'Kennel')
      ) {
        return store.entityPage() as KennelPage;
      } else {
        return null;
      }
    }),
    eventPage: computed(() => {
      if (store.ready() && store.loadedModel() === 'Project') {
        return store.entityPage() as EventPage;
      } else {
        return null;
      }
    }),
  })),
  withMethods(
    (store, api = inject(ApiService), navStore = inject(BPNavStore)) => {
      return {
        setSelectedIdRx: rxMethod<string>(
          pipe(
            distinctUntilChanged(),
            tap(() => patchState(store, setPending())),
            switchMap((slug) => {
              store.setSelectedId(slug);
              const stored = store.entityMap()[slug];
              if (stored) {
                console.log('STORED PAGE', stored);
                navStore.patchUrlName(
                  stored.creatioPage?.data?.Url || '',
                  stored.creatioPage.data?.Name || ''
                );
                patchState(
                  store,
                  {
                    creatioPage: stored.creatioPage,
                  },
                  setFulfilled()
                );
                return [];
              }
              const id = slug.substring(0, 36);
              const model = slug.substring(36);
              const schema =
                model === 'Kennel'
                  ? 'Account'
                  : model === 'Event'
                    ? 'Project'
                    : model;
              const slugIsUrl = !isValidUUID(id);
              const page = slugIsUrl
                ? api.getPageBySlug(slug)
                : api.getPageByIdAndModel(schema, id);
              return page.pipe(
                tapResponse({
                  error: console.error,
                  finalize: () => patchState(store, setFulfilled()),
                  next: (creatioPage) => {
                    navStore.patchUrlName(
                      creatioPage?.data?.Url || '',
                      creatioPage.data?.Name || ''
                    );
                    // console.log('creatioPage', creatioPage);
                    const creatiopageId = creatioPage?.data?.Id || '';
                    const creatiopageUrl = creatioPage?.data?.Url || '';
                    const secondId = slugIsUrl
                      ? creatiopageId + creatioPage.model
                      : creatiopageUrl;
                    // TODO - can be redirectUrl
                    patchState(
                      store,
                      setEntities([
                        {
                          creatioPage,
                          id: slugIsUrl ? slug : id + model,
                        },
                        {
                          creatioPage,
                          id: secondId,
                        },
                      ])
                    );
                    patchState(store, { creatioPage });
                  },
                })
              );
            })
          )
        ),
      };
    }
  )
);
// TODO - nonNull PetPage value -
export const injectPetPage = () => inject(PageStore).petPage;
export const injectBreedPage = () => inject(PageStore).breedPage;
export const injectLitterPage = () => inject(PageStore).litterPage;
export const injectContactPage = () => inject(PageStore).contactPage;
export const injectEventPage = () => inject(PageStore).eventPage;
export const injectKennelPage = () => inject(PageStore).kennelPage;
