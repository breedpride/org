
import { merge } from 'lodash-es';
import { Lookup_} from '@bh/column-type/lookup';
export const PetInProject_Config =  merge({}, Lookup_,
  { entitySchemaName: 'PetInProject' } as const,
);
