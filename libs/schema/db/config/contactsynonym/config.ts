
import { merge } from 'lodash-es';
import { Lookup_Name} from '@bh/column-type/lookup';
export const ContactSynonym_Config =  merge({}, Lookup_Name,
  { entitySchemaName: 'ContactSynonym' } as const,
);
