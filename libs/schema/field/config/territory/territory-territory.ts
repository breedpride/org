
import { merge } from 'lodash-es';
import { Lookup_Territory } from '@bh/db/config';
import { Territory_Field } from './territory';
export const Territory_Territory = merge({}, Territory_Field, Lookup_Territory );
