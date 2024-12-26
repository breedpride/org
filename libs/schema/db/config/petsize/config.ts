
import { merge } from 'lodash-es';
import { Lookup_Name} from '@bh/column-type/lookup';
export const PetSize_Config =  merge({}, Lookup_Name,
  { entitySchemaName: 'PetSize' } as const,
);
