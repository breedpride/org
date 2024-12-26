
import { merge } from 'lodash-es';
import { Lookup_PostType } from '@bh/db/config';
import { Type_Field } from './type';
export const Type_PostType = merge({}, Type_Field, Lookup_PostType );
