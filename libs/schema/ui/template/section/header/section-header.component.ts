import { NgClass } from '@angular/common';
import { Component, effect, input } from '@angular/core';
import { ViewChangerComponent } from '@bh/collection-view-change';
import { injectViewsStore } from '@bh/collection-view-change';
import { injectSectionSort ,SelectorComponent } from '@bh/collection-sorting';
// import { getState } from '@ngrx/signals';
// import { SelectorComponent } from '@bh/collection-sorting';
// import { injectSpaceStore } from '../../../../store/store';

@Component({
  selector: 'bh-section-header',

  imports: [
    NgClass,
    ViewChangerComponent,
    SelectorComponent,
    // EntitiesCounterComponent,
  ],
  template: `
    <div
      class="
          mb-5 flex w-full items-center text-2xl font-semibold
          text-sub-header-color bg-header-ground/75 backdrop-blur-sm
        "
      [ngClass]="{
          'mt-5': isFirstSection() === 0,
          'mt-10': isFirstSection() !== 0,
        }"
    >
      <bp-view-changer />
      <bh-sort-selector />
      <!-- <bp-entities-counter
        [entitiesCount]="spaceStore.EntitiesCount()"
        [isLoading]="spaceStore.isLoading()"
        [total]="spaceStore.total()"
      /> -->
      <p>section-header works!</p>
    </div>
  `,
  styles: `
    :host {
      display: block;
      width: 100%;
    }
  `,
})
export class SectionHeaderComponent {
  // TODO - sort, filter counter. actions.
  isFirstSection = input(0);
  viewsStore = injectViewsStore();
  // spaceStore = injectSpaceStore();
  sort = injectSectionSort();
  constructor() {
    console.log('SectionHeaderComponent');
    effect(() => {
      // console.log('SectionHeaderComponent');
      // console.log(this.viewsStore);
      // console.log(getState(this.sort));
      // console.log(this.sort.sortSelectedEntity());
      // console.log(this.sort.sortSelectedIdSource());
      // console.log('One ', this.sort.sortColumns());
    });
  }
}
