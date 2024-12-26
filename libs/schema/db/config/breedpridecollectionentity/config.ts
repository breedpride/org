
import { merge } from 'lodash-es';
import { Lookup_} from '@bh/column-type/lookup';
export const BreedprideCollectionEntity_Config =  merge({}, Lookup_,
  { entitySchemaName: 'BreedprideCollectionEntity' } as const,
);
