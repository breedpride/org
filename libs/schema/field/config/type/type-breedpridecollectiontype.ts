
import { merge } from 'lodash-es';
import { Lookup_BreedprideCollectionType } from '@bh/db/config';
import { Type_Field } from './type';
export const Type_BreedprideCollectionType = merge({}, Type_Field, Lookup_BreedprideCollectionType );
