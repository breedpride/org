import { BPFormGroupInterface } from './editing/events/form-group-interface';
import { SpaceConfig } from './with-space-config';
export type EntityFormState = {
  entityForm: BPFormGroupInterface;
  entity: any;
};
export type EntityStoreConfig = SpaceConfig & {};
export type EntityStoreState = {
  config: EntityStoreConfig;
};
