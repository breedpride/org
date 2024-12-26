
import { merge } from 'lodash-es';
import { Lookup_LitterStatus } from '@bh/db/config';
import { Status_Field } from './status';
export const Status_LitterStatus = merge({}, Status_Field, Lookup_LitterStatus );
