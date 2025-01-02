// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid } from '@bh/field/config';
import { Name_MediumText } from '@bh/field/config';
import { Owner_Contact } from '@bh/field/config';
import { CreatedOn_DateTime } from '@bh/field/config';
import { CreatedBy_Contact } from '@bh/field/config';
import { ModifiedOn_DateTime } from '@bh/field/config';
import { ModifiedBy_Contact } from '@bh/field/config';
import { Ownership_AccountOwnership } from '@bh/field/config';
import { PrimaryContact_Contact } from '@bh/field/config';
import { Parent_Account } from '@bh/field/config';
import { Industry_AccountIndustry } from '@bh/field/config';
import { Code_MediumText } from '@bh/field/config';
import { Type_AccountType } from '@bh/field/config';
import { Phone_PhoneText } from '@bh/field/config';
import { AdditionalPhone_PhoneText } from '@bh/field/config';
import { Web_WebText } from '@bh/field/config';
import { AddressType_AddressType } from '@bh/field/config';
import { Address_MaxSizeText } from '@bh/field/config';
import { City_City } from '@bh/field/config';
import { Region_Region } from '@bh/field/config';
import { Zip_ShortText } from '@bh/field/config';
import { Country_Country } from '@bh/field/config';
import { AccountCategory_AccountCategory } from '@bh/field/config';
import { Notes_MaxSizeText } from '@bh/field/config';
import { AlternativeName_MediumText } from '@bh/field/config';
import { GPSN_ShortText } from '@bh/field/config';
import { GPSE_ShortText } from '@bh/field/config';
import { Status_AccountStatus } from '@bh/field/config';
import { AffixType_AffixType } from '@bh/field/config';
import { Federation_Account } from '@bh/field/config';
import { AboutUs_MaxSizeText } from '@bh/field/config';
import { Url_MediumText } from '@bh/field/config';
import { AvatarUrl_LongText } from '@bh/field/config';
import { HasKennelName_Boolean } from '@bh/field/config';
import { Rating_Number } from '@bh/field/config';
import { Since_Date } from '@bh/field/config';
import { Verified_Boolean } from '@bh/field/config';
import { VerificationStatus_VerificationStatus } from '@bh/field/config';
import { CompanyFoundationDate_Date } from '@bh/field/config';
import { RatingPlacementInBreed_Integer } from '@bh/field/config';
import { Cover_Cover } from '@bh/field/config';

import { Account_Plugin } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import { createInjectionToken } from 'ngxtension/create-injection-token';
import { Lookup_Account } from '@bh/db/config';

const Id = merge({}, Id_Guid, Account_Plugin.Id);
const Name = merge({}, Name_MediumText, Account_Plugin.Name);
const Owner = merge({}, Owner_Contact, Account_Plugin.Owner);
const CreatedOn = merge({}, CreatedOn_DateTime, Account_Plugin.CreatedOn);
const CreatedBy = merge({}, CreatedBy_Contact, Account_Plugin.CreatedBy);
const ModifiedOn = merge({}, ModifiedOn_DateTime, Account_Plugin.ModifiedOn);
const ModifiedBy = merge({}, ModifiedBy_Contact, Account_Plugin.ModifiedBy);
const Ownership = merge(
  {},
  Ownership_AccountOwnership,
  Account_Plugin.Ownership
);
const PrimaryContact = merge(
  {},
  PrimaryContact_Contact,
  Account_Plugin.PrimaryContact
);
const Parent = merge({}, Parent_Account, Account_Plugin.Parent);
const Industry = merge({}, Industry_AccountIndustry, Account_Plugin.Industry);
const Code = merge({}, Code_MediumText, Account_Plugin.Code);
const Type = merge({}, Type_AccountType, Account_Plugin.Type);
const Phone = merge({}, Phone_PhoneText, Account_Plugin.Phone);
const AdditionalPhone = merge(
  {},
  AdditionalPhone_PhoneText,
  Account_Plugin.AdditionalPhone
);
const Web = merge({}, Web_WebText, Account_Plugin.Web);
const AddressType = merge(
  {},
  AddressType_AddressType,
  Account_Plugin.AddressType
);
const Address = merge({}, Address_MaxSizeText, Account_Plugin.Address);
const City = merge({}, City_City, Account_Plugin.City);
const Region = merge({}, Region_Region, Account_Plugin.Region);
const Zip = merge({}, Zip_ShortText, Account_Plugin.Zip);
const Country = merge({}, Country_Country, Account_Plugin.Country);
const AccountCategory = merge(
  {},
  AccountCategory_AccountCategory,
  Account_Plugin.AccountCategory
);
const Notes = merge({}, Notes_MaxSizeText, Account_Plugin.Notes);
const AlternativeName = merge(
  {},
  AlternativeName_MediumText,
  Account_Plugin.AlternativeName
);
const GPSN = merge({}, GPSN_ShortText, Account_Plugin.GPSN);
const GPSE = merge({}, GPSE_ShortText, Account_Plugin.GPSE);
const Status = merge({}, Status_AccountStatus, Account_Plugin.Status);
const AffixType = merge({}, AffixType_AffixType, Account_Plugin.AffixType);
const Federation = merge({}, Federation_Account, Account_Plugin.Federation);
const AboutUs = merge({}, AboutUs_MaxSizeText, Account_Plugin.AboutUs);
const Url = merge({}, Url_MediumText, Account_Plugin.Url);
const AvatarUrl = merge({}, AvatarUrl_LongText, Account_Plugin.AvatarUrl);
const HasKennelName = merge(
  {},
  HasKennelName_Boolean,
  Account_Plugin.HasKennelName
);
const Rating = merge({}, Rating_Number, Account_Plugin.Rating);
const Since = merge({}, Since_Date, Account_Plugin.Since);
const Verified = merge({}, Verified_Boolean, Account_Plugin.Verified);
const VerificationStatus = merge(
  {},
  VerificationStatus_VerificationStatus,
  Account_Plugin.VerificationStatus
);
const CompanyFoundationDate = merge(
  {},
  CompanyFoundationDate_Date,
  Account_Plugin.CompanyFoundationDate
);
const RatingPlacementInBreed = merge(
  {},
  RatingPlacementInBreed_Integer,
  Account_Plugin.RatingPlacementInBreed
);
const Cover = merge({}, Cover_Cover, Account_Plugin.Cover);

export const ACCOUNT_FIELD_CONFIG = {
  Id,
  Name,
  Owner,
  CreatedOn,
  CreatedBy,
  ModifiedOn,
  ModifiedBy,
  Ownership,
  PrimaryContact,
  Parent,
  Industry,
  Code,
  Type,
  Phone,
  AdditionalPhone,
  Web,
  AddressType,
  Address,
  City,
  Region,
  Zip,
  Country,
  AccountCategory,
  Notes,
  AlternativeName,
  GPSN,
  GPSE,
  Status,
  AffixType,
  Federation,
  AboutUs,
  Url,
  AvatarUrl,
  HasKennelName,
  Rating,
  Since,
  Verified,
  VerificationStatus,
  CompanyFoundationDate,
  RatingPlacementInBreed,
  Cover,
} as const;

export const ACCOUNT_ENTITY_COLUMNS = getColumns(ACCOUNT_FIELD_CONFIG);

export const ACCOUNT_DATE_FIELDS = [];

export const [, , Account_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_Account,
    fieldsConfig: ACCOUNT_FIELD_CONFIG,
    entitiesColumns: ACCOUNT_ENTITY_COLUMNS,
    dateColumns: getDateColumns(ACCOUNT_FIELD_CONFIG),
  };
});
