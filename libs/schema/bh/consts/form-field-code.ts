export const FormFieldCode = {
  NONE: -1,
  SELECT: 8, // SELECT
  TEXTAREA: 7, // TEXTAREA
  AUTOCOMPLETE: 0, // autocomlete
  BOOLEAN: 5, //booleanInput
  DATE: 3, //dateInput
  DROPDOWN: 1, // dropdown
  EDIT: 6, // 'editorInput'
  NUMBER: 4, //  numberInput
  TEXT: 2, // 'textInput'
  DATE_RANGE: 9, // 'dateRangeInput'
  HeaderFilterManager: 11,
  SearchName: 12,
} as const;

export type FormFieldCode = (typeof FormFieldCode)[keyof typeof FormFieldCode];
