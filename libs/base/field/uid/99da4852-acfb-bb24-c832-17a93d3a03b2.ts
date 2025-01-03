import { Url_FieldName } from '@base-field-name';
import { MediumText } from '@base-field-type';

const field = [
  Url_FieldName,
  MediumText,
  { label: 'Url' } as const,

  { uId: '99da4852-acfb-bb24-c832-17a93d3a03b2' } as const,
] as const;
export default field;
