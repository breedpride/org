import { CommonModule } from '@angular/common';
import {
  Component,
  inject,
  input,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormFieldComponent } from '@bh/editing';
import { LITTER_FIELD_CONFIG } from '@bh/entity/config';
import { ENTITY_STORE } from '@bh/entity-store';
import { TwoFieldsRowComponent } from '@bp/two-fields-row-ui';
import { FieldsetModule } from 'primeng/fieldset';
import { FilterFieldConfig } from '@bh/superfield';

@Component({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FieldsetModule,
    FormFieldComponent,
    TwoFieldsRowComponent,
  ],
  selector: 'bp-litter-info-form',
  styles: [],
  template: ` <form [formGroup]="entityForm">
    <div class="flex flex-col space-y-5">
      <p-fieldset legend="Birth details">
        <div class="mt-3 flex flex-col space-y-10 px-4 pb-2">
          <bp-form-field [config]="fieldsConfig().Name" />
          <div
            class="flex w-full flex-col space-y-8 sm:flex-row sm:space-x-3 sm:space-y-0"
          >
            <div class="w-full">
              <bp-form-field [config]="fieldsConfig().Status" />
            </div>
            <div class="flex w-full items-center space-x-3">
              <span class="text-secondary text-base">Is public</span>
              <bp-form-field [config]="fieldsConfig().IsPublic" />
            </div>
          </div>
          <div
            class="flex w-full flex-col space-y-8 sm:flex-row sm:space-x-3 sm:space-y-0"
          >
            <div class="w-full">
              <bp-form-field [config]="fieldsConfig().DateOfBirth" />
            </div>
            <div class="w-full">
              <bp-form-field [config]="fieldsConfig().Letter" />
            </div>
          </div>
          <div
            class="flex w-full flex-col space-y-8"
            [ngClass]="{
              'lg:flex-row lg:space-x-3 lg:space-y-0': true,
            }"
          >
            <div class="w-full">
              <bp-form-field [config]="fieldsConfig().Father" />
            </div>
            <div class="w-full">
              <bp-form-field [config]="fieldsConfig().Mother" />
            </div>
          </div>
        </div>
      </p-fieldset>
      <p-fieldset legend="Origin and Ownership">
        <div class="mt-3 flex flex-col space-y-10 px-4 pb-2">
          <bp-two-fields-row>
            <bp-form-field [config]="fieldsConfig().Breeder" />
            <bp-form-field [config]="fieldsConfig().Kennel" />
          </bp-two-fields-row>
        </div>
      </p-fieldset>
    </div>
  </form>`,
})
export class LitterInfoFormComponent {
  entityForm = inject(ENTITY_STORE).entityForm();
  fieldsConfig =
    input.required<
      Record<keyof typeof LITTER_FIELD_CONFIG, FilterFieldConfig>
    >();
}
