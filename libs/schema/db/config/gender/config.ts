
import { merge } from 'lodash-es';
import { Lookup_Name} from '@bh/column-type/lookup';
export const Gender_Config =  merge({}, Lookup_Name,
  { entitySchemaName: 'Gender' } as const,
);
