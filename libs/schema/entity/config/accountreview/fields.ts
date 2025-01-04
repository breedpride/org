

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { CreatedOn_DateTime} from '@bh/field/config';import { CreatedBy_Contact} from '@bh/field/config';import { ModifiedOn_DateTime} from '@bh/field/config';import { ModifiedBy_Contact} from '@bh/field/config';import { Contact_Contact} from '@bh/field/config';import { Rating_Integer} from '@bh/field/config';import { OrderNumber_Integer} from '@bh/field/config';import { Review_LongText} from '@bh/field/config';import { Account_Account} from '@bh/field/config';import { test_ShortText} from '@bh/field/config';

import { AccountReview_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_AccountReview} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, AccountReview_Plugin.Id);
const CreatedOn  =
    merge({},
      CreatedOn_DateTime, AccountReview_Plugin.CreatedOn);
const CreatedBy  =
    merge({},
      CreatedBy_Contact, AccountReview_Plugin.CreatedBy);
const ModifiedOn  =
    merge({},
      ModifiedOn_DateTime, AccountReview_Plugin.ModifiedOn);
const ModifiedBy  =
    merge({},
      ModifiedBy_Contact, AccountReview_Plugin.ModifiedBy);
const Contact  =
    merge({},
      Contact_Contact, AccountReview_Plugin.Contact);
const Rating  =
    merge({},
      Rating_Integer, AccountReview_Plugin.Rating);
const OrderNumber  =
    merge({},
      OrderNumber_Integer, AccountReview_Plugin.OrderNumber);
const Review  =
    merge({},
      Review_LongText, AccountReview_Plugin.Review);
const Account  =
    merge({},
      Account_Account, AccountReview_Plugin.Account);
const test  =
    merge({},
      test_ShortText, AccountReview_Plugin.test);


export const ACCOUNTREVIEW_FIELD_CONFIG = {

  Id,
  CreatedOn,
  CreatedBy,
  ModifiedOn,
  ModifiedBy,
  Contact,
  Rating,
  OrderNumber,
  Review,
  Account,
  test
} as const;


export const ACCOUNTREVIEW_ENTITY_COLUMNS = getColumns(ACCOUNTREVIEW_FIELD_CONFIG);

export const ACCOUNTREVIEW_DATE_FIELDS = [];


export const [, , AccountReview_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_AccountReview,
    fieldsConfig: ACCOUNTREVIEW_FIELD_CONFIG,
    entitiesColumns: ACCOUNTREVIEW_ENTITY_COLUMNS,
    dateColumns: getDateColumns(ACCOUNTREVIEW_FIELD_CONFIG),
  };
});

