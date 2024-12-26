
import { merge } from 'lodash-es';
import { Lookup_Name} from '@bh/column-type/lookup';
export const ContactSalutationType_Config =  merge({}, Lookup_Name,
  { entitySchemaName: 'ContactSalutationType' } as const,
);
