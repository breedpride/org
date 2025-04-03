import {createInjectionToken} from 'ngxtension/create-injection-token';

export const CONTACT_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Age: { type: "number", id: "Age", rows: 0, component: 4, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "bcdc7a32-4332-4caf-858d-0078b56856fe", name: "Age", caption: "Age", levelAccess: 1 },
  Job: { type: "Job", id: "Job", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Job", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "344436e4-9d6b-4a30-936f-f8ea45f2adb4", name: "Job", caption: "Job title", levelAccess: 1 },
  Url: { type: "string", id: "Url", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "99da4852-acfb-bb24-c832-17a93d3a03b2", name: "Url", caption: "Url", levelAccess: 1 },
  Zip: { type: "string", id: "Zip", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "0737d99d-eebc-4b8e-9859-634414f7cc04", name: "Zip", caption: "ZIP/postal code", levelAccess: 1 },
  City: { type: "City", id: "City", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "City", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "cf58ca72-531b-4dd2-b4d5-f0d5b7c556f6", name: "City", caption: "City", levelAccess: 1 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "a5cca792-47dd-428a-83fb-5c92bdd97ff8", name: "Name", caption: "Full name", levelAccess: 1 },
  Cover: { type: "Cover", id: "Cover", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Cover", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "e39b5dad-fb20-bc18-4e1e-89b8481b117d", name: "Cover", caption: "Cover", levelAccess: 1 },
  Email: { type: "string", id: "Email", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "dbf202ec-c444-479b-bcf4-d8e5b1863201", name: "Email", caption: "Email", levelAccess: 1 },
  Notes: { type: "string", id: "Notes", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, max: 250, uid: "fd73da4b-2b3d-483e-89d2-383a6db099ac", name: "Notes", caption: "Notes", levelAccess: 1 },
  Phone: { type: "string", id: "Phone", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "84c5808a-7859-4198-ba6a-243c95a3300b", name: "Phone", caption: "Business phone", levelAccess: 1 },
  Skype: { type: "string", id: "Skype", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "5ff9516e-251c-41de-a085-67fa199cdfe7", name: "Skype", caption: "Skype", levelAccess: 1 },
  Gender: { type: "Gender", id: "Gender", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Gender", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "3a3317c0-09f6-4a26-998b-018d1caa2c36", name: "Gender", caption: "Gender", levelAccess: 1 },
  Rating: { type: "number", id: "Rating", rows: 0, component: 4, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "4c6ec495-488f-4a53-ac00-91ab9747f6d1", name: "Rating", caption: "Rating", levelAccess: 1 },
  Region: { type: "Region", id: "Region", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Region", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "0e50f221-470e-482b-8580-f61c74b8b1c1", name: "Region", caption: "State/province", levelAccess: 1 },
  Account: { type: "Account", id: "Account", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Account", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "5c6ca10e-1180-4c1e-8a50-55a72ff9bdd4", name: "Account", caption: "Account", levelAccess: 1 },
  Address: { type: "string", id: "Address", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, max: 250, uid: "0fb61bc8-a195-4d90-aecc-18b411b51814", name: "Address", caption: "Address", levelAccess: 1 },
  Country: { type: "Country", id: "Country", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Country", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9463dea9-2576-4d37-812f-342ee57ddf32", name: "Country", caption: "Country", levelAccess: 1 },
  Surname: { type: "string", id: "Surname", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "771a60e2-020c-4dd2-8512-b428b8a47dba", name: "Surname", caption: "Last name", levelAccess: 1 },
  Twitter: { type: "string", id: "Twitter", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "83239d8b-efb5-4a28-80b7-219bdbd2a752", name: "Twitter", caption: "Twitter", levelAccess: 1 },
  Facebook: { type: "string", id: "Facebook", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "5282096d-e4af-470a-bfbc-3e3542f04515", name: "Facebook", caption: "Facebook", levelAccess: 1 },
  JobTitle: { type: "string", id: "JobTitle", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "8b680ac7-e46c-466c-b630-e5cb4da13a55", name: "JobTitle", caption: "Full job title", levelAccess: 1 },
  Language: { type: "SysLanguage", id: "Language", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "SysLanguage", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "a855b7ae-45be-4d73-9074-9d84e4ae66c4", name: "Language", caption: "Preferred language", levelAccess: 1 },
  LinkedIn: { type: "string", id: "LinkedIn", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "644a4505-9c9c-477e-8037-b73c14d109df", name: "LinkedIn", caption: "LinkedIn", levelAccess: 1 },
  AvatarUrl: { type: "string", id: "AvatarUrl", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "d99c093c-7a72-e593-578f-3dc49e24a9e4", name: "AvatarUrl", caption: "Avatar url", levelAccess: 1 },
  BirthDate: { type: "Date", id: "BirthDate", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "3f08db69-6d2f-4b1c-87a4-acddc6c3b9d6", name: "BirthDate", caption: "Birth date", levelAccess: 1 },
  Confirmed: { type: "boolean", id: "Confirmed", rows: 0, component: 5, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ced280cc-7423-4175-9896-ea592a9e81a6", name: "Confirmed", caption: "Confirmed", levelAccess: 1 },
  CreatedBy: { type: "Contact", id: "CreatedBy", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ebf6bb93-8aa6-4a01-900d-c6ea67affe21", name: "CreatedBy", caption: "Created by", levelAccess: 1 },
  CreatedOn: { type: "Date", id: "CreatedOn", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "e80190a5-03b2-4095-90f7-a193a960adee", name: "CreatedOn", caption: "Created on", levelAccess: 1 },
  GivenName: { type: "string", id: "GivenName", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "cc26b1c5-4254-4287-9c15-0b5acd319811", name: "GivenName", caption: "First name", levelAccess: 1 },
  HomePhone: { type: "string", id: "HomePhone", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "0a455b85-133c-4944-aff1-2ce7f7e50fee", name: "HomePhone", caption: "Home phone", levelAccess: 1 },
  TwitterId: { type: "string", id: "TwitterId", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "2e96804c-cf03-4ab0-a532-79b032dc4529", name: "TwitterId", caption: "TwitterId", levelAccess: 1 },
  FacebookId: { type: "string", id: "FacebookId", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "21a16860-9d95-4f60-9c23-66b3392ea5f4", name: "FacebookId", caption: "FacebookId", levelAccess: 1 },
  LinkedInId: { type: "string", id: "LinkedInId", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "10ebe04c-3e1e-4606-93a5-dbdfdb230e71", name: "LinkedInId", caption: "LinkedInId", levelAccess: 1 },
  MiddleName: { type: "string", id: "MiddleName", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "33a879a3-d466-4b3f-b529-377a69ff0819", name: "MiddleName", caption: "Middle name", levelAccess: 1 },
  ModifiedBy: { type: "Contact", id: "ModifiedBy", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "3015559e-cbc6-406a-88af-07f7930be832", name: "ModifiedBy", caption: "Modified by", levelAccess: 1 },
  ModifiedOn: { type: "Date", id: "ModifiedOn", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9928edec-4272-425a-93bb-48743fee4b04", name: "ModifiedOn", caption: "Modified on", levelAccess: 1 },
  AddressType: { type: "AddressType", id: "AddressType", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "AddressType", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "5ad029c6-0fa7-4db6-8fef-c72a0f535682", name: "AddressType", caption: "Address type", levelAccess: 1 },
  MobilePhone: { type: "string", id: "MobilePhone", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "98e085c7-ad4d-4ac6-8c1c-09be09876d44", name: "MobilePhone", caption: "Mobile phone", levelAccess: 1 },
  DecisionRole: { type: "ContactDecisionRole", id: "DecisionRole", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "ContactDecisionRole", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "f70c762a-1038-49a7-a3e8-f24fb8cfdeef", name: "DecisionRole", caption: "Role", levelAccess: 1 },
  AlternateNames: { type: "string", id: "AlternateNames", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, max: 250, uid: "8e23f4ba-0461-22c2-8a6f-55b8390f3b8b", name: "AlternateNames", caption: "Alternate Names", levelAccess: 1 },
  SalutationType: { type: "ContactSalutationType", id: "SalutationType", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "ContactSalutationType", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "f16cbd03-a8a8-4bdd-9970-a0c7985a1996", name: "SalutationType", caption: "Title", levelAccess: 1 },
  IsEmailConfirmed: { type: "boolean", id: "IsEmailConfirmed", rows: 0, component: 5, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "f963730e-7256-f35d-03ff-ba60a1d641d7", name: "IsEmailConfirmed", caption: "IsEmailConfirmed", levelAccess: 1 },
  IsNonActualEmail: { type: "boolean", id: "IsNonActualEmail", rows: 0, component: 5, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "65db5bf4-c253-4bd3-8988-ca1c6397a7ee", name: "IsNonActualEmail", caption: "Invalid email", levelAccess: 1 },
  VerificationStatus: { type: "VerificationStatus", id: "VerificationStatus", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "VerificationStatus", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "426171f1-e21e-45a7-8489-eb94513fdc88", name: "VerificationStatus", caption: "Verification status", levelAccess: 1 }
} as const;

export const CONTACT_ENTITY_COLUMNS = [
  "Name",
  "Id",
  "Job.Id",
  "Job.Name",
  "VerificationStatus.Id",
  "VerificationStatus.Name",
  "ModifiedBy.Id",
  "ModifiedBy.Name",
  "CreatedBy.Id",
  "CreatedBy.Name",
  "Account.Id",
  "Account.Name",
  "City.Id",
  "City.Name",
  "Cover.Id",
  "Cover.Name",
  "DecisionRole.Id",
  "DecisionRole.Name",
  "SalutationType.Id",
  "SalutationType.Name",
  "Gender.Id",
  "Gender.Name",
  "AddressType.Id",
  "AddressType.Name",
  "Region.Id",
  "Region.Name",
  "Country.Id",
  "Country.Name",
  "Language.Id",
  "Language.Name"
];

export const CONTACT_DATE_FIELDS = [];

export const [, , Contact_SCHEMA] = createInjectionToken(() => ({
  uid: "ebf6bb93-8aa6-4a01-900d-c6ea67affe21",
  rows: 60,
  type: "Contact",
  caption: "Created by",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "Contact",
  fieldsConfig: CONTACT_FIELD_CONFIG,
  entitiesColumns: CONTACT_ENTITY_COLUMNS
}));

export const CONTACTCOMMUNICATION_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Number: { type: "string", id: "Number", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "02fcae57-fafa-4e4f-9367-b58317a6e2ec", name: "Number", caption: "Number", levelAccess: 1 },
  Contact: { type: "Contact", id: "Contact", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "cf226458-c1c0-4d0c-afe5-41664f2d570e", name: "Contact", caption: "Contact", levelAccess: 1 },
  Primary: { type: "boolean", id: "Primary", rows: 0, component: 5, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "83980e6d-09cc-4104-8a0b-64e974eecbdd", name: "Primary", caption: "Primary", levelAccess: 1 },
  Position: { type: "number", id: "Position", rows: 0, component: 4, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "0c103353-496a-4ff9-a8eb-877dfed4af26", name: "Position", caption: "Position", levelAccess: 1 },
  NonActual: { type: "boolean", id: "NonActual", rows: 0, component: 5, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ad63b6ff-8842-4d58-ba4a-8e4ff366964b", name: "NonActual", caption: "Invalid", levelAccess: 1 },
  SearchNumber: { type: "string", id: "SearchNumber", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "44278aac-22bf-44eb-8b94-c5e9b3525027", name: "SearchNumber", caption: "Number for search", levelAccess: 1 },
  DateSetNonActual: { type: "Date", id: "DateSetNonActual", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "dfed1095-db33-4c53-9a03-6fa884b9cc3f", name: "DateSetNonActual", caption: "Invalid since", levelAccess: 1 },
  CommunicationType: { type: "CommunicationType", id: "CommunicationType", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "CommunicationType", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "12f1d73a-43c5-4a52-9bd6-3e0ecafd3fb4", name: "CommunicationType", caption: "Type", levelAccess: 1 }
} as const;

export const CONTACTCOMMUNICATION_ENTITY_COLUMNS = [
  "Contact.Id",
  "Contact.Name",
  "CommunicationType.Id",
  "CommunicationType.Name"
];

export const CONTACTCOMMUNICATION_DATE_FIELDS = [];

export const [, , ContactCommunication_SCHEMA] = createInjectionToken(() => ({
  fieldsConfig: CONTACTCOMMUNICATION_FIELD_CONFIG,
  entitiesColumns: CONTACTCOMMUNICATION_ENTITY_COLUMNS
}));

export const CONTACTADDRESS_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Zip: { type: "string", id: "Zip", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "7c61072c-ba24-4ab3-812a-63741a3eb046", name: "Zip", caption: "ZIP/postal code", levelAccess: 1 },
  City: { type: "City", id: "City", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "City", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "1435cdfb-4112-4eb4-b069-8092de017667", name: "City", caption: "City", levelAccess: 1 },
  Region: { type: "Region", id: "Region", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Region", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "c8419fd0-f489-4d84-8966-c3f74d40d954", name: "Region", caption: "State/province", levelAccess: 1 },
  Address: { type: "string", id: "Address", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, max: 250, uid: "6e1859b8-5a53-4537-b1fe-f7ae8cb41564", name: "Address", caption: "Address", levelAccess: 1 },
  Contact: { type: "Contact", id: "Contact", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "16093858-afb1-4336-b8bc-52159ff08af5", name: "Contact", caption: "Contact", levelAccess: 1 },
  Country: { type: "Country", id: "Country", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Country", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "06b6aac2-bf8f-4159-9c31-ae7a8dc59d7a", name: "Country", caption: "Country", levelAccess: 1 },
  Primary: { type: "boolean", id: "Primary", rows: 0, component: 5, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "d11dacab-b03d-4a27-b6ab-904dcdb79cd9", name: "Primary", caption: "Primary", levelAccess: 1 },
  CreatedBy: { type: "Contact", id: "CreatedBy", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ebf6bb93-8aa6-4a01-900d-c6ea67affe21", name: "CreatedBy", caption: "Created by", levelAccess: 1 },
  CreatedOn: { type: "Date", id: "CreatedOn", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "e80190a5-03b2-4095-90f7-a193a960adee", name: "CreatedOn", caption: "Created on", levelAccess: 1 },
  ModifiedBy: { type: "Contact", id: "ModifiedBy", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "3015559e-cbc6-406a-88af-07f7930be832", name: "ModifiedBy", caption: "Modified by", levelAccess: 1 },
  ModifiedOn: { type: "Date", id: "ModifiedOn", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9928edec-4272-425a-93bb-48743fee4b04", name: "ModifiedOn", caption: "Modified on", levelAccess: 1 },
  AddressType: { type: "AddressType", id: "AddressType", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "AddressType", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "db905f37-5dcd-43e7-a4d6-d53683cb20db", name: "AddressType", caption: "Address type", levelAccess: 1 },
  FullAddress: { type: "string", id: "FullAddress", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, max: 250, uid: "cd784f1b-c816-3621-f111-bb9026662172", name: "FullAddress", caption: "Full address", levelAccess: 1 }
} as const;

export const CONTACTADDRESS_ENTITY_COLUMNS = [
  "CreatedBy.Id",
  "CreatedBy.Name",
  "Country.Id",
  "Country.Name",
  "ModifiedBy.Id",
  "ModifiedBy.Name",
  "Contact.Id",
  "Contact.Name",
  "AddressType.Id",
  "AddressType.Name",
  "City.Id",
  "City.Name",
  "Region.Id",
  "Region.Name"
];

export const CONTACTADDRESS_DATE_FIELDS = [];

export const [, , ContactAddress_SCHEMA] = createInjectionToken(() => ({
  fieldsConfig: CONTACTADDRESS_FIELD_CONFIG,
  entitiesColumns: CONTACTADDRESS_ENTITY_COLUMNS
}));

export const CONTACTFIREBASEUSER_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Email: { type: "string", id: "Email", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "61d57e88-b238-09e6-d579-bd707962a10d", name: "Email", caption: "Email", levelAccess: 1 },
  Contact: { type: "Contact", id: "Contact", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "06adc2a6-b707-bd18-f95b-715121478d5d", name: "Contact", caption: "Contact", levelAccess: 1 },
  Referral: { type: "Referral", id: "Referral", rows: 60, component: 0, dateFields: [], displayField: "Code", displayValue: ()=>"", entitiesColumns: ["Id", "Code"], entitySchemaName: "Referral", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "b9830070-477c-c69c-a3d9-5f9139cf9841", name: "Referral", caption: "Referral", levelAccess: 1 },
  FirebaseUId: { type: "string", id: "FirebaseUId", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "78837c2f-f5c9-be44-25d9-5721d2ccdf42", name: "FirebaseUId", caption: "Firebase UId", levelAccess: 1 },
  FirebaseAuthProvider: { type: "FirebaseAuthProvider", id: "FirebaseAuthProvider", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "FirebaseAuthProvider", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "38b945f9-5f47-3f50-b7a8-7bc4688e8a9b", name: "FirebaseAuthProvider", caption: "Firebase Auth Provider", levelAccess: 1 }
} as const;

export const CONTACTFIREBASEUSER_ENTITY_COLUMNS = [
  "Referral.Id",
  "Referral.Code",
  "Contact.Id",
  "Contact.Name",
  "FirebaseAuthProvider.Id",
  "FirebaseAuthProvider.Name"
];

export const CONTACTFIREBASEUSER_DATE_FIELDS = [];

export const [, , ContactFirebaseUser_SCHEMA] = createInjectionToken(() => ({
  fieldsConfig: CONTACTFIREBASEUSER_FIELD_CONFIG,
  entitiesColumns: CONTACTFIREBASEUSER_ENTITY_COLUMNS
}));

export const CONTACTSYNONYM_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "cedfaf4e-9c03-422c-8429-f3d79a48a11b", name: "Name", caption: "Name", levelAccess: 1 },
  Contact: { type: "Contact", id: "Contact", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "194644d2-d540-4e72-8fac-fd968dd77d18", name: "Contact", caption: "Contact", levelAccess: 1 }
} as const;

export const CONTACTSYNONYM_ENTITY_COLUMNS = [
  "Contact.Id",
  "Contact.Name"
];

export const CONTACTSYNONYM_DATE_FIELDS = [];

export const [, , ContactSynonym_SCHEMA] = createInjectionToken(() => ({
  fieldsConfig: CONTACTSYNONYM_FIELD_CONFIG,
  entitiesColumns: CONTACTSYNONYM_ENTITY_COLUMNS
}));

export const PET_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  COI: { type: "number", id: "COI", rows: 0, component: 4, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "fb255d1e-1b2b-43b4-813d-9cf1e8a5c5d9", name: "COI", caption: "COI", levelAccess: 1 },
  Sex: { type: "Sex", id: "Sex", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Sex", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "26bf8d2c-9389-408b-a778-628dd22b5ef3", name: "Sex", caption: "Sex", levelAccess: 1 },
  Url: { type: "string", id: "Url", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "3da744e9-37c2-7ae7-00fc-15de714c8012", name: "Url", caption: "Url", levelAccess: 1 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, max: 250, uid: "f818c12f-c590-437f-89aa-4d6b22a298f8", name: "Name", caption: "Name", levelAccess: 1 },
  Size: { type: "PetSize", id: "Size", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "PetSize", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "927f6f7a-b497-df0f-d421-19111a334320", name: "Size", caption: "Size", levelAccess: 1 },
  Breed: { type: "Breed", id: "Breed", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Breed", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "397d2e69-1708-4c68-a516-eee9e30a9acd", name: "Breed", caption: "Breed", levelAccess: 1 },
  Cover: { type: "Cover", id: "Cover", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Cover", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "605f2751-6c6c-9a1e-a117-67e2316b25b7", name: "Cover", caption: "Cover", levelAccess: 1 },
  Notes: { type: "string", id: "Notes", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, max: 250, uid: "6013f307-163d-4294-aa1b-a31240c7ac1b", name: "Notes", caption: "Notes", levelAccess: 1 },
  Owner: { type: "Contact", id: "Owner", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "242ef3a8-97da-49b5-bf82-69ac99f71e99", name: "Owner", caption: "Owner", levelAccess: 1 },
  Father: { type: "Pet", id: "Father", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Pet", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "54dea6dc-1afd-4f71-a9b2-4f8275338021", name: "Father", caption: "Father", levelAccess: 1 },
  Kennel: { type: "Account", id: "Kennel", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Account", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "dcb9b4fa-cf67-43ff-8f6b-d91678f0d93f", name: "Kennel", caption: "Kennel (breeder)", levelAccess: 1 },
  Litter: { type: "Litter", id: "Litter", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Litter", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "0bec8290-0e2e-e729-98a4-cfec39f7ba62", name: "Litter", caption: "Litter", levelAccess: 1 },
  Mother: { type: "Pet", id: "Mother", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Pet", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "266eff58-c557-4e76-a782-7a9af08071a5", name: "Mother", caption: "Mother", levelAccess: 1 },
  Rating: { type: "number", id: "Rating", rows: 0, component: 4, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "98c65f9b-a8c0-18ba-bd04-a088d4c72d91", name: "Rating", caption: "Rating", levelAccess: 1 },
  Titles: { type: "string", id: "Titles", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, max: 250, uid: "a66f643b-7351-4c0f-9d95-ec2a57bb96ad", name: "Titles", caption: "Titles", levelAccess: 1 },
  Weight: { type: "number", id: "Weight", rows: 0, component: 4, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "f5a365cb-a0ff-231e-374f-18612133f3be", name: "Weight", caption: "Weight", levelAccess: 1 },
  Breeder: { type: "Contact", id: "Breeder", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "0902a719-ee19-4ae6-ac3d-6833ed975259", name: "Breeder", caption: "Breeder", levelAccess: 1 },
  PetType: { type: "PetType", id: "PetType", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "PetType", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "34a71a35-ad56-4946-9b60-14374cd1f7e3", name: "PetType", caption: "Type", levelAccess: 1 },
  CallName: { type: "string", id: "CallName", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "7a073899-9d2a-4246-b0b1-08d83e6ebe6a", name: "CallName", caption: "Call name", levelAccess: 1 },
  CoatType: { type: "CoatType", id: "CoatType", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "CoatType", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "6e30cca8-9cd1-e9a0-9667-4fd606f1e438", name: "CoatType", caption: "Coat type", levelAccess: 1 },
  IsPublic: { type: "boolean", id: "IsPublic", rows: 0, component: 5, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "10071262-9ef1-4498-8ba0-d0a8f191483f", name: "IsPublic", caption: "Is public", levelAccess: 1 },
  AvatarUrl: { type: "string", id: "AvatarUrl", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "33444213-4520-2101-4509-a174a1e266ba", name: "AvatarUrl", caption: "Avatar url", levelAccess: 1 },
  CoatColor: { type: "CoatColor", id: "CoatColor", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "CoatColor", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "76f526c1-8110-bccf-51ee-4840ec8fe677", name: "CoatColor", caption: "Coat color", levelAccess: 1 },
  CreatedBy: { type: "Contact", id: "CreatedBy", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ebf6bb93-8aa6-4a01-900d-c6ea67affe21", name: "CreatedBy", caption: "Created by", levelAccess: 1 },
  CreatedOn: { type: "Date", id: "CreatedOn", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "e80190a5-03b2-4095-90f7-a193a960adee", name: "CreatedOn", caption: "Created on", levelAccess: 1 },
  PetStatus: { type: "PetStatus", id: "PetStatus", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "PetStatus", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "8495c8e5-4d71-3c3c-cb56-7b4bc6295b47", name: "PetStatus", caption: "Status", levelAccess: 1 },
  ModifiedBy: { type: "Contact", id: "ModifiedBy", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "3015559e-cbc6-406a-88af-07f7930be832", name: "ModifiedBy", caption: "Modified by", levelAccess: 1 },
  ModifiedOn: { type: "Date", id: "ModifiedOn", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9928edec-4272-425a-93bb-48743fee4b04", name: "ModifiedOn", caption: "Modified on", levelAccess: 1 },
  PublicData: { type: "PublicData", id: "PublicData", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "PublicData", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "f08a9a86-75f6-e0e5-b3f0-2ae63da8434b", name: "PublicData", caption: "Public data", levelAccess: 1 },
  TrimTitles: { type: "string", id: "TrimTitles", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, max: 250, uid: "82c875c7-da1e-a668-c337-c357a04e9626", name: "TrimTitles", caption: "Trim titles", levelAccess: 1 },
  BodyFeature: { type: "BodyFeature", id: "BodyFeature", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "BodyFeature", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "837d1b6d-9ee8-b737-f81d-2afe03b4aad7", name: "BodyFeature", caption: "Body feature", levelAccess: 1 },
  DateOfBirth: { type: "Date", id: "DateOfBirth", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "61359bd7-d168-419b-aee6-3a00b0cc4df8", name: "DateOfBirth", caption: "Date of birth", levelAccess: 1 },
  DateOfDeath: { type: "Date", id: "DateOfDeath", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "4e767c6d-047b-7074-e9bc-31d9c5c48aa2", name: "DateOfDeath", caption: "Date of death", levelAccess: 1 },
  OwnerKennel: { type: "Account", id: "OwnerKennel", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Account", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "a9dbc68d-0622-b880-24f3-0b245baffc99", name: "OwnerKennel", caption: "Kennel (owner)", levelAccess: 1 },
  BreedDivision: { type: "BreedDivision", id: "BreedDivision", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "BreedDivision", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "013dab79-6112-d61d-b3a9-f381532ffdf7", name: "BreedDivision", caption: "Breed division", levelAccess: 1 },
  CountryOfStay: { type: "Country", id: "CountryOfStay", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Country", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "0e8afb66-7a8b-9527-ca26-e3d87a6bf21a", name: "CountryOfStay", caption: "Country of stay", levelAccess: 1 },
  CountryOfBirth: { type: "Country", id: "CountryOfBirth", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Country", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "343a6b86-ad6a-445f-4cc6-2f65d4ab77c8", name: "CountryOfBirth", caption: "Country of birth", levelAccess: 1 },
  InbreedingPercent: { type: "number", id: "InbreedingPercent", rows: 0, component: 4, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ee5a5672-19ad-d105-ce5a-4349afdffdb3", name: "InbreedingPercent", caption: "Inbreeding percent", levelAccess: 1 },
  VerificationStatus: { type: "VerificationStatus", id: "VerificationStatus", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "VerificationStatus", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "fabf1746-0cf0-4746-9211-0dd05446f35b", name: "VerificationStatus", caption: "Verification status", levelAccess: 1 },
  RatingPlacementInBreed: { type: "number", id: "RatingPlacementInBreed", rows: 0, component: 4, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "e331ed19-2353-f344-ea77-0711a3e1592b", name: "RatingPlacementInBreed", caption: "Rating placement in breed", levelAccess: 1 }
} as const;

export const PET_ENTITY_COLUMNS = [
  "Name",
  "Id",
  "PetType.Id",
  "PetType.Name",
  "CreatedBy.Id",
  "CreatedBy.Name",
  "ModifiedBy.Id",
  "ModifiedBy.Name",
  "Owner.Id",
  "Owner.Name",
  "Litter.Id",
  "Litter.Name",
  "Breeder.Id",
  "Breeder.Name",
  "Size.Id",
  "Size.Name",
  "BreedDivision.Id",
  "BreedDivision.Name",
  "PetStatus.Id",
  "PetStatus.Name",
  "CoatColor.Id",
  "CoatColor.Name",
  "Breed.Id",
  "Breed.Name",
  "BodyFeature.Id",
  "BodyFeature.Name",
  "Father.Id",
  "Father.Name",
  "Mother.Id",
  "Mother.Name",
  "Kennel.Id",
  "Kennel.Name",
  "OwnerKennel.Id",
  "OwnerKennel.Name",
  "Cover.Id",
  "Cover.Name",
  "CountryOfBirth.Id",
  "CountryOfBirth.Name",
  "CountryOfStay.Id",
  "CountryOfStay.Name",
  "VerificationStatus.Id",
  "VerificationStatus.Name",
  "Sex.Id",
  "Sex.Name",
  "CoatType.Id",
  "CoatType.Name",
  "PublicData.Id",
  "PublicData.Name"
];

export const PET_DATE_FIELDS = [];

export const [, , Pet_SCHEMA] = createInjectionToken(() => ({
  uid: "54dea6dc-1afd-4f71-a9b2-4f8275338021",
  rows: 60,
  type: "Pet",
  caption: "Father",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "Pet",
  fieldsConfig: PET_FIELD_CONFIG,
  entitiesColumns: PET_ENTITY_COLUMNS
}));

export const TITLEINPET_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Pet: { type: "Pet", id: "Pet", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Pet", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "2920d5ac-eb95-c44c-c5f0-8ab826e793b9", name: "Pet", caption: "Pet", levelAccess: 1 },
  Date: { type: "Date", id: "Date", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "66b4e849-00c3-f5fa-ab2b-fa87d1611fb4", name: "Date", caption: "Date", levelAccess: 1 },
  Title: { type: "Title", id: "Title", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Title", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "6116a30b-eb97-cc38-af49-abfd3f7ed7b2", name: "Title", caption: "Title", levelAccess: 1 },
  Amount: { type: "number", id: "Amount", rows: 0, component: 4, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "e93152f2-64a2-ce9d-88a3-aff63cbb3642", name: "Amount", caption: "Amount", levelAccess: 1 },
  Country: { type: "Country", id: "Country", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Country", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "26858f77-6d7e-55ee-8d5b-260768e4d40c", name: "Country", caption: "Country", levelAccess: 1 },
  RawTitle: { type: "string", id: "RawTitle", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "5eda875f-f4c8-b9f3-7e7a-191badfcdb23", name: "RawTitle", caption: "Raw title", levelAccess: 1 },
  Description: { type: "string", id: "Description", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "a42ec077-ad83-f84c-08aa-2579489a12c1", name: "Description", caption: "Description", levelAccess: 1 },
  IsConfirmed: { type: "boolean", id: "IsConfirmed", rows: 0, component: 5, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "1d114fe0-c6b2-00d3-96b0-1b5d2551f589", name: "IsConfirmed", caption: "Confirmed", levelAccess: 1 }
} as const;

export const TITLEINPET_ENTITY_COLUMNS = [
  "Title",
  "Id",
  "Title.Id",
  "Title.Name",
  "Pet.Id",
  "Pet.Name",
  "Country.Id",
  "Country.Name"
];

export const TITLEINPET_DATE_FIELDS = [];

export const [, , TitleInPet_SCHEMA] = createInjectionToken(() => ({
  uid: "db5b7982-e863-47b1-9047-b994a384c47a",
  rows: 60,
  type: "TitleInPet",
  caption: "Pet titles",
  component: 0,
  validators: [],
  displayField: "Title",
  entitySchemaName: "TitleInPet",
  fieldsConfig: TITLEINPET_FIELD_CONFIG,
  entitiesColumns: TITLEINPET_ENTITY_COLUMNS
}));

export const PETHEALTHEXAMRESULT_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Pet: { type: "Pet", id: "Pet", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Pet", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "044610cd-c881-1f49-831d-6bf155d07f9c", name: "Pet", caption: "Pet", levelAccess: 1 },
  Date: { type: "Date", id: "Date", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "0bf4c3e4-aeff-d5f3-cd65-4f9928a7375b", name: "Date", caption: "Date", levelAccess: 1 },
  CreatedBy: { type: "Contact", id: "CreatedBy", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ebf6bb93-8aa6-4a01-900d-c6ea67affe21", name: "CreatedBy", caption: "Created by", levelAccess: 1 },
  CreatedOn: { type: "Date", id: "CreatedOn", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "e80190a5-03b2-4095-90f7-a193a960adee", name: "CreatedOn", caption: "Created on", levelAccess: 1 },
  ModifiedBy: { type: "Contact", id: "ModifiedBy", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "3015559e-cbc6-406a-88af-07f7930be832", name: "ModifiedBy", caption: "Modified by", levelAccess: 1 },
  ModifiedOn: { type: "Date", id: "ModifiedOn", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9928edec-4272-425a-93bb-48743fee4b04", name: "ModifiedOn", caption: "Modified on", levelAccess: 1 },
  HealthExamObject: { type: "HealthExamObject", id: "HealthExamObject", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "HealthExamObject", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "e7e2df2d-dab6-9019-84e1-dcc84911f2e0", name: "HealthExamObject", caption: "Object", levelAccess: 1 },
  HealthExamResult: { type: "HealthExamResult", id: "HealthExamResult", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "HealthExamResult", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "e6aeb729-0118-5970-dc1f-551d95500a3b", name: "HealthExamResult", caption: "Result", levelAccess: 1 }
} as const;

export const PETHEALTHEXAMRESULT_ENTITY_COLUMNS = [
  "CreatedBy.Id",
  "CreatedBy.Name",
  "HealthExamResult.Id",
  "HealthExamResult.Name",
  "Pet.Id",
  "Pet.Name",
  "HealthExamObject.Id",
  "HealthExamObject.Name",
  "ModifiedBy.Id",
  "ModifiedBy.Name"
];

export const PETHEALTHEXAMRESULT_DATE_FIELDS = [];

export const [, , PetHealthExamResult_SCHEMA] = createInjectionToken(() => ({
  fieldsConfig: PETHEALTHEXAMRESULT_FIELD_CONFIG,
  entitiesColumns: PETHEALTHEXAMRESULT_ENTITY_COLUMNS
}));

export const PETSERVICE_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Pet: { type: "Pet", id: "Pet", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Pet", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "58b8ba5e-3523-5c55-a026-ead57a6cdf47", name: "Pet", caption: "Pet", levelAccess: 1 },
  Date: { type: "Date", id: "Date", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "fc830cfb-5056-acff-7ac6-7574ed0ffc67", name: "Date", caption: "Date", levelAccess: 1 },
  Price: { type: "number", id: "Price", rows: 0, component: 4, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "1fe226d7-da24-407d-4261-a9b22084f0e4", name: "Price", caption: "Price", levelAccess: 1 },
  Currency: { type: "Currency", id: "Currency", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Currency", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "6184805f-84f3-8856-0563-042431f1a948", name: "Currency", caption: "Currency", levelAccess: 1 },
  CreatedBy: { type: "Contact", id: "CreatedBy", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ebf6bb93-8aa6-4a01-900d-c6ea67affe21", name: "CreatedBy", caption: "Created by", levelAccess: 1 },
  CreatedOn: { type: "Date", id: "CreatedOn", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "e80190a5-03b2-4095-90f7-a193a960adee", name: "CreatedOn", caption: "Created on", levelAccess: 1 },
  ModifiedBy: { type: "Contact", id: "ModifiedBy", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "3015559e-cbc6-406a-88af-07f7930be832", name: "ModifiedBy", caption: "Modified by", levelAccess: 1 },
  ModifiedOn: { type: "Date", id: "ModifiedOn", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9928edec-4272-425a-93bb-48743fee4b04", name: "ModifiedOn", caption: "Modified on", levelAccess: 1 },
  ServiceType: { type: "PetServiceType", id: "ServiceType", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "PetServiceType", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "dfe9a49b-7f9b-cf86-4ab4-2e4488b0f52a", name: "ServiceType", caption: "Service type", levelAccess: 1 },
  PetServiceStatus: { type: "PetServiceStatus", id: "PetServiceStatus", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "PetServiceStatus", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "97ba748c-5939-4754-9ff3-2f2afea18691", name: "PetServiceStatus", caption: "Service status", levelAccess: 1 }
} as const;

export const PETSERVICE_ENTITY_COLUMNS = [
  "CreatedBy.Id",
  "CreatedBy.Name",
  "ModifiedBy.Id",
  "ModifiedBy.Name",
  "Pet.Id",
  "Pet.Name",
  "PetServiceStatus.Id",
  "PetServiceStatus.Name",
  "ServiceType.Id",
  "ServiceType.Name",
  "Currency.Id",
  "Currency.Name"
];

export const PETSERVICE_DATE_FIELDS = [];

export const [, , PetService_SCHEMA] = createInjectionToken(() => ({
  fieldsConfig: PETSERVICE_FIELD_CONFIG,
  entitiesColumns: PETSERVICE_ENTITY_COLUMNS
}));

export const PETINPROJECT_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Pet: { type: "Pet", id: "Pet", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Pet", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "e7b420d2-8770-980d-e844-145d1755aeb2", name: "Pet", caption: "Pet", levelAccess: 2 },
  Code: { type: "string", id: "Code", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "83bf3030-4dea-ad22-c271-a0d2c1e9a120", name: "Code", caption: "Code", levelAccess: 2 },
  Date: { type: "Date", id: "Date", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "8b2f087e-2407-3885-b828-996ca226838c", name: "Date", caption: "Date", levelAccess: 2 },
  Class: { type: "PetClass", id: "Class", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "PetClass", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9408b109-a7cf-bcb0-b9ca-f74e3f7d3513", name: "Class", caption: "Class", levelAccess: 2 },
  Judge: { type: "Contact", id: "Judge", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "2708db15-dfa5-8265-cd98-5ffda57fc0e0", name: "Judge", caption: "Judge", levelAccess: 2 },
  Place: { type: "Place", id: "Place", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Place", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "d3106684-1f50-fb63-688e-1d389fe87dba", name: "Place", caption: "Place", levelAccess: 2 },
  Number: { type: "number", id: "Number", rows: 0, component: 4, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "d064bb57-a9f8-9554-262f-d6b66554db03", name: "Number", caption: "Number", levelAccess: 2 },
  Result: { type: "string", id: "Result", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "232ea20d-c9a9-f6e9-aa10-43b57fb6ffc2", name: "Result", caption: "Result", levelAccess: 2 },
  Handler: { type: "Contact", id: "Handler", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "5b3b1c09-08a4-91a3-b0ed-8d87be30964a", name: "Handler", caption: "Handler", levelAccess: 2 },
  Project: { type: "Project", id: "Project", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Project", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "8936e494-94c7-a94c-27b2-c9bdf01f0f81", name: "Project", caption: "Project", levelAccess: 2 },
  WebLink: { type: "string", id: "WebLink", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "2881b0e9-c4d2-5501-a4ac-da3b93f6e848", name: "WebLink", caption: "WebLink", levelAccess: 2 },
  CreatedBy: { type: "Contact", id: "CreatedBy", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ebf6bb93-8aa6-4a01-900d-c6ea67affe21", name: "CreatedBy", caption: "Created by", levelAccess: 1 },
  CreatedOn: { type: "Date", id: "CreatedOn", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "e80190a5-03b2-4095-90f7-a193a960adee", name: "CreatedOn", caption: "Created on", levelAccess: 1 },
  ModifiedBy: { type: "Contact", id: "ModifiedBy", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "3015559e-cbc6-406a-88af-07f7930be832", name: "ModifiedBy", caption: "Modified by", levelAccess: 1 },
  ModifiedOn: { type: "Date", id: "ModifiedOn", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9928edec-4272-425a-93bb-48743fee4b04", name: "ModifiedOn", caption: "Modified on", levelAccess: 1 },
  Qualification: { type: "PetQualification", id: "Qualification", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "PetQualification", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "7fcbb75c-da4c-e661-d388-d6033e26270c", name: "Qualification", caption: "Qualification", levelAccess: 2 },
  TempProjectName: { type: "string", id: "TempProjectName", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "3da2d29e-d230-3331-3793-3f2ee9c9ac6f", name: "TempProjectName", caption: "Temp Project name", levelAccess: 2 }
} as const;

export const PETINPROJECT_ENTITY_COLUMNS = [
  "Project.Id",
  "Project.Name",
  "Class.Id",
  "Class.Name",
  "CreatedBy.Id",
  "CreatedBy.Name",
  "Judge.Id",
  "Judge.Name",
  "Place.Id",
  "Place.Name",
  "ModifiedBy.Id",
  "ModifiedBy.Name",
  "Pet.Id",
  "Pet.Name",
  "Handler.Id",
  "Handler.Name",
  "Qualification.Id",
  "Qualification.Name"
];

export const PETINPROJECT_DATE_FIELDS = [];

export const [, , PetInProject_SCHEMA] = createInjectionToken(() => ({
  fieldsConfig: PETINPROJECT_FIELD_CONFIG,
  entitiesColumns: PETINPROJECT_ENTITY_COLUMNS
}));

export const PETIDENTIFIER_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Pet: { type: "Pet", id: "Pet", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Pet", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "1f72e7a0-a892-a919-68b9-ff7e3bfca6ae", name: "Pet", caption: "Pet", levelAccess: 2 },
  Date: { type: "Date", id: "Date", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "e8ee4a9e-7b66-5fd1-ffcb-af22b942166f", name: "Date", caption: "Date", levelAccess: 2 },
  Value: { type: "string", id: "Value", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "31e1a087-0e2d-ae11-beb0-d2f526d85428", name: "Value", caption: "Value", levelAccess: 2 },
  Number: { type: "string", id: "Number", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "25e49d48-14f9-1d6f-5fad-e13701f40753", name: "Number", caption: "Number", levelAccess: 2 },
  IsPublic: { type: "boolean", id: "IsPublic", rows: 0, component: 5, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "b5fb5e3d-9801-3609-3cb8-87333f0b7925", name: "IsPublic", caption: "IsPublic", levelAccess: 2 },
  Studbook: { type: "Studbook", id: "Studbook", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Studbook", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "869758cc-18e7-8e82-d8fc-8b55b7e1de7c", name: "Studbook", caption: "Studbook", levelAccess: 2 },
  CreatedBy: { type: "Contact", id: "CreatedBy", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ebf6bb93-8aa6-4a01-900d-c6ea67affe21", name: "CreatedBy", caption: "Created by", levelAccess: 1 },
  CreatedOn: { type: "Date", id: "CreatedOn", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "e80190a5-03b2-4095-90f7-a193a960adee", name: "CreatedOn", caption: "Created on", levelAccess: 1 },
  TrimValue: { type: "string", id: "TrimValue", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "3c94108d-e780-b019-862d-811ceca96f89", name: "TrimValue", caption: "Trim value", levelAccess: 2 },
  DataSource: { type: "DataSource", id: "DataSource", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "DataSource", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "d2c043ce-7c79-6dd8-a530-16e3878b49d7", name: "DataSource", caption: "Data source", levelAccess: 2 },
  ModifiedBy: { type: "Contact", id: "ModifiedBy", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "3015559e-cbc6-406a-88af-07f7930be832", name: "ModifiedBy", caption: "Modified by", levelAccess: 1 },
  ModifiedOn: { type: "Date", id: "ModifiedOn", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9928edec-4272-425a-93bb-48743fee4b04", name: "ModifiedOn", caption: "Modified on", levelAccess: 1 },
  IsProcessed: { type: "boolean", id: "IsProcessed", rows: 0, component: 5, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "c38129e4-15ea-0915-919a-56bc0d668493", name: "IsProcessed", caption: "Is processed", levelAccess: 2 },
  PetIdentifierType: { type: "PetIdentifierType", id: "PetIdentifierType", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "PetIdentifierType", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "0a968a38-64f2-21d9-ce7d-95d5d9a13eed", name: "PetIdentifierType", caption: "Pet identifier type", levelAccess: 2 }
} as const;

export const PETIDENTIFIER_ENTITY_COLUMNS = [
  "DataSource.Id",
  "DataSource.Name",
  "ModifiedBy.Id",
  "ModifiedBy.Name",
  "Pet.Id",
  "Pet.Name",
  "CreatedBy.Id",
  "CreatedBy.Name",
  "Studbook.Id",
  "Studbook.Name",
  "PetIdentifierType.Id",
  "PetIdentifierType.Name"
];

export const PETIDENTIFIER_DATE_FIELDS = [];

export const [, , PetIdentifier_SCHEMA] = createInjectionToken(() => ({
  fieldsConfig: PETIDENTIFIER_FIELD_CONFIG,
  entitiesColumns: PETIDENTIFIER_ENTITY_COLUMNS
}));

export const PETMEASUREMENT_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Day: { type: "number", id: "Day", rows: 0, component: 4, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "0c373874-d1c0-d9b2-a4ed-f78cb38f944f", name: "Day", caption: "Day", levelAccess: 1 },
  Pet: { type: "Pet", id: "Pet", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Pet", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "741f1bfa-c6a5-d227-59ca-b57ece5c3cf8", name: "Pet", caption: "Pet", levelAccess: 1 },
  Date: { type: "Date", id: "Date", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "7c24dd27-5a0f-6db6-b45b-f3a9c216b1ab", name: "Date", caption: "Date", levelAccess: 1 },
  Unit: { type: "Unit", id: "Unit", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Unit", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "b88750a9-e2e1-4ca7-8a24-7e55925f1445", name: "Unit", caption: "Unit", levelAccess: 1 },
  Value: { type: "number", id: "Value", rows: 0, component: 4, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "3e8582bf-1527-b0a2-bf97-57ff82cf316d", name: "Value", caption: "Value", levelAccess: 1 },
  MeasurementType: { type: "MeasurementType", id: "MeasurementType", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "MeasurementType", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "e2133684-401d-594f-4e77-679240907e24", name: "MeasurementType", caption: "Measurement type", levelAccess: 1 },
  ActiveSynchronization: { type: "boolean", id: "ActiveSynchronization", rows: 0, component: 5, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "aeb2adb2-3f8a-3282-0a23-614dbb1c0fdb", name: "ActiveSynchronization", caption: "Active synchronization", levelAccess: 1 }
} as const;

export const PETMEASUREMENT_ENTITY_COLUMNS = [
  "Pet.Id",
  "Pet.Name",
  "MeasurementType.Id",
  "MeasurementType.Name",
  "Unit.Id",
  "Unit.Name"
];

export const PETMEASUREMENT_DATE_FIELDS = [];

export const [, , PetMeasurement_SCHEMA] = createInjectionToken(() => ({
  fieldsConfig: PETMEASUREMENT_FIELD_CONFIG,
  entitiesColumns: PETMEASUREMENT_ENTITY_COLUMNS
}));

export const PETSERVICEINLITTER_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Date: { type: "Date", id: "Date", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "86d7fe49-1f73-84e9-2e03-419132556fa3", name: "Date", caption: "Date", levelAccess: 1 },
  Price: { type: "number", id: "Price", rows: 0, component: 4, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "f82456a8-9aae-a2e0-8650-a1f1f5ef5085", name: "Price", caption: "Price", levelAccess: 1 },
  Litter: { type: "Litter", id: "Litter", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Litter", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "c863d0c2-0e02-5e4c-9475-eb04a1c20be3", name: "Litter", caption: "Litter", levelAccess: 1 },
  Currency: { type: "Currency", id: "Currency", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Currency", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "a9d112f6-2477-a85a-e645-75ccd355c956", name: "Currency", caption: "Currency", levelAccess: 1 },
  CreatedBy: { type: "Contact", id: "CreatedBy", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ebf6bb93-8aa6-4a01-900d-c6ea67affe21", name: "CreatedBy", caption: "Created by", levelAccess: 1 },
  CreatedOn: { type: "Date", id: "CreatedOn", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "e80190a5-03b2-4095-90f7-a193a960adee", name: "CreatedOn", caption: "Created on", levelAccess: 1 },
  ModifiedBy: { type: "Contact", id: "ModifiedBy", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "3015559e-cbc6-406a-88af-07f7930be832", name: "ModifiedBy", caption: "Modified by", levelAccess: 1 },
  ModifiedOn: { type: "Date", id: "ModifiedOn", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9928edec-4272-425a-93bb-48743fee4b04", name: "ModifiedOn", caption: "Modified on", levelAccess: 1 },
  ServiceType: { type: "PetServiceType", id: "ServiceType", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "PetServiceType", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9b00d1c2-65b4-708b-f281-dfbb1717f537", name: "ServiceType", caption: "Service type", levelAccess: 1 },
  PetServiceStatus: { type: "PetServiceStatus", id: "PetServiceStatus", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "PetServiceStatus", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "d7376760-c230-7fd1-cbad-6049ac7b2ed9", name: "PetServiceStatus", caption: "Service status", levelAccess: 1 }
} as const;

export const PETSERVICEINLITTER_ENTITY_COLUMNS = [
  "CreatedBy.Id",
  "CreatedBy.Name",
  "ModifiedBy.Id",
  "ModifiedBy.Name",
  "ServiceType.Id",
  "ServiceType.Name",
  "Litter.Id",
  "Litter.Name",
  "PetServiceStatus.Id",
  "PetServiceStatus.Name",
  "Currency.Id",
  "Currency.Name"
];

export const PETSERVICEINLITTER_DATE_FIELDS = [];

export const [, , PetServiceInLitter_SCHEMA] = createInjectionToken(() => ({
  fieldsConfig: PETSERVICEINLITTER_FIELD_CONFIG,
  entitiesColumns: PETSERVICEINLITTER_ENTITY_COLUMNS
}));

export const LITTER_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Url: { type: "string", id: "Url", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "5fff1fce-5128-cf1d-5ace-72ecc902f6f1", name: "Url", caption: "Url", levelAccess: 1 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "36ab3d9b-6f67-462e-9ffe-6dd596f0ae94", name: "Name", caption: "Name", levelAccess: 1 },
  Cover: { type: "Cover", id: "Cover", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Cover", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "0584a095-5f79-e2e3-c368-f58d4955ddfa", name: "Cover", caption: "Cover", levelAccess: 1 },
  Notes: { type: "string", id: "Notes", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, max: 250, uid: "a38da4ee-53e4-49a3-a483-1c1bc8e42431", name: "Notes", caption: "Notes", levelAccess: 1 },
  Father: { type: "Pet", id: "Father", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Pet", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "b087b8fc-9d7e-41b2-8c1d-58f99638c602", name: "Father", caption: "Father", levelAccess: 1 },
  Kennel: { type: "Account", id: "Kennel", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Account", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "f1460397-cb87-403a-a2da-ced5f41a4d81", name: "Kennel", caption: "Kennel", levelAccess: 1 },
  Letter: { type: "Letter", id: "Letter", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Letter", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "515b3199-6b62-4155-a525-54b1c9775add", name: "Letter", caption: "Letter", levelAccess: 1 },
  Mother: { type: "Pet", id: "Mother", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Pet", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "f2772eb2-cc57-4d12-8e2d-9ac031db59e3", name: "Mother", caption: "Mother", levelAccess: 1 },
  Status: { type: "LitterStatus", id: "Status", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "LitterStatus", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9167f0b6-0e77-49d6-a71d-b0777a1c8188", name: "Status", caption: "Status", levelAccess: 1 },
  Breeder: { type: "Contact", id: "Breeder", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "994d002b-2a7c-483f-8921-fec672448a9b", name: "Breeder", caption: "Breeder", levelAccess: 1 },
  EndDate: { type: "Date", id: "EndDate", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "0c473259-efbb-459d-8242-89cca909cf56", name: "EndDate", caption: "End date", levelAccess: 1 },
  PetType: { type: "PetType", id: "PetType", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "PetType", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "8d4a8891-f079-4f27-bb70-b65473e3959a", name: "PetType", caption: "Pet type", levelAccess: 1 },
  IsPublic: { type: "boolean", id: "IsPublic", rows: 0, component: 5, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "7d885b3c-e740-48c0-8bc5-f5451690d3f0", name: "IsPublic", caption: "Is public", levelAccess: 1 },
  CreatedBy: { type: "Contact", id: "CreatedBy", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ebf6bb93-8aa6-4a01-900d-c6ea67affe21", name: "CreatedBy", caption: "Created by", levelAccess: 1 },
  CreatedOn: { type: "Date", id: "CreatedOn", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "e80190a5-03b2-4095-90f7-a193a960adee", name: "CreatedOn", caption: "Created on", levelAccess: 1 },
  StartDate: { type: "Date", id: "StartDate", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9a9695d2-b4dc-4410-a5d4-3c054fcabdc3", name: "StartDate", caption: "Start date", levelAccess: 1 },
  MaleAmount: { type: "number", id: "MaleAmount", rows: 0, component: 4, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "291e2cb5-351b-417c-83c5-e20591dd83e6", name: "MaleAmount", caption: "Male amount", levelAccess: 1 },
  ModifiedBy: { type: "Contact", id: "ModifiedBy", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "3015559e-cbc6-406a-88af-07f7930be832", name: "ModifiedBy", caption: "Modified by", levelAccess: 1 },
  ModifiedOn: { type: "Date", id: "ModifiedOn", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9928edec-4272-425a-93bb-48743fee4b04", name: "ModifiedOn", caption: "Modified on", levelAccess: 1 },
  DateOfBirth: { type: "Date", id: "DateOfBirth", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "d6a945c6-c990-40d2-8e36-5b956e0ee853", name: "DateOfBirth", caption: "Date of birth", levelAccess: 1 },
  FemaleAmount: { type: "number", id: "FemaleAmount", rows: 0, component: 4, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "13a66130-cdb0-4e78-97d8-702dfb922e40", name: "FemaleAmount", caption: "Female amount", levelAccess: 1 },
  MatingPeriod: { type: "Period", id: "MatingPeriod", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Period", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "e6d114fd-730a-4130-a9c9-a5c93db658b1", name: "MatingPeriod", caption: "Mating period", levelAccess: 1 }
} as const;

export const LITTER_ENTITY_COLUMNS = [
  "Name",
  "Id",
  "ModifiedBy.Id",
  "ModifiedBy.Name",
  "CreatedBy.Id",
  "CreatedBy.Name",
  "Father.Id",
  "Father.Name",
  "Mother.Id",
  "Mother.Name",
  "MatingPeriod.Id",
  "MatingPeriod.Name",
  "Status.Id",
  "Status.Name",
  "Breeder.Id",
  "Breeder.Name",
  "Kennel.Id",
  "Kennel.Name",
  "Cover.Id",
  "Cover.Name",
  "PetType.Id",
  "PetType.Name",
  "Letter.Id",
  "Letter.Name"
];

export const LITTER_DATE_FIELDS = [];

export const [, , Litter_SCHEMA] = createInjectionToken(() => ({
  uid: "0bec8290-0e2e-e729-98a4-cfec39f7ba62",
  rows: 60,
  type: "Litter",
  caption: "Litter",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "Litter",
  fieldsConfig: LITTER_FIELD_CONFIG,
  entitiesColumns: LITTER_ENTITY_COLUMNS
}));

export const BREED_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Url: { type: "string", id: "Url", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "a6d7fbfe-360e-ef29-bbd4-c4cb02bb0ab5", name: "Url", caption: "Url", levelAccess: 1 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "44d2cacc-384c-4091-8333-2a300895f584", name: "Name", caption: "Name", levelAccess: 1 },
  Cover: { type: "Cover", id: "Cover", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Cover", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "6a71afd0-9517-462d-d2c7-d910866b85de", name: "Cover", caption: "Cover", levelAccess: 1 },
  Rating: { type: "number", id: "Rating", rows: 0, component: 4, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "f8a8cf97-c79b-2ae2-e7b6-5ed251316ab5", name: "Rating", caption: "Rating", levelAccess: 1 },
  Account: { type: "Account", id: "Account", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Account", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "2430a27d-a483-6108-8aab-037fd2cd8875", name: "Account", caption: "Account", levelAccess: 1 },
  PetType: { type: "PetType", id: "PetType", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "PetType", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "f4db7fbf-26dc-2d25-e855-98f135e4f68a", name: "PetType", caption: "Pet type", levelAccess: 1 },
  Category: { type: "BreedCategory", id: "Category", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "BreedCategory", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ff0a44d4-dd91-bbe5-7a3b-14553943b4f8", name: "Category", caption: "Category", levelAccess: 1 },
  Language: { type: "SysLanguage", id: "Language", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "SysLanguage", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "259c1d6d-a3f9-f767-c516-1fdbde2a46ce", name: "Language", caption: "Authentic language", levelAccess: 1 },
  AdminName: { type: "string", id: "AdminName", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "2d636a69-8d1f-43e0-8a57-ec44f5fd6bd2", name: "AdminName", caption: "Administrative name", levelAccess: 1 },
  AvatarUrl: { type: "string", id: "AvatarUrl", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "287b7f9c-7c97-30a2-3859-f9ad32008ef2", name: "AvatarUrl", caption: "Avatar url", levelAccess: 1 },
  CreatedBy: { type: "Contact", id: "CreatedBy", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ebf6bb93-8aa6-4a01-900d-c6ea67affe21", name: "CreatedBy", caption: "Created by", levelAccess: 1 },
  CreatedOn: { type: "Date", id: "CreatedOn", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "e80190a5-03b2-4095-90f7-a193a960adee", name: "CreatedOn", caption: "Created on", levelAccess: 1 },
  ModifiedBy: { type: "Contact", id: "ModifiedBy", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "3015559e-cbc6-406a-88af-07f7930be832", name: "ModifiedBy", caption: "Modified by", levelAccess: 1 },
  ModifiedOn: { type: "Date", id: "ModifiedOn", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9928edec-4272-425a-93bb-48743fee4b04", name: "ModifiedOn", caption: "Modified on", levelAccess: 1 },
  PublicData: { type: "PublicData", id: "PublicData", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "PublicData", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ff135756-0fae-eb16-e7a5-57b180944885", name: "PublicData", caption: "Public data", levelAccess: 1 },
  KennelCount: { type: "number", id: "KennelCount", rows: 0, component: 4, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "e84cf749-f7b2-5e48-3f81-7f69ce941b04", name: "KennelCount", caption: "Kennel count", levelAccess: 1 },
  PatronCount: { type: "number", id: "PatronCount", rows: 0, component: 4, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "3a18feba-9a48-4d89-993e-a53ec2710dcd", name: "PatronCount", caption: "Patron count", levelAccess: 1 },
  DifferBySize: { type: "boolean", id: "DifferBySize", rows: 0, component: 5, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "6a4e9747-10dd-5e0c-29a5-bdca62dbcbb8", name: "DifferBySize", caption: "Differ by size", levelAccess: 1 },
  AuthenticName: { type: "string", id: "AuthenticName", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "80a8fafd-b4b2-8981-7d88-492490cf30a6", name: "AuthenticName", caption: "Authentic name", levelAccess: 1 },
  PaymentRating: { type: "number", id: "PaymentRating", rows: 0, component: 4, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "1b9214cd-bfc3-4c7a-9527-c485b9c387b6", name: "PaymentRating", caption: "Payment rating", levelAccess: 1 },
  HasRelatedBreed: { type: "boolean", id: "HasRelatedBreed", rows: 0, component: 5, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "5c2eb948-4959-448d-ab74-da38221b6f53", name: "HasRelatedBreed", caption: "Has related breed", levelAccess: 1 },
  PetProfileCount: { type: "number", id: "PetProfileCount", rows: 0, component: 4, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "7e967e3c-3426-01e6-d199-b78bced4deca", name: "PetProfileCount", caption: "Pets profile count", levelAccess: 1 },
  DifferByCoatType: { type: "boolean", id: "DifferByCoatType", rows: 0, component: 5, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "1f643ddd-52bc-7e6c-f85d-6bcf610ca144", name: "DifferByCoatType", caption: "Differ by coat type", levelAccess: 1 },
  DifferByCoatColor: { type: "boolean", id: "DifferByCoatColor", rows: 0, component: 5, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "2f4b0744-5d19-e69e-6c15-e662ed46e765", name: "DifferByCoatColor", caption: "Differ by coat color", levelAccess: 1 },
  AchievementProgress: { type: "number", id: "AchievementProgress", rows: 0, component: 4, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "f0df8542-51e7-4ced-817e-03f5523d1901", name: "AchievementProgress", caption: "Achievement progress", levelAccess: 1 },
  DifferByBodyFeature: { type: "boolean", id: "DifferByBodyFeature", rows: 0, component: 5, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "1f073a15-6cdd-4d15-78ce-26a3686b414a", name: "DifferByBodyFeature", caption: "Differ by body feature", levelAccess: 1 }
} as const;

export const BREED_ENTITY_COLUMNS = [
  "Name",
  "Id",
  "Category.Id",
  "Category.Name",
  "ModifiedBy.Id",
  "ModifiedBy.Name",
  "CreatedBy.Id",
  "CreatedBy.Name",
  "PublicData.Id",
  "PublicData.Name",
  "Account.Id",
  "Account.Name",
  "Cover.Id",
  "Cover.Name",
  "Language.Id",
  "Language.Name",
  "PetType.Id",
  "PetType.Name"
];

export const BREED_DATE_FIELDS = [];

export const [, , Breed_SCHEMA] = createInjectionToken(() => ({
  uid: "397d2e69-1708-4c68-a516-eee9e30a9acd",
  rows: 60,
  type: "Breed",
  caption: "Breed",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "Breed",
  fieldsConfig: BREED_FIELD_CONFIG,
  entitiesColumns: BREED_ENTITY_COLUMNS
}));

export const PROJECT_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Url: { type: "string", id: "Url", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "7fa1d891-6c31-5e9a-5733-51b163811969", name: "Url", caption: "Url", levelAccess: 1 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "aaec4bf5-a07d-4f79-b45d-8c7eeead3fad", name: "Name", caption: "Name", levelAccess: 1 },
  Type: { type: "ProjectType", id: "Type", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "ProjectType", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "e0d39946-16ca-4649-b6fb-1be29312f709", name: "Type", caption: "Type", levelAccess: 1 },
  Breed: { type: "Breed", id: "Breed", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Breed", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "718e1c75-2def-4400-95b1-4f310417178d", name: "Breed", caption: "Breed", levelAccess: 1 },
  Cover: { type: "Cover", id: "Cover", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Cover", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "8d4df924-9d22-6999-b148-e16cda9b2726", name: "Cover", caption: "Cover", levelAccess: 1 },
  Event: { type: "Event", id: "Event", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Event", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "b023272e-81d8-5785-24c7-c45f4678c32f", name: "Event", caption: "Event", levelAccess: 1 },
  Notes: { type: "string", id: "Notes", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, max: 250, uid: "abc96728-faf6-451d-91f6-35bc53ea9745", name: "Notes", caption: "Notes", levelAccess: 1 },
  Owner: { type: "Contact", id: "Owner", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "532d4f22-8b39-4860-8e62-60b678c9193a", name: "Owner", caption: "Owner", levelAccess: 1 },
  Status: { type: "ProjectStatus", id: "Status", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "ProjectStatus", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "e1829b39-9b37-4a34-9e33-18fc056fdcbd", name: "Status", caption: "Status", levelAccess: 1 },
  Account: { type: "Account", id: "Account", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Account", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "62a1bf12-279e-48d8-8a28-041be01c5003", name: "Account", caption: "Account", levelAccess: 1 },
  EndDate: { type: "Date", id: "EndDate", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "470aee83-6564-4676-b0c7-44e8374664d5", name: "EndDate", caption: "End", levelAccess: 1 },
  PetType: { type: "PetType", id: "PetType", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "PetType", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "95f602d5-fa6b-2b45-67fc-2e8d5e1b3fc2", name: "PetType", caption: "Pet type", levelAccess: 1 },
  Category: { type: "ProjectCategory", id: "Category", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "ProjectCategory", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "6b92ae8a-365a-4320-b9fe-8c2ea2db1014", name: "Category", caption: "Category", levelAccess: 1 },
  Deadline: { type: "Date", id: "Deadline", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "f78cd4b2-fd18-4053-894d-b255fd197b62", name: "Deadline", caption: "Deadline", levelAccess: 1 },
  Duration: { type: "number", id: "Duration", rows: 0, component: 4, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "e8cb5416-f527-45fa-ab0d-625b915c088c", name: "Duration", caption: "Duration", levelAccess: 1 },
  Position: { type: "number", id: "Position", rows: 0, component: 4, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "07b548e1-64fe-41bd-ae88-0f4927be9c65", name: "Position", caption: "Position", levelAccess: 1 },
  CreatedBy: { type: "Contact", id: "CreatedBy", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ebf6bb93-8aa6-4a01-900d-c6ea67affe21", name: "CreatedBy", caption: "Created by", levelAccess: 1 },
  CreatedOn: { type: "Date", id: "CreatedOn", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "e80190a5-03b2-4095-90f7-a193a960adee", name: "CreatedOn", caption: "Created on", levelAccess: 1 },
  StartDate: { type: "Date", id: "StartDate", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "8f11337c-f8fe-4e3c-9576-b26554359fd7", name: "StartDate", caption: "Start", levelAccess: 1 },
  ModifiedBy: { type: "Contact", id: "ModifiedBy", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "3015559e-cbc6-406a-88af-07f7930be832", name: "ModifiedBy", caption: "Modified by", levelAccess: 1 },
  ModifiedOn: { type: "Date", id: "ModifiedOn", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9928edec-4272-425a-93bb-48743fee4b04", name: "ModifiedOn", caption: "Modified on", levelAccess: 1 },
  ParentProject: { type: "Project", id: "ParentProject", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Project", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "1e08e1e5-e00b-4abb-8022-43a6b913d48f", name: "ParentProject", caption: "Parent item", levelAccess: 1 },
  ActualCompletion: { type: "number", id: "ActualCompletion", rows: 0, component: 4, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "66e7067f-6bcd-431f-bc33-93a89d748ad6", name: "ActualCompletion", caption: "Completion %", levelAccess: 1 }
} as const;

export const PROJECT_ENTITY_COLUMNS = [
  "Name",
  "Id",
  "CreatedBy.Id",
  "CreatedBy.Name",
  "Event.Id",
  "Event.Name",
  "ModifiedBy.Id",
  "ModifiedBy.Name",
  "Breed.Id",
  "Breed.Name",
  "Owner.Id",
  "Owner.Name",
  "ParentProject.Id",
  "ParentProject.Name",
  "Account.Id",
  "Account.Name",
  "PetType.Id",
  "PetType.Name",
  "Category.Id",
  "Category.Name",
  "Cover.Id",
  "Cover.Name",
  "Type.Id",
  "Type.Name",
  "Status.Id",
  "Status.Name"
];

export const PROJECT_DATE_FIELDS = [];

export const [, , Project_SCHEMA] = createInjectionToken(() => ({
  uid: "8936e494-94c7-a94c-27b2-c9bdf01f0f81",
  rows: 60,
  type: "Project",
  caption: "Project",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "Project",
  fieldsConfig: PROJECT_FIELD_CONFIG,
  entitiesColumns: PROJECT_ENTITY_COLUMNS
}));

export const POST_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Url: { type: "string", id: "Url", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "a1443c0e-09e0-3795-6fb1-f377c7fe9c2e", name: "Url", caption: "Url", levelAccess: 1 },
  Date: { type: "Date", id: "Date", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "053cadaf-caaf-66c7-b6cf-27a57918fea8", name: "Date", caption: "Date", levelAccess: 1 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "bdc138a7-e5db-5d13-0a97-e1a7b26e019f", name: "Name", caption: "Name", levelAccess: 1 },
  Text: { type: "string", id: "Text", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, max: 250, uid: "bc4c741c-3398-7ad5-72d7-8e00310d37b3", name: "Text", caption: "Text", levelAccess: 1 },
  Type: { type: "PostType", id: "Type", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "PostType", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "0117c33e-96d8-4be4-e86e-2cd8221f5b37", name: "Type", caption: "Type", levelAccess: 1 },
  Cover: { type: "Cover", id: "Cover", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Cover", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "f2db7a09-ded5-cf40-8a74-bfbd51024a46", name: "Cover", caption: "Cover", levelAccess: 1 },
  Event: { type: "Event", id: "Event", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Event", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "209d6fe6-875a-3545-1d03-a427f03d48f8", name: "Event", caption: "Event", levelAccess: 1 },
  State: { type: "PostState", id: "State", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "PostState", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "8a833895-feef-7131-2ea9-87ee28abd064", name: "State", caption: "State", levelAccess: 1 },
  Author: { type: "Contact", id: "Author", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "4f05dc4c-e3d4-1031-60ab-d1c96da37f9f", name: "Author", caption: "Author", levelAccess: 1 },
  Photos: { type: "string", id: "Photos", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, max: 250, uid: "7624586f-9296-88f0-5b88-d5ed42945c30", name: "Photos", caption: "Photos", levelAccess: 1 },
  IsMoment: { type: "boolean", id: "IsMoment", rows: 0, component: 5, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "f0df9701-25b4-496c-dd6f-8c701554d19e", name: "IsMoment", caption: "Is moment", levelAccess: 1 },
  Latitude: { type: "number", id: "Latitude", rows: 0, component: 4, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "a7c2c35a-eca8-5151-d4ca-0ec4491c1273", name: "Latitude", caption: "Latitude", levelAccess: 1 },
  CreatedBy: { type: "Contact", id: "CreatedBy", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ebf6bb93-8aa6-4a01-900d-c6ea67affe21", name: "CreatedBy", caption: "Created by", levelAccess: 1 },
  CreatedOn: { type: "Date", id: "CreatedOn", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "e80190a5-03b2-4095-90f7-a193a960adee", name: "CreatedOn", caption: "Created on", levelAccess: 1 },
  Longitude: { type: "number", id: "Longitude", rows: 0, component: 4, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "7f0e370c-1996-17c5-9268-414cf542882e", name: "Longitude", caption: "Longitude", levelAccess: 1 },
  MasterPost: { type: "Post", id: "MasterPost", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Post", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "78961175-ba10-1600-41d2-b771e277d8c2", name: "MasterPost", caption: "Master post", levelAccess: 1 },
  ModifiedBy: { type: "Contact", id: "ModifiedBy", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "3015559e-cbc6-406a-88af-07f7930be832", name: "ModifiedBy", caption: "Modified by", levelAccess: 1 },
  ModifiedOn: { type: "Date", id: "ModifiedOn", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9928edec-4272-425a-93bb-48743fee4b04", name: "ModifiedOn", caption: "Modified on", levelAccess: 1 },
  Participants: { type: "string", id: "Participants", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, max: 250, uid: "bbe5fad0-d2a3-692e-5d62-fac376ab3cf1", name: "Participants", caption: "Participants", levelAccess: 1 },
  PublicationDate: { type: "Date", id: "PublicationDate", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "df5a57be-e580-fdcd-c858-db0d62b16771", name: "PublicationDate", caption: "Publication date", levelAccess: 1 }
} as const;

export const POST_ENTITY_COLUMNS = [
  "Name",
  "Id",
  "CreatedBy.Id",
  "CreatedBy.Name",
  "Type.Id",
  "Type.Name",
  "State.Id",
  "State.Name",
  "ModifiedBy.Id",
  "ModifiedBy.Name",
  "Author.Id",
  "Author.Name",
  "MasterPost.Id",
  "MasterPost.Name",
  "Event.Id",
  "Event.Name",
  "Cover.Id",
  "Cover.Name"
];

export const POST_DATE_FIELDS = [];

export const [, , Post_SCHEMA] = createInjectionToken(() => ({
  uid: "78961175-ba10-1600-41d2-b771e277d8c2",
  rows: 60,
  type: "Post",
  caption: "Master post",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "Post",
  fieldsConfig: POST_FIELD_CONFIG,
  entitiesColumns: POST_ENTITY_COLUMNS
}));

export const ACCOUNTREVIEW_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  test: { type: "string", id: "test", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ff073700-1b47-0208-01f3-aa49619bc66b", name: "test", caption: "test", levelAccess: 1 },
  Rating: { type: "number", id: "Rating", rows: 0, component: 4, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ebb4fdb7-8582-b417-36be-e500e83c0174", name: "Rating", caption: "Rating", levelAccess: 1 },
  Review: { type: "string", id: "Review", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "cffe8fdf-22c5-a31e-486d-7c142d2642f1", name: "Review", caption: "Review", levelAccess: 1 },
  Account: { type: "Account", id: "Account", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Account", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "969ed2c0-34ac-ee31-7656-1346c1df63d6", name: "Account", caption: "Account", levelAccess: 1 },
  Contact: { type: "Contact", id: "Contact", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "d7b447ec-8a24-8d4b-5d64-549c687cb7cc", name: "Contact", caption: "Contact", levelAccess: 1 },
  CreatedBy: { type: "Contact", id: "CreatedBy", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ebf6bb93-8aa6-4a01-900d-c6ea67affe21", name: "CreatedBy", caption: "Created by", levelAccess: 1 },
  CreatedOn: { type: "Date", id: "CreatedOn", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "e80190a5-03b2-4095-90f7-a193a960adee", name: "CreatedOn", caption: "Created on", levelAccess: 1 },
  ModifiedBy: { type: "Contact", id: "ModifiedBy", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "3015559e-cbc6-406a-88af-07f7930be832", name: "ModifiedBy", caption: "Modified by", levelAccess: 1 },
  ModifiedOn: { type: "Date", id: "ModifiedOn", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9928edec-4272-425a-93bb-48743fee4b04", name: "ModifiedOn", caption: "Modified on", levelAccess: 1 },
  OrderNumber: { type: "number", id: "OrderNumber", rows: 0, component: 4, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "e940cd0b-467a-193d-c8ae-b9e55ac65224", name: "OrderNumber", caption: "Order number", levelAccess: 1 }
} as const;

export const ACCOUNTREVIEW_ENTITY_COLUMNS = [
  "Account.Id",
  "Account.Name",
  "CreatedBy.Id",
  "CreatedBy.Name",
  "Contact.Id",
  "Contact.Name",
  "ModifiedBy.Id",
  "ModifiedBy.Name"
];

export const ACCOUNTREVIEW_DATE_FIELDS = [];

export const [, , AccountReview_SCHEMA] = createInjectionToken(() => ({
  fieldsConfig: ACCOUNTREVIEW_FIELD_CONFIG,
  entitiesColumns: ACCOUNTREVIEW_ENTITY_COLUMNS
}));

export const BREEDPRIDECOLLECTION_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Url: { type: "string", id: "Url", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "8f8e7eb2-d506-b66b-3273-84d0d0abb550", name: "Url", caption: "Url", levelAccess: 1 },
  Auto: { type: "boolean", id: "Auto", rows: 0, component: 5, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "695cce71-b444-d89e-0fa0-2636828d5acd", name: "Auto", caption: "Auto", levelAccess: 1 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "f4d451d4-def9-3b27-4bd4-97d8fa2b50f1", name: "Name", caption: "Name", levelAccess: 1 },
  Type: { type: "BreedprideCollectionType", id: "Type", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "BreedprideCollectionType", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "f9c6cd1d-abf8-a859-eeac-b169db3547a3", name: "Type", caption: "Type", levelAccess: 1 },
  Cover: { type: "Cover", id: "Cover", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Cover", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "7ca5d633-1363-6d5b-7ae1-1d94a0cad22f", name: "Cover", caption: "Cover", levelAccess: 1 },
  Notes: { type: "string", id: "Notes", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, max: 250, uid: "bed43a41-985a-4e91-8a2a-85771b58d364", name: "Notes", caption: "Notes", levelAccess: 1 },
  Owner: { type: "Contact", id: "Owner", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "bb1b9d1f-937f-2929-d062-d6d1d48e7855", name: "Owner", caption: "Owner", levelAccess: 1 },
  Private: { type: "boolean", id: "Private", rows: 0, component: 5, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "651296b5-06c0-fa18-81a9-9eb3a97f318b", name: "Private", caption: "Private", levelAccess: 1 },
  AvatarUrl: { type: "string", id: "AvatarUrl", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "a17b0911-cc46-246d-1060-8bd08c3a37c4", name: "AvatarUrl", caption: "Avatar url", levelAccess: 1 },
  CreatedBy: { type: "Contact", id: "CreatedBy", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ebf6bb93-8aa6-4a01-900d-c6ea67affe21", name: "CreatedBy", caption: "Created by", levelAccess: 1 },
  CreatedOn: { type: "Date", id: "CreatedOn", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "e80190a5-03b2-4095-90f7-a193a960adee", name: "CreatedOn", caption: "Created on", levelAccess: 1 },
  EntityName: { type: "string", id: "EntityName", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "633f8f91-cc18-d3dd-afca-3a190b85d13f", name: "EntityName", caption: "EntityName", levelAccess: 1 },
  ModifiedBy: { type: "Contact", id: "ModifiedBy", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "3015559e-cbc6-406a-88af-07f7930be832", name: "ModifiedBy", caption: "Modified by", levelAccess: 1 },
  ModifiedOn: { type: "Date", id: "ModifiedOn", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9928edec-4272-425a-93bb-48743fee4b04", name: "ModifiedOn", caption: "Modified on", levelAccess: 1 },
  UpdateDate: { type: "Date", id: "UpdateDate", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "f9fb8d16-550b-4e09-aa43-46c53454df6a", name: "UpdateDate", caption: "Update date", levelAccess: 1 }
} as const;

export const BREEDPRIDECOLLECTION_ENTITY_COLUMNS = [
  "Name",
  "Id",
  "Type.Id",
  "Type.Name",
  "CreatedBy.Id",
  "CreatedBy.Name",
  "Owner.Id",
  "Owner.Name",
  "ModifiedBy.Id",
  "ModifiedBy.Name",
  "Cover.Id",
  "Cover.Name"
];

export const BREEDPRIDECOLLECTION_DATE_FIELDS = [];

export const [, , BreedprideCollection_SCHEMA] = createInjectionToken(() => ({
  uid: "9b5611fa-674d-22ff-d866-d0b1403c97f4",
  rows: 60,
  type: "BreedprideCollection",
  caption: "Collection",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "BreedprideCollection",
  fieldsConfig: BREEDPRIDECOLLECTION_FIELD_CONFIG,
  entitiesColumns: BREEDPRIDECOLLECTION_ENTITY_COLUMNS
}));

export const BREEDPRIDECOLLECTIONENTITY_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Pet: { type: "Pet", id: "Pet", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Pet", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "32cab78d-89cc-6dd2-bb6c-4c813fa782af", name: "Pet", caption: "Pet", levelAccess: 1 },
  Event: { type: "Event", id: "Event", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Event", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9e30f4f5-18bb-fc59-b9bc-8330018c1d46", name: "Event", caption: "Event", levelAccess: 1 },
  Account: { type: "Account", id: "Account", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Account", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "fd118b80-00a0-3de4-c1fb-93a438bbc4f4", name: "Account", caption: "Account", levelAccess: 1 },
  Contact: { type: "Contact", id: "Contact", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "94ec5ca2-45eb-ab7b-f4e0-98369360cc12", name: "Contact", caption: "Contact", levelAccess: 1 },
  RecordId: { type: "string", id: "RecordId", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "b8dbb8d0-b10b-6069-2876-ce79cdd03034", name: "RecordId", caption: "Record id", levelAccess: 1 },
  CreatedBy: { type: "Contact", id: "CreatedBy", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ebf6bb93-8aa6-4a01-900d-c6ea67affe21", name: "CreatedBy", caption: "Created by", levelAccess: 1 },
  CreatedOn: { type: "Date", id: "CreatedOn", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "e80190a5-03b2-4095-90f7-a193a960adee", name: "CreatedOn", caption: "Created on", levelAccess: 1 },
  Collection: { type: "BreedprideCollection", id: "Collection", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "BreedprideCollection", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9b5611fa-674d-22ff-d866-d0b1403c97f4", name: "Collection", caption: "Collection", levelAccess: 1 },
  ModifiedBy: { type: "Contact", id: "ModifiedBy", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "3015559e-cbc6-406a-88af-07f7930be832", name: "ModifiedBy", caption: "Modified by", levelAccess: 1 },
  ModifiedOn: { type: "Date", id: "ModifiedOn", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9928edec-4272-425a-93bb-48743fee4b04", name: "ModifiedOn", caption: "Modified on", levelAccess: 1 }
} as const;

export const BREEDPRIDECOLLECTIONENTITY_ENTITY_COLUMNS = [
  "ModifiedBy.Id",
  "ModifiedBy.Name",
  "Contact.Id",
  "Contact.Name",
  "Account.Id",
  "Account.Name",
  "CreatedBy.Id",
  "CreatedBy.Name",
  "Collection.Id",
  "Collection.Name",
  "Pet.Id",
  "Pet.Name",
  "Event.Id",
  "Event.Name"
];

export const BREEDPRIDECOLLECTIONENTITY_DATE_FIELDS = [];

export const [, , BreedprideCollectionEntity_SCHEMA] = createInjectionToken(() => ({
  fieldsConfig: BREEDPRIDECOLLECTIONENTITY_FIELD_CONFIG,
  entitiesColumns: BREEDPRIDECOLLECTIONENTITY_ENTITY_COLUMNS
}));

export const EVENT_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Url: { type: "string", id: "Url", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "0f025e3b-3695-e85a-5789-308dcbd182d8", name: "Url", caption: "Url", levelAccess: 1 },
  City: { type: "City", id: "City", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "City", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "97efd238-60c0-98e4-0307-8704b09207e7", name: "City", caption: "City", levelAccess: 1 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "a29c8526-f618-4151-9ee7-ba8c7135ae5a", name: "Name", caption: "Name", levelAccess: 1 },
  Type: { type: "EventType", id: "Type", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "EventType", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "681ae3d8-644e-4c88-9f55-752ee45dd4a4", name: "Type", caption: "Type", levelAccess: 1 },
  Cover: { type: "Cover", id: "Cover", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Cover", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "28c31a1e-3a27-992e-0316-0c5739264ae3", name: "Cover", caption: "Cover", levelAccess: 1 },
  Owner: { type: "Contact", id: "Owner", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "611dd225-b1b2-4fe9-a9ae-8e17947b30ce", name: "Owner", caption: "Owner", levelAccess: 1 },
  Region: { type: "Region", id: "Region", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Region", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "0c82b508-c906-9633-3844-3da853655d01", name: "Region", caption: "State/province", levelAccess: 1 },
  Status: { type: "EventStatus", id: "Status", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "EventStatus", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "3284033b-d83d-4f37-b7a9-b89bef88a8af", name: "Status", caption: "Status", levelAccess: 1 },
  Account: { type: "Account", id: "Account", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Account", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "5a9e0f7d-5e9d-af1a-0fa1-c414027b5679", name: "Account", caption: "Account", levelAccess: 1 },
  Address: { type: "string", id: "Address", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "19c3aebf-976f-67ec-b435-cc5798bd3087", name: "Address", caption: "Address", levelAccess: 1 },
  Country: { type: "Country", id: "Country", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Country", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "286cd384-e6fc-e75b-da1a-77ed499c19fc", name: "Country", caption: "Country", levelAccess: 1 },
  EndDate: { type: "Date", id: "EndDate", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "6abd0ec9-8a6d-4060-b6b8-948d16a547f4", name: "EndDate", caption: "End", levelAccess: 1 },
  PetType: { type: "PetType", id: "PetType", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "PetType", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "0d137dab-692d-fc28-dbaf-e7d916910e7d", name: "PetType", caption: "Pet type", levelAccess: 1 },
  Industry: { type: "AccountIndustry", id: "Industry", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "AccountIndustry", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "f209390f-73a2-47ae-97b9-fcd541bfd5dc", name: "Industry", caption: "Industry", levelAccess: 1 },
  CreatedBy: { type: "Contact", id: "CreatedBy", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ebf6bb93-8aa6-4a01-900d-c6ea67affe21", name: "CreatedBy", caption: "Created by", levelAccess: 1 },
  CreatedOn: { type: "Date", id: "CreatedOn", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "e80190a5-03b2-4095-90f7-a193a960adee", name: "CreatedOn", caption: "Created on", levelAccess: 1 },
  Organizer: { type: "Account", id: "Organizer", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Account", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "17f66d77-f9cb-a662-81b5-c1868d18131b", name: "Organizer", caption: "Organizer", levelAccess: 1 },
  StartDate: { type: "Date", id: "StartDate", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "74338ff9-e309-436d-a2a0-25d19313523e", name: "StartDate", caption: "Start", levelAccess: 1 },
  Territory: { type: "Territory", id: "Territory", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Territory", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "82c6a0b8-0cc6-483b-8177-2d6d3eab0d73", name: "Territory", caption: "Territory", levelAccess: 1 },
  ModifiedBy: { type: "Contact", id: "ModifiedBy", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "3015559e-cbc6-406a-88af-07f7930be832", name: "ModifiedBy", caption: "Modified by", levelAccess: 1 },
  ModifiedOn: { type: "Date", id: "ModifiedOn", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9928edec-4272-425a-93bb-48743fee4b04", name: "ModifiedOn", caption: "Modified on", levelAccess: 1 },
  RecipientCount: { type: "number", id: "RecipientCount", rows: 0, component: 4, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "64dc54f1-ff40-49fe-9a43-6d5f7baa2bda", name: "RecipientCount", caption: "Number of participants", levelAccess: 1 },
  LastActualizeDate: { type: "Date", id: "LastActualizeDate", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "2110bf6a-b8ef-4d49-899a-512a263da248", name: "LastActualizeDate", caption: "Last updated on", levelAccess: 1 }
} as const;

export const EVENT_ENTITY_COLUMNS = [
  "Name",
  "Id",
  "Organizer.Id",
  "Organizer.Name",
  "Account.Id",
  "Account.Name",
  "Status.Id",
  "Status.Name",
  "CreatedBy.Id",
  "CreatedBy.Name",
  "ModifiedBy.Id",
  "ModifiedBy.Name",
  "Owner.Id",
  "Owner.Name",
  "Territory.Id",
  "Territory.Name",
  "PetType.Id",
  "PetType.Name",
  "Cover.Id",
  "Cover.Name",
  "City.Id",
  "City.Name",
  "Region.Id",
  "Region.Name",
  "Country.Id",
  "Country.Name",
  "Type.Id",
  "Type.Name",
  "Industry.Id",
  "Industry.Name"
];

export const EVENT_DATE_FIELDS = [];

export const [, , Event_SCHEMA] = createInjectionToken(() => ({
  uid: "b023272e-81d8-5785-24c7-c45f4678c32f",
  rows: 60,
  type: "Event",
  caption: "Event",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "Event",
  fieldsConfig: EVENT_FIELD_CONFIG,
  entitiesColumns: EVENT_ENTITY_COLUMNS
}));

export const COVER_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Url: { type: "string", id: "Url", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "6c75d63a-606b-5734-1ae3-5d146e7c9e50", name: "Url", caption: "Url", levelAccess: 1 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "c97bad3b-c949-4d72-be33-53cc07259dc0", name: "Name", caption: "Name", levelAccess: 1 },
  Type: { type: "CoverType", id: "Type", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "CoverType", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "84e832fe-398e-899a-a03f-b4b61cbcf1f4", name: "Type", caption: "Type", levelAccess: 1 },
  Breed: { type: "Breed", id: "Breed", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Breed", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "0dc96535-0df8-45f9-8ff7-95ce02b691f5", name: "Breed", caption: "Breed", levelAccess: 1 },
  Owner: { type: "Contact", id: "Owner", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "add5d551-2c04-ecfb-354d-0fedc2ece526", name: "Owner", caption: "Owner", levelAccess: 1 },
  AvatarUrl: { type: "string", id: "AvatarUrl", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "730fca57-b5b7-4c37-6aa1-25e20078d37e", name: "AvatarUrl", caption: "Avatar url", levelAccess: 1 },
  CreatedBy: { type: "Contact", id: "CreatedBy", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ebf6bb93-8aa6-4a01-900d-c6ea67affe21", name: "CreatedBy", caption: "Created by", levelAccess: 1 },
  CreatedOn: { type: "Date", id: "CreatedOn", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "e80190a5-03b2-4095-90f7-a193a960adee", name: "CreatedOn", caption: "Created on", levelAccess: 1 },
  IsDefault: { type: "boolean", id: "IsDefault", rows: 0, component: 5, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "b0b129a0-018d-4147-a018-ca53aaa6f33c", name: "IsDefault", caption: "Default", levelAccess: 1 },
  ModifiedBy: { type: "Contact", id: "ModifiedBy", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "3015559e-cbc6-406a-88af-07f7930be832", name: "ModifiedBy", caption: "Modified by", levelAccess: 1 },
  ModifiedOn: { type: "Date", id: "ModifiedOn", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9928edec-4272-425a-93bb-48743fee4b04", name: "ModifiedOn", caption: "Modified on", levelAccess: 1 },
  RedirectUrl: { type: "string", id: "RedirectUrl", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "f51fefa0-d8f1-b001-820a-1412f720b275", name: "RedirectUrl", caption: "Redirect url", levelAccess: 1 }
} as const;

export const COVER_ENTITY_COLUMNS = [
  "Name",
  "Id",
  "ModifiedBy.Id",
  "ModifiedBy.Name",
  "Owner.Id",
  "Owner.Name",
  "CreatedBy.Id",
  "CreatedBy.Name",
  "Breed.Id",
  "Breed.Name",
  "Type.Id",
  "Type.Name"
];

export const COVER_DATE_FIELDS = [];

export const [, , Cover_SCHEMA] = createInjectionToken(() => ({
  uid: "e39b5dad-fb20-bc18-4e1e-89b8481b117d",
  rows: 60,
  type: "Cover",
  caption: "Cover",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "Cover",
  fieldsConfig: COVER_FIELD_CONFIG,
  entitiesColumns: COVER_ENTITY_COLUMNS
}));

export const NOTE_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Pet: { type: "Pet", id: "Pet", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Pet", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "86b76c97-fb44-bc9e-d340-5caf59d151de", name: "Pet", caption: "Pet", levelAccess: 1 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, max: 250, uid: "5a595cc0-1840-4191-b3f5-45607f54aa10", name: "Name", caption: "Name", levelAccess: 1 },
  Breed: { type: "Breed", id: "Breed", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Breed", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "72e68887-2a20-6cfa-6e1f-538aede3d156", name: "Breed", caption: "Breed", levelAccess: 1 },
  Cover: { type: "Cover", id: "Cover", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Cover", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "613c0366-2b68-3b7e-84b6-5e8ab7580562", name: "Cover", caption: "Cover", levelAccess: 1 },
  Event: { type: "Event", id: "Event", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Event", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "7ade2a3a-ee09-c816-e647-960350eb5d7e", name: "Event", caption: "Event", levelAccess: 1 },
  Notes: { type: "string", id: "Notes", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, max: 250, uid: "a814bc0a-1e72-4498-a685-709bddf42e4a", name: "Notes", caption: "Notes", levelAccess: 1 },
  Owner: { type: "Contact", id: "Owner", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "87096830-1985-d471-f0f2-bbb7638536a7", name: "Owner", caption: "Owner", levelAccess: 1 },
  Litter: { type: "Litter", id: "Litter", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Litter", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "344c10db-82f5-4b29-a5e5-2f3176f6cefe", name: "Litter", caption: "Litter", levelAccess: 1 },
  Account: { type: "Account", id: "Account", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Account", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "19412b7e-e527-91ba-d57d-e651f547c06b", name: "Account", caption: "Account", levelAccess: 1 },
  Contact: { type: "Contact", id: "Contact", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "72553f88-0091-16bc-1ec5-cd6a31fce683", name: "Contact", caption: "Contact", levelAccess: 1 },
  Project: { type: "Project", id: "Project", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Project", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "3da8eb0f-2412-86cf-ccde-5156c618d5bc", name: "Project", caption: "Project", levelAccess: 1 },
  RecordId: { type: "string", id: "RecordId", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ccc2164d-8608-b402-8444-b80a90f2ad65", name: "RecordId", caption: "Record id", levelAccess: 1 },
  CreatedBy: { type: "Contact", id: "CreatedBy", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ebf6bb93-8aa6-4a01-900d-c6ea67affe21", name: "CreatedBy", caption: "Created by", levelAccess: 1 },
  CreatedOn: { type: "Date", id: "CreatedOn", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "e80190a5-03b2-4095-90f7-a193a960adee", name: "CreatedOn", caption: "Created on", levelAccess: 1 },
  ModifiedBy: { type: "Contact", id: "ModifiedBy", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "3015559e-cbc6-406a-88af-07f7930be832", name: "ModifiedBy", caption: "Modified by", levelAccess: 1 },
  ModifiedOn: { type: "Date", id: "ModifiedOn", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9928edec-4272-425a-93bb-48743fee4b04", name: "ModifiedOn", caption: "Modified on", levelAccess: 1 },
  EntitySchema: { type: "EntitySchemaLookup", id: "EntitySchema", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "EntitySchemaLookup", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "edb17c7e-f9a9-1545-4261-76b4356a9f7c", name: "EntitySchema", caption: "Entity schema", levelAccess: 1 }
} as const;

export const NOTE_ENTITY_COLUMNS = [
  "Account.Id",
  "Account.Name",
  "CreatedBy.Id",
  "CreatedBy.Name",
  "Pet.Id",
  "Pet.Name",
  "Event.Id",
  "Event.Name",
  "ModifiedBy.Id",
  "ModifiedBy.Name",
  "Project.Id",
  "Project.Name",
  "Contact.Id",
  "Contact.Name",
  "Breed.Id",
  "Breed.Name",
  "Cover.Id",
  "Cover.Name",
  "Litter.Id",
  "Litter.Name",
  "Owner.Id",
  "Owner.Name",
  "EntitySchema.Id",
  "EntitySchema.Name"
];

export const NOTE_DATE_FIELDS = [];

export const [, , Note_SCHEMA] = createInjectionToken(() => ({
  fieldsConfig: NOTE_FIELD_CONFIG,
  entitiesColumns: NOTE_ENTITY_COLUMNS
}));

export const CONTACTSALUTATIONTYPE_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "736c30a7-c0ec-4fa9-b034-2552b319b633", name: "Name", caption: "Name", levelAccess: 2 },
  CreatedBy: { type: "Contact", id: "CreatedBy", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ebf6bb93-8aa6-4a01-900d-c6ea67affe21", name: "CreatedBy", caption: "Created by", levelAccess: 1 },
  CreatedOn: { type: "Date", id: "CreatedOn", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "e80190a5-03b2-4095-90f7-a193a960adee", name: "CreatedOn", caption: "Created on", levelAccess: 1 },
  ModifiedBy: { type: "Contact", id: "ModifiedBy", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "3015559e-cbc6-406a-88af-07f7930be832", name: "ModifiedBy", caption: "Modified by", levelAccess: 1 },
  ModifiedOn: { type: "Date", id: "ModifiedOn", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9928edec-4272-425a-93bb-48743fee4b04", name: "ModifiedOn", caption: "Modified on", levelAccess: 1 },
  Description: { type: "string", id: "Description", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9e53fd7c-dde4-4502-a64c-b9e34148108b", name: "Description", caption: "Description", levelAccess: 2 }
} as const;

export const CONTACTSALUTATIONTYPE_ENTITY_COLUMNS = [
  "Name",
  "Id",
  "ModifiedBy.Id",
  "ModifiedBy.Name",
  "CreatedBy.Id",
  "CreatedBy.Name"
];

export const CONTACTSALUTATIONTYPE_DATE_FIELDS = [];

export const [, , ContactSalutationType_SCHEMA] = createInjectionToken(() => ({
  uid: "f16cbd03-a8a8-4bdd-9970-a0c7985a1996",
  rows: 60,
  type: "ContactSalutationType",
  caption: "Title",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "ContactSalutationType",
  fieldsConfig: CONTACTSALUTATIONTYPE_FIELD_CONFIG,
  entitiesColumns: CONTACTSALUTATIONTYPE_ENTITY_COLUMNS
}));

export const GENDER_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "736c30a7-c0ec-4fa9-b034-2552b319b633", name: "Name", caption: "Name", levelAccess: 2 },
  Order: { type: "number", id: "Order", rows: 0, component: 4, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "fcb06b8f-e8a4-3db0-4815-6e411c56f7df", name: "Order", caption: "Order", levelAccess: 2 },
  CreatedBy: { type: "Contact", id: "CreatedBy", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ebf6bb93-8aa6-4a01-900d-c6ea67affe21", name: "CreatedBy", caption: "Created by", levelAccess: 1 },
  CreatedOn: { type: "Date", id: "CreatedOn", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "e80190a5-03b2-4095-90f7-a193a960adee", name: "CreatedOn", caption: "Created on", levelAccess: 1 },
  ModifiedBy: { type: "Contact", id: "ModifiedBy", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "3015559e-cbc6-406a-88af-07f7930be832", name: "ModifiedBy", caption: "Modified by", levelAccess: 1 },
  ModifiedOn: { type: "Date", id: "ModifiedOn", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9928edec-4272-425a-93bb-48743fee4b04", name: "ModifiedOn", caption: "Modified on", levelAccess: 1 },
  Description: { type: "string", id: "Description", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9e53fd7c-dde4-4502-a64c-b9e34148108b", name: "Description", caption: "Description", levelAccess: 2 }
} as const;

export const GENDER_ENTITY_COLUMNS = [
  "Name",
  "Id",
  "CreatedBy.Id",
  "CreatedBy.Name",
  "ModifiedBy.Id",
  "ModifiedBy.Name"
];

export const GENDER_DATE_FIELDS = [];

export const [, , Gender_SCHEMA] = createInjectionToken(() => ({
  uid: "3a3317c0-09f6-4a26-998b-018d1caa2c36",
  rows: 60,
  type: "Gender",
  caption: "Gender",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "Gender",
  fieldsConfig: GENDER_FIELD_CONFIG,
  entitiesColumns: GENDER_ENTITY_COLUMNS
}));

export const ACCOUNT_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Url: { type: "string", id: "Url", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "09d42269-6163-baa4-1353-fe6ec7433504", name: "Url", caption: "Url", levelAccess: 1 },
  Web: { type: "string", id: "Web", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "a1d2ad98-d068-4fc2-8454-8a7c944cd0a1", name: "Web", caption: "Web", levelAccess: 1 },
  Zip: { type: "string", id: "Zip", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "3fe38c61-ff55-4012-b28d-67e59d5b1986", name: "Zip", caption: "ZIP/postal code", levelAccess: 1 },
  City: { type: "City", id: "City", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "City", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "13bbd624-a13b-4bc2-b05c-fff21e9f7b92", name: "City", caption: "City", levelAccess: 1 },
  Code: { type: "string", id: "Code", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "60cc5643-4ee2-4adf-b76b-06000ad0b067", name: "Code", caption: "Code", levelAccess: 1 },
  GPSE: { type: "string", id: "GPSE", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "2ce4d59d-2ae4-4840-b4a7-33eee33fdb60", name: "GPSE", caption: "GPS E", levelAccess: 1 },
  GPSN: { type: "string", id: "GPSN", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "f1f01f71-ddef-48bb-bc88-0fd2f3526ad9", name: "GPSN", caption: "GPS N", levelAccess: 1 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "7c81a01e-f59b-47df-830c-8e830f1bf889", name: "Name", caption: "Name", levelAccess: 1 },
  Type: { type: "AccountType", id: "Type", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "AccountType", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "d60a9c06-1170-4cd6-9dc1-c972bc451533", name: "Type", caption: "Type", levelAccess: 1 },
  Cover: { type: "Cover", id: "Cover", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Cover", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "341004d3-288e-f05b-0f2f-d5a2c899b6c9", name: "Cover", caption: "Cover", levelAccess: 1 },
  Notes: { type: "string", id: "Notes", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, max: 250, uid: "0136fb47-c018-4b7f-8ed3-0eb6bd686b20", name: "Notes", caption: "Notes", levelAccess: 1 },
  Owner: { type: "Contact", id: "Owner", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "7c85a229-8cfa-4c29-8ab9-9463560a92ec", name: "Owner", caption: "Owner", levelAccess: 1 },
  Phone: { type: "string", id: "Phone", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9dbe8164-58b4-42c9-a75e-7c568d430d50", name: "Phone", caption: "Primary phone", levelAccess: 1 },
  Since: { type: "Date", id: "Since", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "197efd21-4f47-3d9a-a2f1-fe35bb64c267", name: "Since", caption: "Since", levelAccess: 1 },
  Parent: { type: "Account", id: "Parent", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Account", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "f25a5087-fab6-4c7a-9cd0-177325f6e715", name: "Parent", caption: "Parent account", levelAccess: 1 },
  Rating: { type: "number", id: "Rating", rows: 0, component: 4, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "23ef8216-79e1-4316-a868-dc54f3e47196", name: "Rating", caption: "Rating", levelAccess: 1 },
  Region: { type: "Region", id: "Region", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Region", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "8f532bba-53fb-4f56-babd-38402cb57b2a", name: "Region", caption: "State/province", levelAccess: 1 },
  Status: { type: "AccountStatus", id: "Status", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "AccountStatus", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "39fb80c9-f104-8167-18f6-b80f3f3cff5d", name: "Status", caption: "Status", levelAccess: 1 },
  AboutUs: { type: "string", id: "AboutUs", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, max: 250, uid: "fc7a5438-d732-d4c5-c061-372b97eefdee", name: "AboutUs", caption: "About us", levelAccess: 1 },
  Address: { type: "string", id: "Address", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, max: 250, uid: "8cfabb54-64ca-413d-a4e0-81ce9d2f0c8f", name: "Address", caption: "Address", levelAccess: 1 },
  Country: { type: "Country", id: "Country", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Country", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "2a7c00bd-0519-4742-b905-d8ce5f1b70ca", name: "Country", caption: "Country", levelAccess: 1 },
  Industry: { type: "AccountIndustry", id: "Industry", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "AccountIndustry", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "d7da954f-d0d8-4eca-a2b4-7d4f7121f6b4", name: "Industry", caption: "Industry", levelAccess: 1 },
  Verified: { type: "boolean", id: "Verified", rows: 0, component: 5, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "c1ae36bc-c2bc-5cbe-33be-970486536127", name: "Verified", caption: "Verified", levelAccess: 1 },
  AffixType: { type: "AffixType", id: "AffixType", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "AffixType", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "dce6a4c2-78a7-4b4f-bed2-b9718e5c82b5", name: "AffixType", caption: "Affix type", levelAccess: 1 },
  AvatarUrl: { type: "string", id: "AvatarUrl", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "fd90a31d-a6ab-4b3e-f082-3154ca6370ff", name: "AvatarUrl", caption: "Avatar url", levelAccess: 1 },
  CreatedBy: { type: "Contact", id: "CreatedBy", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ebf6bb93-8aa6-4a01-900d-c6ea67affe21", name: "CreatedBy", caption: "Created by", levelAccess: 1 },
  CreatedOn: { type: "Date", id: "CreatedOn", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "e80190a5-03b2-4095-90f7-a193a960adee", name: "CreatedOn", caption: "Created on", levelAccess: 1 },
  Ownership: { type: "AccountOwnership", id: "Ownership", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "AccountOwnership", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "dedb8f3b-4cb0-46ec-99e8-483ab92e10bb", name: "Ownership", caption: "Business entity", levelAccess: 1 },
  Federation: { type: "Account", id: "Federation", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Account", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "d8d49b85-fe2b-41b2-9886-9e3e846ab563", name: "Federation", caption: "Federation", levelAccess: 1 },
  ModifiedBy: { type: "Contact", id: "ModifiedBy", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "3015559e-cbc6-406a-88af-07f7930be832", name: "ModifiedBy", caption: "Modified by", levelAccess: 1 },
  ModifiedOn: { type: "Date", id: "ModifiedOn", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9928edec-4272-425a-93bb-48743fee4b04", name: "ModifiedOn", caption: "Modified on", levelAccess: 1 },
  AddressType: { type: "AddressType", id: "AddressType", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "AddressType", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9f5af167-9ab8-4c83-99db-7503df0eb650", name: "AddressType", caption: "Address type", levelAccess: 1 },
  HasKennelName: { type: "boolean", id: "HasKennelName", rows: 0, component: 5, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "886bd937-ad04-499b-8719-37ba24786928", name: "HasKennelName", caption: "Has kennel name", levelAccess: 1 },
  PrimaryContact: { type: "Contact", id: "PrimaryContact", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "165072a8-b718-4490-ab89-223f30390d81", name: "PrimaryContact", caption: "Primary contact", levelAccess: 1 },
  AccountCategory: { type: "AccountCategory", id: "AccountCategory", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "AccountCategory", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "0039b8f7-f5cf-44c9-8828-4b9cb2fd6634", name: "AccountCategory", caption: "Category", levelAccess: 1 },
  AdditionalPhone: { type: "string", id: "AdditionalPhone", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9411651f-b785-4920-a542-e8ac11d2cf8d", name: "AdditionalPhone", caption: "Alternate phone", levelAccess: 1 },
  AlternativeName: { type: "string", id: "AlternativeName", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "e36ae687-347d-4bf7-b260-90129862e357", name: "AlternativeName", caption: "Also known as", levelAccess: 1 },
  VerificationStatus: { type: "VerificationStatus", id: "VerificationStatus", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "VerificationStatus", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "556cd672-b7ce-45ef-b1ba-7b351719e7c4", name: "VerificationStatus", caption: "Verification status", levelAccess: 1 },
  CompanyFoundationDate: { type: "Date", id: "CompanyFoundationDate", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "dbb92ba5-b2a2-428a-9827-e2dbebf36b4f", name: "CompanyFoundationDate", caption: "Company foundation date", levelAccess: 1 },
  RatingPlacementInBreed: { type: "number", id: "RatingPlacementInBreed", rows: 0, component: 4, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "b7ddf161-5563-4532-90c1-ff65f87cb55b", name: "RatingPlacementInBreed", caption: "Rating placement in Breed", levelAccess: 1 }
} as const;

export const ACCOUNT_ENTITY_COLUMNS = [
  "Name",
  "Id",
  "Cover.Id",
  "Cover.Name",
  "Parent.Id",
  "Parent.Name",
  "AddressType.Id",
  "AddressType.Name",
  "Owner.Id",
  "Owner.Name",
  "ModifiedBy.Id",
  "ModifiedBy.Name",
  "City.Id",
  "City.Name",
  "Country.Id",
  "Country.Name",
  "CreatedBy.Id",
  "CreatedBy.Name",
  "Type.Id",
  "Type.Name",
  "Status.Id",
  "Status.Name",
  "PrimaryContact.Id",
  "PrimaryContact.Name",
  "Federation.Id",
  "Federation.Name",
  "Region.Id",
  "Region.Name",
  "VerificationStatus.Id",
  "VerificationStatus.Name",
  "Industry.Id",
  "Industry.Name",
  "Ownership.Id",
  "Ownership.Name",
  "AccountCategory.Id",
  "AccountCategory.Name",
  "AffixType.Id",
  "AffixType.Name"
];

export const ACCOUNT_DATE_FIELDS = [];

export const [, , Account_SCHEMA] = createInjectionToken(() => ({
  uid: "5c6ca10e-1180-4c1e-8a50-55a72ff9bdd4",
  rows: 60,
  type: "Account",
  caption: "Account",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "Account",
  fieldsConfig: ACCOUNT_FIELD_CONFIG,
  entitiesColumns: ACCOUNT_ENTITY_COLUMNS
}));

export const CONTACTDECISIONROLE_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "736c30a7-c0ec-4fa9-b034-2552b319b633", name: "Name", caption: "Name", levelAccess: 2 },
  CreatedBy: { type: "Contact", id: "CreatedBy", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ebf6bb93-8aa6-4a01-900d-c6ea67affe21", name: "CreatedBy", caption: "Created by", levelAccess: 1 },
  CreatedOn: { type: "Date", id: "CreatedOn", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "e80190a5-03b2-4095-90f7-a193a960adee", name: "CreatedOn", caption: "Created on", levelAccess: 1 },
  ModifiedBy: { type: "Contact", id: "ModifiedBy", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "3015559e-cbc6-406a-88af-07f7930be832", name: "ModifiedBy", caption: "Modified by", levelAccess: 1 },
  ModifiedOn: { type: "Date", id: "ModifiedOn", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9928edec-4272-425a-93bb-48743fee4b04", name: "ModifiedOn", caption: "Modified on", levelAccess: 1 },
  Description: { type: "string", id: "Description", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9e53fd7c-dde4-4502-a64c-b9e34148108b", name: "Description", caption: "Description", levelAccess: 2 }
} as const;

export const CONTACTDECISIONROLE_ENTITY_COLUMNS = [
  "Name",
  "Id",
  "CreatedBy.Id",
  "CreatedBy.Name",
  "ModifiedBy.Id",
  "ModifiedBy.Name"
];

export const CONTACTDECISIONROLE_DATE_FIELDS = [];

export const [, , ContactDecisionRole_SCHEMA] = createInjectionToken(() => ({
  uid: "f70c762a-1038-49a7-a3e8-f24fb8cfdeef",
  rows: 60,
  type: "ContactDecisionRole",
  caption: "Role",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "ContactDecisionRole",
  fieldsConfig: CONTACTDECISIONROLE_FIELD_CONFIG,
  entitiesColumns: CONTACTDECISIONROLE_ENTITY_COLUMNS
}));

export const JOB_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "736c30a7-c0ec-4fa9-b034-2552b319b633", name: "Name", caption: "Name", levelAccess: 1 },
  Description: { type: "string", id: "Description", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9e53fd7c-dde4-4502-a64c-b9e34148108b", name: "Description", caption: "Description", levelAccess: 1 }
} as const;

export const JOB_ENTITY_COLUMNS = [
  "Name",
  "Id"
];

export const JOB_DATE_FIELDS = [];

export const [, , Job_SCHEMA] = createInjectionToken(() => ({
  uid: "344436e4-9d6b-4a30-936f-f8ea45f2adb4",
  rows: 60,
  type: "Job",
  caption: "Job title",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "Job",
  fieldsConfig: JOB_FIELD_CONFIG,
  entitiesColumns: JOB_ENTITY_COLUMNS
}));

export const ADDRESSTYPE_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "736c30a7-c0ec-4fa9-b034-2552b319b633", name: "Name", caption: "Name", levelAccess: 1 },
  Color: { type: "string", id: "Color", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ff40cd49-76cb-c51a-6fa9-0021d25e544e", name: "Color", caption: "Color", levelAccess: 1 },
  ForAccount: { type: "boolean", id: "ForAccount", rows: 0, component: 5, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "4c02f622-12ca-4649-a1bf-17cf7a94b168", name: "ForAccount", caption: "Use in accounts", levelAccess: 1 },
  ForContact: { type: "boolean", id: "ForContact", rows: 0, component: 5, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "7421096a-1fe8-477b-b718-8d66554c0f97", name: "ForContact", caption: "Use in contacts", levelAccess: 1 },
  Description: { type: "string", id: "Description", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9e53fd7c-dde4-4502-a64c-b9e34148108b", name: "Description", caption: "Description", levelAccess: 1 }
} as const;

export const ADDRESSTYPE_ENTITY_COLUMNS = [
  "Name",
  "Id"
];

export const ADDRESSTYPE_DATE_FIELDS = [];

export const [, , AddressType_SCHEMA] = createInjectionToken(() => ({
  uid: "5ad029c6-0fa7-4db6-8fef-c72a0f535682",
  rows: 60,
  type: "AddressType",
  caption: "Address type",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "AddressType",
  fieldsConfig: ADDRESSTYPE_FIELD_CONFIG,
  entitiesColumns: ADDRESSTYPE_ENTITY_COLUMNS
}));

export const CITY_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Dem: { type: "number", id: "Dem", rows: 0, component: 4, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "2ac5cfde-8c7e-141b-c430-8d9c9719b282", name: "Dem", caption: "Dem", levelAccess: 2 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "736c30a7-c0ec-4fa9-b034-2552b319b633", name: "Name", caption: "Name", levelAccess: 2 },
  Region: { type: "Region", id: "Region", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Region", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "b9be9a1a-dc05-4574-b391-b8377b8f82f8", name: "Region", caption: "State/province", levelAccess: 2 },
  Country: { type: "Country", id: "Country", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Country", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "8fb75ea2-14b8-4bb1-8420-f3a650b11962", name: "Country", caption: "Country", levelAccess: 2 },
  Latitude: { type: "number", id: "Latitude", rows: 0, component: 4, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "fa84b94c-7eeb-9d67-3792-c9a030b51baf", name: "Latitude", caption: "Latitude", levelAccess: 2 },
  TimeZone: { type: "TimeZone", id: "TimeZone", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "TimeZone", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "8ff41b5d-ef8e-4f95-bc96-07b5d595a3eb", name: "TimeZone", caption: "Time zone", levelAccess: 2 },
  CreatedBy: { type: "Contact", id: "CreatedBy", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ebf6bb93-8aa6-4a01-900d-c6ea67affe21", name: "CreatedBy", caption: "Created by", levelAccess: 1 },
  CreatedOn: { type: "Date", id: "CreatedOn", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "e80190a5-03b2-4095-90f7-a193a960adee", name: "CreatedOn", caption: "Created on", levelAccess: 1 },
  Longitude: { type: "number", id: "Longitude", rows: 0, component: 4, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "f2ba391b-0e47-8e42-a9fc-925ccad192f9", name: "Longitude", caption: "Longitude", levelAccess: 2 },
  GeoNamesId: { type: "string", id: "GeoNamesId", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "dfbc7967-addb-1045-5779-458861234eb0", name: "GeoNamesId", caption: "GeoNamesId", levelAccess: 2 },
  ModifiedBy: { type: "Contact", id: "ModifiedBy", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "3015559e-cbc6-406a-88af-07f7930be832", name: "ModifiedBy", caption: "Modified by", levelAccess: 1 },
  ModifiedOn: { type: "Date", id: "ModifiedOn", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9928edec-4272-425a-93bb-48743fee4b04", name: "ModifiedOn", caption: "Modified on", levelAccess: 1 },
  Population: { type: "number", id: "Population", rows: 0, component: 4, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "eb5625af-6335-4ae1-a315-e9501da453dd", name: "Population", caption: "Population", levelAccess: 2 },
  Description: { type: "string", id: "Description", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9e53fd7c-dde4-4502-a64c-b9e34148108b", name: "Description", caption: "Description", levelAccess: 2 },
  AlternateNames: { type: "string", id: "AlternateNames", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, max: 250, uid: "33191a8e-d266-fdca-36c5-3beaeab2addb", name: "AlternateNames", caption: "Alternate Names", levelAccess: 2 },
  GeoNamesTimeZone: { type: "GeoNamesTimeZone", id: "GeoNamesTimeZone", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "GeoNamesTimeZone", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "8dc674f9-4ea6-52c5-65e3-607ababf2c8b", name: "GeoNamesTimeZone", caption: "GeoNames TimeZone", levelAccess: 2 }
} as const;

export const CITY_ENTITY_COLUMNS = [
  "Name",
  "Id",
  "CreatedBy.Id",
  "CreatedBy.Name",
  "GeoNamesTimeZone.Id",
  "GeoNamesTimeZone.Name",
  "ModifiedBy.Id",
  "ModifiedBy.Name",
  "Region.Id",
  "Region.Name",
  "Country.Id",
  "Country.Name",
  "TimeZone.Id",
  "TimeZone.Name"
];

export const CITY_DATE_FIELDS = [];

export const [, , City_SCHEMA] = createInjectionToken(() => ({
  uid: "cf58ca72-531b-4dd2-b4d5-f0d5b7c556f6",
  rows: 60,
  type: "City",
  caption: "City",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "City",
  fieldsConfig: CITY_FIELD_CONFIG,
  entitiesColumns: CITY_ENTITY_COLUMNS
}));

export const REGION_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Dem: { type: "number", id: "Dem", rows: 0, component: 4, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "f2377b2b-ce22-420c-d1a1-7d4e6d09b30e", name: "Dem", caption: "Dem", levelAccess: 2 },
  Code: { type: "string", id: "Code", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "dbf90876-69ce-f0a1-9d8d-f1cdfcd6d71a", name: "Code", caption: "Region code", levelAccess: 2 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "736c30a7-c0ec-4fa9-b034-2552b319b633", name: "Name", caption: "Name", levelAccess: 2 },
  Country: { type: "Country", id: "Country", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Country", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "8469bcc6-3a77-4706-85a9-72a2ec3aa2f5", name: "Country", caption: "Country", levelAccess: 2 },
  Latitude: { type: "number", id: "Latitude", rows: 0, component: 4, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "df6074ed-e088-ec1b-6b31-256a9f4b4b2b", name: "Latitude", caption: "Latitude", levelAccess: 2 },
  TimeZone: { type: "TimeZone", id: "TimeZone", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "TimeZone", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "5975a90a-0b6c-4216-b195-a02208e83b3c", name: "TimeZone", caption: "Time zone", levelAccess: 2 },
  CreatedBy: { type: "Contact", id: "CreatedBy", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ebf6bb93-8aa6-4a01-900d-c6ea67affe21", name: "CreatedBy", caption: "Created by", levelAccess: 1 },
  CreatedOn: { type: "Date", id: "CreatedOn", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "e80190a5-03b2-4095-90f7-a193a960adee", name: "CreatedOn", caption: "Created on", levelAccess: 1 },
  Longitude: { type: "number", id: "Longitude", rows: 0, component: 4, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "216eb585-3ee8-31d6-ac42-09be2e296016", name: "Longitude", caption: "Longitude", levelAccess: 2 },
  GeoNamesId: { type: "string", id: "GeoNamesId", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "bc110788-a1db-5c34-9ad4-2dbc414edc36", name: "GeoNamesId", caption: "GeoNamesId", levelAccess: 2 },
  ModifiedBy: { type: "Contact", id: "ModifiedBy", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "3015559e-cbc6-406a-88af-07f7930be832", name: "ModifiedBy", caption: "Modified by", levelAccess: 1 },
  ModifiedOn: { type: "Date", id: "ModifiedOn", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9928edec-4272-425a-93bb-48743fee4b04", name: "ModifiedOn", caption: "Modified on", levelAccess: 1 },
  Description: { type: "string", id: "Description", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9e53fd7c-dde4-4502-a64c-b9e34148108b", name: "Description", caption: "Description", levelAccess: 2 },
  AlternateNames: { type: "string", id: "AlternateNames", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, max: 250, uid: "4687816a-7588-58fa-0cc1-c0a9817cc264", name: "AlternateNames", caption: "Alternate Names", levelAccess: 2 },
  GeoNamesTimeZone: { type: "GeoNamesTimeZone", id: "GeoNamesTimeZone", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "GeoNamesTimeZone", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "503c2bc9-6521-f39b-20e1-1bf5a1205f85", name: "GeoNamesTimeZone", caption: "GeoNames TimeZone", levelAccess: 2 },
  RegionAdmin1Code: { type: "string", id: "RegionAdmin1Code", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "59866896-819a-4ae4-13cd-a2d6d42ec355", name: "RegionAdmin1Code", caption: "Region admin1 code", levelAccess: 2 }
} as const;

export const REGION_ENTITY_COLUMNS = [
  "Name",
  "Id",
  "ModifiedBy.Id",
  "ModifiedBy.Name",
  "CreatedBy.Id",
  "CreatedBy.Name",
  "Country.Id",
  "Country.Name",
  "GeoNamesTimeZone.Id",
  "GeoNamesTimeZone.Name",
  "TimeZone.Id",
  "TimeZone.Name"
];

export const REGION_DATE_FIELDS = [];

export const [, , Region_SCHEMA] = createInjectionToken(() => ({
  uid: "0e50f221-470e-482b-8580-f61c74b8b1c1",
  rows: 60,
  type: "Region",
  caption: "State/province",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "Region",
  fieldsConfig: REGION_FIELD_CONFIG,
  entitiesColumns: REGION_ENTITY_COLUMNS
}));

export const COUNTRY_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Dem: { type: "number", id: "Dem", rows: 0, component: 4, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "6626deaa-47e5-a9d5-1b94-79c48e016b10", name: "Dem", caption: "Dem", levelAccess: 2 },
  Url: { type: "string", id: "Url", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "e947af42-67bc-4d06-dc1a-9de03b58f731", name: "Url", caption: "Url", levelAccess: 2 },
  Code: { type: "string", id: "Code", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "054bc9b2-8fd8-4ef0-a40b-822d2fb6397c", name: "Code", caption: "Country code", levelAccess: 2 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "736c30a7-c0ec-4fa9-b034-2552b319b633", name: "Name", caption: "Name", levelAccess: 2 },
  Latitude: { type: "number", id: "Latitude", rows: 0, component: 4, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "0b005792-445d-ad26-0798-c891861b0a8e", name: "Latitude", caption: "Latitude", levelAccess: 2 },
  TimeZone: { type: "TimeZone", id: "TimeZone", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "TimeZone", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "e16e6308-60ea-41af-b4d4-f4ada1bebd65", name: "TimeZone", caption: "Time zone", levelAccess: 2 },
  CreatedBy: { type: "Contact", id: "CreatedBy", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ebf6bb93-8aa6-4a01-900d-c6ea67affe21", name: "CreatedBy", caption: "Created by", levelAccess: 1 },
  CreatedOn: { type: "Date", id: "CreatedOn", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "e80190a5-03b2-4095-90f7-a193a960adee", name: "CreatedOn", caption: "Created on", levelAccess: 1 },
  Longitude: { type: "number", id: "Longitude", rows: 0, component: 4, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "beffa43a-f6f9-b4ff-5016-6a7c7b07f2dd", name: "Longitude", caption: "Longitude", levelAccess: 2 },
  Alpha2Code: { type: "string", id: "Alpha2Code", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "362cada0-5f1a-ac1b-f69e-94551ead4b37", name: "Alpha2Code", caption: "Two-letter country code", levelAccess: 2 },
  GeoNamesId: { type: "string", id: "GeoNamesId", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "8bfedc57-c509-ca71-a701-42b540c13ed2", name: "GeoNamesId", caption: "GeoNamesId", levelAccess: 2 },
  ModifiedBy: { type: "Contact", id: "ModifiedBy", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "3015559e-cbc6-406a-88af-07f7930be832", name: "ModifiedBy", caption: "Modified by", levelAccess: 1 },
  ModifiedOn: { type: "Date", id: "ModifiedOn", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9928edec-4272-425a-93bb-48743fee4b04", name: "ModifiedOn", caption: "Modified on", levelAccess: 1 },
  PublicData: { type: "PublicData", id: "PublicData", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "PublicData", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ed463873-8be3-df57-3cb8-2fe3ab711dee", name: "PublicData", caption: "Public data", levelAccess: 2 },
  BillingInfo: { type: "string", id: "BillingInfo", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, max: 250, uid: "6c43eac6-1530-4d3a-8839-89cb19d5484a", name: "BillingInfo", caption: "Banking details", levelAccess: 2 },
  Description: { type: "string", id: "Description", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9e53fd7c-dde4-4502-a64c-b9e34148108b", name: "Description", caption: "Description", levelAccess: 2 },
  AlternateNames: { type: "string", id: "AlternateNames", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, max: 250, uid: "1e60e1b6-c90e-3eda-c167-8bdff45b5274", name: "AlternateNames", caption: "Alternate Names", levelAccess: 2 },
  GeoNamesTimeZone: { type: "GeoNamesTimeZone", id: "GeoNamesTimeZone", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "GeoNamesTimeZone", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "0f050b4d-d6e1-10a1-c07a-c3c8e795020c", name: "GeoNamesTimeZone", caption: "GeoNames TimeZone", levelAccess: 2 },
  GeoNamesCountryCode: { type: "string", id: "GeoNamesCountryCode", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "866e189a-95ac-b33f-e5e2-5708a47b36d5", name: "GeoNamesCountryCode", caption: "GeoNames CountryCode", levelAccess: 2 }
} as const;

export const COUNTRY_ENTITY_COLUMNS = [
  "Name",
  "Id",
  "GeoNamesTimeZone.Id",
  "GeoNamesTimeZone.Name",
  "ModifiedBy.Id",
  "ModifiedBy.Name",
  "CreatedBy.Id",
  "CreatedBy.Name",
  "PublicData.Id",
  "PublicData.Name",
  "TimeZone.Id",
  "TimeZone.Name"
];

export const COUNTRY_DATE_FIELDS = [];

export const [, , Country_SCHEMA] = createInjectionToken(() => ({
  uid: "9463dea9-2576-4d37-812f-342ee57ddf32",
  rows: 60,
  type: "Country",
  caption: "Country",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "Country",
  fieldsConfig: COUNTRY_FIELD_CONFIG,
  entitiesColumns: COUNTRY_ENTITY_COLUMNS
}));

export const SYSLANGUAGE_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Code: { type: "string", id: "Code", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "13aad544-ec30-4e76-a373-f0cff3202e24", name: "Code", caption: "Code", levelAccess: 1 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "736c30a7-c0ec-4fa9-b034-2552b319b633", name: "Name", caption: "Name", levelAccess: 1 },
  IsUsed: { type: "boolean", id: "IsUsed", rows: 0, component: 5, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "affb1d22-3058-4c56-828a-1b49e64ef89e", name: "IsUsed", caption: "Is used", levelAccess: 1 },
  Description: { type: "string", id: "Description", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9e53fd7c-dde4-4502-a64c-b9e34148108b", name: "Description", caption: "Description", levelAccess: 1 },
  SysCultureDefId: { type: "string", id: "SysCultureDefId", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "a55a2255-9b82-d01f-c145-44ef77060ceb", name: "SysCultureDefId", caption: "SysCultureDefId", levelAccess: 1 }
} as const;

export const SYSLANGUAGE_ENTITY_COLUMNS = [
  "Name",
  "Id"
];

export const SYSLANGUAGE_DATE_FIELDS = [];

export const [, , SysLanguage_SCHEMA] = createInjectionToken(() => ({
  uid: "a855b7ae-45be-4d73-9074-9d84e4ae66c4",
  rows: 60,
  type: "SysLanguage",
  caption: "Preferred language",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "SysLanguage",
  fieldsConfig: SYSLANGUAGE_FIELD_CONFIG,
  entitiesColumns: SYSLANGUAGE_ENTITY_COLUMNS
}));

export const VERIFICATIONSTATUS_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "736c30a7-c0ec-4fa9-b034-2552b319b633", name: "Name", caption: "Name", levelAccess: 1 },
  Description: { type: "string", id: "Description", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9e53fd7c-dde4-4502-a64c-b9e34148108b", name: "Description", caption: "Description", levelAccess: 1 }
} as const;

export const VERIFICATIONSTATUS_ENTITY_COLUMNS = [
  "Name",
  "Id"
];

export const VERIFICATIONSTATUS_DATE_FIELDS = [];

export const [, , VerificationStatus_SCHEMA] = createInjectionToken(() => ({
  uid: "426171f1-e21e-45a7-8489-eb94513fdc88",
  rows: 60,
  type: "VerificationStatus",
  caption: "Verification status",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "VerificationStatus",
  fieldsConfig: VERIFICATIONSTATUS_FIELD_CONFIG,
  entitiesColumns: VERIFICATIONSTATUS_ENTITY_COLUMNS
}));

export const COMMUNICATIONTYPE_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "736c30a7-c0ec-4fa9-b034-2552b319b633", name: "Name", caption: "Name", levelAccess: 1 },
  Description: { type: "string", id: "Description", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9e53fd7c-dde4-4502-a64c-b9e34148108b", name: "Description", caption: "Description", levelAccess: 1 },
  DisplayFormat: { type: "string", id: "DisplayFormat", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "3fb6cbe6-a28d-058b-c946-bc899d193fc2", name: "DisplayFormat", caption: "Display format", levelAccess: 1 },
  UseforAccounts: { type: "boolean", id: "UseforAccounts", rows: 0, component: 5, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9583d17a-064d-402d-bdb1-7d377628d64b", name: "UseforAccounts", caption: "Use for accounts", levelAccess: 1 },
  UseforContacts: { type: "boolean", id: "UseforContacts", rows: 0, component: 5, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "07748e81-b1d1-4cdb-9e41-d5e0be2e13d9", name: "UseforContacts", caption: "Use for contacts", levelAccess: 1 }
} as const;

export const COMMUNICATIONTYPE_ENTITY_COLUMNS = [
  "Name",
  "Id"
];

export const COMMUNICATIONTYPE_DATE_FIELDS = [];

export const [, , CommunicationType_SCHEMA] = createInjectionToken(() => ({
  uid: "12f1d73a-43c5-4a52-9bd6-3e0ecafd3fb4",
  rows: 60,
  type: "CommunicationType",
  caption: "Type",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "CommunicationType",
  fieldsConfig: COMMUNICATIONTYPE_FIELD_CONFIG,
  entitiesColumns: COMMUNICATIONTYPE_ENTITY_COLUMNS
}));

export const FIREBASEAUTHPROVIDER_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "736c30a7-c0ec-4fa9-b034-2552b319b633", name: "Name", caption: "Name", levelAccess: 1 },
  Description: { type: "string", id: "Description", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9e53fd7c-dde4-4502-a64c-b9e34148108b", name: "Description", caption: "Description", levelAccess: 1 }
} as const;

export const FIREBASEAUTHPROVIDER_ENTITY_COLUMNS = [
  "Name",
  "Id"
];

export const FIREBASEAUTHPROVIDER_DATE_FIELDS = [];

export const [, , FirebaseAuthProvider_SCHEMA] = createInjectionToken(() => ({
  uid: "38b945f9-5f47-3f50-b7a8-7bc4688e8a9b",
  rows: 60,
  type: "FirebaseAuthProvider",
  caption: "Firebase Auth Provider",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "FirebaseAuthProvider",
  fieldsConfig: FIREBASEAUTHPROVIDER_FIELD_CONFIG,
  entitiesColumns: FIREBASEAUTHPROVIDER_ENTITY_COLUMNS
}));

export const REFERRAL_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Code: { type: "string", id: "Code", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "bf2ba903-4a44-e7ae-c1ad-c6ccd6c444cd", name: "Code", caption: "Code", levelAccess: 1 },
  Contact: { type: "Contact", id: "Contact", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "534b8cbb-a7b6-21e2-615b-e5cfb73bc538", name: "Contact", caption: "Contact", levelAccess: 1 }
} as const;

export const REFERRAL_ENTITY_COLUMNS = [
  "Id",
  "Code",
  "Contact.Id",
  "Contact.Name"
];

export const REFERRAL_DATE_FIELDS = [];

export const [, , Referral_SCHEMA] = createInjectionToken(() => ({
  uid: "b9830070-477c-c69c-a3d9-5f9139cf9841",
  rows: 60,
  type: "Referral",
  caption: "Referral",
  component: 0,
  validators: [],
  displayField: "Code",
  entitySchemaName: "Referral",
  fieldsConfig: REFERRAL_FIELD_CONFIG,
  entitiesColumns: REFERRAL_ENTITY_COLUMNS
}));

export const PETTYPE_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Url: { type: "string", id: "Url", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "44255902-c642-36da-16fb-5611c53c35d7", name: "Url", caption: "Url", levelAccess: 1 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "736c30a7-c0ec-4fa9-b034-2552b319b633", name: "Name", caption: "Name", levelAccess: 1 },
  AvatarUrl: { type: "string", id: "AvatarUrl", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "1537f0a2-88a0-d664-c99d-08ad31b307c4", name: "AvatarUrl", caption: "Avatar url", levelAccess: 1 },
  EventCount: { type: "number", id: "EventCount", rows: 0, component: 4, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "b8394990-b3c9-3471-14bf-95748030848b", name: "EventCount", caption: "Event count", levelAccess: 1 },
  PublicData: { type: "PublicData", id: "PublicData", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "PublicData", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "4f266081-7636-b8b5-b1d3-7dea7eb0c9f5", name: "PublicData", caption: "Public data", levelAccess: 1 },
  Description: { type: "string", id: "Description", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9e53fd7c-dde4-4502-a64c-b9e34148108b", name: "Description", caption: "Description", levelAccess: 1 },
  KennelCount: { type: "number", id: "KennelCount", rows: 0, component: 4, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "84745650-ea63-0a16-467a-ea231eda63fc", name: "KennelCount", caption: "Kennels count", levelAccess: 1 },
  PatronCount: { type: "number", id: "PatronCount", rows: 0, component: 4, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "99cb5345-e8ab-261c-0ca2-50f6be2b0ba7", name: "PatronCount", caption: "Patrons count", levelAccess: 1 },
  ProfileCount: { type: "number", id: "ProfileCount", rows: 0, component: 4, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "45b213f7-345d-d085-4cf4-d490b11d6a62", name: "ProfileCount", caption: "Profiles count", levelAccess: 1 },
  PetProfileCount: { type: "number", id: "PetProfileCount", rows: 0, component: 4, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "99375d78-7bfd-a709-4400-25342bd92a10", name: "PetProfileCount", caption: "Pet profile count", levelAccess: 1 },
  OrganizationCount: { type: "number", id: "OrganizationCount", rows: 0, component: 4, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "967c66e2-49f4-d69d-606e-63f145001c9d", name: "OrganizationCount", caption: "Organizations count", levelAccess: 1 }
} as const;

export const PETTYPE_ENTITY_COLUMNS = [
  "Name",
  "Id",
  "PublicData.Id",
  "PublicData.Name"
];

export const PETTYPE_DATE_FIELDS = [];

export const [, , PetType_SCHEMA] = createInjectionToken(() => ({
  uid: "34a71a35-ad56-4946-9b60-14374cd1f7e3",
  rows: 60,
  type: "PetType",
  caption: "Type",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "PetType",
  fieldsConfig: PETTYPE_FIELD_CONFIG,
  entitiesColumns: PETTYPE_ENTITY_COLUMNS
}));

export const SEX_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Code: { type: "string", id: "Code", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "84402437-9749-1f6c-11e4-a1d2ffcee8c0", name: "Code", caption: "Code", levelAccess: 1 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "736c30a7-c0ec-4fa9-b034-2552b319b633", name: "Name", caption: "Name", levelAccess: 1 },
  Gender: { type: "Gender", id: "Gender", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Gender", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "fe58454c-2778-f0cd-a647-ff7d431118ef", name: "Gender", caption: "Gender", levelAccess: 1 },
  PetType: { type: "PetType", id: "PetType", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "PetType", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "d4374969-94eb-9de0-b524-f649df67451e", name: "PetType", caption: "Pet type", levelAccess: 1 },
  Description: { type: "string", id: "Description", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9e53fd7c-dde4-4502-a64c-b9e34148108b", name: "Description", caption: "Description", levelAccess: 1 }
} as const;

export const SEX_ENTITY_COLUMNS = [
  "Name",
  "Id",
  "PetType.Id",
  "PetType.Name",
  "Gender.Id",
  "Gender.Name"
];

export const SEX_DATE_FIELDS = [];

export const [, , Sex_SCHEMA] = createInjectionToken(() => ({
  uid: "26bf8d2c-9389-408b-a778-628dd22b5ef3",
  rows: 60,
  type: "Sex",
  caption: "Sex",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "Sex",
  fieldsConfig: SEX_FIELD_CONFIG,
  entitiesColumns: SEX_ENTITY_COLUMNS
}));

export const PETSTATUS_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Code: { type: "string", id: "Code", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ebb3752d-a5f5-3993-6e7d-f2b7ed9c82be", name: "Code", caption: "Code", levelAccess: 1 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "736c30a7-c0ec-4fa9-b034-2552b319b633", name: "Name", caption: "Name", levelAccess: 1 },
  PetType: { type: "PetType", id: "PetType", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "PetType", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "e74f645b-bf3b-6bcc-24c5-1678bfc7245c", name: "PetType", caption: "Pet type", levelAccess: 1 },
  Description: { type: "string", id: "Description", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9e53fd7c-dde4-4502-a64c-b9e34148108b", name: "Description", caption: "Description", levelAccess: 1 }
} as const;

export const PETSTATUS_ENTITY_COLUMNS = [
  "Name",
  "Id",
  "PetType.Id",
  "PetType.Name"
];

export const PETSTATUS_DATE_FIELDS = [];

export const [, , PetStatus_SCHEMA] = createInjectionToken(() => ({
  uid: "8495c8e5-4d71-3c3c-cb56-7b4bc6295b47",
  rows: 60,
  type: "PetStatus",
  caption: "Status",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "PetStatus",
  fieldsConfig: PETSTATUS_FIELD_CONFIG,
  entitiesColumns: PETSTATUS_ENTITY_COLUMNS
}));

export const COATTYPE_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "736c30a7-c0ec-4fa9-b034-2552b319b633", name: "Name", caption: "Name", levelAccess: 1 },
  PetType: { type: "PetType", id: "PetType", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "PetType", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "e7573d28-3408-5eb4-48c0-4d3fb9a9d9c4", name: "PetType", caption: "Pet type", levelAccess: 1 },
  Description: { type: "string", id: "Description", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9e53fd7c-dde4-4502-a64c-b9e34148108b", name: "Description", caption: "Description", levelAccess: 1 }
} as const;

export const COATTYPE_ENTITY_COLUMNS = [
  "Name",
  "Id",
  "PetType.Id",
  "PetType.Name"
];

export const COATTYPE_DATE_FIELDS = [];

export const [, , CoatType_SCHEMA] = createInjectionToken(() => ({
  uid: "6e30cca8-9cd1-e9a0-9667-4fd606f1e438",
  rows: 60,
  type: "CoatType",
  caption: "Coat type",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "CoatType",
  fieldsConfig: COATTYPE_FIELD_CONFIG,
  entitiesColumns: COATTYPE_ENTITY_COLUMNS
}));

export const COATCOLOR_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "736c30a7-c0ec-4fa9-b034-2552b319b633", name: "Name", caption: "Name", levelAccess: 1 },
  PetType: { type: "PetType", id: "PetType", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "PetType", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "7422326a-c921-e734-c0e0-6e9859b7132b", name: "PetType", caption: "Pet type", levelAccess: 1 },
  Description: { type: "string", id: "Description", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9e53fd7c-dde4-4502-a64c-b9e34148108b", name: "Description", caption: "Description", levelAccess: 1 }
} as const;

export const COATCOLOR_ENTITY_COLUMNS = [
  "Name",
  "Id",
  "PetType.Id",
  "PetType.Name"
];

export const COATCOLOR_DATE_FIELDS = [];

export const [, , CoatColor_SCHEMA] = createInjectionToken(() => ({
  uid: "76f526c1-8110-bccf-51ee-4840ec8fe677",
  rows: 60,
  type: "CoatColor",
  caption: "Coat color",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "CoatColor",
  fieldsConfig: COATCOLOR_FIELD_CONFIG,
  entitiesColumns: COATCOLOR_ENTITY_COLUMNS
}));

export const PETSIZE_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "736c30a7-c0ec-4fa9-b034-2552b319b633", name: "Name", caption: "Name", levelAccess: 1 },
  PetType: { type: "PetType", id: "PetType", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "PetType", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "7ab22176-4252-00c5-5339-4ac49ce8ef6f", name: "PetType", caption: "Pet type", levelAccess: 1 },
  Description: { type: "string", id: "Description", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9e53fd7c-dde4-4502-a64c-b9e34148108b", name: "Description", caption: "Description", levelAccess: 1 }
} as const;

export const PETSIZE_ENTITY_COLUMNS = [
  "Name",
  "Id",
  "PetType.Id",
  "PetType.Name"
];

export const PETSIZE_DATE_FIELDS = [];

export const [, , PetSize_SCHEMA] = createInjectionToken(() => ({
  uid: "927f6f7a-b497-df0f-d421-19111a334320",
  rows: 60,
  type: "PetSize",
  caption: "Size",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "PetSize",
  fieldsConfig: PETSIZE_FIELD_CONFIG,
  entitiesColumns: PETSIZE_ENTITY_COLUMNS
}));

export const BODYFEATURE_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "736c30a7-c0ec-4fa9-b034-2552b319b633", name: "Name", caption: "Name", levelAccess: 1 },
  Description: { type: "string", id: "Description", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9e53fd7c-dde4-4502-a64c-b9e34148108b", name: "Description", caption: "Description", levelAccess: 1 }
} as const;

export const BODYFEATURE_ENTITY_COLUMNS = [
  "Name",
  "Id"
];

export const BODYFEATURE_DATE_FIELDS = [];

export const [, , BodyFeature_SCHEMA] = createInjectionToken(() => ({
  uid: "837d1b6d-9ee8-b737-f81d-2afe03b4aad7",
  rows: 60,
  type: "BodyFeature",
  caption: "Body feature",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "BodyFeature",
  fieldsConfig: BODYFEATURE_FIELD_CONFIG,
  entitiesColumns: BODYFEATURE_ENTITY_COLUMNS
}));

export const BREEDDIVISION_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "736c30a7-c0ec-4fa9-b034-2552b319b633", name: "Name", caption: "Name", levelAccess: 1 },
  Breed: { type: "Breed", id: "Breed", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Breed", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "3880e54a-1d28-f04d-e02f-bb31649c6be1", name: "Breed", caption: "Breed", levelAccess: 1 },
  IsMain: { type: "boolean", id: "IsMain", rows: 0, component: 5, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ef1806b1-e182-a868-d8c1-c8927324b3a6", name: "IsMain", caption: "Main", levelAccess: 1 },
  Description: { type: "string", id: "Description", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9e53fd7c-dde4-4502-a64c-b9e34148108b", name: "Description", caption: "Description", levelAccess: 1 },
  BreedStandard: { type: "BreedStandard", id: "BreedStandard", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "BreedStandard", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "7ac9ddfc-4117-4494-1de4-bdd8d0d301f0", name: "BreedStandard", caption: "Breed standard", levelAccess: 1 },
  DivisionBySize: { type: "boolean", id: "DivisionBySize", rows: 0, component: 5, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "6b337740-adc5-7266-5cd8-b27f567a37ae", name: "DivisionBySize", caption: "By size", levelAccess: 1 },
  DivisionByColor: { type: "boolean", id: "DivisionByColor", rows: 0, component: 5, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "2eb6008d-fe83-ff75-611c-4408b49b7740", name: "DivisionByColor", caption: "By color", levelAccess: 1 },
  DivisionByCoatType: { type: "boolean", id: "DivisionByCoatType", rows: 0, component: 5, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "b6ab192a-1db5-f4fb-a10f-5d329969c3a3", name: "DivisionByCoatType", caption: "By coat type", levelAccess: 1 },
  DivisionByBodyFeature: { type: "boolean", id: "DivisionByBodyFeature", rows: 0, component: 5, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "0fa84a79-781c-e48f-9b12-b85639128e23", name: "DivisionByBodyFeature", caption: "By body feature", levelAccess: 1 }
} as const;

export const BREEDDIVISION_ENTITY_COLUMNS = [
  "Name",
  "Id",
  "Breed.Id",
  "Breed.Name",
  "BreedStandard.Id",
  "BreedStandard.Name"
];

export const BREEDDIVISION_DATE_FIELDS = [];

export const [, , BreedDivision_SCHEMA] = createInjectionToken(() => ({
  uid: "013dab79-6112-d61d-b3a9-f381532ffdf7",
  rows: 60,
  type: "BreedDivision",
  caption: "Breed division",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "BreedDivision",
  fieldsConfig: BREEDDIVISION_FIELD_CONFIG,
  entitiesColumns: BREEDDIVISION_ENTITY_COLUMNS
}));

export const PUBLICDATA_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Pet: { type: "Pet", id: "Pet", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Pet", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "c058b28a-95de-47a4-be15-4c1ac9110960", name: "Pet", caption: "Pet", levelAccess: 2 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ed8f9443-5bf7-4eb5-9eb2-b8db74ba3c6a", name: "Name", caption: "Name", levelAccess: 2 },
  Breed: { type: "Breed", id: "Breed", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Breed", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "62aad2f4-1554-40e1-88db-c9ecd1413c6d", name: "Breed", caption: "Breed", levelAccess: 2 },
  Event: { type: "Event", id: "Event", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Event", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "d40dc290-8460-4c14-9d45-83521f6996d8", name: "Event", caption: "Event", levelAccess: 2 },
  Model: { type: "string", id: "Model", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "587fdb37-2a47-3492-8042-91c6eb5246f4", name: "Model", caption: "Model", levelAccess: 2 },
  Account: { type: "Account", id: "Account", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Account", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "8d5cec00-ed7f-4413-92a1-3582b8f1faa2", name: "Account", caption: "Account", levelAccess: 2 },
  Contact: { type: "Contact", id: "Contact", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "d8f34d1e-2b17-4e8e-8fb1-89b6de35978f", name: "Contact", caption: "Contact", levelAccess: 2 },
  Country: { type: "Country", id: "Country", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Country", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "fd47cda9-835b-415b-9a49-34cb1d036cae", name: "Country", caption: "Country", levelAccess: 2 },
  HashMD5: { type: "string", id: "HashMD5", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "6020b80c-0331-4daf-ab69-359053f35fb7", name: "HashMD5", caption: "HashMD5", levelAccess: 2 },
  PetType: { type: "PetType", id: "PetType", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "PetType", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "7357b5e2-e99d-4bc3-a6c8-243fa60de305", name: "PetType", caption: "Pet type", levelAccess: 2 },
  Primary: { type: "boolean", id: "Primary", rows: 0, component: 5, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "40599653-0fcd-4646-2920-1434c2377109", name: "Primary", caption: "Primary", levelAccess: 2 },
  Project: { type: "Project", id: "Project", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Project", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "8e554559-2e4b-4b4b-92fe-651d479b6f3c", name: "Project", caption: "Project", levelAccess: 2 },
  HasOwner: { type: "boolean", id: "HasOwner", rows: 0, component: 5, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "d07f4d54-5595-4baa-8464-c073ba6d2f4c", name: "HasOwner", caption: "Has owner", levelAccess: 2 },
  RecordId: { type: "string", id: "RecordId", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "daa1ee72-5176-921e-0e57-6ba3b17015af", name: "RecordId", caption: "Record id", levelAccess: 2 },
  Redirect: { type: "PublicData", id: "Redirect", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "PublicData", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "207a9ae8-c1c8-8b70-0c1e-f2f5c5760dee", name: "Redirect", caption: "Redirect", levelAccess: 2 },
  CreatedBy: { type: "Contact", id: "CreatedBy", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ebf6bb93-8aa6-4a01-900d-c6ea67affe21", name: "CreatedBy", caption: "Created by", levelAccess: 1 },
  CreatedOn: { type: "Date", id: "CreatedOn", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "e80190a5-03b2-4095-90f7-a193a960adee", name: "CreatedOn", caption: "Created on", levelAccess: 1 },
  PetTitles: { type: "TitleInPet", id: "PetTitles", rows: 60, component: 0, dateFields: [], displayField: "Title", displayValue: ()=>"", entitiesColumns: ["Id", "Title"], entitySchemaName: "TitleInPet", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "db5b7982-e863-47b1-9047-b994a384c47a", name: "PetTitles", caption: "Pet titles", levelAccess: 2 },
  EntityName: { type: "string", id: "EntityName", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "5596d553-9cab-9f29-c1ab-830c7e9a8591", name: "EntityName", caption: "Entity name", levelAccess: 2 },
  ModifiedBy: { type: "Contact", id: "ModifiedBy", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "3015559e-cbc6-406a-88af-07f7930be832", name: "ModifiedBy", caption: "Modified by", levelAccess: 1 },
  ModifiedOn: { type: "Date", id: "ModifiedOn", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9928edec-4272-425a-93bb-48743fee4b04", name: "ModifiedOn", caption: "Modified on", levelAccess: 1 }
} as const;

export const PUBLICDATA_ENTITY_COLUMNS = [
  "Name",
  "Id",
  "ModifiedBy.Id",
  "ModifiedBy.Name",
  "Contact.Id",
  "Contact.Name",
  "CreatedBy.Id",
  "CreatedBy.Name",
  "Account.Id",
  "Account.Name",
  "Pet.Id",
  "Pet.Name",
  "Event.Id",
  "Event.Name",
  "Country.Id",
  "Country.Name",
  "Redirect.Id",
  "Redirect.Name",
  "Breed.Id",
  "Breed.Name",
  "Project.Id",
  "Project.Name",
  "PetType.Id",
  "PetType.Name",
  "PetTitles.Id",
  "PetTitles.Title"
];

export const PUBLICDATA_DATE_FIELDS = [];

export const [, , PublicData_SCHEMA] = createInjectionToken(() => ({
  uid: "f08a9a86-75f6-e0e5-b3f0-2ae63da8434b",
  rows: 60,
  type: "PublicData",
  caption: "Public data",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "PublicData",
  fieldsConfig: PUBLICDATA_FIELD_CONFIG,
  entitiesColumns: PUBLICDATA_ENTITY_COLUMNS
}));

export const TITLE_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "736c30a7-c0ec-4fa9-b034-2552b319b633", name: "Name", caption: "Name", levelAccess: 1 },
  Rating: { type: "number", id: "Rating", rows: 0, component: 4, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "1445e39b-5ba0-79fd-3c27-b0b9909d3c50", name: "Rating", caption: "Rating", levelAccess: 1 },
  PetType: { type: "PetType", id: "PetType", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "PetType", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "671f7b00-f392-878f-724e-6b6ab9c54f31", name: "PetType", caption: "Pet type", levelAccess: 1 },
  Provider: { type: "Account", id: "Provider", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Account", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "1d9315a3-8a77-9b51-a5f8-307fbacd1349", name: "Provider", caption: "Provider", levelAccess: 1 },
  Description: { type: "string", id: "Description", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9e53fd7c-dde4-4502-a64c-b9e34148108b", name: "Description", caption: "Description", levelAccess: 1 }
} as const;

export const TITLE_ENTITY_COLUMNS = [
  "Name",
  "Id",
  "Provider.Id",
  "Provider.Name",
  "PetType.Id",
  "PetType.Name"
];

export const TITLE_DATE_FIELDS = [];

export const [, , Title_SCHEMA] = createInjectionToken(() => ({
  uid: "6116a30b-eb97-cc38-af49-abfd3f7ed7b2",
  rows: 60,
  type: "Title",
  caption: "Title",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "Title",
  fieldsConfig: TITLE_FIELD_CONFIG,
  entitiesColumns: TITLE_ENTITY_COLUMNS
}));

export const HEALTHEXAMOBJECT_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Code: { type: "string", id: "Code", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "5745ca3e-640a-072d-1867-25146c65e5d4", name: "Code", caption: "Code", levelAccess: 1 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "736c30a7-c0ec-4fa9-b034-2552b319b633", name: "Name", caption: "Name", levelAccess: 1 },
  Description: { type: "string", id: "Description", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9e53fd7c-dde4-4502-a64c-b9e34148108b", name: "Description", caption: "Description", levelAccess: 1 }
} as const;

export const HEALTHEXAMOBJECT_ENTITY_COLUMNS = [
  "Name",
  "Id"
];

export const HEALTHEXAMOBJECT_DATE_FIELDS = [];

export const [, , HealthExamObject_SCHEMA] = createInjectionToken(() => ({
  uid: "e7e2df2d-dab6-9019-84e1-dcc84911f2e0",
  rows: 60,
  type: "HealthExamObject",
  caption: "Object",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "HealthExamObject",
  fieldsConfig: HEALTHEXAMOBJECT_FIELD_CONFIG,
  entitiesColumns: HEALTHEXAMOBJECT_ENTITY_COLUMNS
}));

export const HEALTHEXAMRESULT_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "736c30a7-c0ec-4fa9-b034-2552b319b633", name: "Name", caption: "Name", levelAccess: 1 },
  Object: { type: "HealthExamObject", id: "Object", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "HealthExamObject", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "0ed4a11b-446d-a116-298e-83365d634054", name: "Object", caption: "Object", levelAccess: 1 },
  Description: { type: "string", id: "Description", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9e53fd7c-dde4-4502-a64c-b9e34148108b", name: "Description", caption: "Description", levelAccess: 1 }
} as const;

export const HEALTHEXAMRESULT_ENTITY_COLUMNS = [
  "Name",
  "Id",
  "Object.Id",
  "Object.Name"
];

export const HEALTHEXAMRESULT_DATE_FIELDS = [];

export const [, , HealthExamResult_SCHEMA] = createInjectionToken(() => ({
  uid: "e6aeb729-0118-5970-dc1f-551d95500a3b",
  rows: 60,
  type: "HealthExamResult",
  caption: "Result",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "HealthExamResult",
  fieldsConfig: HEALTHEXAMRESULT_FIELD_CONFIG,
  entitiesColumns: HEALTHEXAMRESULT_ENTITY_COLUMNS
}));

export const PETSERVICETYPE_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "736c30a7-c0ec-4fa9-b034-2552b319b633", name: "Name", caption: "Name", levelAccess: 1 },
  Description: { type: "string", id: "Description", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9e53fd7c-dde4-4502-a64c-b9e34148108b", name: "Description", caption: "Description", levelAccess: 1 }
} as const;

export const PETSERVICETYPE_ENTITY_COLUMNS = [
  "Name",
  "Id"
];

export const PETSERVICETYPE_DATE_FIELDS = [];

export const [, , PetServiceType_SCHEMA] = createInjectionToken(() => ({
  uid: "dfe9a49b-7f9b-cf86-4ab4-2e4488b0f52a",
  rows: 60,
  type: "PetServiceType",
  caption: "Service type",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "PetServiceType",
  fieldsConfig: PETSERVICETYPE_FIELD_CONFIG,
  entitiesColumns: PETSERVICETYPE_ENTITY_COLUMNS
}));

export const CURRENCY_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Code: { type: "string", id: "Code", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "13aad544-ec30-4e76-a373-f0cff3202e24", name: "Code", caption: "Code", levelAccess: 2 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "736c30a7-c0ec-4fa9-b034-2552b319b633", name: "Name", caption: "Name", levelAccess: 2 },
  Rate: { type: "number", id: "Rate", rows: 0, component: 4, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "b13238af-3645-4799-8cf7-063a08194804", name: "Rate", caption: "Rate", levelAccess: 2 },
  Symbol: { type: "string", id: "Symbol", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "1468ee69-0ffb-496f-9d4d-e91c1656d474", name: "Symbol", caption: "Symbol", levelAccess: 2 },
  Division: { type: "number", id: "Division", rows: 0, component: 4, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "e8667452-cecb-4735-acf7-428ea8d62e50", name: "Division", caption: "Ratio", levelAccess: 2 },
  CreatedBy: { type: "Contact", id: "CreatedBy", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ebf6bb93-8aa6-4a01-900d-c6ea67affe21", name: "CreatedBy", caption: "Created by", levelAccess: 1 },
  CreatedOn: { type: "Date", id: "CreatedOn", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "e80190a5-03b2-4095-90f7-a193a960adee", name: "CreatedOn", caption: "Created on", levelAccess: 1 },
  ShortName: { type: "string", id: "ShortName", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "81913c21-afcb-4a38-9164-af361a45d80f", name: "ShortName", caption: "Short name", levelAccess: 2 },
  ModifiedBy: { type: "Contact", id: "ModifiedBy", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "3015559e-cbc6-406a-88af-07f7930be832", name: "ModifiedBy", caption: "Modified by", levelAccess: 1 },
  ModifiedOn: { type: "Date", id: "ModifiedOn", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9928edec-4272-425a-93bb-48743fee4b04", name: "ModifiedOn", caption: "Modified on", levelAccess: 1 },
  Description: { type: "string", id: "Description", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9e53fd7c-dde4-4502-a64c-b9e34148108b", name: "Description", caption: "Description", levelAccess: 2 },
  RecalcDirection: { type: "number", id: "RecalcDirection", rows: 0, component: 4, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "aa202f22-3aa0-441e-b192-5e03e7e8090d", name: "RecalcDirection", caption: "Exchange rate format", levelAccess: 2 },
  CurrecySymbolPosition: { type: "number", id: "CurrecySymbolPosition", rows: 0, component: 4, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "df51504c-ae63-42e8-964d-8a30ceff0a7c", name: "CurrecySymbolPosition", caption: "Position of currency sign", levelAccess: 2 }
} as const;

export const CURRENCY_ENTITY_COLUMNS = [
  "Name",
  "Id",
  "ModifiedBy.Id",
  "ModifiedBy.Name",
  "CreatedBy.Id",
  "CreatedBy.Name"
];

export const CURRENCY_DATE_FIELDS = [];

export const [, , Currency_SCHEMA] = createInjectionToken(() => ({
  uid: "6184805f-84f3-8856-0563-042431f1a948",
  rows: 60,
  type: "Currency",
  caption: "Currency",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "Currency",
  fieldsConfig: CURRENCY_FIELD_CONFIG,
  entitiesColumns: CURRENCY_ENTITY_COLUMNS
}));

export const PETSERVICESTATUS_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "736c30a7-c0ec-4fa9-b034-2552b319b633", name: "Name", caption: "Name", levelAccess: 1 },
  Description: { type: "string", id: "Description", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9e53fd7c-dde4-4502-a64c-b9e34148108b", name: "Description", caption: "Description", levelAccess: 1 }
} as const;

export const PETSERVICESTATUS_ENTITY_COLUMNS = [
  "Name",
  "Id"
];

export const PETSERVICESTATUS_DATE_FIELDS = [];

export const [, , PetServiceStatus_SCHEMA] = createInjectionToken(() => ({
  uid: "97ba748c-5939-4754-9ff3-2f2afea18691",
  rows: 60,
  type: "PetServiceStatus",
  caption: "Service status",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "PetServiceStatus",
  fieldsConfig: PETSERVICESTATUS_FIELD_CONFIG,
  entitiesColumns: PETSERVICESTATUS_ENTITY_COLUMNS
}));

export const PETCLASS_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Code: { type: "number", id: "Code", rows: 0, component: 4, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "7c0b382b-6b35-28c2-f75e-f43a1683fad0", name: "Code", caption: "Code", levelAccess: 1 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "736c30a7-c0ec-4fa9-b034-2552b319b633", name: "Name", caption: "Name", levelAccess: 1 },
  AgeTo: { type: "number", id: "AgeTo", rows: 0, component: 4, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "cacdee1e-c75b-873d-a906-6cc5f6a2907c", name: "AgeTo", caption: "To", levelAccess: 1 },
  AgeFrom: { type: "number", id: "AgeFrom", rows: 0, component: 4, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "a68095b8-a465-5753-b2be-202c2ad6d19c", name: "AgeFrom", caption: "From", levelAccess: 1 },
  PetType: { type: "PetType", id: "PetType", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "PetType", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "f26bc1fd-af5c-657f-c8bc-286f80330398", name: "PetType", caption: "Pet type", levelAccess: 1 },
  Provider: { type: "Account", id: "Provider", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Account", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "8a79034c-9c42-14b2-554a-ea99d1113afa", name: "Provider", caption: "Provider", levelAccess: 1 },
  Description: { type: "string", id: "Description", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9e53fd7c-dde4-4502-a64c-b9e34148108b", name: "Description", caption: "Description", levelAccess: 1 }
} as const;

export const PETCLASS_ENTITY_COLUMNS = [
  "Name",
  "Id",
  "PetType.Id",
  "PetType.Name",
  "Provider.Id",
  "Provider.Name"
];

export const PETCLASS_DATE_FIELDS = [];

export const [, , PetClass_SCHEMA] = createInjectionToken(() => ({
  uid: "9408b109-a7cf-bcb0-b9ca-f74e3f7d3513",
  rows: 60,
  type: "PetClass",
  caption: "Class",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "PetClass",
  fieldsConfig: PETCLASS_FIELD_CONFIG,
  entitiesColumns: PETCLASS_ENTITY_COLUMNS
}));

export const PLACE_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "736c30a7-c0ec-4fa9-b034-2552b319b633", name: "Name", caption: "Name", levelAccess: 1 },
  Description: { type: "string", id: "Description", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9e53fd7c-dde4-4502-a64c-b9e34148108b", name: "Description", caption: "Description", levelAccess: 1 }
} as const;

export const PLACE_ENTITY_COLUMNS = [
  "Name",
  "Id"
];

export const PLACE_DATE_FIELDS = [];

export const [, , Place_SCHEMA] = createInjectionToken(() => ({
  uid: "d3106684-1f50-fb63-688e-1d389fe87dba",
  rows: 60,
  type: "Place",
  caption: "Place",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "Place",
  fieldsConfig: PLACE_FIELD_CONFIG,
  entitiesColumns: PLACE_ENTITY_COLUMNS
}));

export const PETQUALIFICATION_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Code: { type: "number", id: "Code", rows: 0, component: 4, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "bce36a0d-b6dd-4866-f023-74958f5a89a2", name: "Code", caption: "Code", levelAccess: 1 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "736c30a7-c0ec-4fa9-b034-2552b319b633", name: "Name", caption: "Name", levelAccess: 1 },
  PetType: { type: "PetType", id: "PetType", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "PetType", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "3196f4df-0625-6512-6f0c-429faf1e92d7", name: "PetType", caption: "Pet type", levelAccess: 1 },
  Provider: { type: "Account", id: "Provider", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Account", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "5d6c7ea3-fe4f-d474-562c-646c5037bc19", name: "Provider", caption: "Provider", levelAccess: 1 },
  Description: { type: "string", id: "Description", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9e53fd7c-dde4-4502-a64c-b9e34148108b", name: "Description", caption: "Description", levelAccess: 1 }
} as const;

export const PETQUALIFICATION_ENTITY_COLUMNS = [
  "Name",
  "Id",
  "PetType.Id",
  "PetType.Name",
  "Provider.Id",
  "Provider.Name"
];

export const PETQUALIFICATION_DATE_FIELDS = [];

export const [, , PetQualification_SCHEMA] = createInjectionToken(() => ({
  uid: "7fcbb75c-da4c-e661-d388-d6033e26270c",
  rows: 60,
  type: "PetQualification",
  caption: "Qualification",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "PetQualification",
  fieldsConfig: PETQUALIFICATION_FIELD_CONFIG,
  entitiesColumns: PETQUALIFICATION_ENTITY_COLUMNS
}));

export const PETIDENTIFIERTYPE_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "736c30a7-c0ec-4fa9-b034-2552b319b633", name: "Name", caption: "Name", levelAccess: 1 },
  IsPublic: { type: "boolean", id: "IsPublic", rows: 0, component: 5, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "23aa4699-2845-37ca-fed4-f86f5a868a35", name: "IsPublic", caption: "Is public", levelAccess: 1 },
  Description: { type: "string", id: "Description", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9e53fd7c-dde4-4502-a64c-b9e34148108b", name: "Description", caption: "Description", levelAccess: 1 }
} as const;

export const PETIDENTIFIERTYPE_ENTITY_COLUMNS = [
  "Name",
  "Id"
];

export const PETIDENTIFIERTYPE_DATE_FIELDS = [];

export const [, , PetIdentifierType_SCHEMA] = createInjectionToken(() => ({
  uid: "0a968a38-64f2-21d9-ce7d-95d5d9a13eed",
  rows: 60,
  type: "PetIdentifierType",
  caption: "Pet identifier type",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "PetIdentifierType",
  fieldsConfig: PETIDENTIFIERTYPE_FIELD_CONFIG,
  entitiesColumns: PETIDENTIFIERTYPE_ENTITY_COLUMNS
}));

export const STUDBOOK_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "736c30a7-c0ec-4fa9-b034-2552b319b633", name: "Name", caption: "Name", levelAccess: 1 },
  Type: { type: "StudbookType", id: "Type", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "StudbookType", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "8e8a5d63-fd37-8999-bb02-a843475ba50a", name: "Type", caption: "Type", levelAccess: 1 },
  Status: { type: "StudbookStatus", id: "Status", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "StudbookStatus", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "16e514bc-f451-0191-f7f4-5802d5428cef", name: "Status", caption: "Status", levelAccess: 1 },
  Account: { type: "Account", id: "Account", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Account", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "8c55d198-d063-d76d-9b33-062b9872ffc5", name: "Account", caption: "Account", levelAccess: 1 },
  Description: { type: "string", id: "Description", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9e53fd7c-dde4-4502-a64c-b9e34148108b", name: "Description", caption: "Description", levelAccess: 1 },
  AlternateNames: { type: "string", id: "AlternateNames", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "4d4916b4-4275-33f5-e61e-59792e109bbc", name: "AlternateNames", caption: "Alternate names", levelAccess: 1 }
} as const;

export const STUDBOOK_ENTITY_COLUMNS = [
  "Name",
  "Id",
  "Account.Id",
  "Account.Name",
  "Type.Id",
  "Type.Name",
  "Status.Id",
  "Status.Name"
];

export const STUDBOOK_DATE_FIELDS = [];

export const [, , Studbook_SCHEMA] = createInjectionToken(() => ({
  uid: "869758cc-18e7-8e82-d8fc-8b55b7e1de7c",
  rows: 60,
  type: "Studbook",
  caption: "Studbook",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "Studbook",
  fieldsConfig: STUDBOOK_FIELD_CONFIG,
  entitiesColumns: STUDBOOK_ENTITY_COLUMNS
}));

export const DATASOURCE_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "736c30a7-c0ec-4fa9-b034-2552b319b633", name: "Name", caption: "Name", levelAccess: 1 },
  Domain: { type: "string", id: "Domain", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "6f61b040-18de-7832-8129-fea8d610ec37", name: "Domain", caption: "Domain", levelAccess: 1 },
  Priority: { type: "number", id: "Priority", rows: 0, component: 4, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "2137f09d-8b2f-8187-6862-7f58f5353d25", name: "Priority", caption: "Priority", levelAccess: 1 },
  Description: { type: "string", id: "Description", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9e53fd7c-dde4-4502-a64c-b9e34148108b", name: "Description", caption: "Description", levelAccess: 1 }
} as const;

export const DATASOURCE_ENTITY_COLUMNS = [
  "Name",
  "Id"
];

export const DATASOURCE_DATE_FIELDS = [];

export const [, , DataSource_SCHEMA] = createInjectionToken(() => ({
  uid: "d2c043ce-7c79-6dd8-a530-16e3878b49d7",
  rows: 60,
  type: "DataSource",
  caption: "Data source",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "DataSource",
  fieldsConfig: DATASOURCE_FIELD_CONFIG,
  entitiesColumns: DATASOURCE_ENTITY_COLUMNS
}));

export const MEASUREMENTTYPE_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "736c30a7-c0ec-4fa9-b034-2552b319b633", name: "Name", caption: "Name", levelAccess: 1 },
  Description: { type: "string", id: "Description", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9e53fd7c-dde4-4502-a64c-b9e34148108b", name: "Description", caption: "Description", levelAccess: 1 }
} as const;

export const MEASUREMENTTYPE_ENTITY_COLUMNS = [
  "Name",
  "Id"
];

export const MEASUREMENTTYPE_DATE_FIELDS = [];

export const [, , MeasurementType_SCHEMA] = createInjectionToken(() => ({
  uid: "e2133684-401d-594f-4e77-679240907e24",
  rows: 60,
  type: "MeasurementType",
  caption: "Measurement type",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "MeasurementType",
  fieldsConfig: MEASUREMENTTYPE_FIELD_CONFIG,
  entitiesColumns: MEASUREMENTTYPE_ENTITY_COLUMNS
}));

export const UNIT_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "736c30a7-c0ec-4fa9-b034-2552b319b633", name: "Name", caption: "Name", levelAccess: 1 },
  ShortName: { type: "string", id: "ShortName", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "4a41775a-ee6f-4bb5-9725-025397d02775", name: "ShortName", caption: "Short Name", levelAccess: 1 },
  Description: { type: "string", id: "Description", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9e53fd7c-dde4-4502-a64c-b9e34148108b", name: "Description", caption: "Description", levelAccess: 1 }
} as const;

export const UNIT_ENTITY_COLUMNS = [
  "Name",
  "Id"
];

export const UNIT_DATE_FIELDS = [];

export const [, , Unit_SCHEMA] = createInjectionToken(() => ({
  uid: "b88750a9-e2e1-4ca7-8a24-7e55925f1445",
  rows: 60,
  type: "Unit",
  caption: "Unit",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "Unit",
  fieldsConfig: UNIT_FIELD_CONFIG,
  entitiesColumns: UNIT_ENTITY_COLUMNS
}));

export const PERIOD_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "736c30a7-c0ec-4fa9-b034-2552b319b633", name: "Name", caption: "Name", levelAccess: 1 },
  Year: { type: "Period", id: "Year", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Period", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "47036bbd-4d29-4cef-8a9c-2ffbbcde06af", name: "Year", caption: "Year", levelAccess: 1 },
  Parent: { type: "Period", id: "Parent", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Period", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "a02e67d6-cf4c-46d8-a7de-9f5e98792e39", name: "Parent", caption: "Parent", levelAccess: 1 },
  DueDate: { type: "Date", id: "DueDate", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "30b7698a-7531-4fc5-ad6b-db64e289b477", name: "DueDate", caption: "Period end date", levelAccess: 1 },
  Quarter: { type: "Period", id: "Quarter", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Period", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "cd0f614a-b891-4c75-9f44-c3ebfab8ac35", name: "Quarter", caption: "Quarter", levelAccess: 1 },
  StartDate: { type: "Date", id: "StartDate", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "5ee4ad02-c1b8-4938-955e-a930224e3093", name: "StartDate", caption: "Start date", levelAccess: 1 },
  PeriodType: { type: "PeriodType", id: "PeriodType", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "PeriodType", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "28325522-3317-4110-a881-cf22df0f5dba", name: "PeriodType", caption: "Period type", levelAccess: 1 },
  Description: { type: "string", id: "Description", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9e53fd7c-dde4-4502-a64c-b9e34148108b", name: "Description", caption: "Description", levelAccess: 1 }
} as const;

export const PERIOD_ENTITY_COLUMNS = [
  "Name",
  "Id",
  "Year.Id",
  "Year.Name",
  "Quarter.Id",
  "Quarter.Name",
  "Parent.Id",
  "Parent.Name",
  "PeriodType.Id",
  "PeriodType.Name"
];

export const PERIOD_DATE_FIELDS = [];

export const [, , Period_SCHEMA] = createInjectionToken(() => ({
  uid: "e6d114fd-730a-4130-a9c9-a5c93db658b1",
  rows: 60,
  type: "Period",
  caption: "Mating period",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "Period",
  fieldsConfig: PERIOD_FIELD_CONFIG,
  entitiesColumns: PERIOD_ENTITY_COLUMNS
}));

export const LITTERSTATUS_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "736c30a7-c0ec-4fa9-b034-2552b319b633", name: "Name", caption: "Name", levelAccess: 1 },
  Order: { type: "number", id: "Order", rows: 0, component: 4, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "6acb1a0d-acb3-a5e4-f949-3776e69dabde", name: "Order", caption: "Order", levelAccess: 1 },
  Description: { type: "string", id: "Description", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9e53fd7c-dde4-4502-a64c-b9e34148108b", name: "Description", caption: "Description", levelAccess: 1 }
} as const;

export const LITTERSTATUS_ENTITY_COLUMNS = [
  "Name",
  "Id"
];

export const LITTERSTATUS_DATE_FIELDS = [];

export const [, , LitterStatus_SCHEMA] = createInjectionToken(() => ({
  uid: "9167f0b6-0e77-49d6-a71d-b0777a1c8188",
  rows: 60,
  type: "LitterStatus",
  caption: "Status",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "LitterStatus",
  fieldsConfig: LITTERSTATUS_FIELD_CONFIG,
  entitiesColumns: LITTERSTATUS_ENTITY_COLUMNS
}));

export const LETTER_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "736c30a7-c0ec-4fa9-b034-2552b319b633", name: "Name", caption: "Name", levelAccess: 1 },
  Description: { type: "string", id: "Description", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9e53fd7c-dde4-4502-a64c-b9e34148108b", name: "Description", caption: "Description", levelAccess: 1 }
} as const;

export const LETTER_ENTITY_COLUMNS = [
  "Name",
  "Id"
];

export const LETTER_DATE_FIELDS = [];

export const [, , Letter_SCHEMA] = createInjectionToken(() => ({
  uid: "515b3199-6b62-4155-a525-54b1c9775add",
  rows: 60,
  type: "Letter",
  caption: "Letter",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "Letter",
  fieldsConfig: LETTER_FIELD_CONFIG,
  entitiesColumns: LETTER_ENTITY_COLUMNS
}));

export const BREEDCATEGORY_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "736c30a7-c0ec-4fa9-b034-2552b319b633", name: "Name", caption: "Name", levelAccess: 1 },
  Description: { type: "string", id: "Description", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9e53fd7c-dde4-4502-a64c-b9e34148108b", name: "Description", caption: "Description", levelAccess: 1 }
} as const;

export const BREEDCATEGORY_ENTITY_COLUMNS = [
  "Name",
  "Id"
];

export const BREEDCATEGORY_DATE_FIELDS = [];

export const [, , BreedCategory_SCHEMA] = createInjectionToken(() => ({
  uid: "ff0a44d4-dd91-bbe5-7a3b-14553943b4f8",
  rows: 60,
  type: "BreedCategory",
  caption: "Category",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "BreedCategory",
  fieldsConfig: BREEDCATEGORY_FIELD_CONFIG,
  entitiesColumns: BREEDCATEGORY_ENTITY_COLUMNS
}));

export const PROJECTTYPE_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "736c30a7-c0ec-4fa9-b034-2552b319b633", name: "Name", caption: "Name", levelAccess: 1 },
  Description: { type: "string", id: "Description", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9e53fd7c-dde4-4502-a64c-b9e34148108b", name: "Description", caption: "Description", levelAccess: 1 }
} as const;

export const PROJECTTYPE_ENTITY_COLUMNS = [
  "Name",
  "Id"
];

export const PROJECTTYPE_DATE_FIELDS = [];

export const [, , ProjectType_SCHEMA] = createInjectionToken(() => ({
  uid: "e0d39946-16ca-4649-b6fb-1be29312f709",
  rows: 60,
  type: "ProjectType",
  caption: "Type",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "ProjectType",
  fieldsConfig: PROJECTTYPE_FIELD_CONFIG,
  entitiesColumns: PROJECTTYPE_ENTITY_COLUMNS
}));

export const PROJECTSTATUS_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "736c30a7-c0ec-4fa9-b034-2552b319b633", name: "Name", caption: "Name", levelAccess: 1 },
  IsFinal: { type: "boolean", id: "IsFinal", rows: 0, component: 5, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "d133f56e-288a-4ce7-93c5-b84b02ebe33a", name: "IsFinal", caption: "Final", levelAccess: 1 },
  Description: { type: "string", id: "Description", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9e53fd7c-dde4-4502-a64c-b9e34148108b", name: "Description", caption: "Description", levelAccess: 1 }
} as const;

export const PROJECTSTATUS_ENTITY_COLUMNS = [
  "Name",
  "Id"
];

export const PROJECTSTATUS_DATE_FIELDS = [];

export const [, , ProjectStatus_SCHEMA] = createInjectionToken(() => ({
  uid: "e1829b39-9b37-4a34-9e33-18fc056fdcbd",
  rows: 60,
  type: "ProjectStatus",
  caption: "Status",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "ProjectStatus",
  fieldsConfig: PROJECTSTATUS_FIELD_CONFIG,
  entitiesColumns: PROJECTSTATUS_ENTITY_COLUMNS
}));

export const PROJECTCATEGORY_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "736c30a7-c0ec-4fa9-b034-2552b319b633", name: "Name", caption: "Name", levelAccess: 1 },
  EventType: { type: "EventType", id: "EventType", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "EventType", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "cd78fe76-eaa0-86ed-efa6-87e17bcf1982", name: "EventType", caption: "Event type", levelAccess: 1 },
  Description: { type: "string", id: "Description", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9e53fd7c-dde4-4502-a64c-b9e34148108b", name: "Description", caption: "Description", levelAccess: 1 }
} as const;

export const PROJECTCATEGORY_ENTITY_COLUMNS = [
  "Name",
  "Id",
  "EventType.Id",
  "EventType.Name"
];

export const PROJECTCATEGORY_DATE_FIELDS = [];

export const [, , ProjectCategory_SCHEMA] = createInjectionToken(() => ({
  uid: "6b92ae8a-365a-4320-b9fe-8c2ea2db1014",
  rows: 60,
  type: "ProjectCategory",
  caption: "Category",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "ProjectCategory",
  fieldsConfig: PROJECTCATEGORY_FIELD_CONFIG,
  entitiesColumns: PROJECTCATEGORY_ENTITY_COLUMNS
}));

export const POSTTYPE_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "736c30a7-c0ec-4fa9-b034-2552b319b633", name: "Name", caption: "Name", levelAccess: 1 },
  CreatedBy: { type: "Contact", id: "CreatedBy", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ebf6bb93-8aa6-4a01-900d-c6ea67affe21", name: "CreatedBy", caption: "Created by", levelAccess: 1 },
  CreatedOn: { type: "Date", id: "CreatedOn", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "e80190a5-03b2-4095-90f7-a193a960adee", name: "CreatedOn", caption: "Created on", levelAccess: 1 },
  ModifiedBy: { type: "Contact", id: "ModifiedBy", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "3015559e-cbc6-406a-88af-07f7930be832", name: "ModifiedBy", caption: "Modified by", levelAccess: 1 },
  ModifiedOn: { type: "Date", id: "ModifiedOn", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9928edec-4272-425a-93bb-48743fee4b04", name: "ModifiedOn", caption: "Modified on", levelAccess: 1 },
  Description: { type: "string", id: "Description", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9e53fd7c-dde4-4502-a64c-b9e34148108b", name: "Description", caption: "Description", levelAccess: 1 },
  TemplateText: { type: "string", id: "TemplateText", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, max: 250, uid: "3d72df4f-dc09-9dd4-98d4-e9b5283792bf", name: "TemplateText", caption: "Template text", levelAccess: 1 }
} as const;

export const POSTTYPE_ENTITY_COLUMNS = [
  "Name",
  "Id",
  "CreatedBy.Id",
  "CreatedBy.Name",
  "ModifiedBy.Id",
  "ModifiedBy.Name"
];

export const POSTTYPE_DATE_FIELDS = [];

export const [, , PostType_SCHEMA] = createInjectionToken(() => ({
  uid: "0117c33e-96d8-4be4-e86e-2cd8221f5b37",
  rows: 60,
  type: "PostType",
  caption: "Type",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "PostType",
  fieldsConfig: POSTTYPE_FIELD_CONFIG,
  entitiesColumns: POSTTYPE_ENTITY_COLUMNS
}));

export const POSTSTATE_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "736c30a7-c0ec-4fa9-b034-2552b319b633", name: "Name", caption: "Name", levelAccess: 1 },
  CreatedBy: { type: "Contact", id: "CreatedBy", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ebf6bb93-8aa6-4a01-900d-c6ea67affe21", name: "CreatedBy", caption: "Created by", levelAccess: 1 },
  CreatedOn: { type: "Date", id: "CreatedOn", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "e80190a5-03b2-4095-90f7-a193a960adee", name: "CreatedOn", caption: "Created on", levelAccess: 1 },
  ModifiedBy: { type: "Contact", id: "ModifiedBy", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "3015559e-cbc6-406a-88af-07f7930be832", name: "ModifiedBy", caption: "Modified by", levelAccess: 1 },
  ModifiedOn: { type: "Date", id: "ModifiedOn", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9928edec-4272-425a-93bb-48743fee4b04", name: "ModifiedOn", caption: "Modified on", levelAccess: 1 },
  Description: { type: "string", id: "Description", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9e53fd7c-dde4-4502-a64c-b9e34148108b", name: "Description", caption: "Description", levelAccess: 1 }
} as const;

export const POSTSTATE_ENTITY_COLUMNS = [
  "Name",
  "Id",
  "CreatedBy.Id",
  "CreatedBy.Name",
  "ModifiedBy.Id",
  "ModifiedBy.Name"
];

export const POSTSTATE_DATE_FIELDS = [];

export const [, , PostState_SCHEMA] = createInjectionToken(() => ({
  uid: "8a833895-feef-7131-2ea9-87ee28abd064",
  rows: 60,
  type: "PostState",
  caption: "State",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "PostState",
  fieldsConfig: POSTSTATE_FIELD_CONFIG,
  entitiesColumns: POSTSTATE_ENTITY_COLUMNS
}));

export const BREEDPRIDECOLLECTIONTYPE_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "736c30a7-c0ec-4fa9-b034-2552b319b633", name: "Name", caption: "Name", levelAccess: 1 },
  CreatedBy: { type: "Contact", id: "CreatedBy", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ebf6bb93-8aa6-4a01-900d-c6ea67affe21", name: "CreatedBy", caption: "Created by", levelAccess: 1 },
  CreatedOn: { type: "Date", id: "CreatedOn", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "e80190a5-03b2-4095-90f7-a193a960adee", name: "CreatedOn", caption: "Created on", levelAccess: 1 },
  ModifiedBy: { type: "Contact", id: "ModifiedBy", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "3015559e-cbc6-406a-88af-07f7930be832", name: "ModifiedBy", caption: "Modified by", levelAccess: 1 },
  ModifiedOn: { type: "Date", id: "ModifiedOn", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9928edec-4272-425a-93bb-48743fee4b04", name: "ModifiedOn", caption: "Modified on", levelAccess: 1 },
  Description: { type: "string", id: "Description", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9e53fd7c-dde4-4502-a64c-b9e34148108b", name: "Description", caption: "Description", levelAccess: 1 }
} as const;

export const BREEDPRIDECOLLECTIONTYPE_ENTITY_COLUMNS = [
  "Name",
  "Id",
  "CreatedBy.Id",
  "CreatedBy.Name",
  "ModifiedBy.Id",
  "ModifiedBy.Name"
];

export const BREEDPRIDECOLLECTIONTYPE_DATE_FIELDS = [];

export const [, , BreedprideCollectionType_SCHEMA] = createInjectionToken(() => ({
  uid: "f9c6cd1d-abf8-a859-eeac-b169db3547a3",
  rows: 60,
  type: "BreedprideCollectionType",
  caption: "Type",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "BreedprideCollectionType",
  fieldsConfig: BREEDPRIDECOLLECTIONTYPE_FIELD_CONFIG,
  entitiesColumns: BREEDPRIDECOLLECTIONTYPE_ENTITY_COLUMNS
}));

export const EVENTTYPE_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "736c30a7-c0ec-4fa9-b034-2552b319b633", name: "Name", caption: "Name", levelAccess: 2 },
  CreatedBy: { type: "Contact", id: "CreatedBy", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ebf6bb93-8aa6-4a01-900d-c6ea67affe21", name: "CreatedBy", caption: "Created by", levelAccess: 1 },
  CreatedOn: { type: "Date", id: "CreatedOn", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "e80190a5-03b2-4095-90f7-a193a960adee", name: "CreatedOn", caption: "Created on", levelAccess: 1 },
  ModifiedBy: { type: "Contact", id: "ModifiedBy", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "3015559e-cbc6-406a-88af-07f7930be832", name: "ModifiedBy", caption: "Modified by", levelAccess: 1 },
  ModifiedOn: { type: "Date", id: "ModifiedOn", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9928edec-4272-425a-93bb-48743fee4b04", name: "ModifiedOn", caption: "Modified on", levelAccess: 1 },
  Description: { type: "string", id: "Description", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9e53fd7c-dde4-4502-a64c-b9e34148108b", name: "Description", caption: "Description", levelAccess: 2 }
} as const;

export const EVENTTYPE_ENTITY_COLUMNS = [
  "Name",
  "Id",
  "CreatedBy.Id",
  "CreatedBy.Name",
  "ModifiedBy.Id",
  "ModifiedBy.Name"
];

export const EVENTTYPE_DATE_FIELDS = [];

export const [, , EventType_SCHEMA] = createInjectionToken(() => ({
  uid: "681ae3d8-644e-4c88-9f55-752ee45dd4a4",
  rows: 60,
  type: "EventType",
  caption: "Type",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "EventType",
  fieldsConfig: EVENTTYPE_FIELD_CONFIG,
  entitiesColumns: EVENTTYPE_ENTITY_COLUMNS
}));

export const EVENTSTATUS_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "736c30a7-c0ec-4fa9-b034-2552b319b633", name: "Name", caption: "Name", levelAccess: 2 },
  Color: { type: "string", id: "Color", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "cd507cda-74ca-db52-18f8-c6a09ec789d7", name: "Color", caption: "Color", levelAccess: 2 },
  CreatedBy: { type: "Contact", id: "CreatedBy", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ebf6bb93-8aa6-4a01-900d-c6ea67affe21", name: "CreatedBy", caption: "Created by", levelAccess: 1 },
  CreatedOn: { type: "Date", id: "CreatedOn", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "e80190a5-03b2-4095-90f7-a193a960adee", name: "CreatedOn", caption: "Created on", levelAccess: 1 },
  ModifiedBy: { type: "Contact", id: "ModifiedBy", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "3015559e-cbc6-406a-88af-07f7930be832", name: "ModifiedBy", caption: "Modified by", levelAccess: 1 },
  ModifiedOn: { type: "Date", id: "ModifiedOn", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9928edec-4272-425a-93bb-48743fee4b04", name: "ModifiedOn", caption: "Modified on", levelAccess: 1 },
  Description: { type: "string", id: "Description", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9e53fd7c-dde4-4502-a64c-b9e34148108b", name: "Description", caption: "Description", levelAccess: 2 }
} as const;

export const EVENTSTATUS_ENTITY_COLUMNS = [
  "Name",
  "Id",
  "ModifiedBy.Id",
  "ModifiedBy.Name",
  "CreatedBy.Id",
  "CreatedBy.Name"
];

export const EVENTSTATUS_DATE_FIELDS = [];

export const [, , EventStatus_SCHEMA] = createInjectionToken(() => ({
  uid: "3284033b-d83d-4f37-b7a9-b89bef88a8af",
  rows: 60,
  type: "EventStatus",
  caption: "Status",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "EventStatus",
  fieldsConfig: EVENTSTATUS_FIELD_CONFIG,
  entitiesColumns: EVENTSTATUS_ENTITY_COLUMNS
}));

export const TERRITORY_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "736c30a7-c0ec-4fa9-b034-2552b319b633", name: "Name", caption: "Name", levelAccess: 1 },
  Description: { type: "string", id: "Description", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9e53fd7c-dde4-4502-a64c-b9e34148108b", name: "Description", caption: "Description", levelAccess: 1 }
} as const;

export const TERRITORY_ENTITY_COLUMNS = [
  "Name",
  "Id"
];

export const TERRITORY_DATE_FIELDS = [];

export const [, , Territory_SCHEMA] = createInjectionToken(() => ({
  uid: "82c6a0b8-0cc6-483b-8177-2d6d3eab0d73",
  rows: 60,
  type: "Territory",
  caption: "Territory",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "Territory",
  fieldsConfig: TERRITORY_FIELD_CONFIG,
  entitiesColumns: TERRITORY_ENTITY_COLUMNS
}));

export const ACCOUNTINDUSTRY_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "736c30a7-c0ec-4fa9-b034-2552b319b633", name: "Name", caption: "Name", levelAccess: 1 },
  PetType: { type: "PetType", id: "PetType", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "PetType", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "14764acb-eab5-42aa-23b5-53c10af03bb9", name: "PetType", caption: "Pet type", levelAccess: 1 },
  Description: { type: "string", id: "Description", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9e53fd7c-dde4-4502-a64c-b9e34148108b", name: "Description", caption: "Description", levelAccess: 1 }
} as const;

export const ACCOUNTINDUSTRY_ENTITY_COLUMNS = [
  "Name",
  "Id",
  "PetType.Id",
  "PetType.Name"
];

export const ACCOUNTINDUSTRY_DATE_FIELDS = [];

export const [, , AccountIndustry_SCHEMA] = createInjectionToken(() => ({
  uid: "f209390f-73a2-47ae-97b9-fcd541bfd5dc",
  rows: 60,
  type: "AccountIndustry",
  caption: "Industry",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "AccountIndustry",
  fieldsConfig: ACCOUNTINDUSTRY_FIELD_CONFIG,
  entitiesColumns: ACCOUNTINDUSTRY_ENTITY_COLUMNS
}));

export const COVERTYPE_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "736c30a7-c0ec-4fa9-b034-2552b319b633", name: "Name", caption: "Name", levelAccess: 1 },
  System: { type: "boolean", id: "System", rows: 0, component: 5, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "a7eb27c3-5645-9a50-8568-36225dae45dd", name: "System", caption: "System", levelAccess: 1 },
  Priority: { type: "number", id: "Priority", rows: 0, component: 4, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "66ddd2b2-0892-49d7-99ac-c6cff4235376", name: "Priority", caption: "Priority", levelAccess: 1 },
  Description: { type: "string", id: "Description", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9e53fd7c-dde4-4502-a64c-b9e34148108b", name: "Description", caption: "Description", levelAccess: 1 }
} as const;

export const COVERTYPE_ENTITY_COLUMNS = [
  "Name",
  "Id"
];

export const COVERTYPE_DATE_FIELDS = [];

export const [, , CoverType_SCHEMA] = createInjectionToken(() => ({
  uid: "84e832fe-398e-899a-a03f-b4b61cbcf1f4",
  rows: 60,
  type: "CoverType",
  caption: "Type",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "CoverType",
  fieldsConfig: COVERTYPE_FIELD_CONFIG,
  entitiesColumns: COVERTYPE_ENTITY_COLUMNS
}));

export const ENTITYSCHEMALOOKUP_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "736c30a7-c0ec-4fa9-b034-2552b319b633", name: "Name", caption: "Name", levelAccess: 1 },
  IsPublic: { type: "boolean", id: "IsPublic", rows: 0, component: 5, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "b5c1ae13-b5b9-4647-64f7-6fab02a7038b", name: "IsPublic", caption: "Is public", levelAccess: 1 },
  CreatedBy: { type: "Contact", id: "CreatedBy", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ebf6bb93-8aa6-4a01-900d-c6ea67affe21", name: "CreatedBy", caption: "Created by", levelAccess: 1 },
  CreatedOn: { type: "Date", id: "CreatedOn", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "e80190a5-03b2-4095-90f7-a193a960adee", name: "CreatedOn", caption: "Created on", levelAccess: 1 },
  ModifiedBy: { type: "Contact", id: "ModifiedBy", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "3015559e-cbc6-406a-88af-07f7930be832", name: "ModifiedBy", caption: "Modified by", levelAccess: 1 },
  ModifiedOn: { type: "Date", id: "ModifiedOn", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9928edec-4272-425a-93bb-48743fee4b04", name: "ModifiedOn", caption: "Modified on", levelAccess: 1 },
  PublicName: { type: "string", id: "PublicName", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "01926bc9-a025-5d79-1e6d-72a97dd32b93", name: "PublicName", caption: "Public name", levelAccess: 1 },
  Description: { type: "string", id: "Description", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9e53fd7c-dde4-4502-a64c-b9e34148108b", name: "Description", caption: "Description", levelAccess: 1 }
} as const;

export const ENTITYSCHEMALOOKUP_ENTITY_COLUMNS = [
  "Name",
  "Id",
  "CreatedBy.Id",
  "CreatedBy.Name",
  "ModifiedBy.Id",
  "ModifiedBy.Name"
];

export const ENTITYSCHEMALOOKUP_DATE_FIELDS = [];

export const [, , EntitySchemaLookup_SCHEMA] = createInjectionToken(() => ({
  uid: "edb17c7e-f9a9-1545-4261-76b4356a9f7c",
  rows: 60,
  type: "EntitySchemaLookup",
  caption: "Entity schema",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "EntitySchemaLookup",
  fieldsConfig: ENTITYSCHEMALOOKUP_FIELD_CONFIG,
  entitiesColumns: ENTITYSCHEMALOOKUP_ENTITY_COLUMNS
}));

export const ACCOUNTOWNERSHIP_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "736c30a7-c0ec-4fa9-b034-2552b319b633", name: "Name", caption: "Name", levelAccess: 1 },
  Country: { type: "Country", id: "Country", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Country", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "bd9ec46e-6371-466e-87ec-1adf995e47c7", name: "Country", caption: "Country", levelAccess: 1 },
  Description: { type: "string", id: "Description", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9e53fd7c-dde4-4502-a64c-b9e34148108b", name: "Description", caption: "Description", levelAccess: 1 }
} as const;

export const ACCOUNTOWNERSHIP_ENTITY_COLUMNS = [
  "Name",
  "Id",
  "Country.Id",
  "Country.Name"
];

export const ACCOUNTOWNERSHIP_DATE_FIELDS = [];

export const [, , AccountOwnership_SCHEMA] = createInjectionToken(() => ({
  uid: "dedb8f3b-4cb0-46ec-99e8-483ab92e10bb",
  rows: 60,
  type: "AccountOwnership",
  caption: "Business entity",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "AccountOwnership",
  fieldsConfig: ACCOUNTOWNERSHIP_FIELD_CONFIG,
  entitiesColumns: ACCOUNTOWNERSHIP_ENTITY_COLUMNS
}));

export const ACCOUNTTYPE_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "736c30a7-c0ec-4fa9-b034-2552b319b633", name: "Name", caption: "Name", levelAccess: 1 },
  Description: { type: "string", id: "Description", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9e53fd7c-dde4-4502-a64c-b9e34148108b", name: "Description", caption: "Description", levelAccess: 1 },
  RawDataModel: { type: "string", id: "RawDataModel", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "e7a824eb-3c72-a450-b4ed-a708e797831f", name: "RawDataModel", caption: "Raw data model", levelAccess: 1 }
} as const;

export const ACCOUNTTYPE_ENTITY_COLUMNS = [
  "Name",
  "Id"
];

export const ACCOUNTTYPE_DATE_FIELDS = [];

export const [, , AccountType_SCHEMA] = createInjectionToken(() => ({
  uid: "d60a9c06-1170-4cd6-9dc1-c972bc451533",
  rows: 60,
  type: "AccountType",
  caption: "Type",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "AccountType",
  fieldsConfig: ACCOUNTTYPE_FIELD_CONFIG,
  entitiesColumns: ACCOUNTTYPE_ENTITY_COLUMNS
}));

export const ACCOUNTCATEGORY_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "736c30a7-c0ec-4fa9-b034-2552b319b633", name: "Name", caption: "Name", levelAccess: 1 },
  Description: { type: "string", id: "Description", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9e53fd7c-dde4-4502-a64c-b9e34148108b", name: "Description", caption: "Description", levelAccess: 1 }
} as const;

export const ACCOUNTCATEGORY_ENTITY_COLUMNS = [
  "Name",
  "Id"
];

export const ACCOUNTCATEGORY_DATE_FIELDS = [];

export const [, , AccountCategory_SCHEMA] = createInjectionToken(() => ({
  uid: "0039b8f7-f5cf-44c9-8828-4b9cb2fd6634",
  rows: 60,
  type: "AccountCategory",
  caption: "Category",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "AccountCategory",
  fieldsConfig: ACCOUNTCATEGORY_FIELD_CONFIG,
  entitiesColumns: ACCOUNTCATEGORY_ENTITY_COLUMNS
}));

export const ACCOUNTSTATUS_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "736c30a7-c0ec-4fa9-b034-2552b319b633", name: "Name", caption: "Name", levelAccess: 1 },
  Description: { type: "string", id: "Description", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9e53fd7c-dde4-4502-a64c-b9e34148108b", name: "Description", caption: "Description", levelAccess: 1 }
} as const;

export const ACCOUNTSTATUS_ENTITY_COLUMNS = [
  "Name",
  "Id"
];

export const ACCOUNTSTATUS_DATE_FIELDS = [];

export const [, , AccountStatus_SCHEMA] = createInjectionToken(() => ({
  uid: "39fb80c9-f104-8167-18f6-b80f3f3cff5d",
  rows: 60,
  type: "AccountStatus",
  caption: "Status",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "AccountStatus",
  fieldsConfig: ACCOUNTSTATUS_FIELD_CONFIG,
  entitiesColumns: ACCOUNTSTATUS_ENTITY_COLUMNS
}));

export const AFFIXTYPE_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "736c30a7-c0ec-4fa9-b034-2552b319b633", name: "Name", caption: "Name", levelAccess: 1 },
  Description: { type: "string", id: "Description", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9e53fd7c-dde4-4502-a64c-b9e34148108b", name: "Description", caption: "Description", levelAccess: 1 }
} as const;

export const AFFIXTYPE_ENTITY_COLUMNS = [
  "Name",
  "Id"
];

export const AFFIXTYPE_DATE_FIELDS = [];

export const [, , AffixType_SCHEMA] = createInjectionToken(() => ({
  uid: "dce6a4c2-78a7-4b4f-bed2-b9718e5c82b5",
  rows: 60,
  type: "AffixType",
  caption: "Affix type",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "AffixType",
  fieldsConfig: AFFIXTYPE_FIELD_CONFIG,
  entitiesColumns: AFFIXTYPE_ENTITY_COLUMNS
}));

export const TIMEZONE_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Code: { type: "string", id: "Code", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "13aad544-ec30-4e76-a373-f0cff3202e24", name: "Code", caption: "Code", levelAccess: 2 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "736c30a7-c0ec-4fa9-b034-2552b319b633", name: "Name", caption: "Name", levelAccess: 2 },
  Offset: { type: "string", id: "Offset", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "d76d123f-4b5e-4751-b093-10c91e4569d3", name: "Offset", caption: "Time zone offset", levelAccess: 2 },
  CreatedBy: { type: "Contact", id: "CreatedBy", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ebf6bb93-8aa6-4a01-900d-c6ea67affe21", name: "CreatedBy", caption: "Created by", levelAccess: 1 },
  CreatedOn: { type: "Date", id: "CreatedOn", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "e80190a5-03b2-4095-90f7-a193a960adee", name: "CreatedOn", caption: "Created on", levelAccess: 1 },
  ModifiedBy: { type: "Contact", id: "ModifiedBy", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Contact", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "3015559e-cbc6-406a-88af-07f7930be832", name: "ModifiedBy", caption: "Modified by", levelAccess: 1 },
  ModifiedOn: { type: "Date", id: "ModifiedOn", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9928edec-4272-425a-93bb-48743fee4b04", name: "ModifiedOn", caption: "Modified on", levelAccess: 1 },
  Description: { type: "string", id: "Description", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9e53fd7c-dde4-4502-a64c-b9e34148108b", name: "Description", caption: "Description", levelAccess: 2 },
  CodeAmerican: { type: "string", id: "CodeAmerican", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "6f350478-e465-4e81-8df2-59426ebd2890", name: "CodeAmerican", caption: "American code", levelAccess: 2 }
} as const;

export const TIMEZONE_ENTITY_COLUMNS = [
  "Name",
  "Id",
  "CreatedBy.Id",
  "CreatedBy.Name",
  "ModifiedBy.Id",
  "ModifiedBy.Name"
];

export const TIMEZONE_DATE_FIELDS = [];

export const [, , TimeZone_SCHEMA] = createInjectionToken(() => ({
  uid: "8ff41b5d-ef8e-4f95-bc96-07b5d595a3eb",
  rows: 60,
  type: "TimeZone",
  caption: "Time zone",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "TimeZone",
  fieldsConfig: TIMEZONE_FIELD_CONFIG,
  entitiesColumns: TIMEZONE_ENTITY_COLUMNS
}));

export const GEONAMESTIMEZONE_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "736c30a7-c0ec-4fa9-b034-2552b319b633", name: "Name", caption: "Name", levelAccess: 1 },
  GMTOffset: { type: "number", id: "GMTOffset", rows: 0, component: 4, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "6a1086db-b580-a4fb-703d-6161cee824ce", name: "GMTOffset", caption: "GMT Offset", levelAccess: 1 },
  CountryCode: { type: "string", id: "CountryCode", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "1961d7f3-45c4-687f-0fba-0d346167407c", name: "CountryCode", caption: "Country Code", levelAccess: 1 },
  Description: { type: "string", id: "Description", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9e53fd7c-dde4-4502-a64c-b9e34148108b", name: "Description", caption: "Description", levelAccess: 1 }
} as const;

export const GEONAMESTIMEZONE_ENTITY_COLUMNS = [
  "Name",
  "Id"
];

export const GEONAMESTIMEZONE_DATE_FIELDS = [];

export const [, , GeoNamesTimeZone_SCHEMA] = createInjectionToken(() => ({
  uid: "8dc674f9-4ea6-52c5-65e3-607ababf2c8b",
  rows: 60,
  type: "GeoNamesTimeZone",
  caption: "GeoNames TimeZone",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "GeoNamesTimeZone",
  fieldsConfig: GEONAMESTIMEZONE_FIELD_CONFIG,
  entitiesColumns: GEONAMESTIMEZONE_ENTITY_COLUMNS
}));

export const BREEDSTANDARD_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Code: { type: "string", id: "Code", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "c2210d75-3176-be51-74b6-2105a8a51c41", name: "Code", caption: "Code", levelAccess: 1 },
  Link: { type: "string", id: "Link", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "a40f2c47-bd4c-627b-88cb-7e6eb9de80b7", name: "Link", caption: "Link", levelAccess: 1 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "4a8217ae-5472-317f-2486-48e9dfdeb100", name: "Name", caption: "Name", levelAccess: 1 },
  Breed: { type: "Breed", id: "Breed", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Breed", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "1cd14d70-2af6-65a1-7de2-9a7302de7556", name: "Breed", caption: "Breed", levelAccess: 1 },
  Group: { type: "BreedGroup", id: "Group", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "BreedGroup", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "053ef93f-efe4-6580-ed92-330fc4444c5b", name: "Group", caption: "Group", levelAccess: 1 },
  Status: { type: "BreedStandardStatus", id: "Status", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "BreedStandardStatus", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "5bf83758-5e4b-b937-3945-2774b05d924a", name: "Status", caption: "Status", levelAccess: 1 },
  Section: { type: "BreedSection", id: "Section", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "BreedSection", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "cbed3bc0-0fa3-1273-3ea7-06eea3e369f5", name: "Section", caption: "Section", levelAccess: 1 },
  Approved: { type: "Date", id: "Approved", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "d9b750b2-ccf0-4889-bc45-97c3ebe59430", name: "Approved", caption: "Approved", levelAccess: 1 },
  Provider: { type: "Account", id: "Provider", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Account", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "efb57aef-19a1-066e-8c9f-d09e3eef3ace", name: "Provider", caption: "Provider", levelAccess: 1 },
  Effective: { type: "Date", id: "Effective", rows: 0, component: 3, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9d7bd825-25fb-c63b-d65b-671593cdab35", name: "Effective", caption: "Effective", levelAccess: 1 },
  Subsection: { type: "BreedSubsection", id: "Subsection", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "BreedSubsection", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "b3c76510-2739-9f69-8cb6-ecc9dbc87fe2", name: "Subsection", caption: "Subsection", levelAccess: 1 },
  WorkingTrial: { type: "boolean", id: "WorkingTrial", rows: 0, component: 5, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "810979b1-83c7-64bf-8187-716dedc1995b", name: "WorkingTrial", caption: "Working trial", levelAccess: 1 },
  HasVariableDivisions: { type: "boolean", id: "HasVariableDivisions", rows: 0, component: 5, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "6baf03a9-fb51-4098-7940-6b805dd96b9b", name: "HasVariableDivisions", caption: "Has variable divisions", levelAccess: 1 }
} as const;

export const BREEDSTANDARD_ENTITY_COLUMNS = [
  "Name",
  "Id",
  "Breed.Id",
  "Breed.Name",
  "Group.Id",
  "Group.Name",
  "Provider.Id",
  "Provider.Name",
  "Section.Id",
  "Section.Name",
  "Status.Id",
  "Status.Name",
  "Subsection.Id",
  "Subsection.Name"
];

export const BREEDSTANDARD_DATE_FIELDS = [];

export const [, , BreedStandard_SCHEMA] = createInjectionToken(() => ({
  uid: "7ac9ddfc-4117-4494-1de4-bdd8d0d301f0",
  rows: 60,
  type: "BreedStandard",
  caption: "Breed standard",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "BreedStandard",
  fieldsConfig: BREEDSTANDARD_FIELD_CONFIG,
  entitiesColumns: BREEDSTANDARD_ENTITY_COLUMNS
}));

export const STUDBOOKSTATUS_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "736c30a7-c0ec-4fa9-b034-2552b319b633", name: "Name", caption: "Name", levelAccess: 1 },
  Description: { type: "string", id: "Description", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9e53fd7c-dde4-4502-a64c-b9e34148108b", name: "Description", caption: "Description", levelAccess: 1 }
} as const;

export const STUDBOOKSTATUS_ENTITY_COLUMNS = [
  "Name",
  "Id"
];

export const STUDBOOKSTATUS_DATE_FIELDS = [];

export const [, , StudbookStatus_SCHEMA] = createInjectionToken(() => ({
  uid: "16e514bc-f451-0191-f7f4-5802d5428cef",
  rows: 60,
  type: "StudbookStatus",
  caption: "Status",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "StudbookStatus",
  fieldsConfig: STUDBOOKSTATUS_FIELD_CONFIG,
  entitiesColumns: STUDBOOKSTATUS_ENTITY_COLUMNS
}));

export const STUDBOOKTYPE_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "736c30a7-c0ec-4fa9-b034-2552b319b633", name: "Name", caption: "Name", levelAccess: 1 },
  Description: { type: "string", id: "Description", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9e53fd7c-dde4-4502-a64c-b9e34148108b", name: "Description", caption: "Description", levelAccess: 1 }
} as const;

export const STUDBOOKTYPE_ENTITY_COLUMNS = [
  "Name",
  "Id"
];

export const STUDBOOKTYPE_DATE_FIELDS = [];

export const [, , StudbookType_SCHEMA] = createInjectionToken(() => ({
  uid: "8e8a5d63-fd37-8999-bb02-a843475ba50a",
  rows: 60,
  type: "StudbookType",
  caption: "Type",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "StudbookType",
  fieldsConfig: STUDBOOKTYPE_FIELD_CONFIG,
  entitiesColumns: STUDBOOKTYPE_ENTITY_COLUMNS
}));

export const PERIODTYPE_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "736c30a7-c0ec-4fa9-b034-2552b319b633", name: "Name", caption: "Name", levelAccess: 1 },
  Description: { type: "string", id: "Description", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9e53fd7c-dde4-4502-a64c-b9e34148108b", name: "Description", caption: "Description", levelAccess: 1 }
} as const;

export const PERIODTYPE_ENTITY_COLUMNS = [
  "Name",
  "Id"
];

export const PERIODTYPE_DATE_FIELDS = [];

export const [, , PeriodType_SCHEMA] = createInjectionToken(() => ({
  uid: "28325522-3317-4110-a881-cf22df0f5dba",
  rows: 60,
  type: "PeriodType",
  caption: "Period type",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "PeriodType",
  fieldsConfig: PERIODTYPE_FIELD_CONFIG,
  entitiesColumns: PERIODTYPE_ENTITY_COLUMNS
}));

export const BREEDSUBSECTION_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Code: { type: "number", id: "Code", rows: 0, component: 4, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "31efb028-c06c-33af-363e-d2d6d3f6cb48", name: "Code", caption: "Code", levelAccess: 1 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "736c30a7-c0ec-4fa9-b034-2552b319b633", name: "Name", caption: "Name", levelAccess: 1 },
  BreedGroup: { type: "BreedGroup", id: "BreedGroup", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "BreedGroup", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "59314ac6-1d0b-14a0-f75a-9faf38bbbc7c", name: "BreedGroup", caption: "Group", levelAccess: 1 },
  Description: { type: "string", id: "Description", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9e53fd7c-dde4-4502-a64c-b9e34148108b", name: "Description", caption: "Description", levelAccess: 1 },
  BreedSection: { type: "BreedSection", id: "BreedSection", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "BreedSection", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9b276607-e16d-5c55-96bd-e2f663993ebc", name: "BreedSection", caption: "Section", levelAccess: 1 }
} as const;

export const BREEDSUBSECTION_ENTITY_COLUMNS = [
  "Name",
  "Id",
  "BreedSection.Id",
  "BreedSection.Name",
  "BreedGroup.Id",
  "BreedGroup.Name"
];

export const BREEDSUBSECTION_DATE_FIELDS = [];

export const [, , BreedSubsection_SCHEMA] = createInjectionToken(() => ({
  uid: "b3c76510-2739-9f69-8cb6-ecc9dbc87fe2",
  rows: 60,
  type: "BreedSubsection",
  caption: "Subsection",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "BreedSubsection",
  fieldsConfig: BREEDSUBSECTION_FIELD_CONFIG,
  entitiesColumns: BREEDSUBSECTION_ENTITY_COLUMNS
}));

export const BREEDSECTION_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Code: { type: "number", id: "Code", rows: 0, component: 4, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "63b32863-67a9-b24e-d49f-2cb73e41d27d", name: "Code", caption: "Code", levelAccess: 1 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "736c30a7-c0ec-4fa9-b034-2552b319b633", name: "Name", caption: "Name", levelAccess: 1 },
  BreedGroup: { type: "BreedGroup", id: "BreedGroup", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "BreedGroup", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "b9a73fef-7a27-c822-2c06-dcad2d8457e2", name: "BreedGroup", caption: "Group", levelAccess: 1 },
  Description: { type: "string", id: "Description", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9e53fd7c-dde4-4502-a64c-b9e34148108b", name: "Description", caption: "Description", levelAccess: 1 }
} as const;

export const BREEDSECTION_ENTITY_COLUMNS = [
  "Name",
  "Id",
  "BreedGroup.Id",
  "BreedGroup.Name"
];

export const BREEDSECTION_DATE_FIELDS = [];

export const [, , BreedSection_SCHEMA] = createInjectionToken(() => ({
  uid: "cbed3bc0-0fa3-1273-3ea7-06eea3e369f5",
  rows: 60,
  type: "BreedSection",
  caption: "Section",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "BreedSection",
  fieldsConfig: BREEDSECTION_FIELD_CONFIG,
  entitiesColumns: BREEDSECTION_ENTITY_COLUMNS
}));

export const BREEDGROUP_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Code: { type: "number", id: "Code", rows: 0, component: 4, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ce90e76f-3dd0-c009-a8fa-57602f3eadb9", name: "Code", caption: "Code", levelAccess: 1 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "736c30a7-c0ec-4fa9-b034-2552b319b633", name: "Name", caption: "Name", levelAccess: 1 },
  Provider: { type: "Account", id: "Provider", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Account", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9f7e94e3-d236-6998-ac9b-d1a0896759c4", name: "Provider", caption: "Provider", levelAccess: 1 },
  Description: { type: "string", id: "Description", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9e53fd7c-dde4-4502-a64c-b9e34148108b", name: "Description", caption: "Description", levelAccess: 1 }
} as const;

export const BREEDGROUP_ENTITY_COLUMNS = [
  "Name",
  "Id",
  "Provider.Id",
  "Provider.Name"
];

export const BREEDGROUP_DATE_FIELDS = [];

export const [, , BreedGroup_SCHEMA] = createInjectionToken(() => ({
  uid: "053ef93f-efe4-6580-ed92-330fc4444c5b",
  rows: 60,
  type: "BreedGroup",
  caption: "Group",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "BreedGroup",
  fieldsConfig: BREEDGROUP_FIELD_CONFIG,
  entitiesColumns: BREEDGROUP_ENTITY_COLUMNS
}));

export const BREEDSTANDARDSTATUS_FIELD_CONFIG = {
  Id: { type: "string", id: "Id", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "ae0e45ca-c495-4fe7-a39d-3ab7278e1617", name: "Id", caption: "Id", levelAccess: 1 },
  Name: { type: "string", id: "Name", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: true, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "736c30a7-c0ec-4fa9-b034-2552b319b633", name: "Name", caption: "Name", levelAccess: 1 },
  Provider: { type: "Account", id: "Provider", rows: 60, component: 0, dateFields: [], displayField: "Name", displayValue: ()=>"", entitiesColumns: ["Id", "Name"], entitySchemaName: "Account", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "6ec6e557-eaa6-c47c-2aa6-32e5b07aa9d0", name: "Provider", caption: "Provider", levelAccess: 1 },
  Description: { type: "string", id: "Description", rows: 0, component: 10, dateFields: [], displayField: "", displayValue: ()=>"", entitiesColumns: [], entitySchemaName: "", placeholder: "", sortConfig: [], fieldsConfig: {}, model: "", validators: [], columnClass: "", columnNgClass: "", hidden: ()=>false, readonly: true, isRequired: false, filterFn: ()=>null, getFilter: ()=>null, filterConfig: [], icon: "", initBeforeChangeFn: ()=>null, initFn: ()=>null, onChange: ()=>null, isPublic: true, uid: "9e53fd7c-dde4-4502-a64c-b9e34148108b", name: "Description", caption: "Description", levelAccess: 1 }
} as const;

export const BREEDSTANDARDSTATUS_ENTITY_COLUMNS = [
  "Name",
  "Id",
  "Provider.Id",
  "Provider.Name"
];

export const BREEDSTANDARDSTATUS_DATE_FIELDS = [];

export const [, , BreedStandardStatus_SCHEMA] = createInjectionToken(() => ({
  uid: "5bf83758-5e4b-b937-3945-2774b05d924a",
  rows: 60,
  type: "BreedStandardStatus",
  caption: "Status",
  component: 0,
  validators: [],
  displayField: "Name",
  entitySchemaName: "BreedStandardStatus",
  fieldsConfig: BREEDSTANDARDSTATUS_FIELD_CONFIG,
  entitiesColumns: BREEDSTANDARDSTATUS_ENTITY_COLUMNS
}));