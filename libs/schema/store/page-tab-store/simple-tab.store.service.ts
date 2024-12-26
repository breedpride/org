import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { Tab } from './tab-store-state-va2';
import { MenuItem } from 'primeng/api';
export type TabStoreState = {
  fragment: string;
  tabs: Tab[] | MenuItemX[];
};

export type MenuItemX = MenuItem & {
  component?: any;
};

const initialState: TabStoreState = {
  fragment: '',
  tabs: [],
};
export const TabStore = signalStore(
  { protectedState: false },
  withState(initialState),
  withState<{ activeTab: MenuItem | null }>({ activeTab: null }),
  withMethods((store) => ({
    patchTabs(tabs: MenuItemX[] | Tab[]): void {
      patchState(store, { tabs });
    }

  }))
);
