import { Id_FieldName } from '@base-field-name';
import { Guid } from '@base-field-type';

const field = [
  Id_FieldName,
  Guid,
  { label: 'Id' } as const,
  { required: true } as const,

  { uId: 'ae0e45ca-c495-4fe7-a39d-3ab7278e1617' } as const,
] as const;
export default field;
