import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  DestroyRef,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { FormFieldCode } from '@bh/windmill';
import { MAIN_FILTER_NAME } from '@bh/filtering';
import { BPNavStore } from '@bh/nav-store';
import { BPFormGroupInterface, FilterFieldConfig } from '@bh/superfield';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FormFieldComponent } from '@bh/editing';
@Component({
  providers: [FormGroupDirective],
  selector: 'bp-filters-selector',
  styles: [],
  template: `
    @let form = filterForm(); @if (form) {
    <ng-container>
      <form [formGroup]="form" (ngSubmit)="applyFilterClick()">
        <div
          class="my-2 flex flex-col justify-center  rounded-lg bg-modal-card-ground p-5"
        >
          <div class="grid gap-3 sm:grid-cols-2 ">
            @if ( filterForm() && mainFilterField() &&
            !mainFilterField().invisible ) {
            <span class="p-float-label p-fluid mt-5">
              <p-dropdown
                [formControlName]="mainFilterField().id"
                [options]="mainFilters()"
                optionLabel="optionLabel"
                [id]="mainFilterField().id"
              >
                <ng-template let-option #item>
                  <div>{{ getLabel(option) }}</div>
                </ng-template>
              </p-dropdown>
              <label for="{{ mainFilterField().id }}">
                {{ mainFilterField().placeholder }}
              </label>
            </span>
            } @for (filter of filters(); track filter) {
            <bp-form-field class="mt-5" [config]="filter" />
            }
          </div>
        </div>
        <div class="mt-10 grid grid-cols-2 gap-3">
          <button
            (click)="cancel()"
            pButton
            type="reset"
            label="Cancel"
            class="p-button-text p-button-secondary  bg-secondary-100 hover:bg-secondary-200 focus:bg-secondary-300
              dark:text-zinc-900 dark:bg-surface-400 dark:hover:bg-surface-300 dark:focus:bg-surface-300"
          ></button>
          <!-- [disabled]="!entityForm.touched || entityForm.invalid" -->
          <button
            pButton
            pRipple
            type="submit"
            label="Apply filters"
            class="p-button-text  bg-primary-50 dark:text-zinc-900 dark:bg-primary-300"
            [ngClass]="{
                'hover:bg-primary-100 focus:bg-primary-200 dark:hover:bg-primary-300 dark:focus:bg-primary-200':
                  form.touched && !form.invalid,
              }"
          ></button>
        </div>
      </form>
    </ng-container>
    }
  `,
  imports: [
    CommonModule,
    DropdownModule,
    ButtonModule,
    ReactiveFormsModule,
    FormFieldComponent,
  ],
})
export class FiltersSelectorComponent {
  mainFilters = computed(() =>
    this.mainFilterField()?.filterConfig?.map((e: FilterFieldConfig) => ({
      ...e,
      optionLabel: this.getLabel(e),
    }))
  );
  destroyRef = inject(DestroyRef);
  filterStore = signal<any | null>(null);

  filterForm = signal<BPFormGroupInterface | null>(null);
  filters = computed(() =>
    this.filterStore()
      ?.filterEntities()
      .filter(
        (e: FilterFieldConfig) => e.component !== FormFieldCode.SearchName
      )
  );
  mainFilterField = computed(() =>
    this.filters()?.find((f: FilterFieldConfig) => f.id === MAIN_FILTER_NAME)
  );
  navStore = inject(BPNavStore);

  constructor(
    public config: DynamicDialogConfig,
    public ref: DynamicDialogRef
  ) {
    this.ref.onClose
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((e) => {
        if (!e) {
          this.filterStore()?.prepareFormWithoutSignal();
          this.prepareView();
        }
      });
    if (this.config.data) {
      this.filterForm.set(this.config.data.filterForm);
      this.filterStore.set(this.config.data.filterStore);
    } else {
      console.error('No config.data provided');
    }
  }
  applyFilterClick(): void {
    if (!this.filterForm()?.invalid) {
      const filterFields = this.filterStore()?.applyFilter();
      // console.log('filterFields', filterFields);
      this.navStore.changePublicStoreFilters(filterFields);
      this.ref.close('newUrl');
    } else {
      this.filterForm()?.markAllAsTouched();
    }
  }
  cancel(): void {
    this.ref.close();
  }

  getLabel(option: FilterFieldConfig): string {
    return option.displayValue
      ? option.displayValue({ form: this.filterForm() })
      : '';
  }

  isFilterDateRange(filter: FilterFieldConfig): boolean {
    return filter.component === FormFieldCode.DATE_RANGE;
  }
  isFilterLookup(filter: FilterFieldConfig): boolean {
    return filter.component === FormFieldCode.AUTOCOMPLETE;
  }

  private prepareView(): void {
    this.filterForm()?.markAsUntouched();
    this.filterForm()?.markRequiredEmptyAsTouched();
  }
}
