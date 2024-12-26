
import { merge } from 'lodash-es';
import { Lookup_Name} from '@bh/column-type/lookup';
export const ContactDecisionRole_Config =  merge({}, Lookup_Name,
  { entitySchemaName: 'ContactDecisionRole' } as const,
);
