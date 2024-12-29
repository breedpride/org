import {
    RxJsonSchema,
    toTypedRxJsonSchema,
    ExtractDocumentTypeFromTypedRxJsonSchema,
    RxDocument
} from 'rxdb';
import { TREE_SCHEMA_LITERAL } from './tree-schema';
export const CONFIG_SCHEMA_LITERAL = TREE_SCHEMA_LITERAL;
const schemaTyped = toTypedRxJsonSchema(CONFIG_SCHEMA_LITERAL);
export type RxConfigDocumentType = ExtractDocumentTypeFromTypedRxJsonSchema<typeof schemaTyped>;

export const CONFIG_SCHEMA: RxJsonSchema<RxConfigDocumentType> = CONFIG_SCHEMA_LITERAL;

export type RxConfigDocument = RxDocument<RxConfigDocumentType, unknown>;
