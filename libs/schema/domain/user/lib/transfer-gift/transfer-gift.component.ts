import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

import { ITier } from '@bp/core/consts';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
@Component({
  imports: [
    CommonModule,
    ButtonModule,
    InputNumberModule,
    InputTextModule,
    ToggleSwitchModule,
  ],
  selector: 'bp-transfer-gift',
  styles: ``,
  template: `<div
    class="flex w-full flex-col items-center rounded-xl border border-surface-border pb-6 pt-5 shadow-md sm:w-auto md:flex-row"
  >
    <div class="flex shrink-0 flex-col space-y-2 px-10 ">
      <div
        class="text-accent text-center text-5xl font-semibold leading-tight tracking-tight"
      >
        12
      </div>
      <div class="text-center text-3xl font-bold uppercase">
        {{ tier().name }}
      </div>
      <span class=" text-center text-base font-bold uppercase text-secondary"
        >One month access</span
      >
    </div>
    <img
      class="size-32"
      src="assets/images/referrals/gift.png"
      alt="Referral image"
    />
    <div class="relative flex flex-col justify-center px-10">
      <div class="absolute right-10 top-0 flex space-x-2">
        <span class="text-secondary hidden sm:block"
          >Send gift as an anonymous</span
        >
        <span class="text-secondary sm:hidden">Anonymous</span>
        <p-toggleswitch> </p-toggleswitch>
      </div>

      <span class="p-fluid mb-1  mt-5 w-full md:min-w-72">
        <div>
          <div class="text-secondary">User</div>
          <input class="w-full" type="text" pInputText [disabled]="true" />
        </div>
      </span>
      <div>
        <div class="text-secondary">Amount</div>
        <div class="flex">
          <p-inputNumber inputId="integeronly" class="caret-current">
          </p-inputNumber>
          <button
            aria-label="Make a gift"
            pRipple
            pButton
            type="button"
            icon="pi pi-gift"
            class="ml-3 sm:hidden"
          ></button>
          <button
            aria-label="Make a gift"
            pRipple
            pButton
            type="button"
            label="Make a gift"
            icon="pi pi-gift"
            class="ml-3 hidden sm:block"
          ></button>
        </div>
      </div>
    </div>
  </div>`,
})
export class TransferGiftComponent {
  tier = input.required<ITier>();
}
