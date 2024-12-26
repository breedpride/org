
import { merge } from 'lodash-es';
import { Lookup_} from '@bh/column-type/lookup';
export const ContactAddress_Config =  merge({}, Lookup_,
  { entitySchemaName: 'ContactAddress' } as const,
);
