
import { merge } from 'lodash-es';
import { Lookup_HealthExamObject } from '@bh/db/config';
import { HealthExamObject_Field } from './healthexamobject';
export const HealthExamObject_HealthExamObject = merge({}, HealthExamObject_Field, Lookup_HealthExamObject );
