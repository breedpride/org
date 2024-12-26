import { BreakpointObserver } from '@angular/cdk/layout';
import { computed, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withState,
} from '@ngrx/signals';
import { tap } from 'rxjs/operators';
import { ScreenKeys, mediaScreens } from './screens';

type MediaStoreState = {
  matchingAliases: ScreenKeys[];
  matchingQueries: Record<any, any>;
  screens: Record<ScreenKeys, string>;
};

export const MediaStore = signalStore(
  { providedIn: 'root',
    protectedState: false
  },
  withState<MediaStoreState>({
    matchingAliases: [],
    matchingQueries: {},
    screens: mediaScreens,
  }),
  withComputed((store) => ({
    aliases: computed(() => store.matchingAliases()),
  })),
  // TODO - merge with LocalStore
  withComputed((store) => ({
    lessThanLG: computed(() => !store.aliases().includes('lg')),
    lessThanMD: computed(() => !store.aliases().includes('md')),
    lessThanSM: computed(() => !store.aliases().includes('sm')),
    lessThanXL: computed(() => !store.aliases().includes('xl')),
    moreThanLG: computed(() => store.aliases().includes('lg')),
    moreThanMD: computed(() => store.aliases().includes('md')),
    moreThanSM: computed(() => store.aliases().includes('sm')),
    moreThanXL: computed(() => store.aliases().includes('xl')),
  })),
  withComputed((store) => ({
    defaultModalWindowHeight: computed(() =>
      store.lessThanMD() ? '100%' : undefined
    ),
    defaultModalWindowWidth: computed(() =>
      store.lessThanXL() ? (store.lessThanMD() ? '100%' : '60%') : '40%'
    ),
  })),
  withHooks({
    onInit(store, breakpointObserver = inject(BreakpointObserver)) {
      breakpointObserver
        .observe(Object.values(store.screens()))
        .pipe(
          takeUntilDestroyed(),
          tap((state) => {
            // Prepare the observable values and set their defaults
            const matchingAliases: any[] = [];
            const matchingQueries: any = {};

            // Get the matching breakpoints and use them to fill the subject
            const matchingBreakpoints =
              Object.entries(state.breakpoints).filter(
                ([, matches]) => matches
              ) ?? [];
            for (const [query] of matchingBreakpoints) {
              // Find the alias of the matching query
              const matchingAliasArray = Object.entries(store.screens()).find(
                ([, q]) => q === query
              );
              const matchingAlias = matchingAliasArray && matchingAliasArray[0];

              // Add the matching query to the observable values
              if (matchingAlias) {
                matchingAliases.push(matchingAlias);
                matchingQueries[matchingAlias] = query;
              }
            }
            patchState(store, {
              matchingAliases: Object.entries(matchingQueries)
                .filter(([, matches]) => matches)
                .map(([alias]) => alias) as ScreenKeys[],
              matchingQueries,
            });
          })
        )
        .subscribe();
    },
  })
);
