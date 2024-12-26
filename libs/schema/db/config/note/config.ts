
import { merge } from 'lodash-es';
import { Lookup_Name} from '@bh/column-type/lookup';
export const Note_Config =  merge({}, Lookup_Name,
  { entitySchemaName: 'Note' } as const,
);
