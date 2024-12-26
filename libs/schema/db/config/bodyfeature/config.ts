
import { merge } from 'lodash-es';
import { Lookup_Name} from '@bh/column-type/lookup';
export const BodyFeature_Config =  merge({}, Lookup_Name,
  { entitySchemaName: 'BodyFeature' } as const,
);
