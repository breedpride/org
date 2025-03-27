import { AbstractControl, ValidationErrors } from '@angular/forms';

//TODO use
function isObject(value: any): boolean {
  return typeof value === 'object' && value !== null;
}
export const dictionaryValidator = (
  control: AbstractControl
): null | ValidationErrors => {
  const validDictionary =
    control.value === null ||
    control.value === '' ||
    (isObject(control.value) && control.value['Id']);
  return !validDictionary ? { dictionary: { value: control.value } } : null;
};
