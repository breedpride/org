
import { merge } from 'lodash-es';
import { Lookup_StudbookType } from '@bh/db/config';
import { Type_Field } from './type';
export const Type_StudbookType = merge({}, Type_Field, Lookup_StudbookType );
