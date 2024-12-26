import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormFieldComponent } from '@bh/editing';
import { BaseDetailComponent } from '@bh/collection-view-scroller';
import {
  CONTACTSYNONYM_ENTITY_COLUMNS,
  CONTACTSYNONYM_FIELD_CONFIG,
} from '@bh/entity/config';
import { getSpaceConfig } from '@bh/collection-store';

import { InputTextModule } from 'primeng/inputtext';
import { WelcomeQuestWrapperComponent } from '../../../welcome-quest-wrapper/welcome-quest-wrapper.component';

@Component({
  imports: [
    CommonModule,
    WelcomeQuestWrapperComponent,

    InputTextModule,
    FormFieldComponent,
    ReactiveFormsModule,
    BaseDetailComponent,
  ],

  selector: 'bp-welcome-contact-name',
  styles: ``,
  template: `<bp-welcome-quest-wrapper>
    <div class="mt-3 flex w-full space-x-5">
      <span class="p-float-label p-fluid w-full">
        <input pInputText id="firstname" />
        <label for="firstname">First name</label>
      </span>
      <span class="p-float-label p-fluid w-full">
        <input pInputText id="secondname" />
        <label for="secondname">Second name</label>
      </span>
    </div>
    <div class="">
      <bp-base-detail
        stickyHeight="9rem"
        speedDialDirection="circle"
        [config]="config"
        [editorTemplate]="editorTemplate"
      />

      <ng-template #editorTemplate let-form="form">
        <form [formGroup]="form">
          <div
            class="my-2 flex flex-col justify-center  space-y-8 rounded-lg bg-slate-50 p-5"
          >
            <bp-form-field first [config]="fieldsConfig.Name" />
          </div>
        </form>
      </ng-template>
    </div>
  </bp-welcome-quest-wrapper>`,
})
export class WelcomeContactNameComponent {
  fieldsConfig = {
    ...CONTACTSYNONYM_FIELD_CONFIG,
    // Address: { ...CONTACTSYNONYM_FIELD_CONFIG.Address } as FilterField,
    // AddressType: { ...CONTACTSYNONYM_FIELD_CONFIG.AddressType },
    // City: { ...CONTACTSYNONYM_FIELD_CONFIG.City },
    // Country: { ...CONTACTSYNONYM_FIELD_CONFIG.Country },
    // Primary: { ...CONTACTSYNONYM_FIELD_CONFIG.Primary },
    // Region: { ...CONTACTSYNONYM_FIELD_CONFIG.Region },
    // Zip: { ...CONTACTSYNONYM_FIELD_CONFIG.Zip },
  };

  config = getSpaceConfig({
    columns: [
      // ...Object.values(CONTACTSYNONYM_FIELD_CONFIG),
      {
        ...CONTACTSYNONYM_FIELD_CONFIG.Name,
        class: '',
        placeholder: 'Additional name',
      },
    ],
    // dateFields: PETIDENTIFIER_DATE_FIELDS,
    entitiesColumns: [...CONTACTSYNONYM_ENTITY_COLUMNS],
    entityColumns: [...CONTACTSYNONYM_ENTITY_COLUMNS],
    entitySchemaName: 'ContactSynonym',
    fieldsConfig: this.fieldsConfig,

    filterKey: 'Contact',
    id: 'ContactSynonym',
    naming: {
      editCompomentHeaderString: 'Additional name',
    },
  });
}
