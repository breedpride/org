

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { Name_MediumText} from '@bh/field/config';import { Description_MediumText} from '@bh/field/config'

import { BreedCategory_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_BreedCategory} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, BreedCategory_Plugin.Id);
const Name  =
    merge({},
      Name_MediumText, BreedCategory_Plugin.Name);
const Description  =
    merge({},
      Description_MediumText, BreedCategory_Plugin.Description)


export const BREEDCATEGORY_FIELD_CONFIG = {

  Id,
  Name,
  Description
} as const;


export const BREEDCATEGORY_ENTITY_COLUMNS = getColumns(BREEDCATEGORY_FIELD_CONFIG);

export const BREEDCATEGORY_DATE_FIELDS = [];


export const [, , BreedCategory_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_BreedCategory,
    fieldsConfig: BREEDCATEGORY_FIELD_CONFIG,
    entitiesColumns: BREEDCATEGORY_ENTITY_COLUMNS,
    dateColumns: getDateColumns(BREEDCATEGORY_FIELD_CONFIG),
  };
});

