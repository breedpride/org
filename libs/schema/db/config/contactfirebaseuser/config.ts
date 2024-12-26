
import { merge } from 'lodash-es';
import { Lookup_} from '@bh/column-type/lookup';
export const ContactFirebaseUser_Config =  merge({}, Lookup_,
  { entitySchemaName: 'ContactFirebaseUser' } as const,
);
