
import { merge } from 'lodash-es';
import { Lookup_Unit } from '@bh/db/config';
import { Unit_Field } from './unit';
export const Unit_Unit = merge({}, Unit_Field, Lookup_Unit );
