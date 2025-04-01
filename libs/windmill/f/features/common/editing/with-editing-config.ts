
import { WithEditingAbility } from './ability/feature-ability.ts';
import { WithRequiring } from '../privacy/type.ts';
import { WithEditingComponent } from './component/with-editing-component.ts';
import { WithEditingEvents } from './events/editing-event.ts';

export type WithEditingConfig<T> = WithEditingAbility &
  WithEditingComponent &
  WithEditingEvents<T> &
  WithRequiring;
