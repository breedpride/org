import { Route } from '@angular/router';
import { MatingPageComponent } from './mating-page.component';

export const matingRoutes: Route[] = [
  {
    component: MatingPageComponent,
    path: '',
    runGuardsAndResolvers: 'pathParamsOrQueryParamsChange',
  },
];
