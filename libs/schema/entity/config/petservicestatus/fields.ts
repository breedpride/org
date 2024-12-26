

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { Name_MediumText} from '@bh/field/config';import { Description_MediumText} from '@bh/field/config'

import { PetServiceStatus_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_PetServiceStatus} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, PetServiceStatus_Plugin.Id);
const Name  =
    merge({},
      Name_MediumText, PetServiceStatus_Plugin.Name);
const Description  =
    merge({},
      Description_MediumText, PetServiceStatus_Plugin.Description)


export const PETSERVICESTATUS_FIELD_CONFIG = {

  Id,
  Name,
  Description
} as const;


export const PETSERVICESTATUS_ENTITY_COLUMNS = getColumns(PETSERVICESTATUS_FIELD_CONFIG);

export const PETSERVICESTATUS_DATE_FIELDS = [];


export const [, , PetServiceStatus_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_PetServiceStatus,
    fieldsConfig: PETSERVICESTATUS_FIELD_CONFIG,
    entitiesColumns: PETSERVICESTATUS_ENTITY_COLUMNS,
    dateColumns: getDateColumns(PETSERVICESTATUS_FIELD_CONFIG),
  };
});

