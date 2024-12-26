
import { merge } from 'lodash-es';
import { Lookup_Name} from '@bh/column-type/lookup';
export const AccountIndustry_Config =  merge({}, Lookup_Name,
  { entitySchemaName: 'AccountIndustry' } as const,
);
