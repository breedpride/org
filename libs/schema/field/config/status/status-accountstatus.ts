
import { merge } from 'lodash-es';
import { Lookup_AccountStatus } from '@bh/db/config';
import { Status_Field } from './status';
export const Status_AccountStatus = merge({}, Status_Field, Lookup_AccountStatus );
