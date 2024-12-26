

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { Name_MediumText} from '@bh/field/config';import { Description_MediumText} from '@bh/field/config';import { Code_ShortText} from '@bh/field/config';import { PetType_PetType} from '@bh/field/config'

import { PetStatus_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_PetStatus} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, PetStatus_Plugin.Id);
const Name  =
    merge({},
      Name_MediumText, PetStatus_Plugin.Name);
const Description  =
    merge({},
      Description_MediumText, PetStatus_Plugin.Description);
const Code  =
    merge({},
      Code_ShortText, PetStatus_Plugin.Code);
const PetType  =
    merge({},
      PetType_PetType, PetStatus_Plugin.PetType)


export const PETSTATUS_FIELD_CONFIG = {

  Id,
  Name,
  Description,
  Code,
  PetType
} as const;


export const PETSTATUS_ENTITY_COLUMNS = getColumns(PETSTATUS_FIELD_CONFIG);

export const PETSTATUS_DATE_FIELDS = [];


export const [, , PetStatus_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_PetStatus,
    fieldsConfig: PETSTATUS_FIELD_CONFIG,
    entitiesColumns: PETSTATUS_ENTITY_COLUMNS,
    dateColumns: getDateColumns(PETSTATUS_FIELD_CONFIG),
  };
});

