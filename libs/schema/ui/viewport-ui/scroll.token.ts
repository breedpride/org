import {
  patchState,
  signalStore,
  withMethods,
  withState,
} from '@ngrx/signals';
import { createInjectionToken } from 'ngxtension/create-injection-token';

export type WithScroll = { scroll: null | Element };

export const ScrollStore = signalStore(
  { protectedState: false },
  withState<WithScroll>({ scroll: null }),
  withMethods((store) => ({
    updateScroll(scroll: null | Element) {
      patchState(store, { scroll });
    },
  }))
);

function scrollFactory() {
  return new ScrollStore({ scroll: null });
}

export const [injectScroll, provideScroll, SCROLL] = createInjectionToken(
  scrollFactory,
  { isRoot: false }
);
