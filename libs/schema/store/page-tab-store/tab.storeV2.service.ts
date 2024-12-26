import { effect, inject, InjectionToken } from '@angular/core';
import { injectScroll } from '@bh/viewport';
import { PageContentStore } from '@bp/page-content-store';
import {
  patchState,
  signalStore,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { TabStoreStateV2 } from './tab-store-state-va2';
// import { PageTabStore } from '@bp/page-tab-store';
import { derivedFrom } from 'ngxtension/derived-from';
import { injectRouteFragment } from 'ngxtension/inject-route-fragment';
import { debounceTime, pairwise, pipe, startWith, switchMap } from 'rxjs';
import { BPNavStore } from '@bh/nav-store';
import { withPageTabs } from './tabs/page-tabs.feature';
export const TAB_CONFIG_V2 = new InjectionToken<TabStoreStateV2>('TabConfigV2');

export const initialStateV2: TabStoreStateV2 = {
  tabs: [],
};

export const TabStoreV2 = signalStore(
  { protectedState: false },
  withPageTabs(),
  withState<{ readyToScroll: boolean }>({ readyToScroll: false }),

  withMethods((store, target2 = injectScroll()) => ({
    scrollTo(top: number): void {
      const scroll = target2.scroll();
      if (target2 && scroll) {
        scroll.scrollTo({
          behavior: 'smooth',
          left: 0,
          top: top - 3 || 0,
        });
      }
    },
    enableScroll() {
      patchState(store, { readyToScroll: true });
    }
  })),
  // withMethods((store, helpStore = inject(PageContentStore)) => ({
  //   scrollToFragment(fragment: string | null | undefined) {
  //     console.log('scrollToFragment', fragment);
  //   },
  // })),
  withMethods(
    (
      store,
      helpStore = inject(PageContentStore),
      navStore = inject(BPNavStore)
    ) => ({
      follow: rxMethod<any>(
        pipe(
          startWith({
            selected: store.SelectedEntity(),
            first: store.firstViewportTab(),
          }),
          pairwise(),
          debounceTime(100),
          // tap(() => patchState(store, { readyToScroll: false })),
          switchMap(([prev, next]) => {
            console.log(
              'prev',
              prev.selected?.fragment(),
              prev.first?.fragment()
            );
            console.log(
              'next',
              next?.selected?.fragment(),
              next?.first?.fragment()
            );
            const currentFragment = next.first?.fragment();
            const urlFragment = next.selected?.fragment();
            if (urlFragment === currentFragment) {
              patchState(store, { readyToScroll: true });
              return [];
            }
            if (urlFragment === prev?.selected?.fragment()) {
              if (store.readyToScroll()) {
                navStore.changeFragment(next.first?.fragment());
              }
            } else {
              // need scroll to selected
              if (
                urlFragment === store.firstVisibleFragment() ||
                !next.selected
              ) {
                store.scrollTo(0);
              } else {
                if (store.readyToScroll()) {
                  const pp = helpStore.scrollDelta();
                  const to = next.selected?.initTop() - pp + 15;
                  store.scrollTo(to);
                }
              }
            }
            return [];
          })
        )
      ),
      // followSelected: rxMethod<any | null>(
      //   pipe(
      //     filter((e) => !!e),
      //     tap((e) => {
      //       console.log('follow', getState(e));
      //     }),
      //     debounceTime(30),
      //     filter((e) => e.fragment() !== store.firstViewportTab()?.fragment()),
      //     switchMap((selectedTabStore) => {
      //       if (selectedTabStore.fragment() === store.firstVisibleFragment()) {
      //         store.scrollTo(0);
      //         return [];
      //       }
      //       const pp = helpStore.scrollDelta();
      //       const to = selectedTabStore.initTop() - pp - 25;
      //       store.scrollTo(to);
      //       return [];
      //     })
      //   )
      // ),
    })
  ),

  withHooks((store) => {
    return {
      onInit() {
        const routeFragment = injectRouteFragment();
        const selected = store.SelectedEntity;
        const firstVisible = store.firstViewportTab;
        const combined = derivedFrom({
          selected: selected,
          first: firstVisible,
        });
        effect(
          () => {
            patchState(store, { SelectedId: routeFragment() || '' });

            // store.followSelected(selected());
            store.follow(combined());
          },

        );
      },
    };
  })
);

// export type TabStoreV2 = InstanceType<typeof TabStoreV2>;

export const provideTabStore = (tabsConfig: Partial<TabStoreStateV2>) => {
  // console.log('provideTabStore', tabsConfig);
  return [
    { provide: TAB_CONFIG_V2, useValue: { ...initialStateV2, ...tabsConfig } },
    TabStoreV2,
  ];
};
