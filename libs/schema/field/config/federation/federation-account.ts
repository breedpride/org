
import { merge } from 'lodash-es';
import { Lookup_Account } from '@bh/db/config';
import { Federation_Field } from './federation';
export const Federation_Account = merge({}, Federation_Field, Lookup_Account );
