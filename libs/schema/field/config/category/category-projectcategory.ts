
import { merge } from 'lodash-es';
import { Lookup_ProjectCategory } from '@bh/db/config';
import { Category_Field } from './category';
export const Category_ProjectCategory = merge({}, Category_Field, Lookup_ProjectCategory );
