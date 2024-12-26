import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { BaseNGComponent } from '../base-ng/base-ng.component';

@Component({
  imports: [CommonModule, ReactiveFormsModule, FormsModule, InputNumberModule],
  selector: 'bp-input-number',
  styles: [],
  template: `
    <span [formGroup]="mainForm()" class="p-float-label p-fluid">
      <p-inputNumber [id]="id()" [formControlName]="id()"></p-inputNumber>
      <label htmlFor="number-input"
        >{{ placeholder() }}
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
export class InputNumberComponent extends BaseNGComponent {}
