
import { merge } from 'lodash-es';
import { Lookup_PetSize } from '@bh/db/config';
import { Size_Field } from './size';
export const Size_PetSize = merge({}, Size_Field, Lookup_PetSize );
