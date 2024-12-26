import { Signal } from '@angular/core';
import { withSelectedEntityWithFirstDefault } from '@bh/collection-selection';
import { withSelectedId } from '@bh/collection-selection';
import { signalStoreFeature, withHooks } from '@ngrx/signals';
import { EntityId, SelectEntityId, withEntities } from '@ngrx/signals/entities';
import { withCollectionMethods } from './with-collection-methods.feature';


export function withFilledNamedCollection<
  Entity,
  Collection extends string
>(config: {
  entity: Entity;
  collection: Collection;
  selectId: SelectEntityId<NoInfer<Entity>>;
  selectedIdSource?: Signal<EntityId>;
  withSelectedId?: typeof withSelectedId;
  data?: Entity[];
}) {
  return signalStoreFeature(
    withEntities<Entity, typeof config.collection>(config),
    withCollectionMethods<Entity, typeof config.collection>(config),
    withHooks((store) => ({
      onInit() {
        if (config.data) {
          store.setAllEntities(config.data);
        }
      },
    })),
    withSelectedId<Entity, typeof config.collection>(config),
    withSelectedEntityWithFirstDefault<Entity, typeof config.collection>(config)
  );
}
