import { CommonModule } from '@angular/common';
import {
  Component,
  HostBinding,
  Signal,
  inject,
} from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route } from '@angular/router';
import { FormFieldCode } from '@bh/windmill';
import { FormFieldComponent } from '@bh/editing';
import { trackByFn } from '@bh/list';
import { SPACE_URL_BILLING, URL_MY } from '@bh/space-url';
import { WithViewportHeightDirective } from '@bh/viewport';
import { ITier, TIERS } from '@bp/core/consts';
import { TabStore } from '@bp/page-tab-store';
import { SPACE_CONFIG_BREED } from '@breedpride/breed';
import { CardWrapperDirective } from '@breedpride/wrapper';
import { MenuItem } from 'primeng/api';
import { TabsModule } from 'primeng/tabs';
import { MajorPointComponent } from '../../lib/major-point/major-point.component';
import { TierChangerComponent } from '../../lib/tier-changer/tier-changer.component';
import { BPFormGroup } from '@bh/form';

@Component({
  imports: [
    CommonModule,
    MajorPointComponent,
    TierChangerComponent,
    FormFieldComponent,
    ReactiveFormsModule,
    FormsModule,
    CardWrapperDirective,
    TabsModule,
  ],
  hostDirectives: [WithViewportHeightDirective],
  providers: [TabStore],
  selector: 'bp-billing-form',
  styles: [
    `
      .transaction-grid {
        grid-template-columns: auto 120px 180px 100px 80px;
      }
      .performance-grid {
        grid-template-columns: auto 60px;
        @screen sm {
          grid-template-columns: auto 180px 60px;
        }
        @screen md {
          grid-template-columns: auto 180px 120px;
        }
      }
    `,
  ],
  template: `
    <div bpCardWrapper [mode]="'centrated'">
      <div class="w-full max-w-6xl cursor-default caret-transparent">
        <p-tabs value="0" class="flex w-full items-center justify-between">
          <div class="flex w-full items-center justify-between">
            <span class="text-[1.75rem] font-semibold">Billing</span>
            <p-tablist>
              <p-tab value="0">
                <i class="pi pi-fw pi-clone mr-2"></i>
                <span>Tiers</span></p-tab
              >
              <p-tab value="1">
                <i class="pi pi-fw pi-chart-bar mr-2"></i>
                <span>Performance</span></p-tab
              >
            </p-tablist>
          </div>
          <p-tabpanels class="w-full">
            <p-tabpanel value="0">
              <div class="flex w-full flex-col space-y-8 py-8">
                <div class="flex flex-col md:flex-row">
                  <div
                    class="order-2 mr-20 mt-8 flex flex-col space-y-2 md:order-1 md:mt-0"
                  >
                    <span class="text-2xl font-semibold"
                      >Select the most suitable tier</span
                    >
                    <div class="text-secondary leading-7">
                      Select the most suitable plan according to your needs
                      among the presented tiers. <br />
                      To cancel a paid subscription select a FREE tier. It will
                      activated after the paid subscription expires. <br />
                      The field Breed is your default breed but you can change
                      it. All amounts from the paid service you buy will be
                      credited to the promotion of the chosen breed and will
                      affect your rating as a patron of this breed.
                    </div>
                  </div>
                  <div class="order-1 ml-auto shrink-0 md:order-2">
                    <bp-major-point
                      name="Your plan"
                      secondaryName="Monthly billing"
                      value="PROFESSIONAL"
                      valueClass="text-accent"
                    />
                    <div class="text-end">
                      <form [formGroup]="entityForm">
                        <bp-form-field [config]="breedConfig">
                          <div
                            class="ml-auto flex items-center space-x-3"
                            pTooltip="Select new breed"
                            tooltipPosition="bottom"
                          >
                            <span
                              class="text-accent text-xl font-bold  uppercase"
                              >{{ entityForm.get('breed')?.value?.Name }}</span
                            >
                            <i class="pi pi-pencil text-secondary-400"></i>
                          </div>
                        </bp-form-field>
                      </form>
                    </div>
                  </div>
                </div>
                <bp-tier-changer [currentTier]="tiers[1]" />
                <!-- Details -->
                <div class="flex flex-col space-y-3 ">
                  <span class="text-2xl font-semibold">Details</span>
                  <div class=" card mt-3 flex flex-auto flex-col p-6 lg:px-8 ">
                    @if (transactions && transactions.length > 0) {
                    <div class="grid">
                      <!-- Header -->
                      <div
                        class=" transaction-grid grid gap-3 border-b border-surface-border px-6 py-3 font-bold text-secondary lg:px-8"
                      >
                        <div class="">Product</div>
                        <div class="hidden md:block">Plan</div>
                        <div class="">Period</div>
                        <div class="hidden sm:block">Status</div>
                        <div class="hidden md:block">Price, $</div>
                      </div>
                      <!-- Rows -->
                      @for ( transaction of transactions; track
                      trackByFn($index, transaction) ) {
                      <ng-container class="">
                        <div
                          class=" transaction-grid grid items-center gap-3 px-6 py-2 bg-card-ground even:bg-even-card-ground lg:px-8"
                        >
                          <div class="">
                            {{ transaction.Product }}
                          </div>
                          <div class="hidden md:block">
                            {{ transaction.Plan }}
                          </div>
                          <div class="">
                            {{ transaction.Period }}
                          </div>
                          <div class="hidden sm:block">
                            {{ transaction.Status }}
                          </div>
                          <div class="hidden md:block">
                            {{ transaction.Price }}
                          </div>
                        </div>
                      </ng-container>
                      }
                    </div>
                    } @else {
                    <span class="text-secondary p-8 text-center  font-medium">
                      There are no paid services yet!
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
                    class="order-2 mr-20 mt-8 flex flex-col space-y-2 md:order-1 md:mt-0"
                  >
                    <span class="text-2xl font-semibold"
                      >View performance details</span
                    >
                    <div class="text-secondary leading-7">
                      You can track your usage of paid services below.
                    </div>
                  </div>
                  <div class="order-1 ml-auto shrink-0 md:order-2">
                    <bp-major-point
                      name="Your plan"
                      secondaryName="Monthly billing"
                      value="PROFESSIONAL"
                      valueClass="text-accent"
                    />
                  </div>
                </div>
                <!-- Details -->
                <div class="flex flex-col space-y-3 ">
                  <span class="text-2xl font-semibold">Details</span>
                  <div class="card mt-3 flex flex-auto flex-col p-6 lg:px-8">
                    @if (tierPerformance && tierPerformance.length > 0) {
                    <div class="grid">
                      <!-- Header -->
                      <div
                        class=" performance-grid grid gap-3 border-b border-surface-border px-6 py-3 font-bold text-secondary lg:px-8"
                      >
                        <div class="">Product</div>
                        <div class="hidden sm:block">Period</div>
                        <div>Status</div>
                      </div>
                      <!-- Rows -->
                      @for ( tier of tierPerformance; track trackByFn($index,
                      tier) ) {
                      <ng-container class="">
                        <div
                          class=" performance-grid grid items-center gap-3  px-6 py-2 bg-card-ground even:bg-even-card-ground lg:px-8"
                        >
                          <div class="">
                            {{ tier.Product }}
                          </div>
                          <div class="hidden sm:block">
                            {{ tier.Period }}
                          </div>
                          <div class="">
                            {{ tier.Status }}
                          </div>
                        </div>
                      </ng-container>
                      }
                    </div>
                    } @else {
                    <span class="text-secondary p-8 text-center  font-medium">
                      There are no paid services yet!
                    </span>
                    }
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
export class BillingFormComponent {
  @HostBinding('class') class = 'card';
  readonly entityForm = new BPFormGroup({});
  breedConfig = {
    ...SPACE_CONFIG_BREED,
    component: FormFieldCode.SELECT,
    id: 'breed',
  };
  tabStore = inject(TabStore);
  activeTab: Signal<MenuItem | null> = this.tabStore.activeTab;
  activeItem!: MenuItem;
  constructor() {
    this.entityForm.addControl(
      'breed',
      new FormControl({ Id: 'testD', Name: 'Chihuahua' }, null)
    );
  }
  trackByFn = trackByFn;
  tiers: ITier[] = TIERS;
  transactions: {
    Period: string;
    Plan: string;
    Price: number;
    Product: string;
    Status: string;
  }[] = [
      {
        Period: 'today',
        Plan: 'test1',
        Price: 2,
        Product: 'Professional',
        Status: 'Active',
      },
    ];
  tierPerformance: {
    Period: string;
    Product: string;
    Status: string;
  }[] = [{ Period: 'today', Product: 'Professional', Status: 'Active' }];
}

export const BillingPage: Route = {
  loadChildren: () => import('./billing.routing').then((m) => m.billingRoutes),
  path: SPACE_URL_BILLING,
  pathMatch: 'full',
};

export const BillingPageMenuItem: MenuItem = {
  icon: 'pi pi-dollar',
  id: 'billing',
  label: 'Billing',
  mode: 'userMenu',
  routerLink: [`/`, URL_MY, SPACE_URL_BILLING],
  visible: true,
};
