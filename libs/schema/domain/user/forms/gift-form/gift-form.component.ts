import { CommonModule } from '@angular/common';
import {
  Component,
  HostBinding,
  Signal,
  inject,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Route } from '@angular/router';
import { FormFieldCode } from '@bh/consts';
import {  FormFieldComponent } from '@bh/editing';
import { trackByFn } from '@bh/list';
import { SPACE_URL_GIFT, URL_MY } from '@bh/space-url';
import { WithViewportHeightDirective } from '@bh/viewport';
import { ITier, TIERS } from '@bp/core/consts';
import { TabStore } from '@bp/page-tab-store';
import { SPACE_CONFIG_BREED } from '@breedpride/breed';
import { CardWrapperDirective } from '@breedpride/wrapper';
import { MenuItem } from 'primeng/api';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { TabsModule } from 'primeng/tabs';
import { MajorPointComponent } from '../../lib/major-point/major-point.component';
import { MakeGirtCardComponent } from '../../lib/make-girt-card/make-girt-card.component';
import { TransferGiftComponent } from '../../lib/transfer-gift/transfer-gift.component';
import { BPFormGroup } from '@bh/form';

@Component({
  imports: [
    CommonModule,
    MakeGirtCardComponent,
    AutoCompleteModule,
    TransferGiftComponent,
    MajorPointComponent,
    ReactiveFormsModule,
    FormFieldComponent,
    CardWrapperDirective,
    TabsModule,
  ],
  hostDirectives: [WithViewportHeightDirective],
  providers: [TabStore],
  selector: 'bp-gift-form',
  styles: `
    .receiver-grid {
      grid-template-columns: auto 44px;
      @screen sm {
        grid-template-columns: auto 100px 44px;
      }
      @screen md {
        grid-template-columns: 120px auto 120px 120px;
      }
    }
    .sender-grid {
      grid-template-columns: auto 44px;
      @screen sm {
        grid-template-columns: 100px auto 44px;
      }
      @screen md {
        grid-template-columns: 120px auto 180px 120px;
      }
    }
  `,
  template: `
    <div bpCardWrapper [mode]="'centrated'">
      <div class="w-full max-w-6xl cursor-default caret-transparent">
        <p-tabs value="0" class="flex w-full items-center justify-between">
          <div class="flex w-full items-center justify-between">
            <span class="text-[1.75rem] font-semibold">Gifts</span>
            <p-tablist>
              <p-tab value="0">
                <i class="pi pi-fw pi-gift mr-2"></i>
                <span>My gifts</span></p-tab
              >
              <p-tab value="1">
                <i class="pi pi-fw pi-sync mr-2"></i>
                <span>Gifts for me</span></p-tab
              >
              <!-- <p-tab value="2">
                <i class="pi pi-fw pi-sync mr-2"></i>
                <span>Breed patronage</span></p-tab
              > -->
            </p-tablist>
          </div>
          <p-tabpanels class="w-full">
            <p-tabpanel value="0">
              <div class="flex w-full flex-col space-y-8 py-8 ">
                <div class="flex flex-col md:flex-row">
                  <div
                    class="order-2 mr-20 mt-8 flex flex-col space-y-2 md:order-1 md:mt-0"
                  >
                    <span class="text-2xl font-semibold"
                      >Make a pesent to your friends</span
                    >
                    <div class="text-secondary leading-7">
                      Delight your friends with pleasant gifts. <br />
                      Choose a gift you want to buy. Select an amount of gifts
                      and make a payment. After a payment is processed you will
                      get chosen gifts on your balance and be able to redirect
                      them to your friends. <br />
                      Notice the field Breed from above. This is your default
                      breed but you can change it. All amounts from the presents
                      you buy will be credited to the promotion of the chosen
                      breed and will affect your rating as a patron of this
                      breed.
                    </div>
                  </div>
                  <div class="order-1 ml-auto shrink-0 text-end md:order-2">
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
                <!-- Buy a gift -->
                <bp-make-girt-card [tier]="tiers[1]" />
                <!-- Make a gift -->
                <div class="flex flex-col space-y-3 ">
                  <span class="text-2xl font-semibold">Your gifts balance</span>
                  <div class="w-full sm:flex sm:justify-center">
                    <bp-transfer-gift [tier]="tiers[1]" />
                  </div>
                </div>
                <!-- Details -->
                <div class="flex flex-col space-y-3 ">
                  <span class="text-2xl font-semibold">Gifts history</span>
                  <div class="card mt-3 flex flex-auto flex-col p-6 lg:px-8">
                    @if (giftReceivers && giftReceivers.length > 0) {
                    <div class="grid">
                      <!-- Header -->
                      <div
                        class=" receiver-grid grid gap-3 border-b border-surface-border px-6 py-3 font-bold text-secondary lg:px-8"
                      >
                        <div class="hidden md:block">Date</div>
                        <div class="">User</div>
                        <div class="hidden sm:block">Anonymously</div>
                        <div>Amount</div>
                      </div>
                      <!-- Rows -->
                      @for ( receiver of giftReceivers; track trackByFn($index,
                      receiver) ) {
                      <ng-container class="">
                        <div
                          class=" receiver-grid grid items-center gap-3 bg-card-ground even:bg-even-card-ground px-6 py-2  lg:px-8"
                        >
                          <div class="hidden md:block">
                            {{ receiver.Date }}
                          </div>
                          <div class="">
                            {{ receiver.Name }}
                          </div>
                          <div class="hidden sm:block">
                            @if (!!receiver.Anonymously) {
                            <i
                              class="pi pi-check text-secondary-400 font-semibold"
                            ></i>
                            }
                          </div>
                          <div class="">
                            {{ receiver.Value }}
                          </div>
                        </div>
                      </ng-container>
                      }
                    </div>
                    } @else {
                    <span class="text-secondary p-8 text-center  font-medium">
                      There are no gifts yet!
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
                      >Enjoy your presents</span
                    >
                    <div class="text-secondary leading-7">
                      You can hide Users' names in your Settings and receive
                      gifts anonymously.
                    </div>
                  </div>
                  <div class="order-1 ml-auto shrink-0 md:order-2">
                    <bp-major-point
                      name="Presents"
                      secondaryName="your total gifts amount"
                      value="24"
                      valueClass="text-accent"
                    />
                  </div>
                </div>
                <!-- Details -->
                <div class="flex flex-col space-y-3 ">
                  <span class="text-2xl font-semibold">Details</span>
                  <div class="card mt-3 flex flex-auto flex-col p-6 lg:px-8">
                    @if (giftSenders && giftSenders.length > 0) {
                    <div class="grid">
                      <!-- Header -->
                      <div
                        class=" sender-grid grid gap-3 border-b border-surface-border px-6 py-3 font-bold text-secondary lg:px-8"
                      >
                        <div class="hidden sm:block">Date</div>
                        <div class="hidden md:block">User</div>
                        <div class="">Product</div>
                        <div>Amount</div>
                      </div>
                      <!-- Rows -->
                      @for ( sender of giftSenders; track trackByFn($index,
                      sender) ) {
                      <ng-container class="">
                        <div
                          class=" sender-grid grid items-center gap-3 px-6 py-2 bg-card-ground even:bg-even-card-ground lg:px-8"
                        >
                          <div class="hidden sm:block">
                            {{ sender.Date }}
                          </div>
                          <div class="hidden md:block">
                            {{ sender.Name }}
                          </div>
                          <div class="">
                            {{ sender.Product }}
                          </div>
                          <div class="">
                            {{ sender.Value }}
                          </div>
                        </div>
                      </ng-container>
                      }
                    </div>
                    } @else {
                    <span class="text-secondary p-8 text-center  font-medium">
                      There are no gifts yet!
                    </span>
                    }
                  </div>
                </div>
              </div></p-tabpanel
            >
            <!-- <p-tabpanel value="2">
              <div class="flex w-full flex-col space-y-8 py-8 ">
                <div class="flex flex-col md:flex-row">
                  <div class="order-2 mr-20 flex flex-col space-y-2 md:order-1">
                    <span class="text-2xl font-semibold"
                      >Support your favorite breed</span
                    >
                    <div class="text-secondary leading-7">
                      All payments you make in the system directly affect the
                      level of support for your favorite breed. You can make an
                      even bigger contribution by donating additional funds
                      directly to the breed.
                    </div>
                  </div>
                  <div class="order-1 ml-auto shrink-0 md:order-2">
                    <bp-major-point
                      name="Presents"
                      secondaryName="your total gifts amount"
                      value="24"
                      valueClass="text-accent"
                    />
                  </div>
                </div> -->
            <!-- Details -->
            <!-- <div class="flex flex-col space-y-3 ">
                  <span class="text-2xl font-semibold">Details</span>
                </div>
              </div></p-tabpanel
            > -->
          </p-tabpanels>
        </p-tabs>
      </div>
    </div>
  `,
})
export class GiftFormComponent {
  @HostBinding('class') class = 'card';
  readonly entityForm = new BPFormGroup({});
  breedConfig = {
    ...SPACE_CONFIG_BREED,
    component: FormFieldCode.SELECT,
    id: 'breed',
  };
  giftReceivers: {
    Anonymously: boolean;
    Date: string;
    Name: string;
    Value: number;
  }[] = [{ Anonymously: true, Date: 'today', Name: 'test1', Value: 2 }];
  giftSenders: {
    Date: string;
    Name: string;
    Product: string;
    Value: number;
  }[] = [{ Date: 'today', Name: 'test1', Product: 'Professional', Value: 2 }];
  trackByFn = trackByFn;
  tiers: ITier[] = TIERS;
  tabStore = inject(TabStore);
  activeTab: Signal<MenuItem | null> = this.tabStore.activeTab;
  activeItem!: MenuItem;
  constructor() {
    this.entityForm.addControl(
      'breed',
      new FormControl({ Id: 'testD', Name: 'Chihuahua' }, null)
    );
    this.tabStore.patchTabs([
      {
        fragment: 'myGifts',
        icon: 'pi pi-fw pi-gift',
        id: 'myGifts',
        label: 'My gifts',
      },
      {
        icon: 'gift-in',
        fragment: 'giftsForMe',
        id: 'giftsForMe',
        label: 'Gifts for me',
      },
      // {
      //   icon: 'breed',
      //   fragment: 'breedGifts',
      //   id: 'breedGifts',
      //   label: 'Breed patronage',
      // },
    ]);
  }
}

export const GiftPage: Route = {
  loadChildren: () => import('./gift.routing').then((m) => m.giftRoutes),
  path: SPACE_URL_GIFT,
  pathMatch: 'full',
};

export const GiftPageMenuItem: MenuItem = {
  icon: 'pi pi-gift',
  id: 'gifts',
  label: 'Gifts',
  mode: 'userMenu',
  routerLink: [`/`, URL_MY, SPACE_URL_GIFT],
  visible: true,
};
