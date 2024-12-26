
import { merge } from 'lodash-es';
import { Lookup_TitleInPet } from '@bh/db/config';
import { PetTitles_Field } from './pettitles';
export const PetTitles_TitleInPet = merge({}, PetTitles_Field, Lookup_TitleInPet );
