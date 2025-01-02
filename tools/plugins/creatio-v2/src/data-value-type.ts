export const IgnoreDataValueTypes = {
  BLOB: 13,
  COLLECTION: 17,
  COLOR: 18,
  COMPOSITE_OBJECT_LIST: 39,
  CUSTOM_OBJECT: 15,
  ENTITY: 20,
  ENTITY_COLLECTION: 21,
  ENTITY_COLUMN_MAPPING_COLLECTION: 22,
  ENUM: 11,
  FILE: 25,
  FILE_LOCATOR: 41,
  HASH_TEXT: 23,
  IMAGE: 14,
  IMAGELOOKUP: 16,
  LOCALIZABLE_PARAMETER_VALUES_LIST: 35,
  MAPPING: 26,
  METADATA_TEXT: 36,
  OBJECT_LIST: 38,
  SECURE_TEXT: 24,
  STAGE_INDICATOR: 37,
  TIME: 9,
} as const;

export const TextDataValueTypes = {
  LOCALIZABLE_STRING: 19,
  LONG_TEXT: 30,
  MAXSIZE_TEXT: 29,
  MEDIUM_TEXT: 28,
  SHORT_TEXT: 27,
  TEXT: 1,
} as const;

export const FloatDataValueTypes = {
  FLOAT: 5,
  FLOAT1: 31,
  FLOAT2: 32,
  FLOAT3: 33,
  FLOAT4: 34,
  FLOAT8: 40,
  MONEY: 6,
} as const;

export const IntegerDataValueTypes = {
  INTEGER: 4,
} as const;
export const DateDataValueTypes = {
  DATE: 8,
  DATE_TIME: 7,
} as const;

export const DataValueType = {
  ...IgnoreDataValueTypes,
  ...TextDataValueTypes,
  ...FloatDataValueTypes,
  ...IntegerDataValueTypes,
  BOOLEAN: 12,
  GUID: 0,
  LOOKUP: 10,
} as const;

export const CREATIO_IGNORE_COLUMN_TYPES: number[] =
  Object.values(IgnoreDataValueTypes);
export const CREATIO_TEXT_COLUMN_TYPES: number[] =
  Object.values(TextDataValueTypes);
export const CREATIO_FLOAT_COLUMN_TYPES: number[] =
  Object.values(FloatDataValueTypes);
export const CREATIO_INTEGER_COLUMN_TYPES: number[] = Object.values(
  IntegerDataValueTypes
);
export const CREATIO_DATE_COLUMN_TYPES: number[] =
  Object.values(DateDataValueTypes);

export const CREATIO_COLUMN_TYPES = [
  {
    id: '0',
    type: 'DataValueType',
    valueType: 'GUID',
    required: true,
    disabled: false,
  },
  {
    id: '10',
    valueType: 'LOOKUP',
    type: 'DataValueType',
    required: false,
    disabled: false,
  },
  {
    id: '12',
    valueType: 'BOOLEAN',
    type: 'DataValueType',
    required: false,
    disabled: false,
  },
  {
    id: '4',
    valueType: 'INTEGER',
    type: 'DataValueType',
    required: false,
    disabled: false,
  },
  //----------------------
  // Date types
  //----------------------
  {
    id: '7',
    valueType: 'DATE_TIME',
    type: 'DataValueType',
    required: false,
    disabled: false,
  },
  {
    id: '8',
    valueType: 'DATE',
    type: 'DataValueType',
    required: false,
    disabled: false,
  },
  //----------------------
  // Float types
  //----------------------
  { id: '5', valueType: 'FLOAT', type: 'DataValueType', required: false },
  { id: '31', valueType: 'FLOAT1', type: 'DataValueType', required: false },
  { id: '32', valueType: 'FLOAT2', type: 'DataValueType', required: false },
  { id: '33', valueType: 'FLOAT3', type: 'DataValueType', required: false },
  { id: '34', valueType: 'FLOAT4', type: 'DataValueType', required: false },
  { id: '40', valueType: 'FLOAT8', type: 'DataValueType', required: false },
  { id: '6', valueType: 'MONEY', type: 'DataValueType', required: false },
  //----------------------
  // String types
  //----------------------
  {
    id: '19',
    valueType: 'LOCALIZABLE_STRING',
    type: 'DataValueType',
    required: false,
  },
  { id: '30', valueType: 'LONG_TEXT', type: 'DataValueType', required: false },
  {
    id: '29',
    valueType: 'MAXSIZE_TEXT',
    type: 'DataValueType',
    required: false,
  },
  {
    id: '28',
    valueType: 'MEDIUM_TEXT',
    type: 'DataValueType',
    required: false,
  },
  { id: '27', valueType: 'SHORT_TEXT', type: 'DataValueType', required: false },
  { id: '1', valueType: 'TEXT', type: 'DataValueType', required: false },

  //----------------------
  // Disabled types
  //----------------------
  {
    id: '13',
    valueType: 'BLOB',
    type: 'DataValueType',
    disabled: true,
    required: false,
  },
  {
    id: '17',
    type: 'DataValueType',
    valueType: 'COLLECTION',
    disabled: true,
    required: false,
  },
  {
    id: '18',
    valueType: 'COLOR',
    type: 'DataValueType',
    required: false,
    disabled: true,
  },
  {
    id: '39',
    valueType: 'COMPOSITE_OBJECT_LIST',
    type: 'DataValueType',
    disabled: true,
    required: false,
  },
  {
    id: '15',
    valueType: 'CUSTOM_OBJECT',
    type: 'DataValueType',
    disabled: true,
    required: false,
  },
  {
    id: '20',
    valueType: 'ENTITY',
    type: 'DataValueType',
    required: false,
    disabled: true,
  },
  {
    id: '21',
    valueType: 'ENTITY_COLLECTION',
    type: 'DataValueType',
    required: false,
    disabled: true,
  },
  {
    id: '22',
    valueType: 'ENTITY_COLUMN_MAPPING_COLLECTION',
    type: 'DataValueType',
    required: false,
    disabled: true,
  },
  {
    id: '11',
    valueType: 'ENUM',
    type: 'DataValueType',
    required: false,
    disabled: true,
  },
  {
    id: '25',
    valueType: 'FILE',
    type: 'DataValueType',
    required: false,
    disabled: true,
  },
  {
    id: '41',
    valueType: 'FILE_LOCATOR',
    type: 'DataValueType',
    required: false,
    disabled: true,
  },
  {
    id: '23',
    valueType: 'HASH_TEXT',
    type: 'DataValueType',
    required: false,
    disabled: true,
  },
  {
    id: '14',
    valueType: 'IMAGE',
    type: 'DataValueType',
    required: false,
    disabled: true,
  },
  {
    id: '16',
    valueType: 'IMAGELOOKUP',
    type: 'DataValueType',
    required: false,
    disabled: true,
  },
  {
    id: '35',
    valueType: 'LOCALIZABLE_PARAMETER_VALUES_LIST',
    type: 'DataValueType',
    required: false,
    disabled: true,
  },
  {
    id: '26',
    valueType: 'MAPPING',
    type: 'DataValueType',
    required: false,
    disabled: true,
  },
  {
    id: '36',
    valueType: 'METADATA_TEXT',
    type: 'DataValueType',
    required: false,
    disabled: true,
  },
  {
    id: '38',
    valueType: 'OBJECT_LIST',
    type: 'DataValueType',
    required: false,
    disabled: true,
  },
  {
    id: '24',
    valueType: 'SECURE_TEXT',
    type: 'DataValueType',
    required: false,
    disabled: true,
  },
  {
    id: '37',
    valueType: 'STAGE_INDICATOR',
    type: 'DataValueType',
    required: false,
    disabled: true,
  },
  {
    id: '9',
    valueType: 'TIME',
    type: 'DataValueType',
    required: false,
    disabled: true,
  },
];
