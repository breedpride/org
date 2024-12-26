
import { merge } from 'lodash-es';
import { Lookup_Name} from '@bh/column-type/lookup';
export const CoatColor_Config =  merge({}, Lookup_Name,
  { entitySchemaName: 'CoatColor' } as const,
);
