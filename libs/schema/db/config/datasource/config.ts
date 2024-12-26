
import { merge } from 'lodash-es';
import { Lookup_Name} from '@bh/column-type/lookup';
export const DataSource_Config =  merge({}, Lookup_Name,
  { entitySchemaName: 'DataSource' } as const,
);
