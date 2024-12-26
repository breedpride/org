
import { merge } from 'lodash-es';
import { Lookup_Name} from '@bh/column-type/lookup';
export const PetIdentifierType_Config =  merge({}, Lookup_Name,
  { entitySchemaName: 'PetIdentifierType' } as const,
);
