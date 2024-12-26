

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { CreatedOn_DateTime} from '@bh/field/config';import { CreatedBy_Contact} from '@bh/field/config';import { ModifiedOn_DateTime} from '@bh/field/config';import { ModifiedBy_Contact} from '@bh/field/config';import { ServiceType_PetServiceType} from '@bh/field/config';import { Pet_Pet} from '@bh/field/config';import { Currency_Currency} from '@bh/field/config';import { Price_Number} from '@bh/field/config';import { PetServiceStatus_PetServiceStatus} from '@bh/field/config';import { Date_Date} from '@bh/field/config'

import { PetService_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_PetService} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, PetService_Plugin.Id);
const CreatedOn  =
    merge({},
      CreatedOn_DateTime, PetService_Plugin.CreatedOn);
const CreatedBy  =
    merge({},
      CreatedBy_Contact, PetService_Plugin.CreatedBy);
const ModifiedOn  =
    merge({},
      ModifiedOn_DateTime, PetService_Plugin.ModifiedOn);
const ModifiedBy  =
    merge({},
      ModifiedBy_Contact, PetService_Plugin.ModifiedBy);
const ServiceType  =
    merge({},
      ServiceType_PetServiceType, PetService_Plugin.ServiceType);
const Pet  =
    merge({},
      Pet_Pet, PetService_Plugin.Pet);
const Currency  =
    merge({},
      Currency_Currency, PetService_Plugin.Currency);
const Price  =
    merge({},
      Price_Number, PetService_Plugin.Price);
const PetServiceStatus  =
    merge({},
      PetServiceStatus_PetServiceStatus, PetService_Plugin.PetServiceStatus);
const Date  =
    merge({},
      Date_Date, PetService_Plugin.Date)


export const PETSERVICE_FIELD_CONFIG = {

  Id,
  CreatedOn,
  CreatedBy,
  ModifiedOn,
  ModifiedBy,
  ServiceType,
  Pet,
  Currency,
  Price,
  PetServiceStatus,
  Date
} as const;


export const PETSERVICE_ENTITY_COLUMNS = getColumns(PETSERVICE_FIELD_CONFIG);

export const PETSERVICE_DATE_FIELDS = [];


export const [, , PetService_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_PetService,
    fieldsConfig: PETSERVICE_FIELD_CONFIG,
    entitiesColumns: PETSERVICE_ENTITY_COLUMNS,
    dateColumns: getDateColumns(PETSERVICE_FIELD_CONFIG),
  };
});

