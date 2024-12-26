
import { merge } from 'lodash-es';
import { Lookup_Name} from '@bh/column-type/lookup';
export const AccountType_Config =  merge({}, Lookup_Name,
  { entitySchemaName: 'AccountType' } as const,
);
