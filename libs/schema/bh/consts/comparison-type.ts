export const ComparisonType = {
  /** Checks if the value falls within the range of values. */
  BETWEEN: 0,
  /** Checks if the value includes the search string. */
  CONTAIN: 11,
  /** Checks if the value ends with the search string. */
  END_WITH: 13,
  /** Checks for equality of values. */
  EQUAL: 3,
  /** Exists according to the given condition. */
  EXISTS: 15,
  /** Checks that the value is greater. */
  GREATER: 7,
  /** Verifying that the value is greater than or equal to. */
  GREATER_OR_EQUAL: 8,
  /** Checks that the value is not empty. */
  IS_NOT_NULL: 2,
  /** Checks whether the value is empty. */
  IS_NULL: 1,
  /** Checks that the value is less. */
  LESS: 5,
  /** Checks that the value is less than or equal to. */
  LESS_OR_EQUAL: 6,
  /** Checks if the value does not include the search string. */
  NOT_CONTAIN: 12,
  /** Checks if the value does not end with the search string. */
  NOT_END_WITH: 14,
  /** Checks for inequality of values. */
  NOT_EQUAL: 4,
  /** Does not exist according to the given condition. */
  NOT_EXISTS: 16,
  /** Checks if the value does not start with the search string. */
  NOT_START_WITH: 10,
  /** Checks if the value starts with the search string. */
  START_WITH: 9,
};
export type ComparisonType =
  (typeof ComparisonType)[keyof typeof ComparisonType];
