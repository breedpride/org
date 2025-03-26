import { ValidatorFn } from '@angular/forms';
import { FormFieldCode } from '@bh/windmill';
import { WithDisplayField } from './with-display-field';
import { WithEntitySchemaName } from './with-entity-schema-name';

export type WithLookupConfig = WithDisplayField & WithEntitySchemaName &{
  rows: number;
  component: FormFieldCode;
  validators: ValidatorFn[];
};
