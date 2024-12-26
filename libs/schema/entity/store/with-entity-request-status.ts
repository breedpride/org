import { computed } from '@angular/core';
import { RequestStatus } from '@bp/with-request-status';

import { signalStoreFeature, withComputed, withState } from '@ngrx/signals';

// TODO - rework make with sach as in DataService
export type EntityRequestStatusState = { entityRequestStatus: RequestStatus };


export function withEntityRequestStatus() {
  return signalStoreFeature(
    withState<EntityRequestStatusState>(setEntityIdle()),
    withComputed(({ entityRequestStatus }) => ({
      error: computed(() => {
        const status = entityRequestStatus();
        return typeof status === 'object' ? status.error : null;
      }),
      isEntityFulfilled: computed(() => entityRequestStatus() === 'fulfilled'),
      isEntityLoading: computed(() => entityRequestStatus() === 'pending'),
      isEntityPending: computed(() => entityRequestStatus() === 'pending'),
    }))
  );
}
export function setEntityPending(): EntityRequestStatusState {
  return { entityRequestStatus: 'pending' };
}

export function setEntityFulfilled(): EntityRequestStatusState {
  return { entityRequestStatus: 'fulfilled' };
}

export function setEntityError(error: string): EntityRequestStatusState {
  return { entityRequestStatus: { error } };
}
export function setEntityIdle(): EntityRequestStatusState {
  return { entityRequestStatus: 'idle' };
}
