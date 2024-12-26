import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { ITier } from '@bp/core/consts';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  imports: [CommonModule, InputNumberModule, ButtonModule],
  selector: 'bp-make-girt-card',
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
  template: ` <div
    class="card border-primary outline-primary relative h-full flex-col items-center p-6 outline
    outline-2 outline-offset-2 md:flex-row md:items-start"
  >
    <img
      class="order-2 size-56 md:order-1"
      src="assets/images/referrals/gift.png"
      alt="Referral image"
    />
    <div class="order-1 flex w-full flex-col px-10 md:order-2 xl:border-r">
      <div class="text-center text-3xl font-bold uppercase">
        {{ tier().name }}
      </div>
      <span class=" text-center text-base font-bold uppercase text-secondary"
        >One month access</span
      >
      <div class="mt-8 space-y-2">
        @for (feature of tier().features; track feature; let i = $index) {
        <div class="flex">
          <i class="pi pi-check text-accent font-bold"></i>
          <div class="ml-2 leading-5">
            {{ feature.name }}
          </div>
        </div>
        }
      </div>
    </div>
    <div class="order-3 flex w-full flex-col items-center space-y-2">
      <div
        class="text-accent text-4xl font-semibold leading-tight tracking-tight"
      >
        {{ tier().prices[2].value }} $
      </div>

      <div class="pb-4 ">
        <div class="text-secondary">Amount</div>
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
          label="test"
          mode="decimal"
        ></p-inputNumber>
      </div>

      <button
        class="mt-3 w-72"
        aria-label="Buy a gift"
        pRipple
        pButton
        type="button"
        label="Buy a gift"
        icon="pi pi-dollar"
      ></button>
    </div>
  </div>`,
})
export class MakeGirtCardComponent {
  tier = input.required<ITier>();
}
