import { computed } from '@angular/core';
import { signalStoreFeature, withComputed, withState } from '@ngrx/signals';

// TODO - for some status with connection to total or next page
// TODO - cleanup
export type RequestStatus =
  | 'fulfilled'
  | 'idle'
  | 'pending'
  | { error: string };

export type RequestStatusState = { requestStatus: RequestStatus };


export function withRequestStatus() {
  return signalStoreFeature(
    withState<RequestStatusState>(setIdle()),
    withComputed(({ requestStatus }) => ({
      error: computed(() => {
        const status = requestStatus();
        return typeof status === 'object' ? status.error : null;
      }),
      isFulfilled: computed(() => requestStatus() === 'fulfilled'),
      isLoading: computed(() => requestStatus() === 'pending'),
      isPending: computed(() => requestStatus() === 'pending'),
    }))
  );
}
export function setPending(): RequestStatusState {
  return { requestStatus: 'pending' };
}

export function setFulfilled(): RequestStatusState {
  return { requestStatus: 'fulfilled' };
}

export function setError(error: string): RequestStatusState {
  return { requestStatus: { error } };
}
export function setIdle(): RequestStatusState {
  return { requestStatus: 'idle' };
}
