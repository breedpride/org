
import { merge } from 'lodash-es';
import { Lookup_Name} from '@bh/column-type/lookup';
export const Currency_Config =  merge({}, Lookup_Name,
  { entitySchemaName: 'Currency' } as const,
);
