import { dictionaryValidator, FormFieldCode } from '@bh/windmill';
import {
  Code_DisplayField,
  DisplayNumber,
  DisplayPublicName,
  DisplayTitle,
  Name_DisplayField,
  WithEmptyDisplayName,
} from '../display-field/const';

//LookupConfig without displayField
export const Lookup_Base = [
  { rows: 60 } as const, // TODO - use token
  { component: FormFieldCode.AUTOCOMPLETE } as const,
  { entitiesColumns: ['Id'] as const },
  { validators: [dictionaryValidator] }, // TODO - use token
] as const;
// TODO - deep merge
export const Lookup_Name = [Lookup_Base, Name_DisplayField] as const;
export const Lookup_Code = [Lookup_Base, Code_DisplayField] as const;
export const Lookup_ = [Lookup_Base, WithEmptyDisplayName] as const;
export const Lookup_Number = [Lookup_Base, DisplayNumber] as const;
export const Lookup_RawTitle = [Lookup_Base, DisplayTitle] as const;
export const Lookup_PublicName = [Lookup_Base, DisplayPublicName] as const;
