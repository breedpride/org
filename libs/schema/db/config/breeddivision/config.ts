
import { merge } from 'lodash-es';
import { Lookup_Name} from '@bh/column-type/lookup';
export const BreedDivision_Config =  merge({}, Lookup_Name,
  { entitySchemaName: 'BreedDivision' } as const,
);
