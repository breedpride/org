

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { Name_MediumText} from '@bh/field/config';import { Description_MediumText} from '@bh/field/config'

import { PetServiceType_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_PetServiceType} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, PetServiceType_Plugin.Id);
const Name  =
    merge({},
      Name_MediumText, PetServiceType_Plugin.Name);
const Description  =
    merge({},
      Description_MediumText, PetServiceType_Plugin.Description)


export const PETSERVICETYPE_FIELD_CONFIG = {

  Id,
  Name,
  Description
} as const;


export const PETSERVICETYPE_ENTITY_COLUMNS = getColumns(PETSERVICETYPE_FIELD_CONFIG);

export const PETSERVICETYPE_DATE_FIELDS = [];


export const [, , PetServiceType_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_PetServiceType,
    fieldsConfig: PETSERVICETYPE_FIELD_CONFIG,
    entitiesColumns: PETSERVICETYPE_ENTITY_COLUMNS,
    dateColumns: getDateColumns(PETSERVICETYPE_FIELD_CONFIG),
  };
});

