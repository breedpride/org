
import { merge } from 'lodash-es';
import { Lookup_Name} from '@bh/column-type/lookup';
export const Period_Config =  merge({}, Lookup_Name,
  { entitySchemaName: 'Period' } as const,
);
