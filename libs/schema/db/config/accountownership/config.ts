
import { merge } from 'lodash-es';
import { Lookup_Name} from '@bh/column-type/lookup';
export const AccountOwnership_Config =  merge({}, Lookup_Name,
  { entitySchemaName: 'AccountOwnership' } as const,
);
