
import { WithEditingAbility } from './ability/feature-ability';
import { WithRequiring } from '../privacy/type';
import { WithEditingComponent } from './component/with-editing-component';
import { WithEditingEvents } from './events/editing-event';

export type WithEditingConfig<T> = WithEditingAbility &
  WithEditingComponent &
  WithEditingEvents<T> &
  WithRequiring;
