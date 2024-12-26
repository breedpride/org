
import { merge } from 'lodash-es';
import { Lookup_BreedStandardStatus } from '@bh/db/config';
import { Status_Field } from './status';
export const Status_BreedStandardStatus = merge({}, Status_Field, Lookup_BreedStandardStatus );
