import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from './auth.service';
import { Observable, of, switchMap } from 'rxjs';

export const noAuthGuardFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean | Observable<boolean> | Promise<boolean> => {
  const authService = inject(AuthService);
  const _router = inject(Router);
  const redirectURL = '/my/profile';
  return authService.check().pipe(
    switchMap((authenticated) => {
      if (authenticated) {
        console.log('UAUTH with redirect');
        //TODO create notification that you are allready
        _router.navigate([redirectURL], {});
        return of(false);
      }
      return of(true);
    })
  );
};
