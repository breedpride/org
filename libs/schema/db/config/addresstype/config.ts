
import { merge } from 'lodash-es';
import { Lookup_Name} from '@bh/column-type/lookup';
export const AddressType_Config =  merge({}, Lookup_Name,
  { entitySchemaName: 'AddressType' } as const,
);
