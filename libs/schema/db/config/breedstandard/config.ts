
import { merge } from 'lodash-es';
import { Lookup_Name} from '@bh/column-type/lookup';
export const BreedStandard_Config =  merge({}, Lookup_Name,
  { entitySchemaName: 'BreedStandard' } as const,
);
