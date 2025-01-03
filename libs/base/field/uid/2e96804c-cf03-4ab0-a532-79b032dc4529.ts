import { TwitterId_FieldName } from '@base-field-name';
import { MediumText } from '@base-field-type';

const field = [
  TwitterId_FieldName,
  MediumText,
  { label: 'TwitterId' } as const,

  { uId: '2e96804c-cf03-4ab0-a532-79b032dc4529' } as const,
] as const;
export default field;
