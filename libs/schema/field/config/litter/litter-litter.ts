
import { merge } from 'lodash-es';
import { Lookup_Litter } from '@bh/db/config';
import { Litter_Field } from './litter';
export const Litter_Litter = merge({}, Litter_Field, Lookup_Litter );
