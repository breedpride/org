
import { merge } from 'lodash-es';
import { Lookup_Name} from '@bh/column-type/lookup';
export const StudbookStatus_Config =  merge({}, Lookup_Name,
  { entitySchemaName: 'StudbookStatus' } as const,
);
