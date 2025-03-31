import { withDefaultIcon } from './iconing';
import { withDefaultPrivacy } from './privacy';
import { withDefaultRequiring } from './requiring';
import { FilterFieldConfig, withEmptyFilter } from './filter-store-state';
import { withDefaultVisibility } from './visibility';

import {
  withDefaultEditing,
  withDefaultEditingEvents,
} from './editing';

export const EmptyFieldConfig: FilterFieldConfig =
  // merge(
  //   {},
  {
    type: 'field',
    id: '',
    rows: 0,
    component: 2,
    dateFields: [],
    displayField: '',
    displayValue: () => '',
    entitiesColumns: [],
    entitySchemaName: '',
    placeholder: '',
    sortConfig: [],
    fieldsConfig: {},
    // SortField[];
    model: '',
    validators: [],
    // ValidatorFn[];

    // parse: (value: any) => null,
    columnClass: '',
    columnNgClass: '',
    ...withDefaultVisibility,
    ...withDefaultEditing,
    ...withDefaultRequiring,
    ...withEmptyFilter,
    ...withDefaultIcon,
    ...withDefaultEditingEvents,
    ...withDefaultPrivacy,
  };
