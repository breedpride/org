
import { merge } from 'lodash-es';
import { Lookup_Account } from '@bh/db/config';
import { Provider_Field } from './provider';
export const Provider_Account = merge({}, Provider_Field, Lookup_Account );
