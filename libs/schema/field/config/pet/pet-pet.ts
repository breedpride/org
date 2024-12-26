
import { merge } from 'lodash-es';
import { Lookup_Pet } from '@bh/db/config';
import { Pet_Field } from './pet';
export const Pet_Pet = merge({}, Pet_Field, Lookup_Pet );
