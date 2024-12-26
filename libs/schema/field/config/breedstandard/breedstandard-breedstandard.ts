
import { merge } from 'lodash-es';
import { Lookup_BreedStandard } from '@bh/db/config';
import { BreedStandard_Field } from './breedstandard';
export const BreedStandard_BreedStandard = merge({}, BreedStandard_Field, Lookup_BreedStandard );
