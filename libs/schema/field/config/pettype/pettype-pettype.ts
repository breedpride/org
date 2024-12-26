
import { merge } from 'lodash-es';
import { Lookup_PetType } from '@bh/db/config';
import { PetType_Field } from './pettype';
export const PetType_PetType = merge({}, PetType_Field, Lookup_PetType );
