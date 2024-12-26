
import { merge } from 'lodash-es';
import { Lookup_City } from '@bh/db/config';
import { City_Field } from './city';
export const City_City = merge({}, City_Field, Lookup_City );
