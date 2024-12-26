
import { merge } from 'lodash-es';
import { Lookup_HealthExamResult } from '@bh/db/config';
import { HealthExamResult_Field } from './healthexamresult';
export const HealthExamResult_HealthExamResult = merge({}, HealthExamResult_Field, Lookup_HealthExamResult );
