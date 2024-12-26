import { effect } from '@angular/core';
import { signalStoreFeature, type, withHooks, withState } from '@ngrx/signals';
import { injectFilterFormGroup, injectFiltersStore } from './filters.token';


export function withFilterStoreFilter() {
  return signalStoreFeature(
    {
      methods: type<{ loadFirstPage(filter: any): void }>(),
    },
    withState({}),
    withHooks({
      onInit(
        store,
        filterStore = injectFiltersStore(),
        form = injectFilterFormGroup()
      ) {
        effect(
          () => {
            const ready = form.filterReady;
            if (ready && ready()) {
              const combinedFilter = filterStore.getFilters();
              store.loadFirstPage(combinedFilter);
            }
          },

        );
      },
    })
  );
}
