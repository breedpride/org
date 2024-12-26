import { SpaceConfig  } from '@bh/superfield';
import { signalStoreFeature } from '@ngrx/signals';
import { withConfigurableCreatioEntities } from './with-creatio-entities.feature';
import { WithCreatioId } from '@bh/identifying';

export function withFilteredEntities<T extends WithCreatioId>(
  { config }: { config?: SpaceConfig; } = {}) {
  return signalStoreFeature(withConfigurableCreatioEntities<T>(config));
}
