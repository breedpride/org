import { FormFieldCode } from '@bh/windmill';
import { merge } from 'lodash-es';

// TODO - make parsers
export const DateTime = merge({}, { component: FormFieldCode.DATE });
