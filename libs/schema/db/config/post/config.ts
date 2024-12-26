
import { merge } from 'lodash-es';
import { Lookup_Name} from '@bh/column-type/lookup';
export const Post_Config =  merge({}, Lookup_Name,
  { entitySchemaName: 'Post' } as const,
);
