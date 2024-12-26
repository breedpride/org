
import { merge } from 'lodash-es';
import { Lookup_Name} from '@bh/column-type/lookup';
export const CoatType_Config =  merge({}, Lookup_Name,
  { entitySchemaName: 'CoatType' } as const,
);
