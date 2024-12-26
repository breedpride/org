
import { merge } from 'lodash-es';
import { Lookup_Pet } from '@bh/db/config';
import { Mother_Field } from './mother';
export const Mother_Pet = merge({}, Mother_Field, Lookup_Pet );
