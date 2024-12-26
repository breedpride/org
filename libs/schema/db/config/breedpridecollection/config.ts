
import { merge } from 'lodash-es';
import { Lookup_Name} from '@bh/column-type/lookup';
export const BreedprideCollection_Config =  merge({}, Lookup_Name,
  { entitySchemaName: 'BreedprideCollection' } as const,
);
