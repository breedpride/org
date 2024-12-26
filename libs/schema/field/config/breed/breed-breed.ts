
import { merge } from 'lodash-es';
import { Lookup_Breed } from '@bh/db/config';
import { Breed_Field } from './breed';
export const Breed_Breed = merge({}, Breed_Field, Lookup_Breed );
