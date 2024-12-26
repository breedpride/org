
import { merge } from 'lodash-es';
import { Lookup_Name} from '@bh/column-type/lookup';
export const AccountCategory_Config =  merge({}, Lookup_Name,
  { entitySchemaName: 'AccountCategory' } as const,
);
