import { Route } from '@angular/router';
import { SignInComponent } from './sign-in.component';

export const authSignInRoutes: Route[] = [
  {
    component: SignInComponent,
    path: '',
  },
];
