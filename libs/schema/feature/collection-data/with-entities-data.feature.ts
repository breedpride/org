import { Signal } from '@angular/core';
import { signalStoreFeature, withHooks } from '@ngrx/signals';
import { EntityId, SelectEntityId, withEntities } from '@ngrx/signals/entities';
import { withCollectionMethods } from './with-collection-methods.feature';


export function withEntitiesWithData<
  Entity,
  Collection extends string
>(config: {
  entity: Entity;
  collection: Collection;
  selectId: SelectEntityId<NoInfer<Entity>>;
  withSelectedId: Signal<EntityId>;
  data: Entity[];
}) {
  return signalStoreFeature(
    // withSelectedId<Entity, typeof collection>(config),
    withEntities<Entity, typeof config.collection>(config),
    withCollectionMethods(config),
    withHooks((store) => {
      return {
        onInit() {
          store.setAllEntities(config.data);
        },
        onDestroy() {
          // logger.info('count on destroy', store.count());
          // clearInterval(interval);
        },
      };
    })
    // withSelectedEntityWithFirstDefault<Entity, typeof collection>(config)
  );
}
