import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { BPFormGroupInterface, FilterFieldConfig } from '@bh/superfield';
import { BPNavStore } from '@bh/nav-store';
import { ChipModule } from 'primeng/chip';
import { DialogService } from 'primeng/dynamicdialog';
import { SortFilterSelectorComponent } from './sort-column-selector.component';
import { injectFiltersStore } from '@bh/collection-filtration';
@Component({
  imports: [CommonModule, ChipModule, SortFilterSelectorComponent],
  providers: [DialogService],
  selector: 'bp-filters',
  styles: [],
  template: `
    <div class="mt-4 flex flex-wrap items-center gap-2">
      <bp-sort-filter-selector class="mr-3" />

      @for (filter of inHeaderDisplayedFilterFields(); track filter.id) {
      <p-chip
        styleClass=""
        [label]="filter?.displayValue({ form: filterForm() })"
        [removable]="!filter.isRequired"
        (onRemove)="onFilterRemove(filter)"
      >
      </p-chip>
      }
    </div>
  `,
})
export class ExpandedFiltersV2Component {
  navStore = inject(BPNavStore);
  filterStore = injectFiltersStore();
  filterForm = input.required<BPFormGroupInterface>();
  inHeaderDisplayedFilterFields = computed(() => {
    const formReady = this.filterForm().filterReady();
    return this.filterForm() && formReady
      ? this.filterStore
        .getActiveFilters()
        .filter((f) => !!f.hidden && !f.hidden(this.filterForm()))
      : [];
  });

  onFilterRemove(filter: FilterFieldConfig): void {
    this.filterForm().get(filter.id)?.setValue(null);
    const filterFields = this.filterStore.applyFilter();
    this.navStore.changePublicStoreFilters(filterFields);
  }
}
