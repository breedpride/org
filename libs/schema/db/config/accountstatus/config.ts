
import { merge } from 'lodash-es';
import { Lookup_Name} from '@bh/column-type/lookup';
export const AccountStatus_Config =  merge({}, Lookup_Name,
  { entitySchemaName: 'AccountStatus' } as const,
);
