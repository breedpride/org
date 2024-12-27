import { FilterFieldConfig } from '@bh/superfield';
import { signalStore, withState } from '@ngrx/signals';
import { EmptyFieldConfig } from '@bh/superfield';
import { withEntityForm } from './with-entity-form';

export type EntityConfig = {
  type: 'space'; // Explicitly setting type to 'space'
} & Pick<FilterFieldConfig, Exclude<keyof FilterFieldConfig, 'type'>>;

export const entityConfig = EmptyFieldConfig;

// export const EntityStore = signalStore(
//   { protectedState: false },
//   withState({ config: EmptyFieldConfig }),
//   withEntityForm({ config: EmptyFieldConfig })
// );
// export type EntityStore = InstanceType<typeof EntityStore>;
