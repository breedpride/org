import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormFieldComponent } from '@bh/editing';
import { BaseDetailComponent } from '@bh/collection-view-scroller';
import {
  CONTACTADDRESS_ENTITY_COLUMNS,
  CONTACTADDRESS_FIELD_CONFIG,
} from '@bh/entity/config';
import { getSpaceConfig } from '@bh/collection-store';

import { FilterFieldConfig } from '@bh/superfield';
import { TwoFieldsRowComponent } from '@bp/two-fields-row-ui';
import { TableModule } from 'primeng/table';

const fieldsConfig: Record<
  keyof typeof CONTACTADDRESS_FIELD_CONFIG,
  FilterFieldConfig
> = {
  ...CONTACTADDRESS_FIELD_CONFIG,
  Address: { ...CONTACTADDRESS_FIELD_CONFIG.Address } as FilterFieldConfig,
  AddressType: { ...CONTACTADDRESS_FIELD_CONFIG.AddressType },
  City: { ...CONTACTADDRESS_FIELD_CONFIG.City },
  Country: { ...CONTACTADDRESS_FIELD_CONFIG.Country },
  Primary: { ...CONTACTADDRESS_FIELD_CONFIG.Primary },
  Region: { ...CONTACTADDRESS_FIELD_CONFIG.Region },
  Zip: { ...CONTACTADDRESS_FIELD_CONFIG.Zip },
} as const;
@Component({
  imports: [
    CommonModule,
    BaseDetailComponent,
    TableModule,
    TwoFieldsRowComponent,
    FormFieldComponent,
    ReactiveFormsModule,
  ],

  selector: 'bp-settings-address-form',
  styles: [],
  template: `
    <bp-base-detail [config]="config" [editorTemplate]="editorTemplate" />

    <ng-template #editorTemplate let-form="form">
      <form [formGroup]="form">
        <div
          class="my-2 flex flex-col justify-center  space-y-8 rounded-lg bg-slate-50 p-5"
        >
          <bp-two-fields-row class="mt-5">
            <bp-form-field [config]="fieldsConfig.Primary" />
            <bp-form-field [config]="fieldsConfig.AddressType" />
          </bp-two-fields-row>
          <bp-form-field [config]="fieldsConfig.Address" />
          <bp-two-fields-row class="mt-5">
            <bp-form-field [config]="fieldsConfig.City" />
            <bp-form-field [config]="fieldsConfig.Region" />
          </bp-two-fields-row>
          <bp-two-fields-row class="mt-5">
            <bp-form-field [config]="fieldsConfig.Country" />
            <bp-form-field [config]="fieldsConfig.Zip" />
          </bp-two-fields-row>
        </div>
      </form>
    </ng-template>
  `,
})
export class SettingsAddressFormComponent {
  fieldsConfig = fieldsConfig;

  config = getSpaceConfig({
    columns: [
      // ...Object.values(CONTACTADDRESS_FIELD_CONFIG),
      // { ...CONTACTADDRESS_FIELD_CONFIG.AddressType, class: '' },
      { ...CONTACTADDRESS_FIELD_CONFIG.Primary, class: '' },
      { ...CONTACTADDRESS_FIELD_CONFIG.Address, class: '' },
      // { ...CONTACTADDRESS_FIELD_CONFIG.Region, class: '' },
      { ...CONTACTADDRESS_FIELD_CONFIG.City, class: '' },
      { ...CONTACTADDRESS_FIELD_CONFIG.Country, class: '' },
      // { ...CONTACTADDRESS_FIELD_CONFIG.Zip, class: '' },
    ],
    // dateFields: PETIDENTIFIER_DATE_FIELDS,
    entitiesColumns: [...CONTACTADDRESS_ENTITY_COLUMNS],
    entityColumns: [...CONTACTADDRESS_ENTITY_COLUMNS],
    entitySchemaName: 'ContactAddress',
    fieldsConfig: fieldsConfig,
    // filterFields: [],
    filterKey: 'Contact',
    id: 'ContactAddress',
    naming: {
      editCompomentHeaderString: 'Address',
    },
  });
}
