import { createInjectionToken } from 'ngxtension/create-injection-token';

export const PRIVATE_SPACE_PREFIX = 'my';
export const [injectSpaceIdPrefix, provideSpaceIdPrefix, SPACE_ID_PREFIX] =
  createInjectionToken(() => '');

export const providePrivateSpaceIdPrefix = provideSpaceIdPrefix(
  () => PRIVATE_SPACE_PREFIX
);
