import { FormFieldCode } from '@bh/consts';
//--------------------------------------------
// Number // TODO use Number instead of boolean
//--------------------------------------------
export const numberParse = (value: any): number => value * 1;
export const numberStringify = (value: boolean): string => value.toString();
export const numberComponent = (): FormFieldCode => FormFieldCode.NUMBER;

export const Number = [
  {
    parse: numberParse,
    stringify: numberStringify,
    component: FormFieldCode.NUMBER,
  } as const,
] as const;
