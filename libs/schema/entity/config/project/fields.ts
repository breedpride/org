

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { CreatedOn_DateTime} from '@bh/field/config';import { CreatedBy_Contact} from '@bh/field/config';import { ModifiedOn_DateTime} from '@bh/field/config';import { ModifiedBy_Contact} from '@bh/field/config';import { Notes_MaxSizeText} from '@bh/field/config';import { Name_MediumText} from '@bh/field/config';import { Account_Account} from '@bh/field/config';import { Type_ProjectType} from '@bh/field/config';import { Owner_Contact} from '@bh/field/config';import { Status_ProjectStatus} from '@bh/field/config';import { StartDate_Date} from '@bh/field/config';import { EndDate_Date} from '@bh/field/config';import { Duration_Integer} from '@bh/field/config';import { Deadline_Date} from '@bh/field/config';import { ParentProject_Project} from '@bh/field/config';import { ActualCompletion_Number} from '@bh/field/config';import { Position_Integer} from '@bh/field/config';import { Event_Event} from '@bh/field/config';import { Category_ProjectCategory} from '@bh/field/config';import { Breed_Breed} from '@bh/field/config';import { Url_MediumText} from '@bh/field/config';import { PetType_PetType} from '@bh/field/config';import { Cover_Cover} from '@bh/field/config'

import { Project_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_Project} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, Project_Plugin.Id);
const CreatedOn  =
    merge({},
      CreatedOn_DateTime, Project_Plugin.CreatedOn);
const CreatedBy  =
    merge({},
      CreatedBy_Contact, Project_Plugin.CreatedBy);
const ModifiedOn  =
    merge({},
      ModifiedOn_DateTime, Project_Plugin.ModifiedOn);
const ModifiedBy  =
    merge({},
      ModifiedBy_Contact, Project_Plugin.ModifiedBy);
const Notes  =
    merge({},
      Notes_MaxSizeText, Project_Plugin.Notes);
const Name  =
    merge({},
      Name_MediumText, Project_Plugin.Name);
const Account  =
    merge({},
      Account_Account, Project_Plugin.Account);
const Type  =
    merge({},
      Type_ProjectType, Project_Plugin.Type);
const Owner  =
    merge({},
      Owner_Contact, Project_Plugin.Owner);
const Status  =
    merge({},
      Status_ProjectStatus, Project_Plugin.Status);
const StartDate  =
    merge({},
      StartDate_Date, Project_Plugin.StartDate);
const EndDate  =
    merge({},
      EndDate_Date, Project_Plugin.EndDate);
const Duration  =
    merge({},
      Duration_Integer, Project_Plugin.Duration);
const Deadline  =
    merge({},
      Deadline_Date, Project_Plugin.Deadline);
const ParentProject  =
    merge({},
      ParentProject_Project, Project_Plugin.ParentProject);
const ActualCompletion  =
    merge({},
      ActualCompletion_Number, Project_Plugin.ActualCompletion);
const Position  =
    merge({},
      Position_Integer, Project_Plugin.Position);
const Event  =
    merge({},
      Event_Event, Project_Plugin.Event);
const Category  =
    merge({},
      Category_ProjectCategory, Project_Plugin.Category);
const Breed  =
    merge({},
      Breed_Breed, Project_Plugin.Breed);
const Url  =
    merge({},
      Url_MediumText, Project_Plugin.Url);
const PetType  =
    merge({},
      PetType_PetType, Project_Plugin.PetType);
const Cover  =
    merge({},
      Cover_Cover, Project_Plugin.Cover)


export const PROJECT_FIELD_CONFIG = {

  Id,
  CreatedOn,
  CreatedBy,
  ModifiedOn,
  ModifiedBy,
  Notes,
  Name,
  Account,
  Type,
  Owner,
  Status,
  StartDate,
  EndDate,
  Duration,
  Deadline,
  ParentProject,
  ActualCompletion,
  Position,
  Event,
  Category,
  Breed,
  Url,
  PetType,
  Cover
} as const;


export const PROJECT_ENTITY_COLUMNS = getColumns(PROJECT_FIELD_CONFIG);

export const PROJECT_DATE_FIELDS = [];


export const [, , Project_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_Project,
    fieldsConfig: PROJECT_FIELD_CONFIG,
    entitiesColumns: PROJECT_ENTITY_COLUMNS,
    dateColumns: getDateColumns(PROJECT_FIELD_CONFIG),
  };
});

