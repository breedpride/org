import { SpaceConfig } from './with-space-config';

export interface NoteGridConfig {
  entityId: string;
  parentEntityStore: any;
  // EntityListStore;
  parentModel: string; //TODO models
  spaceConfig: SpaceConfig;
}
