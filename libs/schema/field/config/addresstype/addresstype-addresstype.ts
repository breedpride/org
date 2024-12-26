
import { merge } from 'lodash-es';
import { Lookup_AddressType } from '@bh/db/config';
import { AddressType_Field } from './addresstype';
export const AddressType_AddressType = merge({}, AddressType_Field, Lookup_AddressType );
