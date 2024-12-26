
import { merge } from 'lodash-es';
import { Lookup_Name} from '@bh/column-type/lookup';
export const EntitySchemaLookup_Config =  merge({}, Lookup_Name,
  { entitySchemaName: 'EntitySchemaLookup' } as const,
);
