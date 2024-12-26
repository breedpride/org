import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ITier } from '@bp/core/consts';
import { TierSelectorComponent } from '@breedpride/landing';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  imports: [CommonModule, ButtonModule, InputNumberModule, ReactiveFormsModule],
  selector: 'bp-tier-changer',
  styles: ``,
  template: `<!-- Buttons -->
    <div class="relative flex flex-col items-center">
      <div
        class="border-primary bg-primary/50 flex items-center rounded-full border p-0.5"
      >
        <button
          class="hover:bg-primary/30 rounded-full px-6 py-2.5"
          [ngClass]="{
            'pointer-events-none bg-primary shadow':
              billingType() === threeYearly,
            'bg-transparent': billingType() !== threeYearly,
          }"
          (click)="setBillingType(threeYearly)"
          disableRipple
        >
          <div class="text-white">
            <span class="hidden md:block">3 yearly billing</span>
            <span class="md:hidden">3 yearly</span>
          </div>
        </button>
        <button
          class="hover:bg-primary/30 rounded-full px-6 py-2.5"
          [ngClass]="{
            'pointer-events-none bg-primary shadow':
              billingType() === yearly,
            'bg-transparent': billingType() !== yearly,
          }"
          (click)="setBillingType(yearly)"
          disableRipple
        >
          <div class="text-white">
            <span class="hidden md:block">Yearly billing</span>
            <span class="md:hidden">Yearly</span>
          </div>
        </button>
        <button
          class="hover:bg-primary/30 rounded-full px-6 py-2.5"
          [ngClass]="{
            'pointer-events-none bg-primary shadow':
              billingType() === monthly,
            'bg-transparent': billingType() !== monthly,
          }"
          (click)="setBillingType(monthly)"
          disableRipple
        >
          <div class="text-white">
            <span class="hidden md:block">Monthly billing</span>
            <span class="md:hidden">Monthly</span>
          </div>
        </button>
      </div>
    </div>
    <!-- Tiers -->
    <div class="mt-10 flex justify-center">
      <div class="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        @for (tier of tiers.slice(starTier); track tier; let j = $index) {
        <div
          class="card md:max-w-90 relative h-full max-w-sm flex-col overflow-visible bg-card-ground p-6"
          [ngClass]="{
              ' border border-primary outline-primary outline outline-2 outline-offset-2':
                tier.name === currentTier().name,
              ' overflow-visible': tier.isPopular,
            }"
        >
          @if (tier.isPopular) {
          <div
            class="absolute inset-x-0 -top-4 flex items-center justify-center"
          >
            <div
              class="bg-primary text-white flex h-8 items-center rounded-full px-8 text-center font-semibold uppercase"
            >
              Popular
            </div>
          </div>
          } @if (tier.isComingSoon) {
          <div
            class="bg-accent py-0.1 absolute right-0 top-2 rounded-l-full px-1.5 text-sm font-bold uppercase text-white"
          >
            Coming soon
          </div>
          }
          <div class="text-center text-xl font-bold uppercase">
            {{ tier.name }}
          </div>
          <div
            class="text-secondary-400 mt-1 flex min-h-12 items-center justify-center text-center text-lg"
          >
            {{ tier.description }}
          </div>

          <!-- Price -->
          <div class="mt-4 flex flex-col items-center whitespace-nowrap">
            @if (tier.name !== 'Supreme Patron') {
            <div
              class="text-primary mb-2 text-6xl font-semibold leading-tight tracking-tight"
            >
              $ {{ tier.prices[billingType()].value }}
            </div>
            } @if (tier.name === 'Supreme Patron') {
            <p-inputNumber
              inputId="currency-us"
              mode="currency"
              [formControl]="customPrice"
              currency="USD"
              locale="en-US"
              class="p-fluid mb-2 w-full caret-current"
            >
            </p-inputNumber>
            }

            <div class="text-md text-secondary-400 font-semibold uppercase">
              Per month
            </div>
          </div>
          <!-- Price details -->

          <div class="text-secondary mt-5 flex flex-col space-y-2">
            @if (tier.name !== 'Supreme Patron') { @if (billingType() !== 0) {
            <div>
              <b>$ {{ tier.prices[threeYearly].value }}</b>
              <span class="text-secondary-400"> billed 3 yearly</span>
            </div>
            } @if (billingType() !== yearly) {
            <div>
              <b>$ {{ tier.prices[yearly].value }}</b>
              <span class="text-secondary-400"> billed yearly</span>
            </div>
            } @if (billingType() !== monthly) {
            <div>
              <b>$ {{ tier.prices[monthly].value }}</b>
              <span class="text-secondary-400"> billed monthly</span>
            </div>
            } } @if (tier.name === 'Supreme Patron') {
            <span
              ><span class="text-secondary-400">Minimum payment is </span>
              <b>$20.00</b></span
            >
            <span class="text-secondary-400">Monthly subscription only</span>
            }
          </div>
          <!-- CTA -->
          @if (tier.name === currentTier().name) {
          <div
            class="bg-primary mt-6 flex h-12 w-full items-center justify-center rounded-md font-semibold uppercase text-white"
          >
            Yor current tier
          </div>
          } @else {
          <button
            class="shadow-primary-200 mt-6 shadow-lg dark:shadow-none"
            pRipple
            pButton
            [disabled]="tierDisabled(tier)"
            (click)="startCustomPayment(tier)"
          >
            <span class="w-full text-center font-bold">{{
              getButtonCaption(tier)
            }}</span>
          </button>
          }
          <!-- Features -->
          <div class="mt-6 flex flex-col">
            <div class="text-md min-h-10 text-center font-semibold uppercase">
              {{ tier.featuresHeader }}
            </div>
            <div class="mt-3 space-y-2">
              @for (feature of tier.features; track feature; let i = $index) {
              <div class="flex">
                <i class="pi pi-check text-accent text-md font-extrabold"></i>
                <div class="ml-2 text-base leading-5">
                  {{ feature.name }}
                </div>
              </div>
              }
            </div>
          </div>
        </div>
        }
      </div>
    </div> `,
})
export class TierChangerComponent extends TierSelectorComponent {
  currentTier = input.required<ITier>();
  currentTierIndex = 1;
  getButtonCaption(tier: ITier) {
    return this.tiers.indexOf(tier) < this.currentTierIndex
      ? 'Downgrade'
      : 'Upgrade';
  }
}
