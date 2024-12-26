
import { merge } from 'lodash-es';
import { Lookup_Name} from '@bh/column-type/lookup';
export const Breed_Config =  merge({}, Lookup_Name,
  { entitySchemaName: 'Breed' } as const,
);
