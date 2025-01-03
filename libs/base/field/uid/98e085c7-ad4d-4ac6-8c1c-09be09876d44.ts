import { MobilePhone_FieldName } from '@base-field-name';
import { PhoneText } from '@base-field-type';

const field = [
  MobilePhone_FieldName,
  PhoneText,
  { label: 'Mobile phone' } as const,

  { uId: '98e085c7-ad4d-4ac6-8c1c-09be09876d44' } as const,
] as const;
export default field;
