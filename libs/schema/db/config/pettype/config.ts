
import { merge } from 'lodash-es';
import { Lookup_Name} from '@bh/column-type/lookup';
export const PetType_Config =  merge({}, Lookup_Name,
  { entitySchemaName: 'PetType' } as const,
);
