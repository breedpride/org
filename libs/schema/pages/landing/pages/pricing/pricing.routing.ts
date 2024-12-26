import { ActivatedRouteSnapshot, Params, Route } from '@angular/router';
import { PricingComponent } from './pricing.component';

export const pricingModernRoutes: Route[] = [
  {
    component: PricingComponent,
    path: '',
    resolve: {
      queryParams: (route: ActivatedRouteSnapshot): Params => route.queryParams,
    },
  },
];
