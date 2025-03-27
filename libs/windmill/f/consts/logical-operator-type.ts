export const LogicalOperatorType = {
  /** And. */
  AND: 0,
  /** Or. */
  OR: 1,
};
export type LogicalOperatorType =
  (typeof LogicalOperatorType)[keyof typeof LogicalOperatorType];
