import { Route } from '@angular/router';

import { AdminSpaceComponent } from './new-space.component';

export const adminSpacesRoutes: Route[] = [
  {
    path: 'admin',
    resolve: {},
    children: [
      {
        path: '**',
        component: AdminSpaceComponent,
      },
    ],
  },
];
