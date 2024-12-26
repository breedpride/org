
import { merge } from 'lodash-es';
import { Lookup_Name} from '@bh/column-type/lookup';
export const PostType_Config =  merge({}, Lookup_Name,
  { entitySchemaName: 'PostType' } as const,
);
