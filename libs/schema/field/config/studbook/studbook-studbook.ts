
import { merge } from 'lodash-es';
import { Lookup_Studbook } from '@bh/db/config';
import { Studbook_Field } from './studbook';
export const Studbook_Studbook = merge({}, Studbook_Field, Lookup_Studbook );
