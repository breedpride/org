import { computed } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { addEntity, removeEntity, withEntities } from '@ngrx/signals/entities';

export type LoadingStatus = {
  auto: boolean;
  mode: 'determinate' | 'indeterminate';
  progress: number;
};
type LoadedUrl = {
  id: string;
};

export const LoadingStoreV2 = signalStore(
  { providedIn: 'root',
    protectedState: false
  },
  withState<LoadingStatus>({
    auto: true,
    mode: 'indeterminate',
    progress: 0,
  }),
  withEntities<LoadedUrl>(),
  withComputed((store) => ({
    show: computed(() => store.ids().length > 0),
  })),
  withMethods((store) => ({
    setLoadingStatus(status: boolean, url: string): void {
      if (status) {
        patchState(store, addEntity({ id: url }));
      } else {
        patchState(store, removeEntity(url));
      }
    },
  }))
);
