import { computed, effect, inject } from '@angular/core';
import {
  MARGIN_BETWEEN_TABS,
  NAME_BLOCK_HEIGHT,
  TAB_MENU_HEIGHT,
} from '@bh/utils';
import { VIEWPORT } from '@bh/viewport';
import {
  getState,
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
type PageContentStoreState = {
  scrollTop: number;
  nameSize: { top: number };
};

export const PageContentStore = signalStore(
  { protectedState: false },
  withState<PageContentStoreState>({
    scrollTop: 0,
    nameSize: { top: 0 },
  }),
  withMethods((store) => ({
    setNameSize(nameSize: { top: number }) {
      patchState(store, { nameSize });
    },
    setScrollTop(scrollTop: number) {
      patchState(store, { scrollTop });
    },
  })),
  withComputed((store, viewport = inject(VIEWPORT)) => ({
    nameOnTop: computed(
      () => Math.abs(viewport.top() - store.nameSize().top) === 0
    ),
  })),

  withComputed((store, viewport = inject(VIEWPORT)) => {
    return {
      // Fixed value for screen - correct for all screens
      scrollDelta: computed(() => {
        console.log('VIEWPORT_TOP!!!!!!', viewport.top());
        return (
          NAME_BLOCK_HEIGHT +
          TAB_MENU_HEIGHT +
          MARGIN_BETWEEN_TABS +
          viewport.top()
        );
      }),
      newTop: computed(
        () => store.scrollTop() + TAB_MENU_HEIGHT + MARGIN_BETWEEN_TABS
      ),
    };
  }),
  withComputed((store, viewport = inject(VIEWPORT)) => ({
    viewportTopHeight: computed(() => {
      const newTop = store.newTop();
      const height =
        viewport.height() - newTop + TAB_MENU_HEIGHT + MARGIN_BETWEEN_TABS;
      return { top: newTop, height };
    }),
  })),
  // withLogger('PageContentStore'),
  withHooks({
    onInit(store) {
      effect(() => {
        const state = getState(store);
        // console.log(`[${name}] state changed`, state);
        // console.log('viewportTopHeigh', store.viewportTopHeight());
      });
    },
  })
);
