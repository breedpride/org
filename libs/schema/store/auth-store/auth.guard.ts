import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from './auth.service';
import { Observable, of, switchMap } from 'rxjs';

export const authGuardFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean | Observable<boolean> | Promise<boolean> => {
  const authService = inject(AuthService);
  const _router = inject(Router);
  const redirectURL = state.url === '/sign-out' ? '/' : state.url;
  return authService.check().pipe(
    switchMap(authenticated => {
      // If the user is not authenticated...
      if (!authenticated) {
        // Redirect to the sign-in page
        console.log(authenticated);
        console.log('Redirecting to sign-in page!!!!!!!!');
        _router.navigate(['sign-in'], {
          queryParams: { redirectURL },
        });

        // Prevent the access
        return of(false);
      }

      // Allow the access
      return of(true);
    })
  );
};
