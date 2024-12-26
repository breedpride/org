
import { merge } from 'lodash-es';
import { Lookup_Contact } from '@bh/db/config';
import { Breeder_Field } from './breeder';
export const Breeder_Contact = merge({}, Breeder_Field, Lookup_Contact );
