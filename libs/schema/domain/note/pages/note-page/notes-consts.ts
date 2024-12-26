export const BREEDSHCEMA_ID = 'de9afe0f-d2ac-4390-b8c8-87585e586df1';
export const CONTACTSCHEMA_ID = '17beff38-1891-47cd-b76b-5e7ad683a7f5';
export const ACCOUNTSCHEMA_ID = '1084df3b-3846-4784-9b72-a39e1b829fb4';
export const LITTERSCHEMA_ID = '55bb34f1-18e6-4a4e-9901-c348ee19ac7a';
export const PETSCHEMA_ID = 'e95443b1-5eda-40a4-94e7-37fc0665f39b';
export const PROJECTSCHEMA_ID = 'a0739358-ea1b-4a91-bd76-d69ada96a441';

// TODO use cached valuexs from browser
export const PET_NOTE_SCHEMA = {
  Id: PETSCHEMA_ID,
  Name: 'Pet',
  PublicName: 'Pet',
};
export const LITTER_NOTE_SCHEMA = {
  Id: LITTERSCHEMA_ID,
  Name: 'Litter',
  PublicName: 'Litter',
};
export const BREED_NOTE_SCHEMA = {
  Id: BREEDSHCEMA_ID,
  Name: 'Breed',
  PublicName: 'Breed',
};
export const ACCOUNT_NOTE_SCHEMA = {
  Id: ACCOUNTSCHEMA_ID,
  Name: 'Kennel',
  PublicName: 'Kennel',
};
export const CONTACT_NOTE_SCHEMA = {
  Id: CONTACTSCHEMA_ID,
  Name: 'Contact',
  PublicName: 'Contact',
};
export const PROJECT_NOTE_SCHEMA = {
  Id: PROJECTSCHEMA_ID,
  Name: 'Project',
  PublicName: 'Project',
};
// TODO - delete after all detailconfig exist check
const NoteSchemaMap = new Map()
  .set('Pet', PET_NOTE_SCHEMA)
  .set('Breed', BREED_NOTE_SCHEMA)
  .set('Litter', LITTER_NOTE_SCHEMA)
  .set('Kennel', ACCOUNT_NOTE_SCHEMA)
  .set('Contact', CONTACT_NOTE_SCHEMA)
  .set('Project', PROJECT_NOTE_SCHEMA);

// export const getNoteDefaultValuesByModel = (
//   schemaName: string,
//   nestedEntity: { Id: string; Name: string }
// ) => {
//   // TODO - check SchemaName and other values

//   const noteDefaultValues: Record<string, any> = {};
//   noteDefaultValues[schemaName] = () => nestedEntity;
//   noteDefaultValues['EntitySchema'] = () => NoteSchemaMap.get(schemaName);

//   return noteDefaultValues;
// };
