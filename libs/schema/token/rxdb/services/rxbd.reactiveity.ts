import { Injector, Signal, untracked } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RxReactivityFactory } from 'rxdb/plugins/core';

export function createReactivityFactory(
  injector: Injector
): RxReactivityFactory<Signal<any>> {
  return {
    fromObservable(observable$, initialValue: any) {
      return untracked(() =>
        toSignal(observable$, {
          initialValue,
          injector,
          rejectErrors: true,
        })
      );
    },
  };
}
