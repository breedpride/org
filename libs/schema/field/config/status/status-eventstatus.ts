
import { merge } from 'lodash-es';
import { Lookup_EventStatus } from '@bh/db/config';
import { Status_Field } from './status';
export const Status_EventStatus = merge({}, Status_Field, Lookup_EventStatus );
