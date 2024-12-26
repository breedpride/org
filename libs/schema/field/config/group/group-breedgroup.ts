
import { merge } from 'lodash-es';
import { Lookup_BreedGroup } from '@bh/db/config';
import { Group_Field } from './group';
export const Group_BreedGroup = merge({}, Group_Field, Lookup_BreedGroup );
