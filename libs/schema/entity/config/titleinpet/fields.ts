

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { Title_Title} from '@bh/field/config';import { Pet_Pet} from '@bh/field/config';import { IsConfirmed_Boolean} from '@bh/field/config';import { Date_Date} from '@bh/field/config';import { Country_Country} from '@bh/field/config';import { Description_MediumText} from '@bh/field/config';import { Amount_Integer} from '@bh/field/config';import { RawTitle_MediumText} from '@bh/field/config';

import { TitleInPet_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_TitleInPet} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, TitleInPet_Plugin.Id);
const Title  =
    merge({},
      Title_Title, TitleInPet_Plugin.Title);
const Pet  =
    merge({},
      Pet_Pet, TitleInPet_Plugin.Pet);
const IsConfirmed  =
    merge({},
      IsConfirmed_Boolean, TitleInPet_Plugin.IsConfirmed);
const Date  =
    merge({},
      Date_Date, TitleInPet_Plugin.Date);
const Country  =
    merge({},
      Country_Country, TitleInPet_Plugin.Country);
const Description  =
    merge({},
      Description_MediumText, TitleInPet_Plugin.Description);
const Amount  =
    merge({},
      Amount_Integer, TitleInPet_Plugin.Amount);
const RawTitle  =
    merge({},
      RawTitle_MediumText, TitleInPet_Plugin.RawTitle);


export const TITLEINPET_FIELD_CONFIG = {

  Id,
  Title,
  Pet,
  IsConfirmed,
  Date,
  Country,
  Description,
  Amount,
  RawTitle
} as const;


export const TITLEINPET_ENTITY_COLUMNS = getColumns(TITLEINPET_FIELD_CONFIG);

export const TITLEINPET_DATE_FIELDS = [];


export const [, , TitleInPet_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_TitleInPet,
    fieldsConfig: TITLEINPET_FIELD_CONFIG,
    entitiesColumns: TITLEINPET_ENTITY_COLUMNS,
    dateColumns: getDateColumns(TITLEINPET_FIELD_CONFIG),
  };
});

