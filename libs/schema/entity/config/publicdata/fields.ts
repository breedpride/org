

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { CreatedOn_DateTime} from '@bh/field/config';import { CreatedBy_Contact} from '@bh/field/config';import { ModifiedOn_DateTime} from '@bh/field/config';import { ModifiedBy_Contact} from '@bh/field/config';import { Name_MediumText} from '@bh/field/config';import { HashMD5_MediumText} from '@bh/field/config';import { Account_Account} from '@bh/field/config';import { Contact_Contact} from '@bh/field/config';import { Pet_Pet} from '@bh/field/config';import { Breed_Breed} from '@bh/field/config';import { Event_Event} from '@bh/field/config';import { Project_Project} from '@bh/field/config';import { RecordId_Guid} from '@bh/field/config';import { Model_ShortText} from '@bh/field/config';import { EntityName_ShortText} from '@bh/field/config';import { Primary_Boolean} from '@bh/field/config';import { Redirect_PublicData} from '@bh/field/config';import { PetType_PetType} from '@bh/field/config';import { Country_Country} from '@bh/field/config';import { PetTitles_TitleInPet} from '@bh/field/config';import { HasOwner_Boolean} from '@bh/field/config';

import { PublicData_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_PublicData} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, PublicData_Plugin.Id);
const CreatedOn  =
    merge({},
      CreatedOn_DateTime, PublicData_Plugin.CreatedOn);
const CreatedBy  =
    merge({},
      CreatedBy_Contact, PublicData_Plugin.CreatedBy);
const ModifiedOn  =
    merge({},
      ModifiedOn_DateTime, PublicData_Plugin.ModifiedOn);
const ModifiedBy  =
    merge({},
      ModifiedBy_Contact, PublicData_Plugin.ModifiedBy);
const Name  =
    merge({},
      Name_MediumText, PublicData_Plugin.Name);
const HashMD5  =
    merge({},
      HashMD5_MediumText, PublicData_Plugin.HashMD5);
const Account  =
    merge({},
      Account_Account, PublicData_Plugin.Account);
const Contact  =
    merge({},
      Contact_Contact, PublicData_Plugin.Contact);
const Pet  =
    merge({},
      Pet_Pet, PublicData_Plugin.Pet);
const Breed  =
    merge({},
      Breed_Breed, PublicData_Plugin.Breed);
const Event  =
    merge({},
      Event_Event, PublicData_Plugin.Event);
const Project  =
    merge({},
      Project_Project, PublicData_Plugin.Project);
const RecordId  =
    merge({},
      RecordId_Guid, PublicData_Plugin.RecordId);
const Model  =
    merge({},
      Model_ShortText, PublicData_Plugin.Model);
const EntityName  =
    merge({},
      EntityName_ShortText, PublicData_Plugin.EntityName);
const Primary  =
    merge({},
      Primary_Boolean, PublicData_Plugin.Primary);
const Redirect  =
    merge({},
      Redirect_PublicData, PublicData_Plugin.Redirect);
const PetType  =
    merge({},
      PetType_PetType, PublicData_Plugin.PetType);
const Country  =
    merge({},
      Country_Country, PublicData_Plugin.Country);
const PetTitles  =
    merge({},
      PetTitles_TitleInPet, PublicData_Plugin.PetTitles);
const HasOwner  =
    merge({},
      HasOwner_Boolean, PublicData_Plugin.HasOwner);


export const PUBLICDATA_FIELD_CONFIG = {

  Id,
  CreatedOn,
  CreatedBy,
  ModifiedOn,
  ModifiedBy,
  Name,
  HashMD5,
  Account,
  Contact,
  Pet,
  Breed,
  Event,
  Project,
  RecordId,
  Model,
  EntityName,
  Primary,
  Redirect,
  PetType,
  Country,
  PetTitles,
  HasOwner
} as const;


export const PUBLICDATA_ENTITY_COLUMNS = getColumns(PUBLICDATA_FIELD_CONFIG);

export const PUBLICDATA_DATE_FIELDS = [];


export const [, , PublicData_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_PublicData,
    fieldsConfig: PUBLICDATA_FIELD_CONFIG,
    entitiesColumns: PUBLICDATA_ENTITY_COLUMNS,
    dateColumns: getDateColumns(PUBLICDATA_FIELD_CONFIG),
  };
});

