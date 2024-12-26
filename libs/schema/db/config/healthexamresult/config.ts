
import { merge } from 'lodash-es';
import { Lookup_Name} from '@bh/column-type/lookup';
export const HealthExamResult_Config =  merge({}, Lookup_Name,
  { entitySchemaName: 'HealthExamResult' } as const,
);
