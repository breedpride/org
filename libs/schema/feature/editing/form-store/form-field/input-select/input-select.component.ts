import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  input,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FilterFieldConfig } from '@bh/superfield';
import { SelectModule } from 'primeng/select';
import { BaseLookupComponent } from '../base-lookup/base-lookup.component';
export const mapToOption = (
  e: { [x: string]: any; Id?: string },
  config: FilterFieldConfig | undefined
) => ({
  label: e[config?.displayField || 'Name'],
  value: e,
});

@Component({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, SelectModule],
  selector: 'bp-input-select',
  styles: [``],
  template: `
    @if (id()) {
    <span class=" p-fluid p-float-label " [formGroup]="mainForm()">
      <p-select
        [inputId]="id()"
        [options]="options()"
        [formControlName]="id()"
        optionLabel="label"
        optionValue="value"
        [filter]="false"
        filterBy="label"
        appendTo="body"
        [showClear]="canClearValue"
        [placeholder]="placeholder()"
        [lazy]="true"
        (onLazyLoad)="store.onLazyLoad($event)"
        (onShow)="search()"
      >
        <!-- <ng-template
          #selectedItem
          let-item>

          <div>{{ item?.label }}</div>
        </ng-template> -->
        <ng-template let-item #item>
          <div>
            <div>{{ item.label }}</div>
          </div>
        </ng-template>
      </p-select>
      <label [for]="id()">
        {{ placeholder() }}
        @if (required()) { * }
      </label>
    </span>
    @if (control().invalid && (control().dirty || control().touched)) {
    <div class="text-md absolute ml-3 mt-[3px] text-red-500">
      @if (control().errors?.['required']) {
      <div>{{ placeholder() }} is required</div>
      }
    </div>
    } }
  `,
})
export class InputSelectComponent extends BaseLookupComponent {
  beforeFirsSearch = true;
  showClear = input<boolean>(true);

  options = computed(() => {
    const storeOptions = this.store.Entities();
    const value = this.control().value;
    if (this.beforeFirsSearch && storeOptions.length === 0 && value) {
      return [mapToOption(value, this.store.config())];
    } else {
      const list = storeOptions.map((e) => mapToOption(e, this.store.config()));
      const index = list.findIndex((e) => e.value?.Id === value?.Id);
      if (~index) {
        list[index] = mapToOption(value, this.store.config());
      }
      return list;
    }
  });

  search(): void {
    this.beforeFirsSearch = false;
    this.changeQuery();
  }
  // TODO - computed
  get canClearValue(): boolean {
    return (
      !this.control()?.hasValidator(Validators.required) &&
      // TODO check
      !this.store.config()?.isRequired
    );
  }
}
