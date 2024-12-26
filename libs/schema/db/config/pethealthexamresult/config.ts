
import { merge } from 'lodash-es';
import { Lookup_} from '@bh/column-type/lookup';
export const PetHealthExamResult_Config =  merge({}, Lookup_,
  { entitySchemaName: 'PetHealthExamResult' } as const,
);
