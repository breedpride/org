export type TabStoreStateV2 = {
  tabs: Tab[];
};
import { Signal } from '@angular/core';

export type Tab = {
  fragment: string;
  label: string;
  icon: string;
  tabIndex: number;
  id: string;
  url: string;
  top: number;
  hiddenFn: () => Signal<boolean>;
};
