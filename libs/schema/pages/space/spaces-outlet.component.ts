import { CommonModule } from '@angular/common';
import { Component, effect } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { injectParams } from 'ngxtension/inject-params';

export const spaceIds = ['pets', 'breeds'];

@Component({
  selector: 'bp-space-outlet',
  imports: [CommonModule, RouterOutlet, RouterModule],
  providers: [],
  template: `
    <!-- @for (tab of tabStore.tabs(); track tab.fragment + model; let i = $index) { -->
    <!-- <router-outlet [name]="detailNames[i]"></router-outlet> -->
    <router-outlet></router-outlet>
    <router-outlet name="pets2"></router-outlet>
    <!-- } -->
  `,
  styles: `
    :host {
      display: block;
    }
  `,

})
export class SpacesOutletComponent {
  // ss = injectSortColumnsStore();

  // sortStore = inject;
  // def = inject(SORT_COLUMNS);
  params = injectParams();
  constructor() {
    console.log('Params', this.params());
    effect(() => {
      // console.log('SORTTOKEN-3', getState(this.ss));
      // console.log('SORTTOKEN-3', this.ss.sortColumns());
      // console.log('SORTTOKEN-2', this.def());
      // console.log('Params', this.params());
    });
  }
}
