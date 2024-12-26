
import { merge } from 'lodash-es';
import { Lookup_Name} from '@bh/column-type/lookup';
export const Place_Config =  merge({}, Lookup_Name,
  { entitySchemaName: 'Place' } as const,
);
