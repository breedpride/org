
import { merge } from 'lodash-es';
import { Lookup_PublicData } from '@bh/db/config';
import { Redirect_Field } from './redirect';
export const Redirect_PublicData = merge({}, Redirect_Field, Lookup_PublicData );
