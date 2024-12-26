
import { merge } from 'lodash-es';
import { Lookup_Period } from '@bh/db/config';
import { Quarter_Field } from './quarter';
export const Quarter_Period = merge({}, Quarter_Field, Lookup_Period );
