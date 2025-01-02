
import { merge } from 'lodash-es';

import { String_Column } from '@bh/column-type/string';

export const Guid = merge({}, String_Column, { isRequired: true });

export * from './fn';
