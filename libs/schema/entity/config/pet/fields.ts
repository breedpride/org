

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { CreatedOn_DateTime} from '@bh/field/config';import { CreatedBy_Contact} from '@bh/field/config';import { ModifiedOn_DateTime} from '@bh/field/config';import { ModifiedBy_Contact} from '@bh/field/config';import { Name_MaxSizeText} from '@bh/field/config';import { Notes_MaxSizeText} from '@bh/field/config';import { DateOfBirth_Date} from '@bh/field/config';import { Owner_Contact} from '@bh/field/config';import { Kennel_Account} from '@bh/field/config';import { PetType_PetType} from '@bh/field/config';import { Sex_Sex} from '@bh/field/config';import { Father_Pet} from '@bh/field/config';import { Mother_Pet} from '@bh/field/config';import { Breed_Breed} from '@bh/field/config';import { Breeder_Contact} from '@bh/field/config';import { DateOfDeath_Date} from '@bh/field/config';import { PetStatus_PetStatus} from '@bh/field/config';import { CoatType_CoatType} from '@bh/field/config';import { CoatColor_CoatColor} from '@bh/field/config';import { Size_PetSize} from '@bh/field/config';import { BodyFeature_BodyFeature} from '@bh/field/config';import { Litter_Litter} from '@bh/field/config';import { CallName_MediumText} from '@bh/field/config';import { CountryOfBirth_Country} from '@bh/field/config';import { Titles_MaxSizeText} from '@bh/field/config';import { InbreedingPercent_Number} from '@bh/field/config';import { Url_LongText} from '@bh/field/config';import { OwnerKennel_Account} from '@bh/field/config';import { AvatarUrl_LongText} from '@bh/field/config';import { Rating_Number} from '@bh/field/config';import { BreedDivision_BreedDivision} from '@bh/field/config';import { TrimTitles_MaxSizeText} from '@bh/field/config';import { CountryOfStay_Country} from '@bh/field/config';import { COI_Number} from '@bh/field/config';import { VerificationStatus_VerificationStatus} from '@bh/field/config';import { RatingPlacementInBreed_Integer} from '@bh/field/config';import { IsPublic_Boolean} from '@bh/field/config';import { Cover_Cover} from '@bh/field/config';import { PublicData_PublicData} from '@bh/field/config';import { Weight_Number} from '@bh/field/config';

import { Pet_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_Pet} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, Pet_Plugin.Id);
const CreatedOn  =
    merge({},
      CreatedOn_DateTime, Pet_Plugin.CreatedOn);
const CreatedBy  =
    merge({},
      CreatedBy_Contact, Pet_Plugin.CreatedBy);
const ModifiedOn  =
    merge({},
      ModifiedOn_DateTime, Pet_Plugin.ModifiedOn);
const ModifiedBy  =
    merge({},
      ModifiedBy_Contact, Pet_Plugin.ModifiedBy);
const Name  =
    merge({},
      Name_MaxSizeText, Pet_Plugin.Name);
const Notes  =
    merge({},
      Notes_MaxSizeText, Pet_Plugin.Notes);
const DateOfBirth  =
    merge({},
      DateOfBirth_Date, Pet_Plugin.DateOfBirth);
const Owner  =
    merge({},
      Owner_Contact, Pet_Plugin.Owner);
const Kennel  =
    merge({},
      Kennel_Account, Pet_Plugin.Kennel);
const PetType  =
    merge({},
      PetType_PetType, Pet_Plugin.PetType);
const Sex  =
    merge({},
      Sex_Sex, Pet_Plugin.Sex);
const Father  =
    merge({},
      Father_Pet, Pet_Plugin.Father);
const Mother  =
    merge({},
      Mother_Pet, Pet_Plugin.Mother);
const Breed  =
    merge({},
      Breed_Breed, Pet_Plugin.Breed);
const Breeder  =
    merge({},
      Breeder_Contact, Pet_Plugin.Breeder);
const DateOfDeath  =
    merge({},
      DateOfDeath_Date, Pet_Plugin.DateOfDeath);
const PetStatus  =
    merge({},
      PetStatus_PetStatus, Pet_Plugin.PetStatus);
const CoatType  =
    merge({},
      CoatType_CoatType, Pet_Plugin.CoatType);
const CoatColor  =
    merge({},
      CoatColor_CoatColor, Pet_Plugin.CoatColor);
const Size  =
    merge({},
      Size_PetSize, Pet_Plugin.Size);
const BodyFeature  =
    merge({},
      BodyFeature_BodyFeature, Pet_Plugin.BodyFeature);
const Litter  =
    merge({},
      Litter_Litter, Pet_Plugin.Litter);
const CallName  =
    merge({},
      CallName_MediumText, Pet_Plugin.CallName);
const CountryOfBirth  =
    merge({},
      CountryOfBirth_Country, Pet_Plugin.CountryOfBirth);
const Titles  =
    merge({},
      Titles_MaxSizeText, Pet_Plugin.Titles);
const InbreedingPercent  =
    merge({},
      InbreedingPercent_Number, Pet_Plugin.InbreedingPercent);
const Url  =
    merge({},
      Url_LongText, Pet_Plugin.Url);
const OwnerKennel  =
    merge({},
      OwnerKennel_Account, Pet_Plugin.OwnerKennel);
const AvatarUrl  =
    merge({},
      AvatarUrl_LongText, Pet_Plugin.AvatarUrl);
const Rating  =
    merge({},
      Rating_Number, Pet_Plugin.Rating);
const BreedDivision  =
    merge({},
      BreedDivision_BreedDivision, Pet_Plugin.BreedDivision);
const TrimTitles  =
    merge({},
      TrimTitles_MaxSizeText, Pet_Plugin.TrimTitles);
const CountryOfStay  =
    merge({},
      CountryOfStay_Country, Pet_Plugin.CountryOfStay);
const COI  =
    merge({},
      COI_Number, Pet_Plugin.COI);
const VerificationStatus  =
    merge({},
      VerificationStatus_VerificationStatus, Pet_Plugin.VerificationStatus);
const RatingPlacementInBreed  =
    merge({},
      RatingPlacementInBreed_Integer, Pet_Plugin.RatingPlacementInBreed);
const IsPublic  =
    merge({},
      IsPublic_Boolean, Pet_Plugin.IsPublic);
const Cover  =
    merge({},
      Cover_Cover, Pet_Plugin.Cover);
const PublicData  =
    merge({},
      PublicData_PublicData, Pet_Plugin.PublicData);
const Weight  =
    merge({},
      Weight_Number, Pet_Plugin.Weight);


export const PET_FIELD_CONFIG = {

  Id,
  CreatedOn,
  CreatedBy,
  ModifiedOn,
  ModifiedBy,
  Name,
  Notes,
  DateOfBirth,
  Owner,
  Kennel,
  PetType,
  Sex,
  Father,
  Mother,
  Breed,
  Breeder,
  DateOfDeath,
  PetStatus,
  CoatType,
  CoatColor,
  Size,
  BodyFeature,
  Litter,
  CallName,
  CountryOfBirth,
  Titles,
  InbreedingPercent,
  Url,
  OwnerKennel,
  AvatarUrl,
  Rating,
  BreedDivision,
  TrimTitles,
  CountryOfStay,
  COI,
  VerificationStatus,
  RatingPlacementInBreed,
  IsPublic,
  Cover,
  PublicData,
  Weight
} as const;


export const PET_ENTITY_COLUMNS = getColumns(PET_FIELD_CONFIG);

export const PET_DATE_FIELDS = [];


export const [, , Pet_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_Pet,
    fieldsConfig: PET_FIELD_CONFIG,
    entitiesColumns: PET_ENTITY_COLUMNS,
    dateColumns: getDateColumns(PET_FIELD_CONFIG),
  };
});

