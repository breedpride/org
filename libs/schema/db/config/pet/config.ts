
import { merge } from 'lodash-es';
import { Lookup_Name} from '@bh/column-type/lookup';
export const Pet_Config =  merge({}, Lookup_Name,
  { entitySchemaName: 'Pet' } as const,
);
