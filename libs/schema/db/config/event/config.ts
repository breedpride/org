
import { merge } from 'lodash-es';
import { Lookup_Name} from '@bh/column-type/lookup';
export const Event_Config =  merge({}, Lookup_Name,
  { entitySchemaName: 'Event' } as const,
);
