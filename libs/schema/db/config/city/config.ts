
import { merge } from 'lodash-es';
import { Lookup_Name} from '@bh/column-type/lookup';
export const City_Config =  merge({}, Lookup_Name,
  { entitySchemaName: 'City' } as const,
);
