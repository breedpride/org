

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { Name_MediumText} from '@bh/field/config';import { Description_MediumText} from '@bh/field/config';import { IsPublic_Boolean} from '@bh/field/config';

import { PetIdentifierType_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_PetIdentifierType} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, PetIdentifierType_Plugin.Id);
const Name  =
    merge({},
      Name_MediumText, PetIdentifierType_Plugin.Name);
const Description  =
    merge({},
      Description_MediumText, PetIdentifierType_Plugin.Description);
const IsPublic  =
    merge({},
      IsPublic_Boolean, PetIdentifierType_Plugin.IsPublic);


export const PETIDENTIFIERTYPE_FIELD_CONFIG = {

  Id,
  Name,
  Description,
  IsPublic
} as const;


export const PETIDENTIFIERTYPE_ENTITY_COLUMNS = getColumns(PETIDENTIFIERTYPE_FIELD_CONFIG);

export const PETIDENTIFIERTYPE_DATE_FIELDS = [];


export const [, , PetIdentifierType_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_PetIdentifierType,
    fieldsConfig: PETIDENTIFIERTYPE_FIELD_CONFIG,
    entitiesColumns: PETIDENTIFIERTYPE_ENTITY_COLUMNS,
    dateColumns: getDateColumns(PETIDENTIFIERTYPE_FIELD_CONFIG),
  };
});

