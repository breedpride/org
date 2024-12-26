
import { merge } from 'lodash-es';
import { Lookup_Name} from '@bh/column-type/lookup';
export const PostState_Config =  merge({}, Lookup_Name,
  { entitySchemaName: 'PostState' } as const,
);
