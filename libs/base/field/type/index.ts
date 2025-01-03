// @index(['./*.{ts,tsx}', './**/*/index.{ts,tsx}'], f => `export * from '${f.path.replace(/\/index$/, '')}'`)
export * from './common/boolean';
export * from './common/color';
export * from './common/date';
export * from './common/datetime';
export * from './common/emailtext';
export * from './common/float';
export * from './common/guid';
export * from './common';
export * from './common/integer';
export * from './common/longtext';
export * from './common/lookup/config';
export * from './common/lookup/display-field';
export * from './common/lookup';
export * from './common/maxsizetext';
export * from './common/mediumtext';
export * from './common/number';
export * from './common/phonetext';
export * from './common/shorttext';
export * from './common/string';
export * from './common/webtext';
// @endindex

// @index(['./lookup/*.{ts,tsx}'], f => `export * from '${f.path.replace(/\/index$/, '')}'`)
export * from './lookup/account';
export * from './lookup/addresstype';
export * from './lookup/city';
export * from './lookup/contact';
export * from './lookup/contactdecisionrole';
export * from './lookup/contactsalutationtype';
export * from './lookup/country';
export * from './lookup/cover';
export * from './lookup/gender';
export * from './lookup/job';
export * from './lookup/region';
export * from './lookup/syslanguage';
export * from './lookup/verificationstatus';
// @endindex
// @index(['./ref/*.{ts,tsx}'], f => `export * from '${f.path.replace(/\/index$/, '')}'`)
export * from './ref/contact';
// @endindex
