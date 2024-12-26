
import { merge } from 'lodash-es';
import { Lookup_Name} from '@bh/column-type/lookup';
export const PetServiceType_Config =  merge({}, Lookup_Name,
  { entitySchemaName: 'PetServiceType' } as const,
);
