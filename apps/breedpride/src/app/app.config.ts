import {
  provideHttpClient,
  withInterceptors,
  withInterceptorsFromDi,
} from '@angular/common/http';
import {
  Injector,
  enableProdMode,
  importProvidersFrom,
  inject,
  isDevMode,
  provideAppInitializer,
} from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {
  provideRouter,
  withComponentInputBinding,
  withInMemoryScrolling,
} from '@angular/router';
import { BPFormGroup, FORM_GROUP } from '@bh/form';
// import { provideServiceWorker } from '@angular/service-worker';
import { EDIT_MODE, superFactory } from '@bh/collection-store';
import { provideSortColumns } from '@bh/collection-sorting';
import { SUPER_CONFIG } from '@bh/collection-store';
import { WHITE_LOGO } from '@bh/app/tokens';
import { ApplicationConfig } from '@angular/core';

import { SUPER_STORE } from '@bh/collection-store';

import { provideScroll, provideViewport } from '@bh/viewport';
import { AuthService, authInterceptorFn } from '@bp/auth-store';
import { PageContentStore } from '@bp/page-content-store';
import { provideFullscreen } from '@breedpride/fullscreen-ui';

import { loadingInterceptorFn } from '@breedpride/loading-bar';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { environment } from '@bh/rxdb';
import { DatabaseService, initDatabase } from '@bh/rxdb';
import { ResizeOptions, provideResizeOptions } from 'ngxtension/resize';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { DialogService, DynamicDialogConfig } from 'primeng/dynamicdialog';
// import { removeRxDatabase } from 'rxdb';
// import { FirestoreReplicationPlugin } from 'rxdb/plugins/firestore-replication';
import { providePrimeNG } from 'primeng/config';
import { appRoutes } from './app.routes';
import { IconsModule } from './core/icons/icons.module';
import { BPreset } from './theme';
import { MENU_ORIENTATION } from '@bh/app/tokens';

// if (environment.production) {
enableProdMode();
// }

// enableProdMode();
const someOptions: ResizeOptions = {
  box: 'border-box',
  debounce: {
    scroll: 0,
    resize: 20,
  },
  scroll: false,
  emitInZone: false,
  emitInitialResult: true,
  offsetSize: true,
};

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: SUPER_STORE,
      useValue: superFactory,
    },

    provideAppInitializer(() => {
      const initializerFn = (
        (injector: Injector) => () =>
          initDatabase(injector)
      )(inject(Injector));
      return initializerFn();
    }),

    DatabaseService,

    provideRouter(
      appRoutes,
      withComponentInputBinding(),
      withInMemoryScrolling({
        // anchorScrolling: 'enabled',
        // scrollOffset: [0, 64],
        scrollPositionRestoration: 'top',
      }),
    ),

    // TODO -move for filters
    {
      provide: FORM_GROUP,
      useValue: new BPFormGroup({}),
    },
    providePrimeNG({
      theme: {
        preset: BPreset,
        options: {
          darkModeSelector: '.dark',
        },
      },
    }),
    provideFullscreen(),
    // withActiveFullscreen,
    provideHttpClient(
      withInterceptors([authInterceptorFn, loadingInterceptorFn]),
      withInterceptorsFromDi(),
    ),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    provideAnimationsAsync(),
    importProvidersFrom(IconsModule, AngularSvgIconModule.forRoot()),
    provideResizeOptions(someOptions),

    // TODO - delete
    provideSortColumns(),
    AuthService,

    //TODO - make optional with default false
    { provide: WHITE_LOGO, useValue: false },
    // TODO - make optional with default false
    { provide: EDIT_MODE, useValue: false },
    { provide: MENU_ORIENTATION, useValue: 'static' },
    {
      provide: SUPER_CONFIG,
      useValue: null,
    },

    DialogService,
    MessageService,
    ConfirmationService,
    DynamicDialogConfig,
    // TODO - delete
    PageContentStore,

    provideViewport(),
    provideScroll(),

    // provideServiceWorker('ngsw-worker.js', {
    //   enabled: !isDevMode(),
    //   registrationStrategy: 'registerWhenStable:30000',
    // }),
  ],
};
