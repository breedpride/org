import { Account_FieldName } from '@base-field-name';
import { Account_Lookup } from '@base-table-ref';

const field = [
  Account_FieldName,
  Account_Lookup,
  { label: 'Account' } as const,

  { uId: '5c6ca10e-1180-4c1e-8a50-55a72ff9bdd4' } as const,
] as const;
export default field;
