import { CommonModule } from '@angular/common';
import { Component, effect } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormFieldComponent } from '@bh/editing';
import { PetNoteConfig } from '@breedpride/note';
// import { injectSectionSort } from '../../../../feature/sorting';
// import { getState } from '@ngrx/signals';

@Component({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormFieldComponent,
    // BaseDetailComponent,
  ],
  selector: 'bp-pet-notes-form',
  providers: [],
  styles: [],
  template: `
    <div
      class="my-2 flex flex-col justify-center  space-y-8 rounded-lg bg-slate-50 p-5"
    >
      <bp-form-field class="mt-5" [config]="fieldsConfig['Name']" />
      <bp-form-field class="mt-5" [config]="fieldsConfig['Owner']" />
    </div>
  `,
})
export class PetNotesFormComponent {
  config = PetNoteConfig;
  fieldsConfig = PetNoteConfig.fieldsConfig;
  // sort = injectSectionSort();
  constructor() {
    effect(() => {
      console.log('PetNotesFormComponent');
      // console.log(getState(this.sort));
      // for pull request
    });
  }
}
