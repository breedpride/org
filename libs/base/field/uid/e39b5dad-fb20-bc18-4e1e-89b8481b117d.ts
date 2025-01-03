import { Cover_FieldName } from '@base-field-name';
import { Cover_Lookup } from '@base-table-ref';

const field = [
  Cover_FieldName,
  Cover_Lookup,
  { label: 'Cover' } as const,

  { uId: 'e39b5dad-fb20-bc18-4e1e-89b8481b117d' } as const,
] as const;
export default field;
