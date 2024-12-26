import { Provider } from '@angular/core';
import { Route } from '@angular/router';
import {
  SORT_RATING_NAME,
  SORT_YOUNG_BIRTH,
  provideEntitiesSort,
} from '@bh/collection-sorting';
import { signalStore, signalStoreFeature, withState } from '@ngrx/signals';
import { AdminSpaceComponent } from '@breedpride/space-generator';
import {
  PRIVATE_SPACE_PREFIX,
  providePrivateSpaceIdPrefix,
} from './space-prefix.token';

export const RoutesStore = signalStore(    { protectedState: false },withState({ routes: [] }));

export const RouteStore = signalStore(    { protectedState: false },withState<Route>({}));

export const withRoute = function (config: Route | { providers: Provider[] }) {
  console.log(config);
  return signalStoreFeature(withState(config));
};

export const workspaceRoutes: Route[] = [
  {
    // -----------------------------------------------------------------------------------------------------
    // Private Page Routes
    // -----------------------------------------------------------------------------------------------------
    providers: [providePrivateSpaceIdPrefix],
    component: AdminSpaceComponent,
    path: PRIVATE_SPACE_PREFIX,
  },
  {
    // -----------------------------------------------------------------------------------------------------
    // Public Page Routes
    // -----------------------------------------------------------------------------------------------------
    path: 'public',
    // component: NewSpaceComponent,
    children: [
      {
        path: 'pets',
        data: {
          id: 'pet', // space id
          views: ['list', 'grid'],
        },
        providers: [provideEntitiesSort([SORT_RATING_NAME, SORT_YOUNG_BIRTH])],
        component: AdminSpaceComponent,
      },
    ],
  },
];
