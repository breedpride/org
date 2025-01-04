

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { CreatedOn_DateTime} from '@bh/field/config';import { CreatedBy_Contact} from '@bh/field/config';import { ModifiedOn_DateTime} from '@bh/field/config';import { ModifiedBy_Contact} from '@bh/field/config';import { Name_MediumText} from '@bh/field/config';import { Type_EventType} from '@bh/field/config';import { Owner_Contact} from '@bh/field/config';import { Status_EventStatus} from '@bh/field/config';import { StartDate_Date} from '@bh/field/config';import { EndDate_Date} from '@bh/field/config';import { Territory_Territory} from '@bh/field/config';import { Industry_AccountIndustry} from '@bh/field/config';import { LastActualizeDate_DateTime} from '@bh/field/config';import { RecipientCount_Integer} from '@bh/field/config';import { Organizer_Account} from '@bh/field/config';import { Address_MediumText} from '@bh/field/config';import { City_City} from '@bh/field/config';import { Region_Region} from '@bh/field/config';import { Country_Country} from '@bh/field/config';import { Account_Account} from '@bh/field/config';import { Url_MediumText} from '@bh/field/config';import { PetType_PetType} from '@bh/field/config';import { Cover_Cover} from '@bh/field/config';

import { Event_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_Event} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, Event_Plugin.Id);
const CreatedOn  =
    merge({},
      CreatedOn_DateTime, Event_Plugin.CreatedOn);
const CreatedBy  =
    merge({},
      CreatedBy_Contact, Event_Plugin.CreatedBy);
const ModifiedOn  =
    merge({},
      ModifiedOn_DateTime, Event_Plugin.ModifiedOn);
const ModifiedBy  =
    merge({},
      ModifiedBy_Contact, Event_Plugin.ModifiedBy);
const Name  =
    merge({},
      Name_MediumText, Event_Plugin.Name);
const Type  =
    merge({},
      Type_EventType, Event_Plugin.Type);
const Owner  =
    merge({},
      Owner_Contact, Event_Plugin.Owner);
const Status  =
    merge({},
      Status_EventStatus, Event_Plugin.Status);
const StartDate  =
    merge({},
      StartDate_Date, Event_Plugin.StartDate);
const EndDate  =
    merge({},
      EndDate_Date, Event_Plugin.EndDate);
const Territory  =
    merge({},
      Territory_Territory, Event_Plugin.Territory);
const Industry  =
    merge({},
      Industry_AccountIndustry, Event_Plugin.Industry);
const LastActualizeDate  =
    merge({},
      LastActualizeDate_DateTime, Event_Plugin.LastActualizeDate);
const RecipientCount  =
    merge({},
      RecipientCount_Integer, Event_Plugin.RecipientCount);
const Organizer  =
    merge({},
      Organizer_Account, Event_Plugin.Organizer);
const Address  =
    merge({},
      Address_MediumText, Event_Plugin.Address);
const City  =
    merge({},
      City_City, Event_Plugin.City);
const Region  =
    merge({},
      Region_Region, Event_Plugin.Region);
const Country  =
    merge({},
      Country_Country, Event_Plugin.Country);
const Account  =
    merge({},
      Account_Account, Event_Plugin.Account);
const Url  =
    merge({},
      Url_MediumText, Event_Plugin.Url);
const PetType  =
    merge({},
      PetType_PetType, Event_Plugin.PetType);
const Cover  =
    merge({},
      Cover_Cover, Event_Plugin.Cover);


export const EVENT_FIELD_CONFIG = {

  Id,
  CreatedOn,
  CreatedBy,
  ModifiedOn,
  ModifiedBy,
  Name,
  Type,
  Owner,
  Status,
  StartDate,
  EndDate,
  Territory,
  Industry,
  LastActualizeDate,
  RecipientCount,
  Organizer,
  Address,
  City,
  Region,
  Country,
  Account,
  Url,
  PetType,
  Cover
} as const;


export const EVENT_ENTITY_COLUMNS = getColumns(EVENT_FIELD_CONFIG);

export const EVENT_DATE_FIELDS = [];


export const [, , Event_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_Event,
    fieldsConfig: EVENT_FIELD_CONFIG,
    entitiesColumns: EVENT_ENTITY_COLUMNS,
    dateColumns: getDateColumns(EVENT_FIELD_CONFIG),
  };
});

