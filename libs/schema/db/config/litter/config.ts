
import { merge } from 'lodash-es';
import { Lookup_Name} from '@bh/column-type/lookup';
export const Litter_Config =  merge({}, Lookup_Name,
  { entitySchemaName: 'Litter' } as const,
);
