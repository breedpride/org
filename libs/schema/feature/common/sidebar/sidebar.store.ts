import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
// TODO - use visibility
export type SideBarState = {
  opened: boolean; //sidebar opened or closed
};

export const SideBarStore = signalStore(
  { protectedState: false },
  withState<SideBarState>({
    opened: false,
  }),
  withMethods(store => ({
    closeSidebar(): void {
      patchState(store, { opened: false });
    },
    openSidebar(): void {
      patchState(store, { opened: true });
    },
  }))
);
