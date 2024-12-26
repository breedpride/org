
import { merge } from 'lodash-es';
import { Lookup_Period } from '@bh/db/config';
import { Year_Field } from './year';
export const Year_Period = merge({}, Year_Field, Lookup_Period );
