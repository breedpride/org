import { Route } from '@angular/router';

import { PATH_SPACE_TOKENS } from '@bh/app/space';
import { MATING, URL_MY } from '@bh/space-url';
import { authGuardFn, noAuthGuardFn } from '@bp/auth-store';
import {
  withActiveFullscreen,
  withInactiveFullscreen,
} from '@breedpride/fullscreen-ui';
import {
  AboutUsPage,
  ApplicationPage,
  HomePage,
  PaymentPage,
  PrePaymentPage,
  PricingPage,
  PrivacyPolicyPage,
  ProductPage,
  TermsAndConditionsPage,
} from '@breedpride/landing';
import { landingMenu } from '@breedpride/layout';
import { LAYOUT_TYPE, MENU, MENU_ORIENTATION } from '@bh/app/tokens';
import { publicRoutes } from '@breedpride/page';
import {
  ConfirmationRequiredPage,
  ForgotPasswordPage,
  ResetPasswordPage,
  SignInPage,
  SignOutPage,
  SignUpPage,
} from '@breedpride/schema/pages/auth';
import { error404Page, error500Page } from '@breedpride/schema/pages/error';
import {
  adminSpacesRoutes,
  buildSpaceRouteWithKey,
} from '@breedpride/space-generator';
import { workspaceRoutes } from 'libs/schema/pages/new-structure/workspaces.routing';

const withDynamicLayout = {
  loadComponent: () =>
    import('@breedpride/layout').then(m => m.AppLayoutComponent),
};
const withDynamicEmptyLayout = {
  loadComponent: () =>
    import('@breedpride/layout').then(m => m.EmptyLayoutComponent),
};
// app-routes.ts
// import { Injectable } from '@angular/core';
// import { RoutePathBuilder } from '@ngspot/route-path-builder';
import { EDIT_MODE } from '@bh/collection-store';
import { WHITE_LOGO } from '@bh/app/tokens';
import { provideService } from '@bh/collection-store';

// @Injectable({ providedIn: 'any' })
// export class AppRoutes extends RoutePathBuilder {
//   // products = this.childRoutes('products', RoutesForProducts);

//   about() {
//     return this.url('home');
//   }

//   contact() {
//     return this.url('contact');
//   }
// }

// const injector = inject(Injector);
export const appRoutes: Route[] = [
  // -----------------------------------------------------------------------------------------------------
  // @ New Workspaces
  // -----------------------------------------------------------------------------------------------------
  ...workspaceRoutes,
  // -----------------------------------------------------------------------------------------------------
  // @ My
  // -----------------------------------------------------------------------------------------------------
  {
    canActivate: [authGuardFn],
    ...withDynamicLayout,
    loadChildren: () => import('@bp/organism/my-spaces').then(m => m.myRoutes),
    path: URL_MY,
  },
  // newSpaceRoute,
  // -----------------------------------------------------------------------------------------------------
  // @ Home
  // -----------------------------------------------------------------------------------------------------
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  // -----------------------------------------------------------------------------------------------------
  // @ 404 500
  // -----------------------------------------------------------------------------------------------------
  {
    children: [error404Page, error500Page],
    ...withDynamicLayout,
    path: '',
  },
  // -----------------------------------------------------------------------------------------------------
  // @ starter page after login
  // -----------------------------------------------------------------------------------------------------
  {
    path: 'signed-in-redirect',
    pathMatch: 'full',
    redirectTo: 'test-pet',
  },
  // -----------------------------------------------------------------------------------------------------
  // @ UnAuthed
  // -----------------------------------------------------------------------------------------------------
  {
    canActivate: [noAuthGuardFn],
    children: [
      ForgotPasswordPage,
      ResetPasswordPage,
      SignInPage,
      SignUpPage,
      ConfirmationRequiredPage,
    ],
    ...withDynamicEmptyLayout,
    // component: EmptyLayoutComponent,
    path: '',
  },
  // -----------------------------------------------------------------------------------------------------
  // @ Sign Out
  // -----------------------------------------------------------------------------------------------------
  {
    canActivate: [authGuardFn],
    children: [SignOutPage],
    ...withDynamicEmptyLayout,
    // component: EmptyLayoutComponent,
    path: '',
  },
  PaymentPage,
  PrePaymentPage,
  // -----------------------------------------------------------------------------------------------------
  // @ pricing
  // -----------------------------------------------------------------------------------------------------

  {
    children: [PricingPage],
    ...withDynamicLayout,
    data: {
      whiteLogo: true,
    },
    path: '',
    providers: [
      { provide: WHITE_LOGO, useValue: true },
      { provide: MENU, useValue: landingMenu },
      { provide: MENU_ORIENTATION, useValue: 'horizontal' },
      { provide: LAYOUT_TYPE, useValue: 'home' },
    ],
  },
  // -----------------------------------------------------------------------------------------------------
  // @ Landing
  // -----------------------------------------------------------------------------------------------------
  {
    children: [
      HomePage,
      AboutUsPage,
      TermsAndConditionsPage,
      PrivacyPolicyPage,
      ApplicationPage,
      ProductPage,
    ],
    ...withDynamicLayout,
    data: {
      whiteLogoo: false,
    },
    path: '',
    providers: [
      { provide: MENU, useValue: landingMenu },
      { provide: MENU_ORIENTATION, useValue: 'horizontal' },
      { provide: LAYOUT_TYPE, useValue: 'home' },
    ],
  },

  // -----------------------------------------------------------------------------------------------------
  // @ Workspaces
  // -----------------------------------------------------------------------------------------------------
  {
    canActivate: [authGuardFn],
    ...withDynamicLayout,
    loadChildren: () => import('@breedpride/pet').then(m => m.matingRoutes),
    path: MATING,
    pathMatch: 'full',
  },
  // -----------------------------------------------------------------------------------------------------
  // @ Workspaces
  // -----------------------------------------------------------------------------------------------------
  // ...publicSpacesRoutes,
  // {
  //   path: '',
  //   // ...withDynamicLayout,
  //   component: AppLayoutComponent,
  //   children: [...getPublicSpageRoutes({})],
  //   providers: [withInactiveFullscreen],
  // },

  {
    path: '',
    ...withDynamicLayout,
    // component: AppLayoutComponent,
    children: [...buildSpaceRouteWithKey(PATH_SPACE_TOKENS, {})],
    providers: [withInactiveFullscreen, provideService()],
  },

  // -----------------------------------------------------------------------------------------------------
  // @ Edit and create page
  // -----------------------------------------------------------------------------------------------------
  {
    ...withDynamicLayout,
    // component: AppLayoutComponent,
    loadChildren: () =>
      import('libs/schema/pages/edit/edit-v2.routing').then(m => m.editRoutes),
    path: 'edit',
    providers: [{ provide: EDIT_MODE, useValue: true }, withActiveFullscreen],
  },
  // -----------------------------------------------------------------------------------------------------
  // @Public pages
  // -----------------------------------------------------------------------------------------------------
  ...adminSpacesRoutes,
  {
    ...withDynamicLayout,
    //component: AppLayoutComponent,
    providers: [withActiveFullscreen],
    loadChildren: () => [publicRoutes],
    path: '',
  },
  // -----------------------------------------------------------------------------------------------------
  // 404
  // -----------------------------------------------------------------------------------------------------
  // {
  //   path: '**',
  //   pathMatch: 'full',
  //   redirectTo: '404-not-found',
  // },
];
