import { withFilledNamedCollection } from '@bh/collection-data';
import { SpaceConfig } from '@bh/superfield';
import { withLogger } from '@bp/with-logger';
import { signalStore, type, withState } from '@ngrx/signals';

export type Space = { id: string };
const spaceCollectionConfig = {
  entity: type<SpaceConfig>(),
  collection: 'space' as const,
  selectId: (c: SpaceConfig) => c.id,
};

export const AppStore = signalStore(
  { providedIn: 'root',
    protectedState: false
  },
  withState({}),
  withFilledNamedCollection<
    SpaceConfig,
    typeof spaceCollectionConfig.collection
  >(spaceCollectionConfig),

  withLogger('[APP STORE]')
);

// pets=> space (qeury)? Selected???
