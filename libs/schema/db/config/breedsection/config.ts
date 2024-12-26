
import { merge } from 'lodash-es';
import { Lookup_Name} from '@bh/column-type/lookup';
export const BreedSection_Config =  merge({}, Lookup_Name,
  { entitySchemaName: 'BreedSection' } as const,
);
