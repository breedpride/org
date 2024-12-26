import { PrimeIcons } from 'primeng/api';
export const MAIN_SORT_NAME = 'sort';
export const DESC = 1;
export const ASC = 0;
export enum SortDirection {
  ASC = 0,
  DESC = 1,
}

//----------------------------------------------
// Sort Columns
//----------------------------------------------
export const NAME_ASC_0 = {
  column: 'Name',
  direction: SortDirection.ASC,
  position: 0,
} as const;

export const NAME_DESC_0 = {
  column: 'Name',
  direction: SortDirection.DESC,
  position: 0,
} as const;

export const NAME_ASC_99 = {
  column: 'Name',
  direction: SortDirection.ASC,
  position: 99,
} as const;

export const RATING_DESC_10 = {
  column: 'Rating',
  direction: SortDirection.DESC,
  position: 10,
} as const;

export const PAYMENT_RATING_DESC_20 = {
  column: 'PaymentRating',
  direction: SortDirection.DESC,
  position: 20,
} as const;

export const DATE_OF_BIRTH_DESC_0 = {
  column: 'DateOfBirth',
  direction: SortDirection.DESC,
  position: 0,
};

export const DATE_OF_BIRTH_ASC_0 = {
  column: 'DateOfBirth',
  direction: SortDirection.ASC,
  position: 0,
};
export const START_DATE_ASC_0 = {
  column: 'StartDate',
  direction: SortDirection.ASC,
  position: 0,
} as const;

export const START_DATE_DESC_0 = {
  column: 'StartDate',
  direction: SortDirection.DESC,
  position: 0,
} as const;

//----------------------------------------------
// Sort Options
//----------------------------------------------

export const SORT_RATING_NAME = {
  id: 'rating',
  name: 'Rating',
  icon: PrimeIcons.SORT_AMOUNT_DOWN,
  sortColumns: [RATING_DESC_10, NAME_ASC_0],
};

export const SORT_YOUNG_BIRTH = {
  id: 'DateOfBirthDESC',
  name: 'Young first',
  icon: PrimeIcons.SORT_AMOUNT_DOWN_ALT,
  sortColumns: [DATE_OF_BIRTH_DESC_0],
};

export const SORT_OLD_BIRTH = {
  id: 'DateOfBirthASC',
  name: 'Old first',
  icon: PrimeIcons.SORT_AMOUNT_DOWN,
  sortColumns: [DATE_OF_BIRTH_ASC_0],
};
export const SORT_NAME_ASC = {
  id: 'NameASC',
  name: 'Name [A-Z]',
  icon: PrimeIcons.SORT_AMOUNT_DOWN_ALT,
  sortColumns: [NAME_ASC_0],
};

export const SORT_NAME_DESC = {
  id: 'NameDESC',
  name: 'Name [Z-A]',
  icon: PrimeIcons.SORT_AMOUNT_DOWN,
  sortColumns: [NAME_DESC_0],
};

export const SUPPORT_LEVEL = {
  id: 'SupportLevel',
  name: 'Support level',
  icon: PrimeIcons.SORT_AMOUNT_DOWN,
  sortColumns: [PAYMENT_RATING_DESC_20, RATING_DESC_10],
};

export const SORT_START_DATE_DESC = {
  id: 'StartDateDESC',
  name: 'Nearest first',
  icon: PrimeIcons.SORT_AMOUNT_DOWN_ALT,
  sortColumns: [START_DATE_DESC_0],
};

export const SORT_START_DATE_ASC = {
  id: 'StartDateASC',
  name: 'Latest first',
  icon: PrimeIcons.SORT_AMOUNT_DOWN,
  sortColumns: [START_DATE_ASC_0],
};
//----------------------------------------------
// Sort config
//----------------------------------------------
