
import { merge } from 'lodash-es';
import { Lookup_Name} from '@bh/column-type/lookup';
export const PetQualification_Config =  merge({}, Lookup_Name,
  { entitySchemaName: 'PetQualification' } as const,
);
