
import { merge } from 'lodash-es';
import { Lookup_Name} from '@bh/column-type/lookup';
export const BreedCategory_Config =  merge({}, Lookup_Name,
  { entitySchemaName: 'BreedCategory' } as const,
);
