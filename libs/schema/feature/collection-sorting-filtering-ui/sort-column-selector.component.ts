import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SelectorComponent } from '@bh/collection-sorting';
import { MediaStore } from '@bp/media-store';
import { FilterButtonDirective } from '@breedpride/070-core-directive-feature';
import { ButtonModule } from 'primeng/button';
import { ButtonGroupModule } from 'primeng/buttongroup';
import { DialogService } from 'primeng/dynamicdialog';
import { MenuModule } from 'primeng/menu';
import { SplitButtonModule } from 'primeng/splitbutton';
import { FiltersSelectorComponent, injectFilterFormGroup, injectFiltersStore } from '@bh/collection-filtration';

@Component({
  imports: [
    CommonModule,
    SplitButtonModule,
    ButtonModule,
    FilterButtonDirective,
    MenuModule,
    SelectorComponent,
    ButtonGroupModule,
  ],
  providers: [DialogService],
  selector: 'bp-sort-filter-selector',
  styles: [
    `
      :host ::ng-deep .p-buttongroup {
        display: block;
      }
    `,
  ],
  template: `
    <p-buttongroup>
      <bh-sort-selector></bh-sort-selector>
      <button
        pButton
        pRipple
        bpButtonClass
        [active]="true"
        icon="pi pi-filter"
        (click)="show()"
        pTooltip="Filters"
        tooltipPosition="bottom"
        class="size-[2.6rem] rounded-r-full"
      ></button>
    </p-buttongroup>
  `,
})
export class SortFilterSelectorComponent {
  private media = inject(MediaStore);

  dialogService = inject(DialogService);

  filterForm = injectFilterFormGroup();
  filterStore = injectFiltersStore();

  show(): void {
    this.dialogService.open(FiltersSelectorComponent, {
      data: {
        filterStore: this.filterStore,
        filterForm: this.filterForm,
      },
      header: 'Select a filter',
      height: this.media.defaultModalWindowHeight(),
      styleClass: 'max-h-[100%]',
      width: this.media.lessThanXL()
        ? this.media.lessThanMD()
          ? '100%'
          : '70%'
        : '60%',
    });
  }
}
