import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormFieldComponent } from '@bh/editing';
import { BaseDetailComponent } from '@bh/collection-view-scroller';
import {
  PETSERVICE_DATE_FIELDS,
  PETSERVICE_ENTITY_COLUMNS,
  PETSERVICE_FIELD_CONFIG,
} from '@bh/entity/config';
import { getSpaceConfig } from '@bh/collection-store';

import { FilterFieldConfig } from '@bh/superfield';
import { TwoFieldsRowComponent } from '@bp/two-fields-row-ui';
import { FormFieldCode } from '@bh/consts';
@Component({
  imports: [
    CommonModule,
    BaseDetailComponent,
    TwoFieldsRowComponent,
    FormFieldComponent,
    ReactiveFormsModule,
  ],

  selector: 'bp-pet-services-form',
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
export class PetServicesFormComponent {
  fieldsConfig: Record<
    keyof typeof PETSERVICE_FIELD_CONFIG,
    FilterFieldConfig
  > = {
      ...PETSERVICE_FIELD_CONFIG,
      Currency: {
        ...PETSERVICE_FIELD_CONFIG.Currency,
        component: FormFieldCode.DROPDOWN,
      },
      PetServiceStatus: {
        ...PETSERVICE_FIELD_CONFIG.PetServiceStatus,
        component: FormFieldCode.DROPDOWN,
      },
      // ...deleteProperties(PETSERVICE_FIELD_CONFIG, OPTIONAL_CLEANUP),
      ServiceType: {
        ...PETSERVICE_FIELD_CONFIG.ServiceType,
        component: FormFieldCode.DROPDOWN,
      },
    };
  config = getSpaceConfig({
    columns: [
      // ...Object.values(PETSERVICE_FIELD_CONFIG),
      // { ...PETSERVICE_FIELD_CONFIG.Date, class: 'hidden md:table-cell' },
      { ...PETSERVICE_FIELD_CONFIG.ServiceType, class: '' },
      { ...PETSERVICE_FIELD_CONFIG.PetServiceStatus, class: '' },
      { ...PETSERVICE_FIELD_CONFIG.Price, class: 'hidden md:table-cell' },
      { ...PETSERVICE_FIELD_CONFIG.Currency, class: 'hidden md:table-cell' },
    ],
    dateFields: PETSERVICE_DATE_FIELDS,
    entitiesColumns: [
      ...PETSERVICE_ENTITY_COLUMNS,
      // 'Id',
      // 'Title.Id',
      // 'Title.Name',
      // 'Country.Id',
      // 'Country.Name',
      // 'Date',
      // 'IsConfirmed',
    ],
    entityColumns: [...PETSERVICE_ENTITY_COLUMNS],
    entitySchemaName: 'PetService',
    fieldsConfig: this.fieldsConfig,
    filterConfig: [],
    filterKey: 'Pet',
    id: 'PetService',
    naming: {
      editCompomentHeaderString: 'Service',
    },
  });
}
