import {
  HttpEvent,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable, finalize } from 'rxjs';
import { LoadingStoreV2 } from './loading.service';

export const loadingInterceptorFn: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  const loadingService = inject(LoadingStoreV2);
  const handleRequestsAutomatically = loadingService.auto();
  if (!handleRequestsAutomatically) {
    return next(req);
  }
  loadingService.setLoadingStatus(true, req.url);
  return next(req).pipe(
    finalize(() => {
      // Set the status to false if there are any errors or the request is completed
      loadingService.setLoadingStatus(false, req.url);
    })
  );
};
