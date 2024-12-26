import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormFieldComponent } from '@bh/editing';
import { BaseDetailComponent } from '@bh/collection-view-scroller';
import { LitterNoteConfig } from '@breedpride/note';

@Component({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormFieldComponent,
    BaseDetailComponent,
  ],
  // provideComponentStore(DetailStore)

  selector: 'bp-litter-notes-form',
  styles: [],
  template: `
    <bp-base-detail [config]="config" [editorTemplate]="editorTemplate" />

    <ng-template #editorTemplate let-form="form">
      <form [formGroup]="form">
        <div
          class="my-2 flex flex-col justify-center  space-y-8 rounded-lg bg-slate-50 p-5"
        >
          <bp-form-field class="mt-5" [config]="fieldsConfig['Name']" />
        </div>
      </form>
    </ng-template>
  `,
})
export class LitterNotesFormComponent {
  fieldsConfig = LitterNoteConfig.fieldsConfig;
  config = LitterNoteConfig;
}
