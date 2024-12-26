import { Provider } from '@angular/core';
import { withFilledNamedCollection } from  "@bh/collection-data";
import { EntitiesView } from '@bh/superfield';
import { signalStore, type } from '@ngrx/signals';
import { EntityId } from '@ngrx/signals/entities';
import { createInjectionToken } from 'ngxtension/create-injection-token';
import { DEFAULT_LIST } from './view.const';

export const [, , VIEW_CONFIG] = createInjectionToken(() => [DEFAULT_LIST]);

function viewStoreFactory(data: EntitiesView[]) {
  const V = signalStore(
    { protectedState: false },
    withFilledNamedCollection<EntitiesView, 'view'>({
      entity: type<EntitiesView>(),
      collection: 'view' as const,
      selectId: (c: EntitiesView): EntityId => c.id,
      data,
    })
  );
  return new V();
}

export const [injectViewsStore, provideViewsStore, VIEWS_STORE] =
  createInjectionToken(viewStoreFactory, {
    isRoot: false,
    deps: [VIEW_CONFIG],
  });

export const provideEntitiesViews = (value: EntitiesView[]): Provider[] => [
  {
    provide: VIEW_CONFIG,
    useValue: [...value],
  },
  provideViewsStore(),
];
