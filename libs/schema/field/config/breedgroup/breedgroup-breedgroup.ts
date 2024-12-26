
import { merge } from 'lodash-es';
import { Lookup_BreedGroup } from '@bh/db/config';
import { BreedGroup_Field } from './breedgroup';
export const BreedGroup_BreedGroup = merge({}, BreedGroup_Field, Lookup_BreedGroup );
