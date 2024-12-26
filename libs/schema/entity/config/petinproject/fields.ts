

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { CreatedOn_DateTime} from '@bh/field/config';import { CreatedBy_Contact} from '@bh/field/config';import { ModifiedOn_DateTime} from '@bh/field/config';import { ModifiedBy_Contact} from '@bh/field/config';import { Project_Project} from '@bh/field/config';import { Pet_Pet} from '@bh/field/config';import { Number_Number} from '@bh/field/config';import { Class_PetClass} from '@bh/field/config';import { WebLink_MediumText} from '@bh/field/config';import { Result_MediumText} from '@bh/field/config';import { Code_ShortText} from '@bh/field/config';import { Handler_Contact} from '@bh/field/config';import { Judge_Contact} from '@bh/field/config';import { Place_Place} from '@bh/field/config';import { Qualification_PetQualification} from '@bh/field/config';import { Date_Date} from '@bh/field/config';import { TempProjectName_LongText} from '@bh/field/config'

import { PetInProject_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_PetInProject} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, PetInProject_Plugin.Id);
const CreatedOn  =
    merge({},
      CreatedOn_DateTime, PetInProject_Plugin.CreatedOn);
const CreatedBy  =
    merge({},
      CreatedBy_Contact, PetInProject_Plugin.CreatedBy);
const ModifiedOn  =
    merge({},
      ModifiedOn_DateTime, PetInProject_Plugin.ModifiedOn);
const ModifiedBy  =
    merge({},
      ModifiedBy_Contact, PetInProject_Plugin.ModifiedBy);
const Project  =
    merge({},
      Project_Project, PetInProject_Plugin.Project);
const Pet  =
    merge({},
      Pet_Pet, PetInProject_Plugin.Pet);
const Number  =
    merge({},
      Number_Number, PetInProject_Plugin.Number);
const Class  =
    merge({},
      Class_PetClass, PetInProject_Plugin.Class);
const WebLink  =
    merge({},
      WebLink_MediumText, PetInProject_Plugin.WebLink);
const Result  =
    merge({},
      Result_MediumText, PetInProject_Plugin.Result);
const Code  =
    merge({},
      Code_ShortText, PetInProject_Plugin.Code);
const Handler  =
    merge({},
      Handler_Contact, PetInProject_Plugin.Handler);
const Judge  =
    merge({},
      Judge_Contact, PetInProject_Plugin.Judge);
const Place  =
    merge({},
      Place_Place, PetInProject_Plugin.Place);
const Qualification  =
    merge({},
      Qualification_PetQualification, PetInProject_Plugin.Qualification);
const Date  =
    merge({},
      Date_Date, PetInProject_Plugin.Date);
const TempProjectName  =
    merge({},
      TempProjectName_LongText, PetInProject_Plugin.TempProjectName)


export const PETINPROJECT_FIELD_CONFIG = {

  Id,
  CreatedOn,
  CreatedBy,
  ModifiedOn,
  ModifiedBy,
  Project,
  Pet,
  Number,
  Class,
  WebLink,
  Result,
  Code,
  Handler,
  Judge,
  Place,
  Qualification,
  Date,
  TempProjectName
} as const;


export const PETINPROJECT_ENTITY_COLUMNS = getColumns(PETINPROJECT_FIELD_CONFIG);

export const PETINPROJECT_DATE_FIELDS = [];


export const [, , PetInProject_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_PetInProject,
    fieldsConfig: PETINPROJECT_FIELD_CONFIG,
    entitiesColumns: PETINPROJECT_ENTITY_COLUMNS,
    dateColumns: getDateColumns(PETINPROJECT_FIELD_CONFIG),
  };
});

