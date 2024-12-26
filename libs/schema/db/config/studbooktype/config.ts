
import { merge } from 'lodash-es';
import { Lookup_Name} from '@bh/column-type/lookup';
export const StudbookType_Config =  merge({}, Lookup_Name,
  { entitySchemaName: 'StudbookType' } as const,
);
