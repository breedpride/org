import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CalendarTypeView } from 'primeng/calendar';
import { DatePickerModule } from 'primeng/datepicker';
import { BaseNGComponent } from '../base-ng/base-ng.component';
@Component({
  imports: [CommonModule, ReactiveFormsModule, DatePickerModule],
  selector: 'bp-input-date-range',
  styles: [],
  template: ` <span class="p-float-label p-fluid" [formGroup]="mainForm()">
    <p-datepicker
      appendTo="body"
      [id]="id()"
      [formControlName]="id()"
      selectionMode="range"
      view="year"
      [readonlyInput]="true"
      [inputId]="id()"
    >
    </p-datepicker>
    <label for="{{ id() }}">
      {{ placeholder() }}
      @if (required()) { * }
    </label>
  </span>`,
})
export class InputDateRangeComponent extends BaseNGComponent {
  selectionMode = input<string>();
  view = input<CalendarTypeView>();
}
