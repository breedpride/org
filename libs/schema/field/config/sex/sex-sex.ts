
import { merge } from 'lodash-es';
import { Lookup_Sex } from '@bh/db/config';
import { Sex_Field } from './sex';
export const Sex_Sex = merge({}, Sex_Field, Lookup_Sex );
