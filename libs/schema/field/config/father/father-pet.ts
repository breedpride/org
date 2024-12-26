
import { merge } from 'lodash-es';
import { Lookup_Pet } from '@bh/db/config';
import { Father_Field } from './father';
export const Father_Pet = merge({}, Father_Field, Lookup_Pet );
