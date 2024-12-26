
import { merge } from 'lodash-es';
import { Lookup_PetClass } from '@bh/db/config';
import { Class_Field } from './class';
export const Class_PetClass = merge({}, Class_Field, Lookup_PetClass );
