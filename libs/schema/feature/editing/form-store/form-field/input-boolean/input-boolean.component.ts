import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputSwitchModule } from 'primeng/inputswitch';
import { BaseNGComponent } from '../base-ng/base-ng.component';

@Component({
  imports: [CommonModule, InputSwitchModule, ReactiveFormsModule, FormsModule],
  selector: 'bp-input-boolean',
  styles: [],
  template: `
    <span [formGroup]="mainForm()">
      <p-inputSwitch [formControlName]="id()"></p-inputSwitch>
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
export class InputBooleanComponent extends BaseNGComponent {}
