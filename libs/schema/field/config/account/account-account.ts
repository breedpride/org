
import { merge } from 'lodash-es';
import { Lookup_Account } from '@bh/db/config';
import { Account_Field } from './account';
export const Account_Account = merge({}, Account_Field, Lookup_Account );
