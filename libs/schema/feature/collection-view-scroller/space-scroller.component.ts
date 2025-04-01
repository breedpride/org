import { CommonModule } from '@angular/common';
import {
  Component,
  input,
} from '@angular/core';
import { CardMode } from '@bh/windmill';
import { GridViewComponent } from './grid/grid-view.component';
import { ListViewComponent } from './list/list-view.component';
import { TableViewComponent } from './table/table-view.component';
import { injectViewsStore } from '@bh/collection-view-change';
@Component({
  imports: [
    CommonModule,
    ListViewComponent,
    GridViewComponent,
    TableViewComponent,
  ],
  selector: 'bp-space-scroller',
  styles: ``,
  template: `
    @let view = currentView(); @if (view) { @if (view.id === 'list') {
    <bp-list-view [scrollHeight]="scrollHeight()" />
    } @if (view.id === 'grid') {
    <bp-grid-view [scrollHeight]="scrollHeight()" />
    } @if (view.id === 'table') {
    <bp-table-view [scrollHeight]="scrollHeight()" />
    } }
  `,
})
export class SpaceScrollerComponent {
  currentView = injectViewsStore().view;
  mode = input<CardMode>('navigate');
  scrollHeight = input<string>('100%');
}
