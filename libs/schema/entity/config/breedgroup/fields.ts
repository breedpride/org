

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { Name_MediumText} from '@bh/field/config';import { Description_MediumText} from '@bh/field/config';import { Code_Integer} from '@bh/field/config';import { Provider_Account} from '@bh/field/config';

import { BreedGroup_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_BreedGroup} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, BreedGroup_Plugin.Id);
const Name  =
    merge({},
      Name_MediumText, BreedGroup_Plugin.Name);
const Description  =
    merge({},
      Description_MediumText, BreedGroup_Plugin.Description);
const Code  =
    merge({},
      Code_Integer, BreedGroup_Plugin.Code);
const Provider  =
    merge({},
      Provider_Account, BreedGroup_Plugin.Provider);


export const BREEDGROUP_FIELD_CONFIG = {

  Id,
  Name,
  Description,
  Code,
  Provider
} as const;


export const BREEDGROUP_ENTITY_COLUMNS = getColumns(BREEDGROUP_FIELD_CONFIG);

export const BREEDGROUP_DATE_FIELDS = [];


export const [, , BreedGroup_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_BreedGroup,
    fieldsConfig: BREEDGROUP_FIELD_CONFIG,
    entitiesColumns: BREEDGROUP_ENTITY_COLUMNS,
    dateColumns: getDateColumns(BREEDGROUP_FIELD_CONFIG),
  };
});

