import { HomePhone_FieldName } from '@base-field-name';
import { PhoneText } from '@base-field-common-type';

const field = [
  HomePhone_FieldName,
  PhoneText,
  { label: 'Home phone' } as const,

  { uId: '0a455b85-133c-4944-aff1-2ce7f7e50fee' } as const,
] as const;
export default field;
