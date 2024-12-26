
import { merge } from 'lodash-es';
import { Lookup_Name} from '@bh/column-type/lookup';
export const PetStatus_Config =  merge({}, Lookup_Name,
  { entitySchemaName: 'PetStatus' } as const,
);
