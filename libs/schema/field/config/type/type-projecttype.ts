
import { merge } from 'lodash-es';
import { Lookup_ProjectType } from '@bh/db/config';
import { Type_Field } from './type';
export const Type_ProjectType = merge({}, Type_Field, Lookup_ProjectType );
