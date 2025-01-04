

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { Name_MediumText} from '@bh/field/config';import { Description_MediumText} from '@bh/field/config';import { PetType_PetType} from '@bh/field/config';

import { CoatColor_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_CoatColor} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, CoatColor_Plugin.Id);
const Name  =
    merge({},
      Name_MediumText, CoatColor_Plugin.Name);
const Description  =
    merge({},
      Description_MediumText, CoatColor_Plugin.Description);
const PetType  =
    merge({},
      PetType_PetType, CoatColor_Plugin.PetType);


export const COATCOLOR_FIELD_CONFIG = {

  Id,
  Name,
  Description,
  PetType
} as const;


export const COATCOLOR_ENTITY_COLUMNS = getColumns(COATCOLOR_FIELD_CONFIG);

export const COATCOLOR_DATE_FIELDS = [];


export const [, , CoatColor_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_CoatColor,
    fieldsConfig: COATCOLOR_FIELD_CONFIG,
    entitiesColumns: COATCOLOR_ENTITY_COLUMNS,
    dateColumns: getDateColumns(COATCOLOR_FIELD_CONFIG),
  };
});

