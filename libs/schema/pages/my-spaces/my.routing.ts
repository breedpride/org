import { Route } from '@angular/router';
import { MY_PATH_SPACE_CONFIGS_TOKEN } from '@bh/app/space';
import { BillingPage, CalendarPage, GiftPage, ReferralPage } from '@bh/user';
import { WelcomePage } from '@breedpride/quest';
import { buildSpaceRouteWithKey } from '@breedpride/space-generator';

export const myRoutes: Route[] = [
  ...buildSpaceRouteWithKey(MY_PATH_SPACE_CONFIGS_TOKEN, {}),
  WelcomePage,
  ReferralPage,
  BillingPage,
  GiftPage,
  CalendarPage,
];
