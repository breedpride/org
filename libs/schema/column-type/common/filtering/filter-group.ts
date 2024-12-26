import { ComparisonType, LogicalOperatorType } from '@bh/consts';

export type FilterValue = string | number | boolean;

export type FilterItem = {
  comparisonType: ComparisonType;
  leftExpressionPath: string | null;
  rightExpressionValue?: FilterValue | null;
  rightExpressionValues?: FilterValue[];
} | null;

export type FilterGroup =
  | {
    filter: FilterItem;
    filters?: never;
    logicalOperation: LogicalOperatorType;
  }
  | {
    filter?: never;
    filters: FilterGroup[];
    logicalOperation: LogicalOperatorType;
  };

export type NullableFilterGroup = FilterGroup | null | undefined;
