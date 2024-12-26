// import { RxCollectionCreatorExtended } from '@ngx-odm/rxdb/config';
import {
  ExtractDocumentTypeFromTypedRxJsonSchema,
  RxJsonSchema,
  toTypedRxJsonSchema,
} from 'rxdb';

export const FEATURE_SCHEMA_LITERAL = {
  title: 'feature schema',
  description: 'describes a feature with properties and collections',
  version: 1,
  keyCompression: false,
  primaryKey: 'name',
  type: 'object',
  properties: {
    name: {
      type: 'string',
      description: 'Name of the feature',
      maxLength: 100,
    },
    type: {
      type: 'string',
      enum: ['property', 'table', 'entity', 'collection'],
      description: 'Type of the feature',
    },
    dataType: {
      oneOf: [
        { type: 'string' },
        { type: 'number' },
        { type: 'boolean' },
        { type: 'object' },
        { type: 'array' },
      ],
      description: 'The data type of the feature',
    },
    features: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            description: 'Name of the nested feature',
          },
          type: {
            type: 'string',
            enum: ['property', 'table', 'entity', 'collection', 'field'],
            description: 'Type of the nested feature',
          },
          dataType: {
            oneOf: [
              { type: 'string' },
              { type: 'number' },
              { type: 'boolean' },
              { type: 'object' },
              { type: 'array' },
            ],
            description: 'The data type of the nested feature',
          },
          features: {
            type: 'array',
            items: {
              type: 'object', // Тут вказуємо об'єкт для вкладених фіч
              properties: {
                name: { type: 'string' },
                type: {
                  type: 'string',
                  enum: ['property', 'table', 'entity', 'collection', 'field'],
                },
                dataType: {
                  oneOf: [
                    { type: 'string' },
                    { type: 'number' },
                    { type: 'boolean' },
                    { type: 'object' },
                    { type: 'array' },
                  ],
                },
              },
              required: ['name', 'type'],
            },
          },
        },
        required: ['name', 'type'],
      },
      description: 'Nested features or properties',
    },
    settings: {
      type: 'object',
      additionalProperties: true,
      description: 'Additional settings for the feature',
    },
  },
  required: ['name', 'type'],
  definitions: {
    feature: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          description: 'Name of the feature',
        },
        type: {
          type: 'string',
          enum: ['property', 'table', 'entity', 'collection'],
          description: 'Type of the feature',
        },
        dataType: {
          oneOf: [
            { type: 'string' },
            { type: 'number' },
            { type: 'boolean' },
            { type: 'object' },
            { type: 'array' },
          ],
          description: 'The data type of the feature',
        },
        features: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              name: { type: 'string' },
              type: {
                type: 'string',
                enum: ['property', 'table', 'entity', 'collection'],
              },
              dataType: {
                oneOf: [
                  { type: 'string' },
                  { type: 'number' },
                  { type: 'boolean' },
                  { type: 'object' },
                  { type: 'array' },
                ],
              },
            },
            required: ['name', 'type'],
          },
        },
        settings: {
          type: 'object',
          additionalProperties: true,
          description: 'Additional settings for the feature',
        },
      },
      required: ['name', 'type'],
    },
  },
} as const;

// Створюємо Typed Schema
const schemaTyped = toTypedRxJsonSchema(FEATURE_SCHEMA_LITERAL);

// Виводимо тип документу на основі схеми
export type RxFeatureDocumentType = ExtractDocumentTypeFromTypedRxJsonSchema<
  typeof schemaTyped
>;

// Експортуємо Typed RxJsonSchema
export const FEATURE_SCHEMA: RxJsonSchema<RxFeatureDocumentType> =
  FEATURE_SCHEMA_LITERAL;
// Експортуємо Typed RxJsonSchema

// export const FEATURE_SCHEMA_COLLECTION_CONFIG: RxCollectionCreatorExtended = {
//   name: 'feature',
//   localDocuments: true,
//   schema: schemaTyped, // to load schema from remote url pass `undefined` here
//   options: {
//     // schemaUrl: 'assets/data/todo.schema.json', // load schema from remote url
//     // initialDocs: TODOS_INITIAL_ITEMS, // populate collection with initial data,
//     // useQueryParams: localStorage['_ngx_rxdb_queryparams'] === 'true', // bind collection filtering/sorting to URL query params,
//     // replicationStateFactory: todosReplicationStateFactory, // create replication state for collection
//   },
//   // statics: collectionMethods,
//   // in this example we have 3 migrations, since the beginning of development
//   migrationStrategies: {
//     // 1 means, this transforms data from version 0 to version 1
//     1: function (oldDoc) {
//       oldDoc.time = new Date(oldDoc.time).getTime(); // string to unix
//       return oldDoc;
//     },
//   },
//   // conflictHandler: todosConflictHandler, // don't need custom for CouchDb example
// };
