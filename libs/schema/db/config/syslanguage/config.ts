
import { merge } from 'lodash-es';
import { Lookup_Name} from '@bh/column-type/lookup';
export const SysLanguage_Config =  merge({}, Lookup_Name,
  { entitySchemaName: 'SysLanguage' } as const,
);
