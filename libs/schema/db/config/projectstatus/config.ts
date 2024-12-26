
import { merge } from 'lodash-es';
import { Lookup_Name} from '@bh/column-type/lookup';
export const ProjectStatus_Config =  merge({}, Lookup_Name,
  { entitySchemaName: 'ProjectStatus' } as const,
);
