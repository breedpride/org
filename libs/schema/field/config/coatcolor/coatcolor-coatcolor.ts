
import { merge } from 'lodash-es';
import { Lookup_CoatColor } from '@bh/db/config';
import { CoatColor_Field } from './coatcolor';
export const CoatColor_CoatColor = merge({}, CoatColor_Field, Lookup_CoatColor );
