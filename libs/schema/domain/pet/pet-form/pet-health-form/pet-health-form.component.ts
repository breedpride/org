import { CommonModule } from '@angular/common';
import {
  Component,
  WritableSignal,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormFieldComponent } from '@bh/editing';
import { BaseDetailComponent } from '@bh/collection-view-scroller';
import {
  PETHEALTHEXAMRESULT_DATE_FIELDS,
  PETHEALTHEXAMRESULT_ENTITY_COLUMNS,
  PETHEALTHEXAMRESULT_FIELD_CONFIG,
  TitleInPet,
} from '@bh/entity/config';
import { getSpaceConfig } from '@bh/collection-store';

import { TwoFieldsRowComponent } from '@bp/two-fields-row-ui';
import { deleteProperties } from '@breedpride/api';
import { FormFieldCode } from '@bh/consts';
import { TableModule } from 'primeng/table';
import { FilterFieldConfig } from '@bh/superfield';
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

  selector: 'bp-pet-health-form',
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
            [config]="fieldsConfig.HealthExamObject"
          />
          <bp-two-fields-row class="mt-5">
            <bp-form-field [config]="fieldsConfig.Date" />
            <bp-form-field [config]="fieldsConfig.HealthExamResult" />
          </bp-two-fields-row>
        </div>
      </form>
    </ng-template>
  `,
})
export class PetHealthFormComponent {
  fieldsConfig: Record<
    keyof typeof PETHEALTHEXAMRESULT_FIELD_CONFIG,
    FilterFieldConfig
  > = {
      ...deleteProperties(PETHEALTHEXAMRESULT_FIELD_CONFIG, OPTIONAL_CLEANUP),
      HealthExamObject: {
        ...PETHEALTHEXAMRESULT_FIELD_CONFIG.HealthExamObject,
        component: FormFieldCode.DROPDOWN,
      },
      // ...TITLEINPET_FIELD_CONFIG,
      HealthExamResult: {
        ...PETHEALTHEXAMRESULT_FIELD_CONFIG.HealthExamResult,
        component: FormFieldCode.DROPDOWN,
      },
    };

  config = getSpaceConfig({
    columns: [
      // ...Object.values(PETHEALTHEXAMRESULT_FIELD_CONFIG),
      {
        ...PETHEALTHEXAMRESULT_FIELD_CONFIG.Date,
        class: 'hidden md:table-cell',
      },
      { ...PETHEALTHEXAMRESULT_FIELD_CONFIG.HealthExamObject, class: '' },
      { ...PETHEALTHEXAMRESULT_FIELD_CONFIG.HealthExamResult, class: '' },
    ],
    dateFields: PETHEALTHEXAMRESULT_DATE_FIELDS,
    entitiesColumns: [...PETHEALTHEXAMRESULT_ENTITY_COLUMNS],
    entityColumns: [...PETHEALTHEXAMRESULT_ENTITY_COLUMNS],
    entitySchemaName: 'PetHealthExamResult',
    fieldsConfig: this.fieldsConfig,
    filterConfig: [],
    filterKey: 'Pet',
    id: 'PetHealthExamResult',
    naming: {
      editCompomentHeaderString: 'Health examination',
    },
  });

  entities!: WritableSignal<TitleInPet[]>;
}
