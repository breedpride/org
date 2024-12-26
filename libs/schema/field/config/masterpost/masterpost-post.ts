
import { merge } from 'lodash-es';
import { Lookup_Post } from '@bh/db/config';
import { MasterPost_Field } from './masterpost';
export const MasterPost_Post = merge({}, MasterPost_Field, Lookup_Post );
