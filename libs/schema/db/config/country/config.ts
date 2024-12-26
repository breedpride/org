
import { merge } from 'lodash-es';
import { Lookup_Name} from '@bh/column-type/lookup';
export const Country_Config =  merge({}, Lookup_Name,
  { entitySchemaName: 'Country' } as const,
);
