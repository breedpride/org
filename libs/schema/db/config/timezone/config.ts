
import { merge } from 'lodash-es';
import { Lookup_Name} from '@bh/column-type/lookup';
export const TimeZone_Config =  merge({}, Lookup_Name,
  { entitySchemaName: 'TimeZone' } as const,
);
