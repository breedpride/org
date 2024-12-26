
import { merge } from 'lodash-es';
import { Lookup_Name} from '@bh/column-type/lookup';
export const BreedSubsection_Config =  merge({}, Lookup_Name,
  { entitySchemaName: 'BreedSubsection' } as const,
);
