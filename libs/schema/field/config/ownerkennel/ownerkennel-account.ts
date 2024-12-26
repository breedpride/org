
import { merge } from 'lodash-es';
import { Lookup_Account } from '@bh/db/config';
import { OwnerKennel_Field } from './ownerkennel';
export const OwnerKennel_Account = merge({}, OwnerKennel_Field, Lookup_Account );
