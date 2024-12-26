import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { ITier } from '@bp/core/consts';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  imports: [CommonModule, InputNumberModule, ButtonModule],
  selector: 'bp-tier',
  styles: `
    :host ::ng-deep {
      .p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button-up {
        order: 3;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
      .p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button-down {
        order: 1;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
      .p-inputnumber-buttons-horizontal .p-inputnumber-input {
        order: 2;
        border-radius: 0;
      }
    }
  `,
  template: `<div
    class="card md:max-w-100 relative h-full max-w-sm  flex-col p-6 outline outline-2  outline-offset-2 sm:px-10 sm:py-12"
    [ngStyle]="{
      'outline-color': color(),
      'border-color': color(),
    }"
  >
    @if (isComingSoon()) {
    <div
      class="bg-accent text-md absolute right-0 top-3 rounded-l-full px-2 py-1 font-bold uppercase text-white "
    >
      Coming soon
    </div>
    }
    <div class="text-center text-3xl font-bold uppercase">
      {{ tier().name }}
    </div>
    <div class="text-secondary mt-2 text-center text-lg font-medium">
      {{ tier().description }}
    </div>
    <div class="mt-10 flex flex-col items-center whitespace-nowrap">
      <div
        class="text-primary my-2 text-5xl font-semibold leading-tight tracking-tight"
      >
        {{ tier().prices[2].value }}
      </div>
      <span class="font-bold uppercase text-secondary-400">Per month</span>
    </div>
    <div class="text-secondary mt-6 flex flex-col items-center space-y-3">
      <div>
        <div class="text-secondary">Months of usage</div>
        <p-inputNumber
          class="w-full caret-current"
          [showButtons]="true"
          buttonLayout="horizontal"
          inputId="horizontal"
          spinnerMode="horizontal"
          [step]="1"
          decrementButtonClass="p-button-secondary"
          incrementButtonClass="p-button-info"
          incrementButtonIcon="pi pi-plus"
          decrementButtonIcon="pi pi-minus"
          [min]="0"
          [max]="40"
          mode="decimal"
          [disabled]="isComingSoon()"
        ></p-inputNumber>
      </div>
      <button
        class="w-full"
        aria-label="Exchange"
        pRipple
        pButton
        type="button"
        label="Exchange"
        icon="pi pi-sync"
        [disabled]="isComingSoon()"
      ></button>
    </div>

    <div class="mt-10 flex flex-col">
      <div class="min-h-12 text-center font-semibold uppercase">
        {{ tier().featuresHeader }}
      </div>
      <div class="mt-4 space-y-2">
        @for (feature of tier().features; track feature; let i = $index) {
        <div class="flex">
          <i class="pi pi-check text-accent-400 font-bold"></i>
          <div class="ml-2 leading-5">
            {{ feature.name }}
          </div>
        </div>
        }
      </div>
    </div>
  </div>`,
})
export class TierComponent {
  tier = input.required<ITier>();
  color = input<string>();
  isComingSoon = input<boolean>(false);
}
