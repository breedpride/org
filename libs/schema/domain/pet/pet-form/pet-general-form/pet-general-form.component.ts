import { CommonModule } from '@angular/common';
import {
  Component,
  effect,
  inject,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Pet } from '@bh/entity/config';
import { ENTITY_STORE } from '@bh/entity-store';
import { FilterFieldConfig } from '@bh/superfield';
import { TwoFieldsRowComponent } from '@bp/two-fields-row-ui';
import { FieldsetModule } from 'primeng/fieldset';
import { FormFieldComponent } from '@bh/editing';

@Component({
  imports: [
    CommonModule,
    FieldsetModule,
    FormFieldComponent,
    TwoFieldsRowComponent,
    ReactiveFormsModule,
    FormsModule,
  ],
  selector: 'bp-pet-general-form',
  styles: [
    `
      .hidden {
        display: none;
      }
    `,
  ],
  template: `
    <form [formGroup]="entityForm()">
      <div class="flex flex-col space-y-5">
        <p-fieldset legend="Birth details">
          <div class="mt-3 flex flex-col space-y-10 px-4 pb-2">
            <bp-form-field [config]="fieldsConfig.Name" />
            <bp-two-fields-row>
              <bp-form-field [config]="fieldsConfig.PetType" />
              <bp-form-field [config]="fieldsConfig.Breed" />
            </bp-two-fields-row>
            <bp-two-fields-row>
              <bp-form-field [config]="fieldsConfig.Father" />
              <bp-form-field [config]="fieldsConfig.Mother" />
            </bp-two-fields-row>
            <div class="flex w-full space-x-3">
              <bp-form-field
                class="w-full"
                [config]="fieldsConfig.DateOfBirth"
              />
              <bp-form-field class="w-full" [config]="fieldsConfig.Sex" />
            </div>
          </div>
        </p-fieldset>
        <p-fieldset legend="Origin and Ownership">
          <div class="mt-3 flex flex-col space-y-10 px-4 pb-2">
            <bp-two-fields-row>
              <bp-form-field [config]="fieldsConfig.Breeder" />
              <bp-form-field [config]="fieldsConfig.Owner" />
            </bp-two-fields-row>
            <bp-two-fields-row>
              <bp-form-field [config]="fieldsConfig.Kennel" />
              <bp-form-field [config]="fieldsConfig.OwnerKennel" />
            </bp-two-fields-row>
            <bp-two-fields-row>
              <bp-form-field [config]="fieldsConfig.CountryOfBirth" />
              <bp-form-field [config]="fieldsConfig.CountryOfStay" />
            </bp-two-fields-row>
          </div>
        </p-fieldset>
        <p-fieldset legend="Additional data">
          <div class="mt-3 flex flex-col space-y-10 px-4 pb-2">
            <bp-form-field [config]="fieldsConfig.PetStatus" />
            <bp-form-field [config]="fieldsConfig.DateOfDeath" />
            <bp-two-fields-row>
              <bp-form-field [config]="fieldsConfig.CoatType" />
              <bp-form-field [config]="fieldsConfig.CoatColor" />
            </bp-two-fields-row>
          </div>
        </p-fieldset>
      </div>
    </form>
  `,
})
export class PetGeneralFormComponent {
  // pet = injectEntityTokenFromSpaceConfig<Pet>();
  entityForm = inject(ENTITY_STORE).entityForm;
  fieldsConfig: Record<keyof Pet, FilterFieldConfig> = inject(
    ENTITY_STORE
  ).config().fieldsConfig as any;
  constructor() {
    effect(() => {
      // console.log(this.pet);
      console.log('!!!!!!!!!!!', this.entityForm().filled());
      console.log(this.fieldsConfig);
    });
  }
}
