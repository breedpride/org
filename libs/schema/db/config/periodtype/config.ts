
import { merge } from 'lodash-es';
import { Lookup_Name} from '@bh/column-type/lookup';
export const PeriodType_Config =  merge({}, Lookup_Name,
  { entitySchemaName: 'PeriodType' } as const,
);
