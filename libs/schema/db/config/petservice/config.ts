
import { merge } from 'lodash-es';
import { Lookup_} from '@bh/column-type/lookup';
export const PetService_Config =  merge({}, Lookup_,
  { entitySchemaName: 'PetService' } as const,
);
