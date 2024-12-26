
import { merge } from 'lodash-es';
import { Lookup_Account } from '@bh/db/config';
import { Parent_Field } from './parent';
export const Parent_Account = merge({}, Parent_Field, Lookup_Account );
