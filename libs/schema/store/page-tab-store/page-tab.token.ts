import {
  effect,
  inject,
  Injector,
  Provider,
  runInInjectionContext,
  signal,
} from '@angular/core';
import { PageContentStore } from '@bp/page-content-store';
import {
  patchState,
  signalStore,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { createInjectionToken } from 'ngxtension/create-injection-token';
import { ResizeResult } from 'ngxtension/resize';
import { debounceTime, pipe, switchMap } from 'rxjs';
import { Tab } from './tab-store-state-va2';
import { TabStoreV2 } from './tab.storeV2.service';

function calculateOverlapLength(
  segment1Y: number,
  segment1Height: number,
  segment2Y: number,
  segment2Height: number
): number {
  const top = Math.max(segment1Y, segment2Y);
  const bottom = Math.min(
    segment1Y + segment1Height,
    segment2Y + segment2Height
  );

  if (top < bottom) {
    return bottom - top;
  }

  return 0; // No overlap
}
// Функція конфігурації табу
function pageTabConfig(defaultValue: StoreTab) {
  return defaultValue;
}

// Створення токена конфігурації табу
export const [injectTabConfig, provideTabConfig, TAB_CONFIG] =
  createInjectionToken(pageTabConfig);

// Фабрика для створення стору PageTabStore
function pageTabFactory(defaultValue: StoreTab) {
  // console.log('PageTabFactory !!!!', defaultValue);
  const tabStore = inject(TabStoreV2, { optional: true });

  if (defaultValue && defaultValue.fragment && tabStore) {
    const fragment = defaultValue.fragment;
    const store = tabStore.EntityMap()[fragment];
    if (store) return store;
  }
  return new PageTabStore();
}

export const [injectPageTab, providePageTab, PAGE_TAB] = createInjectionToken(
  pageTabFactory,
  {
    isRoot: false,
    deps: [TAB_CONFIG],
  }
);

// Провайдер для передавання конфігурації табу в PageTabStore
export const provideTabFromConfig = (tabConfig: StoreTab): Provider[] => [
  provideTabConfig(() => tabConfig),
  providePageTab(),
];
// Аналогічна функція
export const provideTabStoreWithConfig = (tabConfig: StoreTab) => [
  { provide: TAB_CONFIG, useValue: tabConfig },
  providePageTab(),
];

type StoreTab = Tab;
export const initilalTab: StoreTab = {
  fragment: 'none',
  url: '',
  icon: '',
  label: 'none',
  tabIndex: -1,
  id: 'none',
  top: -1,
  hiddenFn: () => signal(false),
};
// Визначення стору PageTabStore з використанням сигналів
export const PageTabStore = signalStore(
  { protectedState: false },
  withState<StoreTab>(initilalTab),
  withState({ initTop: 0, initHeight: 0 }),
  withState({ bodyVisibility: 0 }),
  withState({ hidden: false }),
  withMethods((store, pageContentStore = inject(PageContentStore)) => ({
    observeBodyVisibility: rxMethod<ResizeResult>(
      pipe(
        debounceTime(30),
        switchMap((e) => {
          const { top, height } = pageContentStore.viewportTopHeight();
          const bodyVisibility =
            calculateOverlapLength(top, height, e.top, e.height) / e.height;
          patchState(store, { bodyVisibility: bodyVisibility });
          patchState(store, { top: e.top });
          // TODO - maybe afterInit () -
          if (store.initTop() === 0) {
            // store.initHeight() < e.height) {
            patchState(store, { initTop: e.top, initHeight: e.height });
          }
          return [];
        })
      )
    ),
  })),
  withHooks((store) => {
    const injector = inject(Injector);
    return {
      onInit: () => {
        effect(
          () => {
            runInInjectionContext(injector, () => {
              const fn = store.hiddenFn();
              patchState(store, { hidden: fn()() });
            });
          },

        );
      },
    };
  })
);

export type PageTabStore = InstanceType<typeof PageTabStore>;
