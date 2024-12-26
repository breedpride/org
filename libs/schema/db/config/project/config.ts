
import { merge } from 'lodash-es';
import { Lookup_Name} from '@bh/column-type/lookup';
export const Project_Config =  merge({}, Lookup_Name,
  { entitySchemaName: 'Project' } as const,
);
