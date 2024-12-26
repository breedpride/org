
import { merge } from 'lodash-es';
import { Lookup_EntitySchemaLookup } from '@bh/db/config';
import { EntitySchema_Field } from './entityschema';
export const EntitySchema_EntitySchemaLookup = merge({}, EntitySchema_Field, Lookup_EntitySchemaLookup );
