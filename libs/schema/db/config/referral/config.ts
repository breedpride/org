
import { merge } from 'lodash-es';
import { Lookup_Code} from '@bh/column-type/lookup';
export const Referral_Config =  merge({}, Lookup_Code,
  { entitySchemaName: 'Referral' } as const,
);
