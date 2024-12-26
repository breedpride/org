
import { merge } from 'lodash-es';
import { Lookup_Name} from '@bh/column-type/lookup';
export const Studbook_Config =  merge({}, Lookup_Name,
  { entitySchemaName: 'Studbook' } as const,
);
