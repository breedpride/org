
import { merge } from 'lodash-es';
import { Lookup_} from '@bh/column-type/lookup';
export const PetIdentifier_Config =  merge({}, Lookup_,
  { entitySchemaName: 'PetIdentifier' } as const,
);
