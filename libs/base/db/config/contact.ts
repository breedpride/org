// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------
// TODO ??
export const NAME = 'name' as const;
import { Lookup_Name } from '@bh/column-type/lookup';
export const Contact_Config = [
  Lookup_Name,
  { entitySchemaName: 'Contact' } as const,
];

export const Lookup_Contact = [
  Contact_Config,

  //import { FilterFieldConfig } from '@bh/superfield';
  // plugin settings Partial<FilterFieldConfig> for all 'Refs' to this schema etc 'Lookup' Contact_Lookup]
  {} as const,
] as const;
