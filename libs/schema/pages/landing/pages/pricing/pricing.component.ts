import { CommonModule } from '@angular/common';
import {
  Component,
  inject,
  input,
  signal,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Params, Route, Router, RouterModule } from '@angular/router';
import { ITier, TIERS } from '@bp/core/consts';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProgressBarModule } from 'primeng/progressbar';
import { RatingModule } from 'primeng/rating';
import { SliderModule } from 'primeng/slider';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { FeatureTierComponent } from '../../lib/feature-tier/feature-tier.component';
import { FooterComponent } from '../../lib/footer/footer.component';
import {
  MONTHLY_NUMBER,
  THREE_YEARLY_NUMBER,
  YEARLY_NUMBER,
} from '../../lib/tier-selector/pricing.consts';
import { TierSelectorComponent } from '../../lib/tier-selector/tier-selector.component';
import { FEATURE_BLOCKS } from './feature-blocks';
import { FondyService } from './fondy.service';

declare const $ipsp: any; // Declare the global variable from the script
declare const fondy: any; // Declare the global variable from the script
@Component({

  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularSvgIconModule,
    TableModule,
    CalendarModule,
    SliderModule,
    DialogModule,
    MultiSelectModule,
    ContextMenuModule,
    DropdownModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    ProgressBarModule,
    RatingModule,
    CardModule,
    FooterComponent,
    BadgeModule,
    FeatureTierComponent,
    TierSelectorComponent,
  ],
  selector: 'bp-pricing',
  styleUrls: ['./pricing.component.scss'],
  templateUrl: './pricing.component.html',
})
export class PricingComponent {
  // TODO rework with signal
  billingType = signal(0);
  fondyService = inject(FondyService);

  monthly: number = MONTHLY_NUMBER;
  questions = [
    {
      header: 'What payment methods do you accept?',
      text: 'We accept all major credit cards!',
    },
    {
      header: 'What is the duration of a free usage of the app?',
      text: 'Free tier is free forever.',
    },
    {
      header: 'How to setup the PWA application on a phone?',
      text: 'Iphone. Navigate to the site in Safari. Press the "Share" button and select "Add to Home Screen" from the popup. Tap "Add" in the top right corner to finish installing the PWA. Android. Open Chrome on your device. Go to a website with a PWA that you want to install. Tap Install. Follow the on-screen instructions.',
    },
    {
      header: 'What is the breed support level?',
      text: "The support level of a breed depends on the number of paid users per month — the more paid users in a breed, the higher the level of support. There are 5 main goals in a breed. Each goal opens up new opportunities for the breed's users.",
    },
  ];
  featureBlocks = FEATURE_BLOCKS;
  threeYearly: number = THREE_YEARLY_NUMBER;
  tiers: ITier[] = TIERS;

  yearly: number = YEARLY_NUMBER;

  // get price by price type
  getPrice(type: number, tier: ITier): number {
    return tier.prices[type].value;
  }
  queryParams = input<Params>();
  private router = inject(Router);

  startPayment(tier: { name: any }) {
    console.log('startPayment with NAVIGATE', tier);
    this.router.navigate(['../', 'payments'], {
      queryParams: {
        ...this.queryParams(),
        billingType: this.billingType(),
        product: tier.name,
      },
    });
  }
}

export const PricingPage: Route = {
  loadChildren: () =>
    import('./pricing.routing').then((m) => m.pricingModernRoutes),
  path: 'pricing',
  pathMatch: 'full',
};
