import {
  provideHttpClient,
  withInterceptors,
  withInterceptorsFromDi,
} from '@angular/common/http';
import {
  InjectionToken,
  Injector,
  enableProdMode,
  importProvidersFrom,
  inject,
  isDevMode,
  provideAppInitializer,
  provideZoneChangeDetection,
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

import {
  provideService,
  provideTreeStoreWithInitialState,
  SUPER_STORE,
} from '@bh/collection-store';

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
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
// import { provideEditorConfig } from '@sesan07/ngx-formly-editor/lib/editor.provider';
if (environment.production) {
  enableProdMode();
}
import { provideEditor } from '@sesan07/ngx-formly-editor';
import { provideAnimations } from '@angular/platform-browser/animations';
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

import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';

// const composeEnhancers = composeWithDevTools(options);
// const store = createStore(
//   reducer,
//   /* preloadedState, */ composeEnhancers(
//     applyMidzdleware(...middleware),
//     // other store enhancers if any
//   ),
// );
export const ProviderI = new InjectionToken('ProviderI');
export const appConfig: ApplicationConfig = {
  providers: [
    provideStore(),
    provideEffects(),
    // provideStoreDevtools({
    //   maxAge: 25, // Retains last 25 states
    //   logOnly: !isDevMode(), // Restrict extension to log-only mode
    //   autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    //   trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
    //   traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
    //   connectInZone: true, // If set to true, the connection is established within the Angular zone
    // }),
    {
      provide: SUPER_STORE,
      useValue: superFactory,
    },
    // provideService(),
    // provideZoneChangeDetection({ eventCoalescing: true }),
    // provideRouter(appRoutes),
    // provideZoneChangeDetection({ eventCoalescing: true }), //
    // provideExperimentalZonelessChangeDetection(),
    provideAppInitializer(() => {
      const initializerFn = (
        (injector: Injector) => () =>
          initDatabase(injector)
      )(inject(Injector));
      return initializerFn();
    }),

    provideEditor(),
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

    // provideRxDatabase(
    //   getRxDatabaseCreator({
    //     name: 'bp',
    //     localDocuments: true,
    //     ignoreDuplicate: false,
    //     allowSlowCount: true,
    //     options: {
    //       plugins: [
    //         // will be loaded by together with core plugins
    //         RxDBDevModePlugin,
    //         RxDBAttachmentsPlugin,
    //         RxDBLeaderElectionPlugin,
    //         FirestoreReplicationPlugin,
    //       ],
    //       storageType: 'dexie',
    //       // dumpPath: 'assets/data/db.dump.json',
    //     },
    //   })
    // ),
    // importProvidersFrom([
    //   ReactiveFormsModule,

    //   FormlyModule.forRoot(),
    //   FormlyPrimeNGModule,
    //   // FormlyModule.forRoot({
    //   //   types: [
    //   //     {
    //   //       name: 'input',
    //   //       component: CustomInputComponent,
    //   //       wrappers: ['test-wrapper'],
    //   //     },
    //   //   ],
    //   //   validators: [
    //   //     { name: 'mandatory', validation: CustomMandatoryValidator },
    //   //   ],
    //   //   wrappers: [{ name: 'test-wrapper', component: TestWrapperComponent }],
    //   // }),
    // ]),
    // TODO -move for filters
    {
      provide: FORM_GROUP,
      useValue: new BPFormGroup({}),
    },
    provideAnimationsAsync(),
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

    provideTreeStoreWithInitialState([
      {
        id: 'root',
        name: 'app',
        // type: 'app',
        children: [],
      },
    ]),
    provideSortColumns(),
    AuthService,
    // {
    //   // Disable 'theme' sanity check
    //   provide: MATERIAL_SANITY_CHECKS,
    //   useValue: {
    //     doctype: true,
    //     theme: false,
    //     version: true,
    //   },
    // },
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
    DynamicDialogConfig,
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
function provideStoreDevtools(arg0: {
  maxAge: number; // Retains last 25 states
  logOnly: boolean; // Restrict extension to log-only mode
  autoPause: boolean; // Pauses recording actions and state changes when the extension window is not open
  trace: boolean; //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
  traceLimit: number; // maximum stack trace frames to be stored (in case trace option was provided as true)
  connectInZone: boolean; // If set to true, the connection is established within the Angular zone
}):
  | import('@angular/core').Provider
  | import('@angular/core').EnvironmentProviders {
  throw new Error('Function not implemented.');
}
