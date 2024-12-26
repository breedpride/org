import type { FilterGroup } from '@bh/superfield';
import { signalStoreFeature, withState } from '@ngrx/signals';
export type WithFilterQuery = { filterQuery: FilterGroup | null };
export const emptyFilterQuery: FilterGroup = {
  logicalOperation: 0,
  filter: null,
};

export function withFilterQuery() {
  return signalStoreFeature(
    withState<WithFilterQuery>({ filterQuery: emptyFilterQuery })
  );
}
