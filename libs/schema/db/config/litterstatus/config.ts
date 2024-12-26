
import { merge } from 'lodash-es';
import { Lookup_Name} from '@bh/column-type/lookup';
export const LitterStatus_Config =  merge({}, Lookup_Name,
  { entitySchemaName: 'LitterStatus' } as const,
);
