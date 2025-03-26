import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormFieldComponent } from '@bh/editing';
import { BaseDetailComponent } from '@bh/collection-view-scroller';
import {
  PETSERVICEINLITTER_DATE_FIELDS,
  PETSERVICEINLITTER_ENTITY_COLUMNS,
  PETSERVICEINLITTER_FIELD_CONFIG,
} from '@bh/entity/config';
import { getSpaceConfig } from '@bh/collection-store';

import { TwoFieldsRowComponent } from '@bp/two-fields-row-ui';
import { FormFieldCode } from '@bh/windmill';
import { FilterFieldConfig } from '@bh/superfield';
@Component({
  imports: [
    CommonModule,
    BaseDetailComponent,
    TwoFieldsRowComponent,
    FormFieldComponent,
    ReactiveFormsModule,
  ],

  selector: 'bp-litter-offers-form',
  styles: [],
  template: `
    <bp-base-detail [config]="config" [editorTemplate]="editorTemplate" />

    <ng-template #editorTemplate let-form="form">
      <form [formGroup]="form">
        <div
          class="my-2 flex flex-col justify-center  space-y-8 rounded-lg bg-slate-50 p-5"
        >
          <bp-two-fields-row class="mt-5">
            <bp-form-field [config]="fieldsConfig.ServiceType" />
            <bp-form-field [config]="fieldsConfig.PetServiceStatus" />
          </bp-two-fields-row>
          <bp-two-fields-row class="mt-5">
            <bp-form-field [config]="fieldsConfig.Price" />
            <bp-form-field [config]="fieldsConfig.Currency" />
          </bp-two-fields-row>
        </div>
      </form>
    </ng-template>
  `,
})
export class LitterOffersFormComponent {
  fieldsConfig: Record<
    keyof typeof PETSERVICEINLITTER_FIELD_CONFIG,
    FilterFieldConfig
  > = {
      ...PETSERVICEINLITTER_FIELD_CONFIG,
      Currency: {
        ...PETSERVICEINLITTER_FIELD_CONFIG.Currency,
        component: FormFieldCode.DROPDOWN,
      },
      PetServiceStatus: {
        ...PETSERVICEINLITTER_FIELD_CONFIG.PetServiceStatus,
        component: FormFieldCode.DROPDOWN,
      },
      // ...deleteProperties(PETSERVICE_FIELD_CONFIG, OPTIONAL_CLEANUP),
      ServiceType: {
        ...PETSERVICEINLITTER_FIELD_CONFIG.ServiceType,
        component: FormFieldCode.DROPDOWN,
      },
    };
  config = getSpaceConfig({
    columns: [
      // ...Object.values(PETSERVICE_FIELD_CONFIG),
      // { ...PETSERVICE_FIELD_CONFIG.Date, class: 'hidden md:table-cell' },
      { ...PETSERVICEINLITTER_FIELD_CONFIG.ServiceType, class: '' },
      { ...PETSERVICEINLITTER_FIELD_CONFIG.PetServiceStatus, class: '' },
      {
        ...PETSERVICEINLITTER_FIELD_CONFIG.Price,
        class: 'hidden md:table-cell',
      },
      {
        ...PETSERVICEINLITTER_FIELD_CONFIG.Currency,
        class: 'hidden md:table-cell',
      },
    ],
    dateFields: PETSERVICEINLITTER_DATE_FIELDS,
    entitiesColumns: [...PETSERVICEINLITTER_ENTITY_COLUMNS],
    entityColumns: [...PETSERVICEINLITTER_ENTITY_COLUMNS],
    entitySchemaName: 'PetServiceInLitter',
    fieldsConfig: this.fieldsConfig,
    filterKey: 'Litter',
    id: 'PetServiceInLitter',
    naming: {
      editCompomentHeaderString: 'Service',
    },
  });
}
