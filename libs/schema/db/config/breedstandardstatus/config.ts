
import { merge } from 'lodash-es';
import { Lookup_Name} from '@bh/column-type/lookup';
export const BreedStandardStatus_Config =  merge({}, Lookup_Name,
  { entitySchemaName: 'BreedStandardStatus' } as const,
);
