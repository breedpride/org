import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';
import { BaseNGComponent } from '../base-ng/base-ng.component';

@Component({
  imports: [CommonModule, ReactiveFormsModule, FormsModule, DatePickerModule],
  selector: 'bp-input-date',
  styles: [],
  template: `
    <span [formGroup]="mainForm()" class="p-float-label p-fluid">
      <p-datepicker
        appendTo="body"
        [id]="id()"
        [formControlName]="id()"
      ></p-datepicker>
      <label [for]="id()">
        {{ placeholder() }}
        @if (required()) { * }
      </label>
    </span>
    @if (control().invalid && (control().dirty || control().touched)) {
    <div class="text-md absolute ml-3 mt-[3px] text-red-500">
      @if (control().errors?.['required']) {
      <div>{{ placeholder() }} is required</div>
      }
    </div>
    }
  `,
})
export class InputDateComponent extends BaseNGComponent {}
