import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { injectSectionSort } from '../sort.store';
import { FilterButtonDirective } from '@breedpride/070-core-directive-feature';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { SplitButtonModule } from 'primeng/splitbutton';
@Component({
  imports: [
    CommonModule,
    SplitButtonModule,
    ButtonModule,
    FilterButtonDirective,
    MenuModule,
  ],
  providers: [],
  selector: 'bh-sort-selector',
  styles: [``],
  template: `
    <p-menu
      #selectSort
      [model]="items()"
      [popup]="true"
      appendTo="body"
    ></p-menu>
    <button
      pButton
      pRipple
      bpButtonClass
      [active]="true"
      [label]="item()?.name || 'Select a column'"
      (click)="selectSort.toggle($event)"
      [icon]="item()?.icon || ''"
      pTooltip="Sort order"
      tooltipPosition="bottom"
      class="left-button h-[2.6rem] rounded-l-full"
    ></button>
  `,
})
export class SelectorComponent {
  sortStore = injectSectionSort();
  items = this.sortStore.items;
  item = this.sortStore.sort;
}
