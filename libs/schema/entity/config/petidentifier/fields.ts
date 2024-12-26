

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { CreatedOn_DateTime} from '@bh/field/config';import { CreatedBy_Contact} from '@bh/field/config';import { ModifiedOn_DateTime} from '@bh/field/config';import { ModifiedBy_Contact} from '@bh/field/config';import { Value_LongText} from '@bh/field/config';import { PetIdentifierType_PetIdentifierType} from '@bh/field/config';import { Pet_Pet} from '@bh/field/config';import { Date_Date} from '@bh/field/config';import { Studbook_Studbook} from '@bh/field/config';import { Number_ShortText} from '@bh/field/config';import { DataSource_DataSource} from '@bh/field/config';import { IsProcessed_Boolean} from '@bh/field/config';import { TrimValue_LongText} from '@bh/field/config';import { IsPublic_Boolean} from '@bh/field/config'

import { PetIdentifier_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_PetIdentifier} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, PetIdentifier_Plugin.Id);
const CreatedOn  =
    merge({},
      CreatedOn_DateTime, PetIdentifier_Plugin.CreatedOn);
const CreatedBy  =
    merge({},
      CreatedBy_Contact, PetIdentifier_Plugin.CreatedBy);
const ModifiedOn  =
    merge({},
      ModifiedOn_DateTime, PetIdentifier_Plugin.ModifiedOn);
const ModifiedBy  =
    merge({},
      ModifiedBy_Contact, PetIdentifier_Plugin.ModifiedBy);
const Value  =
    merge({},
      Value_LongText, PetIdentifier_Plugin.Value);
const PetIdentifierType  =
    merge({},
      PetIdentifierType_PetIdentifierType, PetIdentifier_Plugin.PetIdentifierType);
const Pet  =
    merge({},
      Pet_Pet, PetIdentifier_Plugin.Pet);
const Date  =
    merge({},
      Date_Date, PetIdentifier_Plugin.Date);
const Studbook  =
    merge({},
      Studbook_Studbook, PetIdentifier_Plugin.Studbook);
const Number  =
    merge({},
      Number_ShortText, PetIdentifier_Plugin.Number);
const DataSource  =
    merge({},
      DataSource_DataSource, PetIdentifier_Plugin.DataSource);
const IsProcessed  =
    merge({},
      IsProcessed_Boolean, PetIdentifier_Plugin.IsProcessed);
const TrimValue  =
    merge({},
      TrimValue_LongText, PetIdentifier_Plugin.TrimValue);
const IsPublic  =
    merge({},
      IsPublic_Boolean, PetIdentifier_Plugin.IsPublic)


export const PETIDENTIFIER_FIELD_CONFIG = {

  Id,
  CreatedOn,
  CreatedBy,
  ModifiedOn,
  ModifiedBy,
  Value,
  PetIdentifierType,
  Pet,
  Date,
  Studbook,
  Number,
  DataSource,
  IsProcessed,
  TrimValue,
  IsPublic
} as const;


export const PETIDENTIFIER_ENTITY_COLUMNS = getColumns(PETIDENTIFIER_FIELD_CONFIG);

export const PETIDENTIFIER_DATE_FIELDS = [];


export const [, , PetIdentifier_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_PetIdentifier,
    fieldsConfig: PETIDENTIFIER_FIELD_CONFIG,
    entitiesColumns: PETIDENTIFIER_ENTITY_COLUMNS,
    dateColumns: getDateColumns(PETIDENTIFIER_FIELD_CONFIG),
  };
});

