import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  effect,
  inject,
  input,
  Signal,
  signal,
} from '@angular/core';

import { SideBarStore } from '@bh/store-feature';
import { WithCreatioId } from '@bh/superfield';
import { CardMode,  } from '@bh/types';
import { PageStore } from '@bh/page-store';
import { ScrollerLazyLoadEvent } from 'primeng/scroller';
import { injectSpaceStore } from '@bh/collection-store';
import { injectViewsStore } from '@bh/collection-view-change';
@Component({
  selector: 'bp-base-view',
  imports: [CommonModule],
  template: ``,
  styles: `
    :host {
      display: block;
    }
  `,

})
export class BaseViewComponent {
  sideBarStore = inject(SideBarStore);

  view = injectViewsStore().view;
  card = computed(() => this.view()?.card || 0);
  spaceStore = injectSpaceStore();
  entities: Signal<WithCreatioId[] | WithCreatioId[][]> =
    this.spaceStore.Entities;
  scrollHeight = input<string>('100%');
  mode = input<CardMode>('navigate');
  component = signal<unknown>(null);
  onLazyLoad($event: ScrollerLazyLoadEvent): void {
    this.spaceStore.loadNextPage($event.last);
  }
  pageStore = inject(PageStore);
  constructor() {
    effect(
      () => {
        const view = this.view();
        if (view && view.loadComponent) {
          view.loadComponent().then((t: unknown) => {
            this.component.set(t);
          });
        }
        const selected = this.pageStore.SelectedId;
        if (view?.viewStrategy === 'sidebar' && selected()) {
          this.sideBarStore.openSidebar();
        } else {
          this.sideBarStore.closeSidebar();
        }
      },

    );
  }
}
