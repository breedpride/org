import { WithEditingAbility } from './feature-ability';

export const Editable = {
  readonly: false,
} as const satisfies WithEditingAbility;
export const Readonly = {
  readonly: true,
} as const satisfies WithEditingAbility;
export const withDefaultEditing = Readonly;
