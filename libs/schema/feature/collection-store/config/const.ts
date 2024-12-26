import { EmptyFieldConfig } from '@bh/superfield';
import { merge } from 'lodash-es';

export const EmptySpaceConfig = merge({}, EmptyFieldConfig, {
  viewConfig: [],
  canAdd: false,
  canEdit: true,
  columns: [],
  dateFields: [],
  defaultEntityData: {},
  entitiesColumns: [],
  entityColumns: [],
  customEntityModel: '',
  entitySchemaName: '',
  fieldsConfig: {},
  filterKey: '',
  naming: {},
  queryExtensions: [],
  url: '',
});
