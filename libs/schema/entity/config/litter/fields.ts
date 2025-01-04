

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { CreatedOn_DateTime} from '@bh/field/config';import { CreatedBy_Contact} from '@bh/field/config';import { ModifiedOn_DateTime} from '@bh/field/config';import { ModifiedBy_Contact} from '@bh/field/config';import { Name_MediumText} from '@bh/field/config';import { Notes_MaxSizeText} from '@bh/field/config';import { Father_Pet} from '@bh/field/config';import { Mother_Pet} from '@bh/field/config';import { PetType_PetType} from '@bh/field/config';import { MatingPeriod_Period} from '@bh/field/config';import { DateOfBirth_Date} from '@bh/field/config';import { Status_LitterStatus} from '@bh/field/config';import { Kennel_Account} from '@bh/field/config';import { Breeder_Contact} from '@bh/field/config';import { Url_MediumText} from '@bh/field/config';import { Letter_Letter} from '@bh/field/config';import { MaleAmount_Integer} from '@bh/field/config';import { FemaleAmount_Integer} from '@bh/field/config';import { IsPublic_Boolean} from '@bh/field/config';import { Cover_Cover} from '@bh/field/config';import { StartDate_Date} from '@bh/field/config';import { EndDate_Date} from '@bh/field/config';

import { Litter_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_Litter} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, Litter_Plugin.Id);
const CreatedOn  =
    merge({},
      CreatedOn_DateTime, Litter_Plugin.CreatedOn);
const CreatedBy  =
    merge({},
      CreatedBy_Contact, Litter_Plugin.CreatedBy);
const ModifiedOn  =
    merge({},
      ModifiedOn_DateTime, Litter_Plugin.ModifiedOn);
const ModifiedBy  =
    merge({},
      ModifiedBy_Contact, Litter_Plugin.ModifiedBy);
const Name  =
    merge({},
      Name_MediumText, Litter_Plugin.Name);
const Notes  =
    merge({},
      Notes_MaxSizeText, Litter_Plugin.Notes);
const Father  =
    merge({},
      Father_Pet, Litter_Plugin.Father);
const Mother  =
    merge({},
      Mother_Pet, Litter_Plugin.Mother);
const PetType  =
    merge({},
      PetType_PetType, Litter_Plugin.PetType);
const MatingPeriod  =
    merge({},
      MatingPeriod_Period, Litter_Plugin.MatingPeriod);
const DateOfBirth  =
    merge({},
      DateOfBirth_Date, Litter_Plugin.DateOfBirth);
const Status  =
    merge({},
      Status_LitterStatus, Litter_Plugin.Status);
const Kennel  =
    merge({},
      Kennel_Account, Litter_Plugin.Kennel);
const Breeder  =
    merge({},
      Breeder_Contact, Litter_Plugin.Breeder);
const Url  =
    merge({},
      Url_MediumText, Litter_Plugin.Url);
const Letter  =
    merge({},
      Letter_Letter, Litter_Plugin.Letter);
const MaleAmount  =
    merge({},
      MaleAmount_Integer, Litter_Plugin.MaleAmount);
const FemaleAmount  =
    merge({},
      FemaleAmount_Integer, Litter_Plugin.FemaleAmount);
const IsPublic  =
    merge({},
      IsPublic_Boolean, Litter_Plugin.IsPublic);
const Cover  =
    merge({},
      Cover_Cover, Litter_Plugin.Cover);
const StartDate  =
    merge({},
      StartDate_Date, Litter_Plugin.StartDate);
const EndDate  =
    merge({},
      EndDate_Date, Litter_Plugin.EndDate);


export const LITTER_FIELD_CONFIG = {

  Id,
  CreatedOn,
  CreatedBy,
  ModifiedOn,
  ModifiedBy,
  Name,
  Notes,
  Father,
  Mother,
  PetType,
  MatingPeriod,
  DateOfBirth,
  Status,
  Kennel,
  Breeder,
  Url,
  Letter,
  MaleAmount,
  FemaleAmount,
  IsPublic,
  Cover,
  StartDate,
  EndDate
} as const;


export const LITTER_ENTITY_COLUMNS = getColumns(LITTER_FIELD_CONFIG);

export const LITTER_DATE_FIELDS = [];


export const [, , Litter_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_Litter,
    fieldsConfig: LITTER_FIELD_CONFIG,
    entitiesColumns: LITTER_ENTITY_COLUMNS,
    dateColumns: getDateColumns(LITTER_FIELD_CONFIG),
  };
});

