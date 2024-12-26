import { patchState, signalStoreFeature, withMethods } from '@ngrx/signals';
import {
  addEntities,
  EntityId,
  removeAllEntities,
  removeEntities,
  removeEntity,
  SelectEntityId,
  setAllEntities,
  updateAllEntities,
  updateEntity,
} from '@ngrx/signals/entities';


export function withCollectionMethods<
  Entity,
  Collection extends string
>(options: {
  entity: Entity;
  collection: Collection;
  selectId: SelectEntityId<NoInfer<Entity>>;
}) {
  const config = options;
  return signalStoreFeature(
    withMethods((store) => ({
      addEntities(entities: Entity[]) {
        patchState(store, addEntities(entities, config));
      },
      setAllEntities(entities: Entity[]) {
        patchState(store, setAllEntities(entities, config));
      },
      updateEntity(id: EntityId, changes: Partial<Entity>) {
        patchState(store, bpUpdateEntity<Entity>({ id, changes }, config));
      },
      removeEntity(id: EntityId) {
        patchState(store, removeEntity(id, config));
      },
      removeEntities(ids: EntityId[]) {
        patchState(store, removeEntities(ids, config));
      },
      updateAllEntities(
        ids: EntityId[],
        predicate: (entity: Entity) => boolean,
        changes: Partial<Entity>
      ) {
        patchState(
          store,
          bpUpdateAllEntities({ ids, predicate, changes }, config)
        );
      },
      removeAllEntities: () => {
        patchState(store, removeAllEntities());
      },
    }))
  );
}


export function bpUpdateAllEntities<Entity>(
  options: {
    ids: EntityId[];
    predicate: (entity: Entity) => boolean;
    changes: Partial<Entity>;
  },
  config: {
    entity: Entity;
    collection: string;
    selectId: SelectEntityId<NoInfer<Entity>>;
  }
) {
  return updateAllEntities(options, config);
}


export function bpUpdateEntity<Entity>(
  options: {
    id: EntityId;
    changes: Partial<Entity>;
  },
  config: {
    entity: Entity;
    collection: string;
    selectId: SelectEntityId<NoInfer<Entity>>;
  }
) {
  return updateEntity(options, config);
}
