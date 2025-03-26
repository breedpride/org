import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  input,
} from '@angular/core';
import { FilterFieldConfig } from '@bh/superfield';
import { FormFieldCode } from '@bh/windmill';
import { HiddenDirective } from '@breedpride/070-core-directive-feature';
import { ConfigToStoreDirective } from './config.directive';
import { InputAutocompleteComponent } from './input-autocomplete/input-autocomplete.component';
import { InputBooleanComponent } from './input-boolean/input-boolean.component';
import { InputDateRangeComponent } from './input-date-range/input-date-range.component';
import { InputDateComponent } from './input-date/input-date.component';
import { InputEditorComponent } from './input-editor/input-editor.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { InputSelectComponent } from './input-select/input-select.component';
import { InputSelectorComponent } from './input-selector/input-selector.component';
import { InputTextAreaComponent } from './input-text-area/input-text-area.component';
import { InputTextComponent } from './input-text/input-text.component';
@Component({
  imports: [
    CommonModule,
    InputAutocompleteComponent,
    InputSelectComponent,
    InputTextComponent,
    InputDateComponent,
    InputNumberComponent,
    InputBooleanComponent,
    InputEditorComponent,
    InputTextAreaComponent,
    InputSelectorComponent,
    InputDateRangeComponent,
  ],
  selector: 'bp-form-field',
  hostDirectives: [
    {
      directive: ConfigToStoreDirective,
      inputs: ['config: config'],
    },
    {
      directive: HiddenDirective,
      inputs: ['config: config'],
    },
  ],
  styles: [],
  template: `
    @defer (when (autocomplete())) {
    <bp-input-autocomplete />
    } @defer (when (dropdown())) {
    <bp-input-select />
    } @defer (when (text())) {
    <bp-input-text />
    } @defer (when (date())) {
    <bp-input-date />
    } @defer (when (number())) {
    <bp-input-number />
    } @defer (when (boolean())) {
    <bp-input-boolean />
    } @defer (when (edit())) {
    <bp-input-editor />
    } @defer (when (textarea())) {
    <bp-input-text-area />
    } @defer (when (daterange())) {
    <bp-input-date-range class="mt-5" />
    } @defer (when (select())) {
    <bp-input-selector>
      <ng-content></ng-content>
    </bp-input-selector>
    }
  `,
})
export class FormFieldComponent {
  public config = input.required<FilterFieldConfig>();

  autocomplete = computed(
    () => this.config()?.component === FormFieldCode.AUTOCOMPLETE
  );
  dropdown = computed(
    () => this.config()?.component === FormFieldCode.DROPDOWN
  );
  text = computed(() => this.config()?.component === FormFieldCode.TEXT);
  date = computed(() => this.config()?.component === FormFieldCode.DATE);
  number = computed(() => this.config()?.component === FormFieldCode.NUMBER);
  boolean = computed(() => this.config()?.component === FormFieldCode.BOOLEAN);
  edit = computed(() => this.config()?.component === FormFieldCode.EDIT);
  textarea = computed(
    () => this.config()?.component === FormFieldCode.TEXTAREA
  );
  select = computed(() => this.config()?.component === FormFieldCode.SELECT);
  daterange = computed(
    () => this.config()?.component === FormFieldCode.DATE_RANGE
  );
  // constructor() {
  //   effect(() => {}, );
  // }
}
