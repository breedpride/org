import { inject } from '@angular/core';
import { signalStoreFeature, withMethods } from '@ngrx/signals';
import { UserService } from '@bh/user-store';


export function withFields(config?: any) {
  return signalStoreFeature(
    // {
    //   state: type<WithSpaceConfig>(),
    // },
    withMethods((store, userService = inject(UserService)) => ({
      pre(): void {},
    }))
  );
}
