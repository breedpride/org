
import { merge } from 'lodash-es';
import { Lookup_} from '@bh/column-type/lookup';
export const PetServiceInLitter_Config =  merge({}, Lookup_,
  { entitySchemaName: 'PetServiceInLitter' } as const,
);
