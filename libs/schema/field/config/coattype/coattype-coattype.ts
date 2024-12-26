
import { merge } from 'lodash-es';
import { Lookup_CoatType } from '@bh/db/config';
import { CoatType_Field } from './coattype';
export const CoatType_CoatType = merge({}, CoatType_Field, Lookup_CoatType );
