import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ScrollerModule } from 'primeng/scroller';
import { BaseViewComponent } from '../base-scroller-card/base-view.component';
import { EntityListCardComponent } from './entity-list-card.component';
@Component({
  selector: 'bp-list-view',
  imports: [CommonModule, ScrollerModule, EntityListCardComponent],
  template: `
    <p-virtualscroller
      [scrollHeight]="scrollHeight()"
      [items]="entities()"
      [itemSize]="68"
      [loading]="spaceStore.isLoading()"
      [lazy]="true"
      [showLoader]="true"
      (onLazyLoad)="onLazyLoad($event)"
    >
      <ng-template let-entity #item let-options>
        <div style="height: 68px">
          <bp-entity-list-card
            [entity]="entity"
            [mode]="mode()"
            [component]="component()"
            [card]="card()"
          />
        </div>
      </ng-template>
      <ng-template let-row #loader let-options>
        <bp-entity-list-card
          class="flex h-[68px] w-full cursor-pointer items-center border-b border-surface-border p-4 sm:p-7"
          style="height: 68px"
          [entity]="{}"
          [mode]="'skeleton'"
          [card]="card()"
        />
      </ng-template>
    </p-virtualscroller>
  `,
  styles: `
    :host {
      display: block;
    }
  `,

})
export class ListViewComponent extends BaseViewComponent {
  constructor() {
    super();
  }
}
