
import { merge } from 'lodash-es';
import { Lookup_Name} from '@bh/column-type/lookup';
export const Territory_Config =  merge({}, Lookup_Name,
  { entitySchemaName: 'Territory' } as const,
);
