

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { Name_MediumText} from '@bh/field/config';import { CreatedOn_DateTime} from '@bh/field/config';import { CreatedBy_Contact} from '@bh/field/config';import { ModifiedOn_DateTime} from '@bh/field/config';import { ModifiedBy_Contact} from '@bh/field/config';import { SalutationType_ContactSalutationType} from '@bh/field/config';import { Gender_Gender} from '@bh/field/config';import { Account_Account} from '@bh/field/config';import { DecisionRole_ContactDecisionRole} from '@bh/field/config';import { Job_Job} from '@bh/field/config';import { JobTitle_MediumText} from '@bh/field/config';import { BirthDate_Date} from '@bh/field/config';import { Phone_PhoneText} from '@bh/field/config';import { MobilePhone_PhoneText} from '@bh/field/config';import { HomePhone_PhoneText} from '@bh/field/config';import { Skype_MediumText} from '@bh/field/config';import { Email_EmailText} from '@bh/field/config';import { AddressType_AddressType} from '@bh/field/config';import { Address_MaxSizeText} from '@bh/field/config';import { City_City} from '@bh/field/config';import { Region_Region} from '@bh/field/config';import { Zip_ShortText} from '@bh/field/config';import { Country_Country} from '@bh/field/config';import { Notes_MaxSizeText} from '@bh/field/config';import { Facebook_MediumText} from '@bh/field/config';import { LinkedIn_MediumText} from '@bh/field/config';import { Twitter_MediumText} from '@bh/field/config';import { FacebookId_MediumText} from '@bh/field/config';import { LinkedInId_MediumText} from '@bh/field/config';import { TwitterId_MediumText} from '@bh/field/config';import { Surname_MediumText} from '@bh/field/config';import { GivenName_MediumText} from '@bh/field/config';import { MiddleName_MediumText} from '@bh/field/config';import { Confirmed_Boolean} from '@bh/field/config';import { IsNonActualEmail_Boolean} from '@bh/field/config';import { Language_SysLanguage} from '@bh/field/config';import { Age_Integer} from '@bh/field/config';import { AlternateNames_MaxSizeText} from '@bh/field/config';import { IsEmailConfirmed_Boolean} from '@bh/field/config';import { Url_MediumText} from '@bh/field/config';import { AvatarUrl_LongText} from '@bh/field/config';import { VerificationStatus_VerificationStatus} from '@bh/field/config';import { Cover_Cover} from '@bh/field/config';import { Rating_Number} from '@bh/field/config'

import { Contact_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_Contact} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, Contact_Plugin.Id);
const Name  =
    merge({},
      Name_MediumText, Contact_Plugin.Name);
const CreatedOn  =
    merge({},
      CreatedOn_DateTime, Contact_Plugin.CreatedOn);
const CreatedBy  =
    merge({},
      CreatedBy_Contact, Contact_Plugin.CreatedBy);
const ModifiedOn  =
    merge({},
      ModifiedOn_DateTime, Contact_Plugin.ModifiedOn);
const ModifiedBy  =
    merge({},
      ModifiedBy_Contact, Contact_Plugin.ModifiedBy);
const SalutationType  =
    merge({},
      SalutationType_ContactSalutationType, Contact_Plugin.SalutationType);
const Gender  =
    merge({},
      Gender_Gender, Contact_Plugin.Gender);
const Account  =
    merge({},
      Account_Account, Contact_Plugin.Account);
const DecisionRole  =
    merge({},
      DecisionRole_ContactDecisionRole, Contact_Plugin.DecisionRole);
const Job  =
    merge({},
      Job_Job, Contact_Plugin.Job);
const JobTitle  =
    merge({},
      JobTitle_MediumText, Contact_Plugin.JobTitle);
const BirthDate  =
    merge({},
      BirthDate_Date, Contact_Plugin.BirthDate);
const Phone  =
    merge({},
      Phone_PhoneText, Contact_Plugin.Phone);
const MobilePhone  =
    merge({},
      MobilePhone_PhoneText, Contact_Plugin.MobilePhone);
const HomePhone  =
    merge({},
      HomePhone_PhoneText, Contact_Plugin.HomePhone);
const Skype  =
    merge({},
      Skype_MediumText, Contact_Plugin.Skype);
const Email  =
    merge({},
      Email_EmailText, Contact_Plugin.Email);
const AddressType  =
    merge({},
      AddressType_AddressType, Contact_Plugin.AddressType);
const Address  =
    merge({},
      Address_MaxSizeText, Contact_Plugin.Address);
const City  =
    merge({},
      City_City, Contact_Plugin.City);
const Region  =
    merge({},
      Region_Region, Contact_Plugin.Region);
const Zip  =
    merge({},
      Zip_ShortText, Contact_Plugin.Zip);
const Country  =
    merge({},
      Country_Country, Contact_Plugin.Country);
const Notes  =
    merge({},
      Notes_MaxSizeText, Contact_Plugin.Notes);
const Facebook  =
    merge({},
      Facebook_MediumText, Contact_Plugin.Facebook);
const LinkedIn  =
    merge({},
      LinkedIn_MediumText, Contact_Plugin.LinkedIn);
const Twitter  =
    merge({},
      Twitter_MediumText, Contact_Plugin.Twitter);
const FacebookId  =
    merge({},
      FacebookId_MediumText, Contact_Plugin.FacebookId);
const LinkedInId  =
    merge({},
      LinkedInId_MediumText, Contact_Plugin.LinkedInId);
const TwitterId  =
    merge({},
      TwitterId_MediumText, Contact_Plugin.TwitterId);
const Surname  =
    merge({},
      Surname_MediumText, Contact_Plugin.Surname);
const GivenName  =
    merge({},
      GivenName_MediumText, Contact_Plugin.GivenName);
const MiddleName  =
    merge({},
      MiddleName_MediumText, Contact_Plugin.MiddleName);
const Confirmed  =
    merge({},
      Confirmed_Boolean, Contact_Plugin.Confirmed);
const IsNonActualEmail  =
    merge({},
      IsNonActualEmail_Boolean, Contact_Plugin.IsNonActualEmail);
const Language  =
    merge({},
      Language_SysLanguage, Contact_Plugin.Language);
const Age  =
    merge({},
      Age_Integer, Contact_Plugin.Age);
const AlternateNames  =
    merge({},
      AlternateNames_MaxSizeText, Contact_Plugin.AlternateNames);
const IsEmailConfirmed  =
    merge({},
      IsEmailConfirmed_Boolean, Contact_Plugin.IsEmailConfirmed);
const Url  =
    merge({},
      Url_MediumText, Contact_Plugin.Url);
const AvatarUrl  =
    merge({},
      AvatarUrl_LongText, Contact_Plugin.AvatarUrl);
const VerificationStatus  =
    merge({},
      VerificationStatus_VerificationStatus, Contact_Plugin.VerificationStatus);
const Cover  =
    merge({},
      Cover_Cover, Contact_Plugin.Cover);
const Rating  =
    merge({},
      Rating_Number, Contact_Plugin.Rating)


export const CONTACT_FIELD_CONFIG = {

  Id,
  Name,
  CreatedOn,
  CreatedBy,
  ModifiedOn,
  ModifiedBy,
  SalutationType,
  Gender,
  Account,
  DecisionRole,
  Job,
  JobTitle,
  BirthDate,
  Phone,
  MobilePhone,
  HomePhone,
  Skype,
  Email,
  AddressType,
  Address,
  City,
  Region,
  Zip,
  Country,
  Notes,
  Facebook,
  LinkedIn,
  Twitter,
  FacebookId,
  LinkedInId,
  TwitterId,
  Surname,
  GivenName,
  MiddleName,
  Confirmed,
  IsNonActualEmail,
  Language,
  Age,
  AlternateNames,
  IsEmailConfirmed,
  Url,
  AvatarUrl,
  VerificationStatus,
  Cover,
  Rating
} as const;


export const CONTACT_ENTITY_COLUMNS = getColumns(CONTACT_FIELD_CONFIG);

export const CONTACT_DATE_FIELDS = [];


export const [, , Contact_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_Contact,
    fieldsConfig: CONTACT_FIELD_CONFIG,
    entitiesColumns: CONTACT_ENTITY_COLUMNS,
    dateColumns: getDateColumns(CONTACT_FIELD_CONFIG),
  };
});

