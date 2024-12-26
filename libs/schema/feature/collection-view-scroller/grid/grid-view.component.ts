import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  inject,
} from '@angular/core';
import { MediaStore } from '@bp/media-store';
import { chunkArray } from '@breedpride/api';
import { Scroller, ScrollerLazyLoadEvent } from 'primeng/scroller';
import { BaseViewComponent } from '../base-scroller-card/base-view.component';
import { EntityGridCardComponent } from './entity-grid-card.component';

@Component({
  selector: 'bp-grid-view',
  imports: [CommonModule, Scroller, EntityGridCardComponent],
  template: `
    <p-virtualscroller
      [scrollHeight]="scrollHeight()"
      [items]="entities()"
      [itemSize]="view()?.height || 34"
      [loading]="spaceStore.isLoading()"
      [lazy]="true"
      [showLoader]="true"
      (onLazyLoad)="onLazyLoad($event)"
    >
      <ng-template let-row #item let-options>
        <div
          [class]="gridStyleClass()"
          [ngClass]="{ 'surface-ground': row.odd }"
          styleClass="h-[280px] "
          class="px-5 pt-3"
        >
          @if (component()) { @for (entity of row; track entity.Id) {
          <bp-entity-grid-card
            [mode]="mode()"
            [component]="component()"
            [entity]="entity"
            [card]="view()?.card || 0"
          />
          } } @else { @for (entity of row; track entity.Id) {
          <bp-entity-grid-card
            [mode]="mode()"
            [entity]="entity"
            [card]="view()?.card || 0"
          />
          } }
        </div>
      </ng-template>
      <ng-template let-row #loader let-options>
        <div
          [class]="gridStyleClass()"
          style="height: 280px; width: 100%"
          class="px-5 py-3"
        >
          @let numSequenceN = numSequence(); @for (n of numSequenceN; track
          $index) {
          <bp-entity-grid-card
            [mode]="'skeleton'"
            [entity]="{}"
            [card]="view()?.card || 0"
          />
          }
        </div>
      </ng-template>
    </p-virtualscroller>
  `,
  styles: `
    :host {
      display: block;
    }
  `,

})
export class GridViewComponent extends BaseViewComponent {
  media = inject(MediaStore);
  columnsPerRow = computed(() =>
    this.media.moreThanXL()
      ? 4
      : this.media.moreThanMD()
        ? 3
        : this.media.moreThanSM()
          ? 2
          : 1
  );
  chankedArray = computed(() =>
    chunkArray({ array: this.spaceStore.Entities(), n: this.columnsPerRow() })
  );
  override entities = this.chankedArray;
  gridStyleClass = computed(() => `grid grid-cols-${this.columnsPerRow()} `);

  numSequence = computed(() => Array(this.columnsPerRow()));
  override onLazyLoad($event: ScrollerLazyLoadEvent): void {
    const columnsPerRow = this.columnsPerRow();
    const last = $event.last * columnsPerRow;
    this.spaceStore.loadNextPage(last);
  }
  constructor() {
    super();
  }
}
