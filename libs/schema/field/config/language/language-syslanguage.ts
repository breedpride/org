
import { merge } from 'lodash-es';
import { Lookup_SysLanguage } from '@bh/db/config';
import { Language_Field } from './language';
export const Language_SysLanguage = merge({}, Language_Field, Lookup_SysLanguage );
