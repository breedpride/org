

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { CreatedOn_DateTime} from '@bh/field/config';import { CreatedBy_Contact} from '@bh/field/config';import { ModifiedOn_DateTime} from '@bh/field/config';import { ModifiedBy_Contact} from '@bh/field/config';import { Date_Date} from '@bh/field/config';import { Currency_Currency} from '@bh/field/config';import { Price_Number} from '@bh/field/config';import { ServiceType_PetServiceType} from '@bh/field/config';import { Litter_Litter} from '@bh/field/config';import { PetServiceStatus_PetServiceStatus} from '@bh/field/config';

import { PetServiceInLitter_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_PetServiceInLitter} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, PetServiceInLitter_Plugin.Id);
const CreatedOn  =
    merge({},
      CreatedOn_DateTime, PetServiceInLitter_Plugin.CreatedOn);
const CreatedBy  =
    merge({},
      CreatedBy_Contact, PetServiceInLitter_Plugin.CreatedBy);
const ModifiedOn  =
    merge({},
      ModifiedOn_DateTime, PetServiceInLitter_Plugin.ModifiedOn);
const ModifiedBy  =
    merge({},
      ModifiedBy_Contact, PetServiceInLitter_Plugin.ModifiedBy);
const Date  =
    merge({},
      Date_Date, PetServiceInLitter_Plugin.Date);
const Currency  =
    merge({},
      Currency_Currency, PetServiceInLitter_Plugin.Currency);
const Price  =
    merge({},
      Price_Number, PetServiceInLitter_Plugin.Price);
const ServiceType  =
    merge({},
      ServiceType_PetServiceType, PetServiceInLitter_Plugin.ServiceType);
const Litter  =
    merge({},
      Litter_Litter, PetServiceInLitter_Plugin.Litter);
const PetServiceStatus  =
    merge({},
      PetServiceStatus_PetServiceStatus, PetServiceInLitter_Plugin.PetServiceStatus);


export const PETSERVICEINLITTER_FIELD_CONFIG = {

  Id,
  CreatedOn,
  CreatedBy,
  ModifiedOn,
  ModifiedBy,
  Date,
  Currency,
  Price,
  ServiceType,
  Litter,
  PetServiceStatus
} as const;


export const PETSERVICEINLITTER_ENTITY_COLUMNS = getColumns(PETSERVICEINLITTER_FIELD_CONFIG);

export const PETSERVICEINLITTER_DATE_FIELDS = [];


export const [, , PetServiceInLitter_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_PetServiceInLitter,
    fieldsConfig: PETSERVICEINLITTER_FIELD_CONFIG,
    entitiesColumns: PETSERVICEINLITTER_ENTITY_COLUMNS,
    dateColumns: getDateColumns(PETSERVICEINLITTER_FIELD_CONFIG),
  };
});

