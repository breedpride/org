

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { Name_MediumText} from '@bh/field/config';import { Description_MediumText} from '@bh/field/config';import { PetType_PetType} from '@bh/field/config';

import { CoatType_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_CoatType} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, CoatType_Plugin.Id);
const Name  =
    merge({},
      Name_MediumText, CoatType_Plugin.Name);
const Description  =
    merge({},
      Description_MediumText, CoatType_Plugin.Description);
const PetType  =
    merge({},
      PetType_PetType, CoatType_Plugin.PetType);


export const COATTYPE_FIELD_CONFIG = {

  Id,
  Name,
  Description,
  PetType
} as const;


export const COATTYPE_ENTITY_COLUMNS = getColumns(COATTYPE_FIELD_CONFIG);

export const COATTYPE_DATE_FIELDS = [];


export const [, , CoatType_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_CoatType,
    fieldsConfig: COATTYPE_FIELD_CONFIG,
    entitiesColumns: COATTYPE_ENTITY_COLUMNS,
    dateColumns: getDateColumns(COATTYPE_FIELD_CONFIG),
  };
});

