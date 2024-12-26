import { FilterFieldConfig } from '@bh/superfield';
import { signalStore, withState } from '@ngrx/signals';
import { EmptyFieldConfig } from '@bh/superfield';
import { withEntityForm } from './with-entity-form';
export type EntityConfig = FilterFieldConfig & {
  // entitySchemaName: string;
  // fieldsConfig: Record<string, FilterFieldConfig>;
  // dateFields: string[];
};
export const entityConfig = EmptyFieldConfig;

export const EntityStore = signalStore(
  { protectedState: false },
  withState({ config: EmptyFieldConfig }),
  withEntityForm({ config: EmptyFieldConfig })
);
export type EntityStore = InstanceType<typeof EntityStore>;
