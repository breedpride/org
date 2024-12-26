import { CommonModule } from '@angular/common';
import {
  Component,
  HostBinding,
  Signal,
  inject,
} from '@angular/core';
import { Route } from '@angular/router';
import { trackByFn } from '@bh/list';
import { SPACE_URL_REFERRAL, URL_MY } from '@bh/space-url';
import { WithViewportHeightDirective } from '@bh/viewport';
import { ITier, TIERS } from '@bp/core/consts';
import { TabStore } from '@bp/page-tab-store';
import { CardWrapperDirective } from '@breedpride/wrapper';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { TabsModule } from 'primeng/tabs';
import { MajorPointComponent } from '../../lib/major-point/major-point.component';
import { TierComponent } from '../../lib/tier/tier.component';

@Component({
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    FieldsetModule,
    InputNumberModule,
    TierComponent,
    MajorPointComponent,
    CardWrapperDirective,
    TabsModule,
  ],
  hostDirectives: [WithViewportHeightDirective],
  providers: [TabStore],
  selector: 'bp-referral-form',
  styles: `
    .referral-grid {
      grid-template-columns: auto 44px;

      @screen md {
        grid-template-columns: auto 120px 120px;
      }
    }
  `,
  template: `
    <!-- Spets template -->
    <ng-template
      #stepBlock
      let-name="name"
      let-imgLink="imgLink"
      let-step="step"
    >
      <div
        class="border-surface-border flex flex-col items-center space-y-2 rounded-xl border bg-card-ground p-5 shadow-md  "
      >
        <span class="text-primary text-xl font-bold"> Step {{ step }}</span>
        <span class="text-center">{{ name }}</span>
        <div class="flex  h-full">
          <img
            class="size-11 self-end "
            src="{{ imgLink }}"
            alt="Referral image"
          />
        </div>
      </div>
    </ng-template>

    <div bpCardWrapper [mode]="'centrated'">
      <div class="w-full max-w-6xl cursor-default caret-transparent">
        <p-tabs value="0" class="flex w-full items-center justify-between">
          <div class="flex w-full items-center justify-between">
            <span class="text-[1.75rem] font-semibold">Referrals</span>
            <p-tablist>
              <p-tab value="0">
                <i class="pi pi-fw pi-info-circle mr-2"></i>
                <span>Info</span></p-tab
              >
              <p-tab value="1">
                <i class="pi pi-fw pi-sync mr-2"></i>
                <span>Exchangee</span></p-tab
              >
            </p-tablist>
          </div>
          <p-tabpanels class="w-full">
            <p-tabpanel value="0">
              <div class="flex w-full flex-col space-y-8 py-8 ">
                <!-- Referral link & points -->
                <div class="flex flex-col md:flex-row">
                  <!-- Referral link -->
                  <div
                    class="order-2 mt-8 flex flex-col md:order-1 md:mr-10 md:mt-0"
                  >
                    <span class="text-primary text-3xl font-bold"
                      >Your referral link</span
                    >

                    <div class="flex">
                      <span class="p-fluid w-full  md:min-w-56 ">
                        <input
                          class="w-full rounded-r-none"
                          id="disabled-input"
                          type="text"
                          pInputText
                          [disabled]="true"
                        />
                      </span>
                      <button
                        class="shrink-0 rounded-l-none"
                        aria-label="Copy link"
                        pRipple
                        pButton
                        type="button"
                        label="Copy link"
                        icon="pi pi-link"
                      ></button>
                    </div>
                    <div class="text-secondary text-base">
                      share your personal link
                    </div>
                    <div class="text-secondary mt-3 leading-7 md:max-w-lg">
                      Notice that you can share your referral link in a direct
                      link to your pets. This ability is on each context menu
                      for your pet. The menu is named - Copy link with my
                      referral.
                    </div>
                  </div>
                  <!-- Points -->
                  <div
                    class="order-1 ml-auto grid grid-cols-2 gap-x-10 gap-y-5 md:order-2"
                  >
                    <bp-major-point
                      name="Referrals"
                      secondaryName="all users"
                      value="123"
                      valueClass="text-primary"
                    />
                    <bp-major-point
                      name="Customers"
                      secondaryName="paid users"
                      value="15"
                      valueClass="text-primary"
                    />
                    <bp-major-point
                      name="Earnings"
                      secondaryName="total amount in PetCoins"
                      value="354"
                      valueClass="text-primary"
                    />
                    <bp-major-point
                      name="Balance"
                      secondaryName="current balance in PetCoins"
                      value="130"
                      valueClass="text-accent"
                    />
                  </div>
                </div>
                <!-- How it works -->
                <div class="0 flex flex-col space-y-3">
                  <span class="text-2xl font-semibold">How it works</span>
                  <div
                    class="bg-focus-card-ground grid grid-cols-1 gap-5 rounded-lg p-10 sm:grid-cols-2 md:grid-cols-4"
                  >
                    <ng-container
                      *ngTemplateOutlet="
                        stepBlock;
                        context: {
                          step: '1',
                          name: 'Share your link with other breeders',
                          imgLink: 'assets/images/referrals/heart.png',
                        }
                      "
                    />
                    <ng-container
                      *ngTemplateOutlet="
                        stepBlock;
                        context: {
                          step: '2',
                          name: 'They sign up and run their paid payroll',
                          imgLink: 'assets/images/referrals/payment.png',
                        }
                      "
                    />
                    <ng-container
                      *ngTemplateOutlet="
                        stepBlock;
                        context: {
                          step: '3',
                          name: 'You get 5% for each payment from your referrals in PetCoins',
                          imgLink: 'assets/images/referrals/per-cent.png',
                        }
                      "
                    />
                    <ng-container
                      *ngTemplateOutlet="
                        stepBlock;
                        context: {
                          step: '4',
                          name: 'You can exchange your PetCoins for paid services',
                          imgLink: 'assets/images/referrals/gift.png',
                        }
                      "
                    />
                  </div>
                </div>

                <!-- Details -->
                <div class="flex flex-col space-y-3 ">
                  <span class="text-2xl font-semibold"
                    >Performance details</span
                  >
                  <div class="card mt-3 flex flex-auto flex-col p-6 lg:px-8">
                    @if (referrals && referrals.length > 0) {
                    <div class="grid">
                      <!-- Header -->
                      <div
                        class=" referral-grid grid gap-3 border-b border-surface-border px-6 py-3 font-bold text-secondary lg:px-8"
                      >
                        <div class="">User</div>
                        <div class="hidden md:block">Is customer</div>
                        <div>Earnings</div>
                      </div>
                      <!-- Rows -->
                      @for ( referral of referrals; track trackByFn($index,
                      referral) ) {
                      <ng-container class="">
                        <div
                          class=" referral-grid grid items-center gap-3 px-6 py-2 bg-card-ground even:bg-even-card-ground lg:px-8"
                        >
                          <div class="">
                            {{ referral.Name }}
                          </div>
                          <div class="hidden md:block">
                            {{ referral.IsCustomer }}
                          </div>
                          <div class="">
                            {{ referral.Value }}
                          </div>
                        </div>
                      </ng-container>
                      }
                    </div>
                    } @else {
                    <span class="text-secondary p-8 text-center  font-medium">
                      There are no referrals yet!
                    </span>
                    }
                  </div>
                </div>
              </div>
            </p-tabpanel>
            <p-tabpanel value="1">
              <div class="flex w-full flex-col space-y-8 py-8 ">
                <div class="flex flex-col md:flex-row">
                  <div
                    class="order-2 mt-8 flex flex-col space-y-2 md:order-1 md:mt-0"
                  >
                    <span class="text-2xl font-semibold"
                      >Exchange your PetCoins</span
                    >
                    <div class="text-secondary leading-7">
                      PetCoins on your Balance can be exchanged into paid
                      services.
                      <br />
                      All available services are represented below. The price of
                      services is in PetCoins per month. <br />
                      Choose the number of months you want to receive a paid
                      service and make an exchange. <br />Have a pleasant time
                      with our PRO services.
                    </div>
                  </div>
                  <!-- Balance -->
                  <div class="order-1 ml-auto md:order-2">
                    <!-- Points -->
                    <bp-major-point
                      name="Balance"
                      secondaryName="current balance in PetCoins"
                      value="130"
                      valueClass="text-accent"
                    />
                  </div>
                </div>
                <!-- Exchange -->
                <div class="flex justify-center">
                  <div class="grid grid-cols-1 gap-10 md:grid-cols-2">
                    <bp-tier [tier]="tiers[1]" color="rgb(var(--primary))" />
                    <bp-tier
                      [tier]="tiers[2]"
                      color="rgb(var(--secondary-400))"
                      [isComingSoon]="true"
                    />
                  </div>
                </div>
              </div>
            </p-tabpanel>
          </p-tabpanels>
        </p-tabs>
      </div>
    </div>
  `,
})
export class ReferralFormComponent {
  @HostBinding('class') class = 'card';
  trackByFn = trackByFn;
  tabStore = inject(TabStore);
  activeTab: Signal<MenuItem | null> = this.tabStore.activeTab;
  activeItem!: MenuItem;
  referrals: { IsCustomer: boolean; Name: string; Value: number }[] = [
    { IsCustomer: false, Name: 'test1', Value: 2 },
  ];
  tiers: ITier[] = TIERS;
}

export const ReferralPage: Route = {
  loadChildren: () =>
    import('./referral.routing').then((m) => m.referralRoutes),
  path: SPACE_URL_REFERRAL,
  pathMatch: 'full',
};

export const ReferralPageMenuItem: MenuItem = {
  icon: 'pi pi-link',
  id: 'referrals',
  label: 'Referrals',
  mode: 'userMenu',
  routerLink: [`/`, URL_MY, SPACE_URL_REFERRAL],
  visible: true,
};
