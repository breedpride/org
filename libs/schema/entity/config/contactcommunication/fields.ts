

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { CommunicationType_CommunicationType} from '@bh/field/config';import { Number_LongText} from '@bh/field/config';import { Contact_Contact} from '@bh/field/config';import { Position_Integer} from '@bh/field/config';import { SearchNumber_LongText} from '@bh/field/config';import { Primary_Boolean} from '@bh/field/config';import { NonActual_Boolean} from '@bh/field/config';import { DateSetNonActual_Date} from '@bh/field/config';

import { ContactCommunication_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_ContactCommunication} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, ContactCommunication_Plugin.Id);
const CommunicationType  =
    merge({},
      CommunicationType_CommunicationType, ContactCommunication_Plugin.CommunicationType);
const Number  =
    merge({},
      Number_LongText, ContactCommunication_Plugin.Number);
const Contact  =
    merge({},
      Contact_Contact, ContactCommunication_Plugin.Contact);
const Position  =
    merge({},
      Position_Integer, ContactCommunication_Plugin.Position);
const SearchNumber  =
    merge({},
      SearchNumber_LongText, ContactCommunication_Plugin.SearchNumber);
const Primary  =
    merge({},
      Primary_Boolean, ContactCommunication_Plugin.Primary);
const NonActual  =
    merge({},
      NonActual_Boolean, ContactCommunication_Plugin.NonActual);
const DateSetNonActual  =
    merge({},
      DateSetNonActual_Date, ContactCommunication_Plugin.DateSetNonActual);


export const CONTACTCOMMUNICATION_FIELD_CONFIG = {

  Id,
  CommunicationType,
  Number,
  Contact,
  Position,
  SearchNumber,
  Primary,
  NonActual,
  DateSetNonActual
} as const;


export const CONTACTCOMMUNICATION_ENTITY_COLUMNS = getColumns(CONTACTCOMMUNICATION_FIELD_CONFIG);

export const CONTACTCOMMUNICATION_DATE_FIELDS = [];


export const [, , ContactCommunication_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_ContactCommunication,
    fieldsConfig: CONTACTCOMMUNICATION_FIELD_CONFIG,
    entitiesColumns: CONTACTCOMMUNICATION_ENTITY_COLUMNS,
    dateColumns: getDateColumns(CONTACTCOMMUNICATION_FIELD_CONFIG),
  };
});

