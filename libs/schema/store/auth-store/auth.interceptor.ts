import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandlerFn,
  HttpHeaders,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { AuthService } from './auth.service';

export const authInterceptorFn: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  const _authService = inject(AuthService);

  let newReq = req.clone();
  // const newToken =
  //   'CfDJ8IuJadjOAWNFs-YNpZEEK5IEG3KFQeqfUNG0C8PPUWI8IZlIfc65-Ij21bFYDEG1nCfJdbW8ojX601BrjkYdjyXKnn6Q9GpfKSyCVdpbsjeCEoqYktKYpAJ4a7PWVHLsSz6_1SLiy4kMp7AsVfDE8x7zBO9R2oMdzS-zmEPHDk8ZqReM2ziqLTbmN9OVZivKyQ';
  const token = _authService.token();
  if (token) {
    const headers = new HttpHeaders({
      Authorization: token,
      // token,
      // 'access-control-allow-origin': '*',
      // 'access-control-allow-methods': '*',

      'Content-Type': 'application/json',
      // ForceUseSession: 'true',

      // BPMCSRF: newToken,
    });
    newReq = req.clone({
      headers: headers,
    });
  }

  // Response
  // TODO tapResponse
  return next(newReq).pipe(
    catchError(error => {
      // Catch "401 Unauthorized" responses
      if (error instanceof HttpErrorResponse && error.status === 401) {
        // Sign out
        // this._authService.signOut();
        // // Reload the app
        // location.reload();
      }
      return throwError(error);
    })
  );
  // return next(req);
};
