
import { merge } from 'lodash-es';
import { Lookup_Gender } from '@bh/db/config';
import { Gender_Field } from './gender';
export const Gender_Gender = merge({}, Gender_Field, Lookup_Gender );
