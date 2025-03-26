import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormFieldComponent } from '@bh/editing';
import { BaseDetailComponent } from '@bh/collection-view-scroller';
import {
  CONTACTCOMMUNICATION_ENTITY_COLUMNS,
  CONTACTCOMMUNICATION_FIELD_CONFIG,
} from '@bh/entity/config';
import { getSpaceConfig } from '@bh/collection-store';

import { TwoFieldsRowComponent } from '@bp/two-fields-row-ui';
import { FormFieldCode } from '@bh/windmill';
import { merge } from 'lodash-es';
import { TableModule } from 'primeng/table';
const fieldsConfig = merge(
  CONTACTCOMMUNICATION_FIELD_CONFIG,
  {
    CommunicationType: {
      ...CONTACTCOMMUNICATION_FIELD_CONFIG.CommunicationType,
      component: FormFieldCode.DROPDOWN,
    },
  },
  {
    Number: {
      ...CONTACTCOMMUNICATION_FIELD_CONFIG.Number,
      placeholder: 'Value',
    },
  }
);

@Component({
  imports: [
    CommonModule,
    BaseDetailComponent,
    TableModule,
    TwoFieldsRowComponent,
    FormFieldComponent,
    ReactiveFormsModule,
  ],

  selector: 'bp-settings-communication-form',
  styles: [],
  template: `
    <bp-base-detail [config]="config" [editorTemplate]="editorTemplate" />

    <ng-template #editorTemplate let-form="form">
      <form [formGroup]="form">
        <div
          class="my-2 flex flex-col justify-center  space-y-8 rounded-lg bg-slate-50 p-5"
        >
          <bp-two-fields-row class="mt-5">
            <bp-form-field [config]="fieldsConfig.CommunicationType" />
            <bp-form-field [config]="fieldsConfig.Number" />
          </bp-two-fields-row>
        </div>
      </form>
    </ng-template>
  `,
})
export class SettingsCommunicationFormComponent {
  fieldsConfig = fieldsConfig;
  config = getSpaceConfig({
    columns: [
      // ...Object.values(CONTACTCOMMUNICATION_FIELD_CONFIG),
      { ...CONTACTCOMMUNICATION_FIELD_CONFIG.CommunicationType, class: '' },
      {
        ...CONTACTCOMMUNICATION_FIELD_CONFIG.Number,
        class: '',
        placeholder: 'Value',
      },
    ],
    // dateFields: PETIDENTIFIER_DATE_FIELDS,
    entitiesColumns: [...CONTACTCOMMUNICATION_ENTITY_COLUMNS],
    entityColumns: [...CONTACTCOMMUNICATION_ENTITY_COLUMNS],
    entitySchemaName: 'ContactCommunication',
    fieldsConfig: fieldsConfig,
    filterConfig: [
      // {
      //   active: form => true,
      //   displayValue: form => 'isMarketplace',
      //   entitySchemaName: 'null',
      //   getFilter: form => publicIdentifiers(),
      //   id: 'marketplace',
      // } as FilterField,
    ],
    filterKey: 'Contact',
    id: 'ContactCommunication',
    naming: {
      editCompomentHeaderString: 'Communication option',
    },
  });
}
