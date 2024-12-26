import { Route } from '@angular/router';
import { EDIT_MODE } from '@bh/collection-store';
import { authGuardFn } from '@bp/auth-store';
import { BasePageComponent } from '@breedpride/page-template';
import { createInjectionToken } from 'ngxtension/create-injection-token';

export const [, , CHILDREN_TOKEN] = createInjectionToken(() => [
  {
    canActivate: [authGuardFn],
    // canDeactivate: [editorGuardFn],
    path: '',
    component: BasePageComponent,
    children: [
      {
        path: 'pet',
        loadChildren: () =>
          import('./entities/edit-pet.routing').then(m => m.editPetRoutes),
      },
      {
        path: 'litter',
        loadChildren: () =>
          import('./entities/edit-litter.routing').then(
            m => m.editLitterRoutes
          ),
      },
    ],
    providers: [{ provide: EDIT_MODE, useValue: true }],
  },
]);

export const editRoutes: Route[] = [
  {
    canActivate: [authGuardFn],
    // canDeactivate: [editorGuardFn],
    path: '',
    component: BasePageComponent,
    children: [
      {
        path: 'pet',
        loadChildren: () =>
          import('./entities/edit-pet.routing').then(m => m.editPetRoutes),
      },
      {
        path: 'litter',
        loadChildren: () =>
          import('./entities/edit-litter.routing').then(
            m => m.editLitterRoutes
          ),
      },
    ],
    providers: [],
  },
];

// @defer (when (entityModel() === 'Contact')) {
//       <bp-settings-form [entityPage]="entityPage()" />
//     }
//     @defer (when (entityModel() === 'Pet')) {
//       <bp-pet-form [entityPage]="entityPage()" />
//     }
//     @defer (when (entityModel() === 'Litter')) {
//       <bp-litter-form [entityPage]="entityPage()" />
//     }
//     @defer (when (entityModel() === 'Cover')) {
//       <bp-cover-form [entityPage]="entityPage()" />
//     }
