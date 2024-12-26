
import { merge } from 'lodash-es';
import { Lookup_BreedDivision } from '@bh/db/config';
import { BreedDivision_Field } from './breeddivision';
export const BreedDivision_BreedDivision = merge({}, BreedDivision_Field, Lookup_BreedDivision );
