
import { merge } from 'lodash-es';
import { Lookup_} from '@bh/column-type/lookup';
export const PetMeasurement_Config =  merge({}, Lookup_,
  { entitySchemaName: 'PetMeasurement' } as const,
);
