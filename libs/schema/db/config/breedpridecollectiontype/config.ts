
import { merge } from 'lodash-es';
import { Lookup_Name} from '@bh/column-type/lookup';
export const BreedprideCollectionType_Config =  merge({}, Lookup_Name,
  { entitySchemaName: 'BreedprideCollectionType' } as const,
);
