
import { merge } from 'lodash-es';
import { Lookup_Project } from '@bh/db/config';
import { ParentProject_Field } from './parentproject';
export const ParentProject_Project = merge({}, ParentProject_Field, Lookup_Project );
