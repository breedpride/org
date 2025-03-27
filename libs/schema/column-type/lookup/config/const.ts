
import { dictionaryValidator } from '@bh/windmill';
import { FilterFieldConfig } from '@bh/superfield';
import { merge } from 'lodash-es';
import { merge as deepMerge } from 'ts-deepmerge';
import {
  Code_DisplayField,
  DisplayNumber,
  DisplayPublicName,
  DisplayTitle,
  Name_DisplayField,
  WithEmptyDisplayName,
} from '../display-field/const';
import { FormFieldCode } from '@bh/windmill';

//LookupConfig without displayField
export const Lookup_Base: Partial<FilterFieldConfig> & {
  entitiesColumns: string[];
} = {
  rows: 60 as const, // TODO - use token
  component: FormFieldCode.AUTOCOMPLETE,
  entitiesColumns: ['Id'] as const,
  validators: [dictionaryValidator], // TODO - use token
} as const;

export const Lookup_Name = merge(
  {},
  Lookup_Base,
  Name_DisplayField,
  deepMerge(
    { entitiesColumns: Lookup_Base.entitiesColumns },
    { entitiesColumns: Name_DisplayField.entitiesColumns }
  )
);
// export const deepMerged = deepMerge(Lookup_Base, DisplayName);
// deepMerge(Lookup_Base, DisplayName);
export const Lookup_Code = deepMerge({}, Lookup_Base, Code_DisplayField);
export const Lookup_ = deepMerge({}, Lookup_Base, WithEmptyDisplayName);
export const Lookup_Number = deepMerge({}, Lookup_Base, DisplayNumber);
export const Lookup_RawTitle = deepMerge({}, Lookup_Base, DisplayTitle);
export const Lookup_PublicName = deepMerge({}, Lookup_Base, DisplayPublicName);
