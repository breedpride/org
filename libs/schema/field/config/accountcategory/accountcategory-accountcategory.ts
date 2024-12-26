
import { merge } from 'lodash-es';
import { Lookup_AccountCategory } from '@bh/db/config';
import { AccountCategory_Field } from './accountcategory';
export const AccountCategory_AccountCategory = merge({}, AccountCategory_Field, Lookup_AccountCategory );
