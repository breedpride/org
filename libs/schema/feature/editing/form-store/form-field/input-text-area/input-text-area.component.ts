import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextareaModule } from 'primeng/textarea';
import { BaseNGComponent } from '../base-ng/base-ng.component';

@Component({
  imports: [CommonModule, ReactiveFormsModule, FormsModule, TextareaModule],
  selector: 'bp-input-text-area',
  styles: [],
  template: `
    <span class="p-float-label p-fluid" [formGroup]="mainForm()">
      <textarea
        rows="8"
        cols="30"
        pInputTextarea
        [formControlName]="id()"
      ></textarea>
      <!-- <input
        class="w-full uppercase"
        [id]="id"
        type="text"
        pInputText
        [formControlName]="id"
        minlength="4" /> -->
      @if (placeholder()) {
      <label [for]="id()">
        {{ placeholder() }}
        @if (required()) { * }
      </label>
      }
    </span>
    @if (control().invalid && (control().dirty || control().touched)) {
    <div class="text-md absolute ml-3 mt-[3px] text-red-500">
      @if (control().errors?.['required']) {
      <div>{{ placeholder() }} is required</div>
      } @if (control().errors?.['minlength']) {
      <div>{{ placeholder() }} must be at least 4 characters long</div>
      }
      <!-- <div *ngIf="control.errors?.['forbiddenName']">
    {{ placeholder }} cannot be Bob
  </div> -->
      <!-- <div /> -->
    </div>
    }
  `,
})
export class InputTextAreaComponent extends BaseNGComponent {}
