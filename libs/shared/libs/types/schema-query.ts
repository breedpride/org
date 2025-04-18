export interface SchemaColumn {
  uId: string;
  name: string;
  type: string;
  referenceSchema?: string;
  primaryDisplayColumnName?: string;
  caption?: string;
  isRequired?: boolean;
  levelAccess?: number;
}

export interface SchemaResponse {
  columns: SchemaColumn[];
  primaryDisplayColumnName: string;
}
