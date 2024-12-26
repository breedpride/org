
import { merge } from 'lodash-es';
import { Lookup_Period } from '@bh/db/config';
import { Parent_Field } from './parent';
export const Parent_Period = merge({}, Parent_Field, Lookup_Period );
