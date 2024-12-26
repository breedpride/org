import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  inject,
} from '@angular/core';
import { BPNavStore } from '@bh/nav-store';
import type { EntitiesView } from '@bh/superfield';
import { ButtonModule } from 'primeng/button';
import { ButtonGroupModule } from 'primeng/buttongroup';
import { TooltipModule } from 'primeng/tooltip';
import { injectViewsStore } from '../view.token';

@Component({
  imports: [CommonModule, ButtonModule, TooltipModule, ButtonGroupModule],
  selector: 'bp-view-changer',
  styles: ``,
  template: `
    @if (viewsStore) {
    <p-buttongroup>
      @for (view of views(); track $index) {
      <button
        pButton
        pRipple
        [pTooltip]="view.toolTip"
        tooltipPosition="bottom"
        class="p-button-secondary size-[2.6rem]"
        [ngClass]="{
              'p-button-outlined ': isNotActive(view),
              'rounded-none  border-l-1 border-r-[0.25px]': !isFirst(view) && !isLast(view),
              'rounded-r-none border-r-[0.5px]': isFirst(view) && !isLast(view),
              'rounded-l-none border-l-[0.5px]': isLast(view) && !isFirst(view),
            }"
        [icon]="view.icon"
        (click)="changeViewId(view.id)"
      ></button>
      }
    </p-buttongroup>
    }
  `,
})
export class ViewChangerComponent {
  viewsStore = injectViewsStore({ optional: true });
  navStore = inject(BPNavStore);
  views = computed(() =>
    this.viewsStore ? this.viewsStore.viewEntities() : []
  );
  isNotActive(view: EntitiesView): boolean {
    return this.viewsStore ? this.viewsStore.view()?.id !== view.id : false;
  }
  activeView = this.viewsStore?.view;

  isFirst(view: EntitiesView): boolean {
    return this.views().indexOf(view) === 0;
  }
  isLast(view: EntitiesView): boolean {
    return this.views()?.indexOf(view) === this.views().length - 1;
  }

  changeViewId(id: string): void {
    this.navStore.changePublicStoreView(id);
  }
}
