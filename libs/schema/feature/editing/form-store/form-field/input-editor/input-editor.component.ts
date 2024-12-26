import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EditorModule } from 'primeng/editor';
import { BaseNGComponent } from '../base-ng/base-ng.component';
@Component({
  imports: [CommonModule, EditorModule, ReactiveFormsModule, FormsModule],
  selector: 'bp-input-editor',
  styles: [],
  template: `
    <span [formGroup]="mainForm()">
      <p-editor [formControlName]="id()">
        <ng-template #header>
          <span class="ql-formats">
            <button type="button" class="ql-bold" aria-label="Bold"></button>
            <button
              type="button"
              class="ql-italic"
              aria-label="Italic"
            ></button>
            <button
              type="button"
              class="ql-underline"
              aria-label="Underline"
            ></button>
          </span>
        </ng-template>
      </p-editor>
    </span>
  `,
})
export class InputEditorComponent extends BaseNGComponent {}
