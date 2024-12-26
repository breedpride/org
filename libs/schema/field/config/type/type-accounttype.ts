
import { merge } from 'lodash-es';
import { Lookup_AccountType } from '@bh/db/config';
import { Type_Field } from './type';
export const Type_AccountType = merge({}, Type_Field, Lookup_AccountType );
