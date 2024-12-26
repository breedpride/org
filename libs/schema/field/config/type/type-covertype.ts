
import { merge } from 'lodash-es';
import { Lookup_CoverType } from '@bh/db/config';
import { Type_Field } from './type';
export const Type_CoverType = merge({}, Type_Field, Lookup_CoverType );
