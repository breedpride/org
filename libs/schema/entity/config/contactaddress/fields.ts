

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { CreatedOn_DateTime} from '@bh/field/config';import { CreatedBy_Contact} from '@bh/field/config';import { ModifiedOn_DateTime} from '@bh/field/config';import { ModifiedBy_Contact} from '@bh/field/config';import { AddressType_AddressType} from '@bh/field/config';import { Country_Country} from '@bh/field/config';import { Region_Region} from '@bh/field/config';import { City_City} from '@bh/field/config';import { Address_MaxSizeText} from '@bh/field/config';import { Zip_ShortText} from '@bh/field/config';import { Primary_Boolean} from '@bh/field/config';import { Contact_Contact} from '@bh/field/config';import { FullAddress_MaxSizeText} from '@bh/field/config'

import { ContactAddress_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_ContactAddress} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, ContactAddress_Plugin.Id);
const CreatedOn  =
    merge({},
      CreatedOn_DateTime, ContactAddress_Plugin.CreatedOn);
const CreatedBy  =
    merge({},
      CreatedBy_Contact, ContactAddress_Plugin.CreatedBy);
const ModifiedOn  =
    merge({},
      ModifiedOn_DateTime, ContactAddress_Plugin.ModifiedOn);
const ModifiedBy  =
    merge({},
      ModifiedBy_Contact, ContactAddress_Plugin.ModifiedBy);
const AddressType  =
    merge({},
      AddressType_AddressType, ContactAddress_Plugin.AddressType);
const Country  =
    merge({},
      Country_Country, ContactAddress_Plugin.Country);
const Region  =
    merge({},
      Region_Region, ContactAddress_Plugin.Region);
const City  =
    merge({},
      City_City, ContactAddress_Plugin.City);
const Address  =
    merge({},
      Address_MaxSizeText, ContactAddress_Plugin.Address);
const Zip  =
    merge({},
      Zip_ShortText, ContactAddress_Plugin.Zip);
const Primary  =
    merge({},
      Primary_Boolean, ContactAddress_Plugin.Primary);
const Contact  =
    merge({},
      Contact_Contact, ContactAddress_Plugin.Contact);
const FullAddress  =
    merge({},
      FullAddress_MaxSizeText, ContactAddress_Plugin.FullAddress)


export const CONTACTADDRESS_FIELD_CONFIG = {

  Id,
  CreatedOn,
  CreatedBy,
  ModifiedOn,
  ModifiedBy,
  AddressType,
  Country,
  Region,
  City,
  Address,
  Zip,
  Primary,
  Contact,
  FullAddress
} as const;


export const CONTACTADDRESS_ENTITY_COLUMNS = getColumns(CONTACTADDRESS_FIELD_CONFIG);

export const CONTACTADDRESS_DATE_FIELDS = [];


export const [, , ContactAddress_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_ContactAddress,
    fieldsConfig: CONTACTADDRESS_FIELD_CONFIG,
    entitiesColumns: CONTACTADDRESS_ENTITY_COLUMNS,
    dateColumns: getDateColumns(CONTACTADDRESS_FIELD_CONFIG),
  };
});

