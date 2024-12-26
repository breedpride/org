import { Signal } from '@angular/core';
import { signalStoreFeature } from '@ngrx/signals';
import { EntityId, SelectEntityId } from '@ngrx/signals/entities';
import { withSelectedIdSource } from './selected-self-id.feature';

export function withSelectedId<Entity, Collection extends string>(config: {
  entity: Entity;
  collection: Collection;
  selectId: SelectEntityId<NoInfer<Entity>>;
  selectedIdSource?: Signal<EntityId>;
  selectedId?: Signal<EntityId>;
}) {
  return signalStoreFeature(
    withSelectedIdSource<Entity, typeof config.collection>(config)
  );
}
