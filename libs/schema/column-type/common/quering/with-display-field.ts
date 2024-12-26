export type DisplayField =
  | 'Name'
  | 'Title'
  | 'Description'
  | 'Code'
  | ''
  | 'Number'
  | 'PublicName';
export type WithDisplayField = { displayField: DisplayField };
