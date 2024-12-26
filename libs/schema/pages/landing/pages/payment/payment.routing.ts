import { ActivatedRouteSnapshot, Params, Route } from '@angular/router';
import { PaymentComponent } from './payment.component';

export const paymentRoutes: Route[] = [
  {
    component: PaymentComponent,
    path: '',
    resolve: {
      queryParams: (route: ActivatedRouteSnapshot): Params => route.queryParams,
    },
  },
];
