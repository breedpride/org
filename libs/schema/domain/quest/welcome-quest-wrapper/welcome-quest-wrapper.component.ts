import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  imports: [CommonModule, ButtonModule],
  selector: 'bp-welcome-quest-wrapper',
  styles: ``,
  template: `<div
      class="my-2 flex flex-col justify-center space-y-5 rounded-lg bg-slate-50 p-5"
    >
      <ng-content />
    </div>
    <div class="mt-10 grid grid-cols-2 gap-3">
      <button
        pButton
        type="button"
        label="Cancel"
        aria-label="Cancel"
        class="p-button-text p-button-secondary  bg-secondary-100 hover:bg-secondary-200 focus:bg-secondary-300"
      ></button>

      <button
        pButton
        pRipple
        type="submit"
        label="Submit"
        aria-label="Submit"
        class="p-button-text  bg-primary-50 hover:bg-primary-100 focus:bg-primary-200"
      ></button>
    </div> `,
})
export class WelcomeQuestWrapperComponent {}
