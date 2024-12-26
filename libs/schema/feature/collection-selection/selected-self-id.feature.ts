import { computed, Signal } from '@angular/core';
import {
  patchState,
  SignalStoreFeature,
  signalStoreFeature,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { EntityId, SelectEntityId } from '@ngrx/signals/entities';
import { WithSelectedId, WithSelectedIdSource } from './seleted.types';

export function withSelectedIdSource<
  Entity,
  Collection extends string
>(config: {
  entity: Entity;
  collection: Collection;
  selectId: SelectEntityId<NoInfer<Entity>>;
  selectedId?: Signal<EntityId>;
  selectedIdSource?: Signal<EntityId>;
}): SignalStoreFeature<
  {
    state: NonNullable<unknown>;
    props: NonNullable<unknown>;
    methods: NonNullable<unknown>;
  },
  {
    state: WithSelectedId<Entity, Collection>;
    props: WithSelectedIdSource<Entity, Collection>;
    methods: { setSelectedId(selectedId: string): void };
  }
>;

export function withSelectedIdSource<
  Entity,
  Collection extends string
>(config: {
  entity: Entity;
  collection: Collection;
  selectId: SelectEntityId<NoInfer<Entity>>;
  selectedIdSource?: Signal<EntityId>;
}): SignalStoreFeature {
  const collection = config.collection as Collection;
  const selectedIdKey = `${collection}SelectedId` as const;
  const selectedIdSourceKey = `${collection}SelectedIdSource` as const;
  const initValue = { [selectedIdKey]: '' } as WithSelectedId<
    Entity,
    Collection
  >;
  return signalStoreFeature(
    withState<WithSelectedId<Entity, Collection>>(initValue),
    withComputed((store) => {
      const selectedIdKey = `${collection}SelectedId` as keyof typeof store;
      return {
        [selectedIdSourceKey]: computed(() => {
          return config.selectedIdSource
            ? config.selectedIdSource()
            : store[selectedIdKey];
        }),
      };
    }),
    withMethods((store) => ({
      setSelectedId: (selectedId: string) => {
        patchState(
          store,
          selectedIdChunk<Entity, Collection>(selectedIdKey, selectedId)
        );
      },
    }))
  );
}

function selectedIdChunk<Entity, Collection extends string>(
  selectedIdKey: string,
  selectedId: EntityId
): Partial<WithSelectedId<Entity, Collection>> {
  return { [selectedIdKey]: selectedId } as Partial<
    WithSelectedId<Entity, Collection>
  >;
}
