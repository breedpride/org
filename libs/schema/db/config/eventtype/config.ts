
import { merge } from 'lodash-es';
import { Lookup_Name} from '@bh/column-type/lookup';
export const EventType_Config =  merge({}, Lookup_Name,
  { entitySchemaName: 'EventType' } as const,
);
