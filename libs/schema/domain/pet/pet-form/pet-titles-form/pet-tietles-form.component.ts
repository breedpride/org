import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { FORM_GROUP } from '@bh/form';
import { TITLEINPET_FIELD_CONFIG } from '@bh/entity/config';
import { ENTITY_FIELDS_CONFIG } from '@bh/entity-store';
import { FilterFieldConfig } from '@bh/superfield';
import { TwoFieldsRowComponent } from '@bp/two-fields-row-ui';
import { FormFieldComponent } from '@bh/editing';


@Component({
  imports: [
    CommonModule,
    TwoFieldsRowComponent,
    FormFieldComponent,
    ReactiveFormsModule,
  ],
  providers: [FormGroupDirective],
  selector: 'bp-pet-tietles-form',
  template: `
    <form [formGroup]="form">
      <div
        class="my-2 flex flex-col justify-center  space-y-8 rounded-lg bg-slate-50 p-5"
      >
        <bp-form-field class="mt-5" [config]="entity.Date" />
        <bp-two-fields-row class="mt-5">
          <bp-form-field [config]="entity.Title" />
          <bp-form-field [config]="entity.Country" />
        </bp-two-fields-row>
      </div>
    </form>
  `,
})
export class PetTitlesFormComponent {
  entity: Record<keyof typeof TITLEINPET_FIELD_CONFIG, FilterFieldConfig> =
    inject(ENTITY_FIELDS_CONFIG);
  form = inject(FORM_GROUP);
}
