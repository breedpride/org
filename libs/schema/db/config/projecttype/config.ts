
import { merge } from 'lodash-es';
import { Lookup_Name} from '@bh/column-type/lookup';
export const ProjectType_Config =  merge({}, Lookup_Name,
  { entitySchemaName: 'ProjectType' } as const,
);
