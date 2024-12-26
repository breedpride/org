
import { merge } from 'lodash-es';
import { Lookup_Name} from '@bh/column-type/lookup';
export const Cover_Config =  merge({}, Lookup_Name,
  { entitySchemaName: 'Cover' } as const,
);
