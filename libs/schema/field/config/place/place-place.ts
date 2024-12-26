
import { merge } from 'lodash-es';
import { Lookup_Place } from '@bh/db/config';
import { Place_Field } from './place';
export const Place_Place = merge({}, Place_Field, Lookup_Place );
