import { FormFieldCode } from '@bh/consts';
import { merge } from 'lodash-es';

// TODO - make parsers
export const DateTime = merge({}, { component: FormFieldCode.DATE });
