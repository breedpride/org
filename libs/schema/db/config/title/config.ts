
import { merge } from 'lodash-es';
import { Lookup_Name} from '@bh/column-type/lookup';
export const Title_Config =  merge({}, Lookup_Name,
  { entitySchemaName: 'Title' } as const,
);
