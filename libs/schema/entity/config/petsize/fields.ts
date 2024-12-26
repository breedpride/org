

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { Name_MediumText} from '@bh/field/config';import { Description_MediumText} from '@bh/field/config';import { PetType_PetType} from '@bh/field/config'

import { PetSize_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_PetSize} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, PetSize_Plugin.Id);
const Name  =
    merge({},
      Name_MediumText, PetSize_Plugin.Name);
const Description  =
    merge({},
      Description_MediumText, PetSize_Plugin.Description);
const PetType  =
    merge({},
      PetType_PetType, PetSize_Plugin.PetType)


export const PETSIZE_FIELD_CONFIG = {

  Id,
  Name,
  Description,
  PetType
} as const;


export const PETSIZE_ENTITY_COLUMNS = getColumns(PETSIZE_FIELD_CONFIG);

export const PETSIZE_DATE_FIELDS = [];


export const [, , PetSize_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_PetSize,
    fieldsConfig: PETSIZE_FIELD_CONFIG,
    entitiesColumns: PETSIZE_ENTITY_COLUMNS,
    dateColumns: getDateColumns(PETSIZE_FIELD_CONFIG),
  };
});

