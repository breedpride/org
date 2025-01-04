

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { Name_MediumText} from '@bh/field/config';import { Description_MediumText} from '@bh/field/config';import { PetType_PetType} from '@bh/field/config';import { Gender_Gender} from '@bh/field/config';import { Code_ShortText} from '@bh/field/config';

import { Sex_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_Sex} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, Sex_Plugin.Id);
const Name  =
    merge({},
      Name_MediumText, Sex_Plugin.Name);
const Description  =
    merge({},
      Description_MediumText, Sex_Plugin.Description);
const PetType  =
    merge({},
      PetType_PetType, Sex_Plugin.PetType);
const Gender  =
    merge({},
      Gender_Gender, Sex_Plugin.Gender);
const Code  =
    merge({},
      Code_ShortText, Sex_Plugin.Code);


export const SEX_FIELD_CONFIG = {

  Id,
  Name,
  Description,
  PetType,
  Gender,
  Code
} as const;


export const SEX_ENTITY_COLUMNS = getColumns(SEX_FIELD_CONFIG);

export const SEX_DATE_FIELDS = [];


export const [, , Sex_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_Sex,
    fieldsConfig: SEX_FIELD_CONFIG,
    entitiesColumns: SEX_ENTITY_COLUMNS,
    dateColumns: getDateColumns(SEX_FIELD_CONFIG),
  };
});

