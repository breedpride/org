

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { Name_MediumText} from '@bh/field/config';import { Description_MediumText} from '@bh/field/config';import { Provider_Account} from '@bh/field/config'

import { BreedStandardStatus_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_BreedStandardStatus} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, BreedStandardStatus_Plugin.Id);
const Name  =
    merge({},
      Name_MediumText, BreedStandardStatus_Plugin.Name);
const Description  =
    merge({},
      Description_MediumText, BreedStandardStatus_Plugin.Description);
const Provider  =
    merge({},
      Provider_Account, BreedStandardStatus_Plugin.Provider)


export const BREEDSTANDARDSTATUS_FIELD_CONFIG = {

  Id,
  Name,
  Description,
  Provider
} as const;


export const BREEDSTANDARDSTATUS_ENTITY_COLUMNS = getColumns(BREEDSTANDARDSTATUS_FIELD_CONFIG);

export const BREEDSTANDARDSTATUS_DATE_FIELDS = [];


export const [, , BreedStandardStatus_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_BreedStandardStatus,
    fieldsConfig: BREEDSTANDARDSTATUS_FIELD_CONFIG,
    entitiesColumns: BREEDSTANDARDSTATUS_ENTITY_COLUMNS,
    dateColumns: getDateColumns(BREEDSTANDARDSTATUS_FIELD_CONFIG),
  };
});

