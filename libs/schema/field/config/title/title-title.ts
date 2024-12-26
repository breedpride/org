
import { merge } from 'lodash-es';
import { Lookup_Title } from '@bh/db/config';
import { Title_Field } from './title';
export const Title_Title = merge({}, Title_Field, Lookup_Title );
