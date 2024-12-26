
import { merge } from 'lodash-es';
import { Lookup_Currency } from '@bh/db/config';
import { Currency_Field } from './currency';
export const Currency_Currency = merge({}, Currency_Field, Lookup_Currency );
