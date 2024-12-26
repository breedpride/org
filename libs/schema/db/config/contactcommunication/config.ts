
import { merge } from 'lodash-es';
import { Lookup_Number} from '@bh/column-type/lookup';
export const ContactCommunication_Config =  merge({}, Lookup_Number,
  { entitySchemaName: 'ContactCommunication' } as const,
);
