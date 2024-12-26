import { Route } from '@angular/router';
import { WelcomePageComponent } from './welcome-page.component';
import { WelcomeService } from './welcome.service';

export const welcomRoutes: Route[] = [
  {
    component: WelcomePageComponent,
    path: '',
    providers: [WelcomeService],
  },
];
