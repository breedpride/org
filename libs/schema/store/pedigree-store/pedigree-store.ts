import { HttpClient } from '@angular/common/http';
import { computed, effect, inject } from '@angular/core';
import { Params } from '@angular/router';
// import { nullId } from '@bh/identifying';
import { LitterPage, PetPage, PublicPedigreePet } from '@bh/types';
import {
  setFulfilled,
  setPending,
  withRequestStatus,
} from '@bp/with-request-status';
import { environment } from '@breedpride/api';
import { tapResponse } from '@ngrx/operators';
import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { PageStore ,page } from '@bh/page-store';
import { distinctUntilChanged, forkJoin, pipe, switchMap, tap } from 'rxjs';
import { nullId } from '@bh/superfield';

type PedigreeMode = 'litter' | 'mating' | 'pedigree';

type PedigreeStoreState = {
  additionalPedigreeLoaded: boolean;
  generations: number;
  generationsDisplayCount: number;
  mode: PedigreeMode;
  pedigreePet: PublicPedigreePet | null;
};
const inittialState: PedigreeStoreState = {
  additionalPedigreeLoaded: false,
  generations: 0,
  generationsDisplayCount: 5,
  mode: 'pedigree',
  pedigreePet: null,
};

export const PedigreeStore = signalStore(
  { providedIn: 'root',
    protectedState: false ,
  },
  withState(inittialState),
  withRequestStatus(),
  // withLogger('[PedigreeStore]'),
  withComputed((store) => ({
    isMatingMode: computed(() => store.mode() === 'mating'),
    isPedigreeMode: computed(
      () => store.mode() === 'pedigree' || store.mode() === 'litter'
    ),
  })),
  withComputed(({ pedigreePet }) => {
    const pageStore = inject(PageStore);
    const generations = computed(() => 7);
    return {
      canSaveToLitters: computed(
        () =>
          pedigreePet() &&
          pedigreePet()?.Father?.Id &&
          pedigreePet()?.Mother?.Id
      ),
      // generationsDisplayCount: computed(() => {}),
      pedigreeGeneration: computed(() => {
        const initalPet = pedigreePet();
        if (!initalPet) return [];
        const generationCount = generations();
        const result: PublicPedigreePet[][] = [];
        result.push([]);
        result[0].push(initalPet);

        for (let i = 0; i < generationCount; i++) {
          result.push([]);
          result[i].forEach((pet) => {
            result[i + 1].push(pet?.Father || {});
            result[i + 1].push(pet?.Mother || {});
          });
        }
        return result;
      }),
      petPage: computed(() => page<PetPage>(pageStore.entityPage())),
    };
  }),
  withMethods((store) => {
    return {
      setFullPet({
        additionalPedigreeLoaded,
        generations,
        pedigreePet,
      }: Partial<PedigreeStoreState>): void {
        patchState(store, () => ({
          additionalPedigreeLoaded,
          generations,
          pedigreePet,
        }));
      },
    };
  }),

  withMethods((store, api = inject(HttpClient)) => {
    return {
      // TODO - mode litter! set Pet to null or loading panel draw
      buildLitterPedigree: rxMethod<LitterPage>(
        pipe(
          distinctUntilChanged(),
          tap(() => patchState(store, setPending(), { mode: 'litter' })),
          switchMap((entityPage) => {
            const pUrl = environment.api.pedigreeUrl;
            const depth = 7;

            return forkJoin([
              api.get<any>(
                `${pUrl}?id=${entityPage.Mother?.Id}&depth=${depth}`
              ),
              api.get<any>(
                `${pUrl}?id=${entityPage.Father?.Id}&depth=${depth}`
              ),
            ]).pipe(
              tapResponse({
                error: console.error,
                finalize: () => patchState(store, setFulfilled()),
                next: ([mother, father]) => {
                  const pet = {
                    Father: father.result.data,
                    Id: nullId,
                    Mother: mother.result.data,
                    Name: 'Litter ' + entityPage.Name,
                    TrimTitles: '',
                  };

                  // TODO - depth ??? min max
                  patchState(store, {
                    additionalPedigreeLoaded: true,
                    generationsDisplayCount: 5,
                    mode: 'litter',
                    pedigreePet: pet,
                  });
                },
              })
            );
          })
        )
      ),

      buildMatingPedigree: rxMethod<Params>(
        pipe(
          distinctUntilChanged(),
          tap(() => patchState(store, setPending(), { mode: 'mating' })),
          switchMap((params) => {
            const pUrl = environment.api.pedigreeUrl;
            const depth = 7;
            return forkJoin([
              api.get<any>(`${pUrl}?id=${params['Mother']}&depth=${depth}`),
              api.get<any>(`${pUrl}?id=${params['Father']}&depth=${depth}`),
            ]).pipe(
              tapResponse({
                error: console.error,
                finalize: () => patchState(store, setFulfilled()),
                next: ([mother, father]) => {
                  const pet = {
                    Father: father.result.data,
                    Id: nullId, //'testID'
                    Mother: mother.result.data,
                    Name:
                      'Test Mating' +
                      father?.result?.data?.Name +
                      mother?.result?.data?.Name,
                  };

                  // TODO - depth ??? min max
                  patchState(store, {
                    additionalPedigreeLoaded: true,
                    generationsDisplayCount: 5,
                    mode: 'mating',
                    pedigreePet: pet,
                  });
                },
              })
            );
          })
        )
      ),
      setGenerationsDisplayCount: rxMethod<any>(
        pipe(
          // distinctUntilChanged(),
          tap(() => patchState(store, setPending())),
          switchMap((value) => {
            if (value > 6 && !store.additionalPedigreeLoaded()) {
              const pUrl = environment.api.pedigreeUrl;
              return api
                .get<any>(`${pUrl}?id=${store.pedigreePet()?.Id}&depth=7`)
                .pipe(
                  tapResponse({
                    error: console.error,
                    finalize: () => patchState(store, setFulfilled()),
                    next: (fullPet) => {
                      patchState(store, {
                        additionalPedigreeLoaded: true,
                        generationsDisplayCount: value,
                        pedigreePet: fullPet.result.data,
                      });
                    },
                  })
                );
            } else {
              patchState(
                store,
                {
                  generationsDisplayCount: value,
                },
                setFulfilled()
              );
              return [];
            }
          })
        )
      ),
    };
  }),
  withHooks({
    onInit(store, pageStore = inject(PageStore)) {
      effect(
        () => {
          // const pedigree = pageStore.petPage()['Pedigree'];
          const isReadyPetPage =
            pageStore.ready() && pageStore.loadedModel() === 'Pet';
          if (isReadyPetPage) {
            // TODO - check pedigree exist
            const entityPage = pageStore.entityPage();
            const generationsDisplayCount =
              store.generationsDisplayCount() > 5
                ? store.generationsDisplayCount()
                : 5;
            // if (store.generationsDisplayCount() === 6)
            if (entityPage && 'Pedigree' in entityPage) {
              patchState(store, {
                additionalPedigreeLoaded: false,
                generationsDisplayCount: generationsDisplayCount,
                mode: 'pedigree',
                pedigreePet: entityPage['Pedigree'],
              });
            }
          }
        },

      );
    },
  })
);
