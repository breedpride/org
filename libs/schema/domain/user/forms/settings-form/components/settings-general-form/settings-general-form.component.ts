import { CommonModule } from '@angular/common';
import {
  Component,
  inject,
  input,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormFieldComponent } from '@bh/editing';
import { CONTACT_FIELD_CONFIG } from '@bh/entity/config';
import { ENTITY_STORE } from '@bh/entity-store';
import { FilterFieldConfig } from '@bh/superfield';
import { TwoFieldsRowComponent } from '@bp/two-fields-row-ui';
import { FieldsetModule } from 'primeng/fieldset';
@Component({
  imports: [
    CommonModule,
    FieldsetModule,
    FormFieldComponent,
    TwoFieldsRowComponent,
    ReactiveFormsModule,
    FormsModule,
  ],
  selector: 'bp-settings-general-form',
  styles: [],
  template: `
    <form [formGroup]="entityForm">
      <div class="flex flex-col space-y-5">
        <p-fieldset legend="Birth details">
          <div class="mt-3 flex flex-col space-y-10 px-4 pb-2">
            <bp-form-field [config]="fieldsConfig().Name" />
            <bp-two-fields-row class="mt-5">
              <bp-form-field [config]="fieldsConfig().GivenName" />
              <bp-form-field [config]="fieldsConfig().Surname" />
            </bp-two-fields-row>
            <bp-two-fields-row class="mt-5">
              <bp-form-field [config]="fieldsConfig().BirthDate" />
              <bp-form-field [config]="fieldsConfig().Gender" />
            </bp-two-fields-row>
            <bp-form-field [config]="fieldsConfig().Language" />
            <bp-form-field [config]="fieldsConfig().Email" />
          </div>
        </p-fieldset>
        <p-fieldset legend="Origin and Ownership"> </p-fieldset>
        <p-fieldset legend="Additional data"> </p-fieldset>
      </div>
    </form>
  `,
})
export class SettingsGeneralFormComponent {
  entityForm = inject(ENTITY_STORE).entityForm();
  fieldsConfig =
    input.required<
      Record<keyof typeof CONTACT_FIELD_CONFIG, FilterFieldConfig>
    >();
}
