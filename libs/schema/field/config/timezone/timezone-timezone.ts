
import { merge } from 'lodash-es';
import { Lookup_TimeZone } from '@bh/db/config';
import { TimeZone_Field } from './timezone';
export const TimeZone_TimeZone = merge({}, TimeZone_Field, Lookup_TimeZone );
