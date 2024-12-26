
import { merge } from 'lodash-es';
import { Lookup_BreedSubsection } from '@bh/db/config';
import { Subsection_Field } from './subsection';
export const Subsection_BreedSubsection = merge({}, Subsection_Field, Lookup_BreedSubsection );
