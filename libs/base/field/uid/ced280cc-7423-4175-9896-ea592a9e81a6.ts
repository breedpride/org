import { Confirmed_FieldName } from '@base-field-name';
import { Boolean } from '@base-field-type';

const field = [
  Confirmed_FieldName,
  Boolean,
  { label: 'Confirmed' } as const,

  { uId: 'ced280cc-7423-4175-9896-ea592a9e81a6' } as const,
] as const;
export default field;
