import { effect } from '@angular/core';
import {
  signalStoreFeature,
  withHooks,
  withState,
} from '@ngrx/signals';
import { injectService } from '../super-store/super-store';


export function withTreeFeature() {
  return signalStoreFeature(
    withState(() => {
      const tree = injectService();
      return { ide: 'test' };
    }),

    // withState()
    withHooks(store => {
      return {
        onInit: () => {
          effect(() => {
            // console.log(getState(store));
          });
        },
      };
    })
  );
}
