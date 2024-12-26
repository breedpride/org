import type { Signal } from '@angular/core';
import { EntityId } from '@ngrx/signals/entities';

export const SelectedEntity = 'SelectedEntity' as const;
export type WithEntitiesExt<
  Entity,
  Collection extends string,
> = WithSelectedEntity<Entity, Collection> &
  WithEntitiesCount<Entity, Collection> &
  WithSelectedEntityOrFirst<Entity, Collection>;

export type WithSelectedEntity<Entity, Collection extends string> = {
  [K in Collection as `${K}SelectedEntity`]: Signal<Entity | null>;
};
export type WithSelectedEntityOrFirst<Entity, Collection extends string> = {
  [K in Collection as `${K}`]: Signal<Entity | null>;
};

export const EntitiesCount = 'EntitiesCount' as const;
export type WithEntitiesCount<Entity, Collection extends string> = {
  [K in Collection as `${K}EntitiesCount`]: Signal<number>;
};

export const SelectedId = 'SelectedId' as const;

export type WithSelectedId<Entity, Collection extends string> = {
  [K in Collection as `${K}SelectedId`]: EntityId;
};
export type WithSelectedIdSource<Entity, Collection extends string> = {
  [K in Collection as `${K}SelectedIdSource`]: Signal<EntityId>;
};

