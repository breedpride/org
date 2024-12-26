
import { merge } from 'lodash-es';
import { Lookup_Contact } from '@bh/db/config';
import { PrimaryContact_Field } from './primarycontact';
export const PrimaryContact_Contact = merge({}, PrimaryContact_Field, Lookup_Contact );
