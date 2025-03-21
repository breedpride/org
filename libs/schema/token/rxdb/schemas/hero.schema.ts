import {
  ExtractDocumentTypeFromTypedRxJsonSchema,
  RxJsonSchema,
} from 'rxdb';
export const HERO_SCHEMA_LITERAL = {
  title: 'hero schema',
  description: 'describes a simple hero',
  version: 0,
  keyCompression: false,
  primaryKey: 'name',
  type: 'object',
  properties: {
    name: {
      type: 'string',
      default: '',
      maxLength: 100,
    },
    color: {
      type: 'string',
      default: '',
      minLength: 3,
    },
    hp: {
      type: 'number',
      minimum: 0,
      maximum: 100,
      default: 100,
    },
  },
  required: ['name', 'color', 'hp'],
} as const;

export type RxHeroDocumentType = ExtractDocumentTypeFromTypedRxJsonSchema<
  typeof HERO_SCHEMA_LITERAL
>;

export const HERO_SCHEMA: RxJsonSchema<RxHeroDocumentType> =
  HERO_SCHEMA_LITERAL;
