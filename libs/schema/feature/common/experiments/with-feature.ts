import { HttpErrorResponse } from '@angular/common/http';
import { PartialStateUpdater, WritableStateSource } from '@ngrx/signals';
import {
  InnerSignalStore,
  SignalStoreFeature,
  SignalStoreFeatureResult,
} from '@ngrx/signals/src/signal-store-models';
import { Observable } from 'rxjs';
import { DeepReadonly } from 'ts-essentials';
import { HttpRequestError } from '../dynamic/http-request-state.model';

export function withFeature<
  Input extends SignalStoreFeatureResult,
  ActionName extends string,
  RxParams = void
>(options: {
  actionName: ActionName;
  extractHttpErrorMessageFn?: (
    error: DeepReadonly<HttpErrorResponse>
  ) => HttpRequestError;
  service: (
    store: InnerSignalStore<Input['state']> &
      Input['methods'] &
      Input['props'] &
      WritableStateSource<{}>,
    rxParams: RxParams
  ) => Observable<
    Array<Partial<Input['state'] & {}> | PartialStateUpdater<Input['state']>>
  >;
}): SignalStoreFeature<Input> {
  return null as any;
}
