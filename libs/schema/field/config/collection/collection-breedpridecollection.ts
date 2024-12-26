
import { merge } from 'lodash-es';
import { Lookup_BreedprideCollection } from '@bh/db/config';
import { Collection_Field } from './collection';
export const Collection_BreedprideCollection = merge({}, Collection_Field, Lookup_BreedprideCollection );
