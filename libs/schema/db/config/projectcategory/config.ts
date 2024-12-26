
import { merge } from 'lodash-es';
import { Lookup_Name} from '@bh/column-type/lookup';
export const ProjectCategory_Config =  merge({}, Lookup_Name,
  { entitySchemaName: 'ProjectCategory' } as const,
);
