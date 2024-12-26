
import { merge } from 'lodash-es';
import { Lookup_PeriodType } from '@bh/db/config';
import { PeriodType_Field } from './periodtype';
export const PeriodType_PeriodType = merge({}, PeriodType_Field, Lookup_PeriodType );
