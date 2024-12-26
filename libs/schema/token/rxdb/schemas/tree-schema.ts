import { Signal } from '@angular/core';
// import { RxCollectionCreatorExtended } from '@ngx-odm/rxdb/config';
import { FromSchema } from 'json-schema-to-ts';
import {
  ExtractDocumentTypeFromTypedRxJsonSchema,
  RxCollection,
  RxDocument,
  RxJsonSchema,
  toTypedRxJsonSchema,

} from 'rxdb';

export const TREE_SCHEMA_LITERAL = {
  title: 'tree schema',
  description: 'describes a tree structure with nodes and nested children',
  version: 0,
  keyCompression: false,
  primaryKey: {
    // where should the composed string be stored
    key: 'id',
    // fields that will be used to create the composed key
    fields: ['name', 'type'],
    // separator which is used to concat the fields values.
    separator: '_',
  },
  type: 'object',
  properties: {
    id: {
      type: 'string',
      description: 'The node id',
      maxLength: 100,
    },
    uId: {
      type: 'string',
      description: 'The node id',
      maxLength: 100,
    },
    name: {
      type: 'string',
      description: 'The node name',
    },
    type: {
      type: 'string',
      description: 'The node name',
    },
    features: {
      type: 'object',
      description: 'features',
      patternProperties: {
        '^.*$': {
          type: 'object',
          description: 'Any JSON object stored under this key',
        },
      },
      additionalProperties: true,
    },
    data: {
      type: 'object',
      description: 'features',
      properties: {
        fieldsConfig: {
          type: 'array',
          ref: 'tree',
          items: {
            type: 'string',
          },
        },
        entitySchemaName: {
          type: 'string',
          description: 'The name of the entity schema',
        },
        // TODO - use token for translation
        label: {
          type: 'string',
          description: 'The label of the entity schema',
        },
        component: {
          type: 'number',
          description: 'The component type code',
        },
        entitiesColumns: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        rows: {
          type: 'integer',
        },
        validators: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        displayField: {
          type: 'string',
        },
      },
    },
    deps: {
      type: 'array',
      ref: 'tree',
      items: {
        type: 'string',
      },
    },
    children: {
      type: 'array',
      description: 'List of child nodes',
      items: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Unique identifier for the child node',
          },
          name: { type: 'string', description: 'Name of the child node' },
          data: {
            type: 'object',
            additionalProperties: true,
            description: 'Custom data for the child node',
          },
          children: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                id: { type: 'string' },
                name: { type: 'string' },
              },
              required: ['id', 'name'],
            },
            description: 'Nested child nodes',
          },
        },
        required: ['id', 'name'],
      },
    },
  },
  required: ['name', 'type'],
} as const;
export type TreeSchema = FromSchema<typeof TREE_SCHEMA_LITERAL> & {
  features?: any;
};
// Створюємо Typed Schema
const schemaTyped = toTypedRxJsonSchema(TREE_SCHEMA_LITERAL);

// Виводимо тип документу на основі схеми
export type RxTreeDocumentType = ExtractDocumentTypeFromTypedRxJsonSchema<
  typeof schemaTyped
>;

// Експортуємо Typed RxJsonSchema
export const TREE_SCHEMA: RxJsonSchema<RxTreeDocumentType> =
  TREE_SCHEMA_LITERAL;

// export const TREE_SCHEMA_COLLECTION_CONFIG: RxCollectionCreatorExtended = {
//   name: 'tree',
//   localDocuments: false,
//   schema: schemaTyped, // to load schema from remote url pass `undefined` here
//   options: {
//     // schemaUrl: 'assets/data/todo.schema.json', // load schema from remote url
//     // initialDocs: TREESchema_INITIAL_ITEMS, // populate collection with initial data,
//     // useQueryParams: localStorage['_ngx_rxdb_queryparams'] === 'true', // bind collection filtering/sorting to URL query params,
//     // replicationStateFactory: todosReplicationStateFactory, // create replication state for collection
//   },
//   // statics: collectionMethods,
//   // in this example we have 3 migrations, since the beginning of development
//   // migrationStrategies: todosMigrations,
//   // conflictHandler: todosConflictHandler, // don't need custom for CouchDb example
// };

// ORM methods
type RxTreeDocMethods = {};

export type RxTreeDocument = RxDocument<RxTreeDocumentType, RxTreeDocMethods>;

export type RxTreeCollection = RxCollection<
  RxTreeDocumentType,
  RxTreeDocMethods,
  unknown,
  unknown,
  Signal<unknown>
>;
