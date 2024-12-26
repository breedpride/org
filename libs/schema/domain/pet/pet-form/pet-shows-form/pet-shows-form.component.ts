import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormFieldComponent } from '@bh/editing';
import { BaseDetailComponent } from '@bh/collection-view-scroller';
import {
  PETINPROJECT_DATE_FIELDS,
  PETINPROJECT_ENTITY_COLUMNS,
  PETINPROJECT_FIELD_CONFIG,
} from '@bh/entity/config';
import { getSpaceConfig } from '@bh/collection-store';

import { FilterFieldConfig } from '@bh/superfield';
import { TwoFieldsRowComponent } from '@bp/two-fields-row-ui';
import { deleteProperties } from '@breedpride/api';
import { TableModule } from 'primeng/table';
import { OPTIONAL_CLEANUP } from '@bh/entity/consts';

@Component({
  imports: [
    CommonModule,
    BaseDetailComponent,
    TableModule,
    TwoFieldsRowComponent,
    FormFieldComponent,
    ReactiveFormsModule,
  ],

  selector: 'bp-pet-shows-form',
  styles: [],
  template: `
    <bp-base-detail [config]="config" [editorTemplate]="editorTemplate" />

    <ng-template #editorTemplate let-form="form">
      <form [formGroup]="form">
        <div
          class="my-2 flex flex-col justify-center  space-y-8 rounded-lg bg-slate-50 p-5"
        >
          <bp-two-fields-row class="mt-5">
            <bp-form-field [config]="fieldsConfig.Date" />
            <bp-form-field [config]="fieldsConfig.Project" />
          </bp-two-fields-row>
          <bp-two-fields-row class="mt-5">
            <bp-form-field [config]="fieldsConfig.Result" />
            <bp-form-field [config]="fieldsConfig.Judge" />
          </bp-two-fields-row>
        </div>
      </form>
    </ng-template>
  `,
})
export class PetShowsFormComponent {
  fieldsConfig: Record<
    keyof typeof PETINPROJECT_FIELD_CONFIG,
    FilterFieldConfig
  > = {
      ...deleteProperties(PETINPROJECT_FIELD_CONFIG, OPTIONAL_CLEANUP),
      Project: { ...PETINPROJECT_FIELD_CONFIG.Project, placeholder: 'Event' },
    // ...TITLEINPET_FIELD_CONFIG,
    // Country: TITLEINPET_FIELD_CONFIG.Country,
    // Title: TITLEINPET_FIELD_CONFIG.Title,
    };

  config = getSpaceConfig({
    columns: [
      // ...Object.values(PETINPROJECT_FIELD_CONFIG),
      { ...PETINPROJECT_FIELD_CONFIG.Date, class: '' },
      { ...PETINPROJECT_FIELD_CONFIG.Project, class: '', placeholder: 'Event' },
      { ...PETINPROJECT_FIELD_CONFIG.Result, class: '' },
      { ...PETINPROJECT_FIELD_CONFIG.Judge, class: '' },
      { ...PETINPROJECT_FIELD_CONFIG.WebLink, class: '' },
    ],
    dateFields: PETINPROJECT_DATE_FIELDS,
    entitiesColumns: [...PETINPROJECT_ENTITY_COLUMNS],
    entityColumns: [...PETINPROJECT_ENTITY_COLUMNS],
    entitySchemaName: 'PetInProject',
    fieldsConfig: this.fieldsConfig,
    filterKey: 'Pet',
    id: 'PetInProject',
    naming: {
      editCompomentHeaderString: 'Show result',
    },
  });
}
