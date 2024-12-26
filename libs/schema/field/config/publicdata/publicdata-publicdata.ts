
import { merge } from 'lodash-es';
import { Lookup_PublicData } from '@bh/db/config';
import { PublicData_Field } from './publicdata';
export const PublicData_PublicData = merge({}, PublicData_Field, Lookup_PublicData );
