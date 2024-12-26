import { WithVisibility } from './with-visibility';

export const Visible: WithVisibility = { hidden: () => false };
export const Invisible: WithVisibility = { hidden: () => true };
export const withDefaultVisibility = Visible;
