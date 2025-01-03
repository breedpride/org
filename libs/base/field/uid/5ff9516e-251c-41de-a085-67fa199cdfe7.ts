import { Skype_FieldName } from '@base-field-name';
import { MediumText } from '@base-field-type';

const field = [
  Skype_FieldName,
  MediumText,
  { label: 'Skype' } as const,

  { uId: '5ff9516e-251c-41de-a085-67fa199cdfe7' } as const,
] as const;
export default field;
