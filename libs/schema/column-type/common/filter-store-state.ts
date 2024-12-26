import { SortField } from './sorting';
import { WithId } from './identifying/with-id';
import { FormFieldCode } from '@bh/consts';
import { NullableFilterGroup } from './filtering';
import { BPFormGroupInterface } from './editing/events/form-group-interface';
import { FieldOptions, FilterFn, WithEditingAbility, WithEditingConfig } from './editing';
import { WithLookupConfig } from './quering';
import { WithVisibility } from './visibility';
import { WithPrivacy } from './privacy';
import { WithIcon } from './iconing';


export type FilterFieldConfig3<T> = WithId &
  WithFieldFilterConfig<T> &
  WithEditingConfig<T> &
  WithLookupConfig &
  WithVisibility &
  WithPrivacy &
  WithIcon &
  WithEditingAbility &
  {
    dateFields: string[];


    // TODO - mayby cross entities injector
    displayValue: (options: FieldOptions<T>) => string;
    // TODO - make id name in query change
    entitiesColumns: string[];
    fieldsConfig: Record<string, FilterFieldConfig>;
    // columns?: string[];

    placeholder: string;
    sortConfig: SortField[];

    columnClass: string;
    columnNgClass: string;
    model: string;
  };

export type FilterFieldConfig = FilterFieldConfig3<any>;


export type WithFieldFilterConfig<T> = {
  active?: (form: BPFormGroupInterface) => boolean;
  filterFn?: FilterFn<T>;
  getFilter?: (options: FieldOptions<T>) => NullableFilterGroup;
  filterConfig?: FilterFieldConfig[];
  component?: FormFieldCode;
};

export const withEmptyFilter: WithFieldFilterConfig<any> = {
  filterFn: () => null,
  getFilter: () => null,
  filterConfig: [],
};
