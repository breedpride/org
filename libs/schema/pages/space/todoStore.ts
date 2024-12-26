// import { RxCollectionCreatorExtended } from '@ngx-odm/rxdb/config';

export type Schema = {
  id: string;
  type: string;
  required: boolean;
  disabled: boolean;
  valueType: string;
};
export const schemaInitValue = {
  id: '',
  type: '',
  required: false,
  disabled: false,
  valueType: '',
};

const collectionConfigSchema = {
  version: 0,
  primaryKey: 'id',
  type: 'object',
  name: 'schema',
  properties: {
    id: {
      type: 'string',
      title: 'Id',
      pattern: '^(.*)$',
      maxLength: 100,
      readOnly: true,
      primary: true,
    },
    type: {
      type: 'string',
      title: 'Schema Type',
    },
    valueType: {
      type: 'string',
      title: 'Data Value Type',
    },
    required: {
      type: 'boolean',
      title: 'Required',
    },
    disabled: {
      type: 'boolean',
      title: 'Disabled',
    },
    parentIds: {
      type: 'array',
      maxItems: 5,
      items: {
        type: 'string',
        title: 'Parent Id',
      },
    },
  },
};

// export const schemaCollectionConfig: RxCollectionCreatorExtended = {
//   name: 'schema', // <- name (required)
//   schema: collectionConfigSchema, // <- schema (not required, see below)
//   localDocuments: true,
//   options: {
//     initialDocs: [], // docs to be imported into empty collection (optional)
//     // schemaUrl: 'assets/data/todo.schema.json', // load schema from remote url (optional)
//     // replicationStateFactory: collection => {
//     //   // provide replication state (optional)
//     //   // return new MyReplicationState(collection);
//     // },
//   },
// };

// export function providSome<
//   Todo extends { id: string; title: string; completed: boolean },
//   TodosFilter extends Filter,
// >() {
//   const ALL = 'ALL' as TodosFilter;
//   const todo = 'todo' as const;
//   //ts-ignore
//   return signalStore(
//     { providedIn: 'root' },
//     withDevtools('todo'),
//     withEntities<Todo>(),
//     withCollectionServicev18<Todo, TodosFilter, typeof todo>({
//       collection: todo,
//       filter: ALL,
//     })
//   );
// }
