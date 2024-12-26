import {
  patchState,
  signalStore,
  withMethods,
  withState,
} from '@ngrx/signals';
import { createInjectionToken } from 'ngxtension/create-injection-token';

import { BPDOMRect, defaultBPDOMRect } from './utils';

function viewportFactory() {
  const Viewport = signalStore(
    { protectedState: false },
    withState(defaultBPDOMRect),
    withMethods((store) => ({
      updateFromResizeResult(resizeResult: BPDOMRect) {
        patchState(store, resizeResult);
      },
      patchHeight(height: number) {
        patchState(store, { height });
      }
    }))
  );

  return new Viewport({ height: 10, width: 10 });
}

export const [injectViewport, provideViewport, VIEWPORT] = createInjectionToken(
  viewportFactory,
  { isRoot: false }
);
