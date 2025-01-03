import { FormFieldCode } from '@bh/consts';

//--------------------------------------------
// String
//--------------------------------------------
export const stringParse = (value: any): string => value;

export const stringStringify = (value: boolean): string => value.toString();

export const String_Column = [
  {
    component: FormFieldCode.TEXT,
    parse: stringParse,
    stringify: stringStringify,
  },
];
