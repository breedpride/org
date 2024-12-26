
import { merge } from 'lodash-es';
import { Lookup_BreedCategory } from '@bh/db/config';
import { Category_Field } from './category';
export const Category_BreedCategory = merge({}, Category_Field, Lookup_BreedCategory );
