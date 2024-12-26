
import { merge } from 'lodash-es';
import { Lookup_BreedSection } from '@bh/db/config';
import { BreedSection_Field } from './breedsection';
export const BreedSection_BreedSection = merge({}, BreedSection_Field, Lookup_BreedSection );
