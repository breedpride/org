import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormFieldComponent } from '@bh/editing';
import { EmptyFieldConfig } from '@bh/superfield';
import { BaseDetailComponent } from '@bh/collection-view-scroller';
import {
  PETIDENTIFIER_DATE_FIELDS,
  PETIDENTIFIER_ENTITY_COLUMNS,
  PETIDENTIFIER_FIELD_CONFIG,
} from '@bh/entity/config';
import { byAny, publicIdentifiers } from '@bh/filtering';
import { getSpaceConfig } from '@bh/collection-store';

import { FilterFieldConfig } from '@bh/superfield';
import { FormFieldCode } from '@bh/consts';
import { merge } from 'lodash-es';
import { TableModule } from 'primeng/table';

@Component({
  imports: [
    CommonModule,
    BaseDetailComponent,
    TableModule,
    FormFieldComponent,
    ReactiveFormsModule,
  ],

  selector: 'bp-pet-identifiers-form',
  styles: [],
  template: `
    <bp-base-detail [config]="config" [editorTemplate]="editorTemplate" />

    <ng-template #editorTemplate let-form="form">
      <form [formGroup]="form">
        <div
          class="my-2 flex flex-col justify-center  space-y-8 rounded-lg bg-slate-50 p-5"
        >
          <bp-form-field
            class="mt-5"
            [config]="fieldsConfig.PetIdentifierType"
          />
          <!-- <bp-two-fields-row class="mt-5">
            <bp-form-field
              first
              [config]="fieldsConfig.Date" /> -->
          <bp-form-field second [config]="fieldsConfig.Value" />
          <!-- </bp-two-fields-row> -->
        </div>
      </form>
    </ng-template>
  `,
})
export class PetIdentifiersFormComponent {
  fieldsConfig = {
    ...PETIDENTIFIER_FIELD_CONFIG,
    // ...deleteProperties(PETIDENTIFIER_FIELD_CONFIG, OPTIONAL_CLEANUP),
    PetIdentifierType: {
      ...PETIDENTIFIER_FIELD_CONFIG.PetIdentifierType,
      component: FormFieldCode.DROPDOWN,
      filterFn: () => byAny('IsPublic', 'true'),
    },
  };
  config = getSpaceConfig({
    columns: [
      // ...Object.values(PETIDENTIFIER_FIELD_CONFIG),
      // { ...PETIDENTIFIER_FIELD_CONFIG.Date, class: 'hidden md:table-cell' },
      { ...PETIDENTIFIER_FIELD_CONFIG.PetIdentifierType, class: '' },
      { ...PETIDENTIFIER_FIELD_CONFIG.Value, class: '' },
    ],
    dateFields: PETIDENTIFIER_DATE_FIELDS,
    entitiesColumns: [...PETIDENTIFIER_ENTITY_COLUMNS],
    entityColumns: [...PETIDENTIFIER_ENTITY_COLUMNS],
    entitySchemaName: 'PetIdentifier',
    fieldsConfig: this.fieldsConfig,
    filterConfig: [
      merge({}, EmptyFieldConfig, {
        active: () => true,
        displayValue: () => '',
        entitySchemaName: 'null',
        getFilter: () => publicIdentifiers(),
        id: 'publicIdentifiers',
      } as Partial<FilterFieldConfig>),
    ],
    filterKey: 'Pet',
    id: 'PetIdentifier',
    naming: {
      editCompomentHeaderString: 'Identifier',
    },
  });
}
