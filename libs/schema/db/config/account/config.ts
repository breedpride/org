
import { merge } from 'lodash-es';
import { Lookup_Name} from '@bh/column-type/lookup';
export const Account_Config =  merge({}, Lookup_Name,
  { entitySchemaName: 'Account' } as const,
);
const t = [
  Lookup_Name,
  { entitySchemaName: 'Account' },
];
// TODO - getid as objectHash