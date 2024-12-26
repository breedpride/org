
import { merge } from 'lodash-es';
import { Lookup_Name} from '@bh/column-type/lookup';
export const CommunicationType_Config =  merge({}, Lookup_Name,
  { entitySchemaName: 'CommunicationType' } as const,
);
