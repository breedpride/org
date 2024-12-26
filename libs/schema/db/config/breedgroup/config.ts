
import { merge } from 'lodash-es';
import { Lookup_Name} from '@bh/column-type/lookup';
export const BreedGroup_Config =  merge({}, Lookup_Name,
  { entitySchemaName: 'BreedGroup' } as const,
);
