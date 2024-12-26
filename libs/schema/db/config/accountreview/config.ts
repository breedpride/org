
import { merge } from 'lodash-es';
import { Lookup_} from '@bh/column-type/lookup';
export const AccountReview_Config =  merge({}, Lookup_,
  { entitySchemaName: 'AccountReview' } as const,
);
