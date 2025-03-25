// FormFieldCode
export const FormFieldCode = {
  NONE: -1,
  SELECT: 8,
  TEXTAREA: 7,
  AUTOCOMPLETE: 0,
  BOOLEAN: 5,
  DATE: 3,
  DROPDOWN: 1,
  EDIT: 6,
  NUMBER: 4,
  TEXT: 2,
  DATE_RANGE: 9,
  HeaderFilterManager: 11,
  SearchName: 12,
} as const;
export type FormFieldCode = (typeof FormFieldCode)[keyof typeof FormFieldCode];

// ConfigType
export const ConfigType = {
  FieldDataType: "FieldDataType",
  Field: "Field",
  Space: "Space",
  SchemaName: "SchemaName",
  FieldName: "FieldName",
  FieldProperty: "FieldProperty",
  SchemaConfig: "SchemaConfig",
  Config: "Config",
} as const;

export type ConfigType = (typeof ConfigType)[keyof typeof ConfigType];

export const enums: Map<string, Record<string, string | number>> = new Map()
  .set("FormFieldCode", FormFieldCode)
  .set("ConfigType", ConfigType);
