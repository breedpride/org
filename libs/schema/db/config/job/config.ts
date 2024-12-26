
import { merge } from 'lodash-es';
import { Lookup_Name} from '@bh/column-type/lookup';
export const Job_Config =  merge({}, Lookup_Name,
  { entitySchemaName: 'Job' } as const,
);
