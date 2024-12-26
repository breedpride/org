
import { merge } from 'lodash-es';
import { Lookup_Name} from '@bh/column-type/lookup';
export const MeasurementType_Config =  merge({}, Lookup_Name,
  { entitySchemaName: 'MeasurementType' } as const,
);
