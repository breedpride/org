
import { merge } from 'lodash-es';
import { Lookup_Name} from '@bh/column-type/lookup';
export const FirebaseAuthProvider_Config =  merge({}, Lookup_Name,
  { entitySchemaName: 'FirebaseAuthProvider' } as const,
);
