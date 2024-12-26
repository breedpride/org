
import { merge } from 'lodash-es';
import { Lookup_Project } from '@bh/db/config';
import { Project_Field } from './project';
export const Project_Project = merge({}, Project_Field, Lookup_Project );
