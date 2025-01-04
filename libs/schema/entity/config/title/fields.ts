

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { Name_MediumText} from '@bh/field/config';import { Description_MediumText} from '@bh/field/config';import { PetType_PetType} from '@bh/field/config';import { Provider_Account} from '@bh/field/config';import { Rating_Number} from '@bh/field/config';

import { Title_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_Title} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, Title_Plugin.Id);
const Name  =
    merge({},
      Name_MediumText, Title_Plugin.Name);
const Description  =
    merge({},
      Description_MediumText, Title_Plugin.Description);
const PetType  =
    merge({},
      PetType_PetType, Title_Plugin.PetType);
const Provider  =
    merge({},
      Provider_Account, Title_Plugin.Provider);
const Rating  =
    merge({},
      Rating_Number, Title_Plugin.Rating);


export const TITLE_FIELD_CONFIG = {

  Id,
  Name,
  Description,
  PetType,
  Provider,
  Rating
} as const;


export const TITLE_ENTITY_COLUMNS = getColumns(TITLE_FIELD_CONFIG);

export const TITLE_DATE_FIELDS = [];


export const [, , Title_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_Title,
    fieldsConfig: TITLE_FIELD_CONFIG,
    entitiesColumns: TITLE_ENTITY_COLUMNS,
    dateColumns: getDateColumns(TITLE_FIELD_CONFIG),
  };
});

