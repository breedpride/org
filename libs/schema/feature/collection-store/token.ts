import { createInjectionToken } from 'ngxtension/create-injection-token';

// TODO - isRottfalse multi delete
export const [, , EDIT_MODE] = createInjectionToken(() => false, {
  multi: true,
});
