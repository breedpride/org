import { signal } from '@angular/core';

import { createInjectionToken } from 'ngxtension/create-injection-token';

export const [, , DEFAULT_FULLSCREEN] = createInjectionToken(() => true);

function fullscreenFactory(defaultValue: boolean) {
  return signal(defaultValue);
}

export const [injectFullscreen, provideFullscreen] = createInjectionToken(
  fullscreenFactory,
  {
    isRoot: false,
    deps: [DEFAULT_FULLSCREEN],
  }
);

export const withActiveFullscreen = provideFullscreen(() => signal(true), true);

export const withInactiveFullscreen = provideFullscreen(
  () => signal(false),
  false
);
