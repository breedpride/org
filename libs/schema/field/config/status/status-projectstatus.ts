
import { merge } from 'lodash-es';
import { Lookup_ProjectStatus } from '@bh/db/config';
import { Status_Field } from './status';
export const Status_ProjectStatus = merge({}, Status_Field, Lookup_ProjectStatus );
