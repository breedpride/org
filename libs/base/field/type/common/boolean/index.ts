import { FormFieldCode } from '@bh/consts';

//--------------------------------------------
// Boolean
//--------------------------------------------
export const booleanParse = (value: any): boolean => value === 'true';
export const booleanStringify = (value: boolean): string => value.toString();

export const Boolean = [
  {
    parse: booleanParse,
    stringify: booleanStringify,
    component: FormFieldCode.BOOLEAN,
  },
] as const;
