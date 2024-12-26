

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { Name_MediumText} from '@bh/field/config';import { Description_MediumText} from '@bh/field/config';import { PetType_PetType} from '@bh/field/config';import { Code_Integer} from '@bh/field/config';import { Provider_Account} from '@bh/field/config'

import { PetQualification_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_PetQualification} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, PetQualification_Plugin.Id);
const Name  =
    merge({},
      Name_MediumText, PetQualification_Plugin.Name);
const Description  =
    merge({},
      Description_MediumText, PetQualification_Plugin.Description);
const PetType  =
    merge({},
      PetType_PetType, PetQualification_Plugin.PetType);
const Code  =
    merge({},
      Code_Integer, PetQualification_Plugin.Code);
const Provider  =
    merge({},
      Provider_Account, PetQualification_Plugin.Provider)


export const PETQUALIFICATION_FIELD_CONFIG = {

  Id,
  Name,
  Description,
  PetType,
  Code,
  Provider
} as const;


export const PETQUALIFICATION_ENTITY_COLUMNS = getColumns(PETQUALIFICATION_FIELD_CONFIG);

export const PETQUALIFICATION_DATE_FIELDS = [];


export const [, , PetQualification_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_PetQualification,
    fieldsConfig: PETQUALIFICATION_FIELD_CONFIG,
    entitiesColumns: PETQUALIFICATION_ENTITY_COLUMNS,
    dateColumns: getDateColumns(PETQUALIFICATION_FIELD_CONFIG),
  };
});

