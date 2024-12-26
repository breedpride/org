
import { merge } from 'lodash-es';
import { Lookup_PetQualification } from '@bh/db/config';
import { Qualification_Field } from './qualification';
export const Qualification_PetQualification = merge({}, Qualification_Field, Lookup_PetQualification );
