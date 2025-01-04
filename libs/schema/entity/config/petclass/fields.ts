

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { Name_MediumText} from '@bh/field/config';import { Description_MediumText} from '@bh/field/config';import { AgeTo_Integer} from '@bh/field/config';import { AgeFrom_Integer} from '@bh/field/config';import { Code_Integer} from '@bh/field/config';import { PetType_PetType} from '@bh/field/config';import { Provider_Account} from '@bh/field/config';

import { PetClass_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_PetClass} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, PetClass_Plugin.Id);
const Name  =
    merge({},
      Name_MediumText, PetClass_Plugin.Name);
const Description  =
    merge({},
      Description_MediumText, PetClass_Plugin.Description);
const AgeTo  =
    merge({},
      AgeTo_Integer, PetClass_Plugin.AgeTo);
const AgeFrom  =
    merge({},
      AgeFrom_Integer, PetClass_Plugin.AgeFrom);
const Code  =
    merge({},
      Code_Integer, PetClass_Plugin.Code);
const PetType  =
    merge({},
      PetType_PetType, PetClass_Plugin.PetType);
const Provider  =
    merge({},
      Provider_Account, PetClass_Plugin.Provider);


export const PETCLASS_FIELD_CONFIG = {

  Id,
  Name,
  Description,
  AgeTo,
  AgeFrom,
  Code,
  PetType,
  Provider
} as const;


export const PETCLASS_ENTITY_COLUMNS = getColumns(PETCLASS_FIELD_CONFIG);

export const PETCLASS_DATE_FIELDS = [];


export const [, , PetClass_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_PetClass,
    fieldsConfig: PETCLASS_FIELD_CONFIG,
    entitiesColumns: PETCLASS_ENTITY_COLUMNS,
    dateColumns: getDateColumns(PETCLASS_FIELD_CONFIG),
  };
});

