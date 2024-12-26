
import { merge } from 'lodash-es';
import { Lookup_Name} from '@bh/column-type/lookup';
export const GeoNamesTimeZone_Config =  merge({}, Lookup_Name,
  { entitySchemaName: 'GeoNamesTimeZone' } as const,
);
