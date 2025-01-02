import { FormFieldCode } from '@bh/consts';
import { merge } from 'lodash-es';
//--------------------------------------------
// Boolean
//--------------------------------------------
export const booleanParse = (value: any): boolean => value === 'true';
export const booleanStringify = (value: boolean): string => value.toString();

export const Boolean = merge(
  {},
  {
    parse: booleanParse,
    stringify: booleanStringify,
    component: FormFieldCode.BOOLEAN,
  }
);
