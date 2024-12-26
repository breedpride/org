
import { merge } from 'lodash-es';
import { Lookup_StudbookStatus } from '@bh/db/config';
import { Status_Field } from './status';
export const Status_StudbookStatus = merge({}, Status_Field, Lookup_StudbookStatus );
