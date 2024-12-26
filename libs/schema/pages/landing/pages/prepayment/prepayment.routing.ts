import { ActivatedRouteSnapshot, Params, Route } from '@angular/router';
import { PrePaymentComponent } from './prepayment.component';

export const breedSelectRoutes: Route[] = [
  {
    component: PrePaymentComponent,
    path: '',
    resolve: {
      queryParams: (route: ActivatedRouteSnapshot): Params => route.queryParams,
    },
  },
];
