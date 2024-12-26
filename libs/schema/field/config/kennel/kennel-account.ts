
import { merge } from 'lodash-es';
import { Lookup_Account } from '@bh/db/config';
import { Kennel_Field } from './kennel';
export const Kennel_Account = merge({}, Kennel_Field, Lookup_Account );
