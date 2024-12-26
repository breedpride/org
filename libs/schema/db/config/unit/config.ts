
import { merge } from 'lodash-es';
import { Lookup_Name} from '@bh/column-type/lookup';
export const Unit_Config =  merge({}, Lookup_Name,
  { entitySchemaName: 'Unit' } as const,
);
