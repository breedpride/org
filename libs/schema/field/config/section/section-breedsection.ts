
import { merge } from 'lodash-es';
import { Lookup_BreedSection } from '@bh/db/config';
import { Section_Field } from './section';
export const Section_BreedSection = merge({}, Section_Field, Lookup_BreedSection );
