
import { merge } from 'lodash-es';
import { Lookup_Name} from '@bh/column-type/lookup';
export const AffixType_Config =  merge({}, Lookup_Name,
  { entitySchemaName: 'AffixType' } as const,
);
