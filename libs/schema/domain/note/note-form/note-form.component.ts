import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormFieldComponent } from '@bh/editing';
import { NOTE_FIELD_CONFIG } from '@bh/entity/config';
import { BPFormGroupInterface, FilterFieldConfig } from '@bh/superfield';
// import { TwoFieldsRowComponent } from '@bp/two-fields-row-ui';
import { FormFieldCode } from '@bh/windmill';
import { HiddenDirective } from '@breedpride/070-core-directive-feature';

@Component({
  imports: [
    CommonModule,
    FormFieldComponent,
    ReactiveFormsModule,
    // TwoFieldsRowComponent,
    HiddenDirective,
  ],
  selector: 'bp-note-form',
  styles: [],
  template: `
    <form [formGroup]="form()">
      <div
        class="my-2 flex flex-col justify-center  space-y-8 rounded-lg bg-slate-50 p-5"
      >
        <!-- <bp-two-fields-row class="mt-5"> -->
        <bp-form-field class="mt-5" [config]="fieldsConfig.EntitySchema" />
        <bp-form-field [config]="fieldsConfig.Pet" bpHidden />
        <bp-form-field [config]="fieldsConfig.Breed" bpHidden />
        <bp-form-field [config]="fieldsConfig.Account" bpHidden />
        <bp-form-field [config]="fieldsConfig.Project" bpHidden />
        <bp-form-field [config]="fieldsConfig.Contact" bpHidden />
        <bp-form-field [config]="fieldsConfig.Litter" bpHidden />
        <!-- </bp-two-fields-row> -->
        <bp-form-field class="mt-5" [config]="fieldsConfig.Name" />
        <!-- <bp-form-field
          class="mt-5"
          [config]="fieldsConfig.Owner" /> -->
      </div>
    </form>
  `,
})
export class NoteFormComponent {
  form = input.required<BPFormGroupInterface>();
  fieldsConfig: Record<keyof typeof NOTE_FIELD_CONFIG, FilterFieldConfig> = {
    ...NOTE_FIELD_CONFIG,
    Name: {
      ...NOTE_FIELD_CONFIG.Name,
      component: FormFieldCode.TEXTAREA,
      placeholder: '',
    },
  };
}
