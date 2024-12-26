
import { merge } from 'lodash-es';
import { Lookup_Period } from '@bh/db/config';
import { MatingPeriod_Field } from './matingperiod';
export const MatingPeriod_Period = merge({}, MatingPeriod_Field, Lookup_Period );
