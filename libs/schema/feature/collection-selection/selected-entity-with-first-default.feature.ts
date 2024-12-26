import { computed } from '@angular/core';
import {
  SignalStoreFeature,
  signalStoreFeature,
  withComputed,
} from '@ngrx/signals';
import {
  EntityId,
  EntityMap,
  NamedEntityState,
  SelectEntityId,
} from '@ngrx/signals/entities';
import type { NamedEntityProps } from '@ngrx/signals/entities/src/models';
import { Signal } from '@ngrx/signals/src/deep-signal';
import { WithEntitiesExt, WithSelectedId } from './seleted.types';

export function withSelectedEntityWithFirstDefault<
  Entity,
  Collection extends string
>(config: {
  entity: Entity;
  collection: Collection;
  selectId: SelectEntityId<NoInfer<Entity>>;
}): SignalStoreFeature<
  {
    state: NonNullable<unknown>;
    props: NonNullable<unknown>;
    methods: NonNullable<unknown>;
  },
  {
    state: WithSelectedId<Entity, Collection> &
      NamedEntityState<Entity, Collection>;
    props: NamedEntityProps<Entity, Collection> &
      WithEntitiesExt<Entity, Collection>;
    methods: {};
  }
>;

export function withSelectedEntityWithFirstDefault<
  Entity,
  Collection extends string
>(config: {
  entity: Entity;
  collection: Collection;
  selectId: SelectEntityId<NoInfer<Entity>>;
}): SignalStoreFeature {
  const collection = config.collection as Collection;
  const selectedEntityKey = `${collection}SelectedEntity`;
  const selectedEntityKey2 = `${collection}SelectedEntity2`;
  const entitiesCountKey = `${collection}EntitiesCount`;
  const selectedEntityOrFirstKey = `${collection}` as const;
  const selectedIDKey = `${collection}SelectedIdSource`;
  return signalStoreFeature(
    withComputed((store) => {
      const selectedIdKey = `${collection}SelectedId` as keyof typeof store;
      const selectedIdSourceKey =
        `${collection}SelectedIdSource` as keyof typeof store;
      const mapProp = `${collection}EntityMap` as keyof typeof store;
      const entitiesProp = `${collection}Entities` as keyof typeof store;

      const entityMap = store[mapProp] as Signal<EntityMap<Entity>>;
      const selectedId = store[selectedIdKey] as Signal<EntityId>;
      // With source
      const selectedId2 = store[selectedIdSourceKey] as Signal<EntityId>;

      const entities = store[entitiesProp] as Signal<Entity[]>;
      return {
        [selectedEntityKey2]: computed(() => entityMap()[selectedId2()]),
        [selectedEntityKey]: computed(() => entityMap()[selectedId()]),
        [entitiesCountKey]: computed(() => entities().length),
        [selectedEntityOrFirstKey]: computed(() => {
          // TODO - refactor with previous computed using
          const selectedEntity = entityMap()[selectedId()];
          if (selectedEntity) {
            return selectedEntity;
          }
          if (entities().length > 0) {
            return entities()[0];
          }
          console.log('SelectedOrFirst', entities());
          //TODO - error handling (not null return null)

          return null;
        }),
      };
    })
    // withHooks({
    //   onInit(store) {
    //     effect(() => {
    //       const state = getState(store);
    //       console.log(`[SSSS] state changed`, state);
    //     });
    //   },
    // })
    // withLogger('[SELECTED ENTITY WITH FIRST DEFAULT]')
  );
}
