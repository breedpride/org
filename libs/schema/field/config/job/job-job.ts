
import { merge } from 'lodash-es';
import { Lookup_Job } from '@bh/db/config';
import { Job_Field } from './job';
export const Job_Job = merge({}, Job_Field, Lookup_Job );
