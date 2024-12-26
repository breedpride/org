import { WithCreatioId } from '@bh/identifying';
import { type } from '@ngrx/signals';
import { entityConfig } from '@ngrx/signals/entities';

export function getCreatioEntitesConfig<Entity extends WithCreatioId>() {
  return entityConfig<Entity, ''>({
    entity: type<Entity>(),
    collection: '' as const,
    selectId: (entity: Entity) => entity.Id,
  });
}
