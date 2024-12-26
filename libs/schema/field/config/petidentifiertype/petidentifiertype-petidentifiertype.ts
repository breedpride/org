
import { merge } from 'lodash-es';
import { Lookup_PetIdentifierType } from '@bh/db/config';
import { PetIdentifierType_Field } from './petidentifiertype';
export const PetIdentifierType_PetIdentifierType = merge({}, PetIdentifierType_Field, Lookup_PetIdentifierType );
