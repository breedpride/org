
import { merge } from 'lodash-es';
import { Lookup_RawTitle} from '@bh/column-type/lookup';
export const TitleInPet_Config =  merge({}, Lookup_RawTitle,
  { entitySchemaName: 'TitleInPet' } as const,
);
