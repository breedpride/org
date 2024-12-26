
import { merge } from 'lodash-es';
import { Lookup_HealthExamObject } from '@bh/db/config';
import { Object_Field } from './object';
export const Object_HealthExamObject = merge({}, Object_Field, Lookup_HealthExamObject );
