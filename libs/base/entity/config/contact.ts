// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import Id from '@base-field-uid/ae0e45ca-c495-4fe7-a39d-3ab7278e1617';
import Name from '@base-field-uid/a5cca792-47dd-428a-83fb-5c92bdd97ff8';
import CreatedOn from '@base-field-uid/e80190a5-03b2-4095-90f7-a193a960adee';
import CreatedBy from '@base-field-uid/ebf6bb93-8aa6-4a01-900d-c6ea67affe21';
import ModifiedOn from '@base-field-uid/9928edec-4272-425a-93bb-48743fee4b04';
import ModifiedBy from '@base-field-uid/3015559e-cbc6-406a-88af-07f7930be832';
import SalutationType from '@base-field-uid/f16cbd03-a8a8-4bdd-9970-a0c7985a1996';
import Gender from '@base-field-uid/3a3317c0-09f6-4a26-998b-018d1caa2c36';
import Account from '@base-field-uid/5c6ca10e-1180-4c1e-8a50-55a72ff9bdd4';
import DecisionRole from '@base-field-uid/f70c762a-1038-49a7-a3e8-f24fb8cfdeef';
import Job from '@base-field-uid/344436e4-9d6b-4a30-936f-f8ea45f2adb4';
import JobTitle from '@base-field-uid/8b680ac7-e46c-466c-b630-e5cb4da13a55';
import BirthDate from '@base-field-uid/3f08db69-6d2f-4b1c-87a4-acddc6c3b9d6';
import Phone from '@base-field-uid/84c5808a-7859-4198-ba6a-243c95a3300b';
import MobilePhone from '@base-field-uid/98e085c7-ad4d-4ac6-8c1c-09be09876d44';
import HomePhone from '@base-field-uid/0a455b85-133c-4944-aff1-2ce7f7e50fee';
import Skype from '@base-field-uid/5ff9516e-251c-41de-a085-67fa199cdfe7';
import Email from '@base-field-uid/dbf202ec-c444-479b-bcf4-d8e5b1863201';
import AddressType from '@base-field-uid/5ad029c6-0fa7-4db6-8fef-c72a0f535682';
import Address from '@base-field-uid/0fb61bc8-a195-4d90-aecc-18b411b51814';
import City from '@base-field-uid/cf58ca72-531b-4dd2-b4d5-f0d5b7c556f6';
import Region from '@base-field-uid/0e50f221-470e-482b-8580-f61c74b8b1c1';
import Zip from '@base-field-uid/0737d99d-eebc-4b8e-9859-634414f7cc04';
import Country from '@base-field-uid/9463dea9-2576-4d37-812f-342ee57ddf32';
import Notes from '@base-field-uid/fd73da4b-2b3d-483e-89d2-383a6db099ac';
import Facebook from '@base-field-uid/5282096d-e4af-470a-bfbc-3e3542f04515';
import LinkedIn from '@base-field-uid/644a4505-9c9c-477e-8037-b73c14d109df';
import Twitter from '@base-field-uid/83239d8b-efb5-4a28-80b7-219bdbd2a752';
import FacebookId from '@base-field-uid/21a16860-9d95-4f60-9c23-66b3392ea5f4';
import LinkedInId from '@base-field-uid/10ebe04c-3e1e-4606-93a5-dbdfdb230e71';
import TwitterId from '@base-field-uid/2e96804c-cf03-4ab0-a532-79b032dc4529';
import Surname from '@base-field-uid/771a60e2-020c-4dd2-8512-b428b8a47dba';
import GivenName from '@base-field-uid/cc26b1c5-4254-4287-9c15-0b5acd319811';
import MiddleName from '@base-field-uid/33a879a3-d466-4b3f-b529-377a69ff0819';
import Confirmed from '@base-field-uid/ced280cc-7423-4175-9896-ea592a9e81a6';
import IsNonActualEmail from '@base-field-uid/65db5bf4-c253-4bd3-8988-ca1c6397a7ee';
import Language from '@base-field-uid/a855b7ae-45be-4d73-9074-9d84e4ae66c4';
import Age from '@base-field-uid/bcdc7a32-4332-4caf-858d-0078b56856fe';
import AlternateNames from '@base-field-uid/8e23f4ba-0461-22c2-8a6f-55b8390f3b8b';
import IsEmailConfirmed from '@base-field-uid/f963730e-7256-f35d-03ff-ba60a1d641d7';
import Url from '@base-field-uid/99da4852-acfb-bb24-c832-17a93d3a03b2';
import AvatarUrl from '@base-field-uid/d99c093c-7a72-e593-578f-3dc49e24a9e4';
import VerificationStatus from '@base-field-uid/426171f1-e21e-45a7-8489-eb94513fdc88';
import Cover from '@base-field-uid/e39b5dad-fb20-bc18-4e1e-89b8481b117d';
import Rating from '@base-field-uid/4c6ec495-488f-4a53-ac00-91ab9747f6d1';

import { createInjectionToken } from 'ngxtension/create-injection-token';
import { Contact_Lookup } from '@base-table-ref';

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
  Rating,
} as const;

export const [, , Contact_SCHEMA] = createInjectionToken(() => {
  return {
    Contact_Lookup,

    fieldsConfig: CONTACT_FIELD_CONFIG,
  };
});
