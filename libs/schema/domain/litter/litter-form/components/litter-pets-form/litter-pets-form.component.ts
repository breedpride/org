import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormFieldComponent } from '@bh/editing';
import { BaseDetailComponent } from '@bh/collection-view-scroller';
import {
  PET_DATE_FIELDS,
  PET_ENTITY_COLUMNS,
  PET_FIELD_CONFIG,
} from '@bh/entity/config';
import { getSpaceConfig } from '@bh/collection-store';

import { TwoFieldsRowComponent } from '@bp/two-fields-row-ui';
import { FilterFieldConfig } from '@bh/superfield';
@Component({
  imports: [
    CommonModule,
    BaseDetailComponent,
    FormFieldComponent,
    ReactiveFormsModule,
    TwoFieldsRowComponent,
  ],

  selector: 'bp-litter-pets-form',
  styles: [],
  template: `
    <bp-base-detail [config]="config" [editorTemplate]="editorTemplate" />

    <ng-template #editorTemplate let-form="form">
      <form [formGroup]="form">
        <div
          class="my-2 flex flex-col justify-center  space-y-8 rounded-lg bg-slate-50 p-5"
        >
          <bp-form-field class="mt-5" [config]="fieldsConfig.Name" />
          <bp-form-field [config]="fieldsConfig.Breed" />
          <bp-two-fields-row class="mt-5">
            <bp-form-field [config]="fieldsConfig.PetStatus" />
            <bp-form-field [config]="fieldsConfig.Sex" />
          </bp-two-fields-row>

          <bp-two-fields-row class="mt-5">
            <bp-form-field [config]="fieldsConfig.CoatType" />
            <bp-form-field [config]="fieldsConfig.CoatColor" />
          </bp-two-fields-row>
        </div>
      </form>
    </ng-template>
  `,
})
export class LitterPetsFormComponent {
  // CountryOfBirth.Id
  fieldsConfig: Record<keyof typeof PET_FIELD_CONFIG, FilterFieldConfig> = {
    ...PET_FIELD_CONFIG,
    // ...deleteProperties(PET_FIELD_CONFIG, OPTIONAL_CLEANUP),
    DateOfBirth: {
      ...PET_FIELD_CONFIG.DateOfBirth,
    },
    Father: {
      ...PET_FIELD_CONFIG.Father,
      // initFn: (form: BPFormGroup, {}) => {
      //   form.get('Father').disable();
      //   console.log('DISABLEEEED');
      // },
      initFn: (form) => {
        form?.get('Father')?.disable();
        // console.log('DISABLEEEED FATHER');
        // form.disableWhenNotFilledLookup('HealthExamObject', 'HealthExamResult');
      },
    },
    Mother: {
      ...PET_FIELD_CONFIG.Mother,
      initFn: (form) => {
        form?.get('Mother')?.disable();
      },
    },
    Name: {
      ...PET_FIELD_CONFIG.Name,
    },
  };
  config = getSpaceConfig({
    columns: [
      // ...Object.values(PETHEALTHEXAMRESULT_FIELD_CONFIG),
      { ...PET_FIELD_CONFIG.Name, class: '' },
      { ...PET_FIELD_CONFIG.Sex, class: '' },
      { ...PET_FIELD_CONFIG.CoatColor, class: '' },
    ],
    dateFields: PET_DATE_FIELDS,
    defaultEntityData: {
      Breed: (entity) => entity['Father']?.Breed || null,
      Breeder: (entity) => entity['Breeder'] || null,
      CountryOfBirth: (entity) => {
        return entity['Kennel']?.Country || null;
      },
      DateOfBirth: (entity) =>
        entity['DateOfBirth'] ? new Date(entity['DateOfBirth']) : new Date(),
      Father: (entity) => entity['Father'] || null,
      Kennel: (entity) => entity['Kennel'] || null,
      Mother: (entity) => entity['Mother'] || null,
      PetStatus: () => ({
        Id: '3048e1ef-7f68-4193-bc12-0006dc6c7eb3',
        Name: 'Hopeful',
      }),
      PetType: (entity) => entity['PetType'] || null,
    },
    entitiesColumns: ['Id', 'Name', 'Sex.Name', 'CoatColor.Name'],
    entityColumns: [...PET_ENTITY_COLUMNS],
    entitySchemaName: 'Pet',
    fieldsConfig: this.fieldsConfig,
    filterConfig: [],
    filterKey: 'Litter',
    id: 'LitterPets',
    naming: {
      editCompomentHeaderString: 'Child',
    },
  });
}
