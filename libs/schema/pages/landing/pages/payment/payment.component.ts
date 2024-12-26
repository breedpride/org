import { CommonModule, DOCUMENT } from '@angular/common';
import {
  Component,
  Inject,
  Input,
  Renderer2,
  inject,
} from '@angular/core';
import { Params, Route, Router } from '@angular/router';
import { ITier, TIERS } from '@bp/core/consts';
import { AuthService } from '@bp/auth-store';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import {
  THREE_YEARLY_NUMBER,
  YEARLY_NUMBER,
} from '../../lib/tier-selector/pricing.consts';
import { PrePaymentComponent } from '../../pages/prepayment/prepayment.component';

@Component({
  imports: [CommonModule],
  providers: [DialogService, DynamicDialogRef],
  selector: 'bp-payment',
  styles: [],
  template: ` <div id="checkout-container"></div>`,
})
export class PaymentComponent {
  user = inject(AuthService).user;
  protected dialogService = inject(DialogService);
  router = inject(Router);
  // breed url or id
  @Input() breed!: string;
  @Input() product!: string;
  @Input() billingType!: number;
  @Input() queryParams!: Params;
  tiers: ITier[] = TIERS;
  ref!: DynamicDialogRef;
  fondy: any;
  constructor(
    // private splashService: SplashScreenService,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.loadExternalScript('/assets/lib/checkout.js').then(() => {
      if (typeof (window as any).fondy === 'function') {
        this.fondy = (window as any).fondy;
        this.show();
      } else {
        console.error('externalFunction is not defined in the loaded script.');
      }
    });
  }
  private loadExternalScript(scriptUrl: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const script = this.renderer.createElement('script');
      script.src = scriptUrl;
      script.onload = resolve; // Resolve the promise when the script has loaded
      script.onerror = reject; // Handle errors if the script fails to load

      this.renderer.appendChild(this.document.body, script);
    });
  }

  showBreedSelect() {
    this.ref = this.dialogService.open(PrePaymentComponent, {
      closable: false,
      header: 'Select breed',
      modal: false,
    });

    // TODO unsubscribe
    this.ref.onClose.subscribe((e) => {
      if (e) {
        // this.filterStore.filterForm.prepareFormWithoutSignal();
        // this.prepareView();
        console.log(e);
        // this.breed = e;
        // this.showPayment(tier);
      }
    });
  }

  show() {
    console.log(this.breed);
    console.log(this.product);
    console.log(this.billingType);
    const tier: ITier | undefined = this.tiers.find(
      (e) => e.name === this.product
    );
    console.log(this.queryParams);
    console.log(tier);
    if (tier) {
      if (!this.breed) {
        this.router.navigate(['../', 'prepayment'], {
          queryParams: {
            ...this.queryParams,
          },
        });

        // this.showBreedSelect(tier);
      } else {
        this.showPayment(tier);
      }
    } else {
      // TODO gift payment flow
      const test = {
        amount: 1000,
      };
      const Options = {
        options: {
          active_tab: 'card',
          button: true,
          card_icons: ['mastercard', 'visa', 'maestro'],
          fields: false,
          full_screen: true,
          link: 'https://shop.com',
          methods: ['card', 'wallets'],
          methods_disabled: ['banklinks_eu', 'local_methods'],
          title: 'Demo subscription checkout',
        },
        params: {
          amount: test.amount,
          currency: 'USD',
          lang: 'en',
          merchant_data: this.breed,
          merchant_id: 1396424,
          order_desc: 'Gifts',
          product_id: this.product,
          required_rectoken: 'y',
          sender_email: this.user().email,
          server_callback_url: 'https://addmessage-g5gclys73a-uc.a.run.app/',
        },
      };
      this.fondy('#checkout-container', Options);
    }
  }

  private showPayment(tier: ITier) {
    const count =
      this.billingType == THREE_YEARLY_NUMBER
        ? 36
        : this.billingType == YEARLY_NUMBER
          ? 12
          : 1;
    const price =
      tier.prices[this.billingType].value * count ||
      this.queryParams['customPrice'];
    const startDate = new Date();
    const startDateString = startDate.toLocaleDateString('fr-CA');
    const endDateString = new Date(
      startDate.setMonth(startDate.getMonth() + count)
    ).toLocaleDateString('fr-CA');
    console.log(startDateString, endDateString);

    const test = {
      amount: Math.round(price * 100),
      end_time: endDateString,
      every: count,
      start_time: startDateString,
    };

    const Options = {
      options: {
        active_tab: 'card',
        button: true,
        card_icons: ['mastercard', 'visa', 'maestro'],
        // email: true,
        fields: false,
        full_screen: true,
        link: 'https://shop.com',

        methods: ['card', 'wallets'],
        methods_disabled: ['banklinks_eu', 'local_methods'],
        subscription: {
          periods: ['week', 'month', 'day'],
          readonly: true,
          type: 'shown_readonly',
        },
        title: 'Demo subscription checkout',
      },
      params: {
        amount: test.amount,
        currency: 'USD',
        lang: 'en',
        merchant_data: JSON.stringify({
          breed: this.breed,
          every: test.every,
        }),
        merchant_id: 1396424,
        order_desc: 'Demo subscription',
        product_id: this.product,
        recurring_data: {
          amount: test.amount,
          // end_time: test.end_time,
          every: test.every,
          period: 'month',
          start_time: test.start_time,
        },
        required_rectoken: 'y',
        sender_email: this.user().email,
        server_callback_url: 'https://addmessage-g5gclys73a-uc.a.run.app/',
      },
    };

    this.fondy('#checkout-container', Options);
  }
}

export const PaymentPage: Route = {
  loadChildren: () => import('./payment.routing').then((m) => m.paymentRoutes),
  path: 'payments',
  pathMatch: 'full',
};
