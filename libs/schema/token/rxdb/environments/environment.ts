import { addRxPlugin } from 'rxdb';
import { RxDBDevModePlugin } from 'rxdb/plugins/dev-mode';
import { RxDBJsonDumpPlugin } from 'rxdb/plugins/json-dump';
import { RxDBLeaderElectionPlugin } from 'rxdb/plugins/leader-election';
import { RxDBMigrationSchemaPlugin } from 'rxdb/plugins/migration-schema';
import { RxDBQueryBuilderPlugin } from 'rxdb/plugins/query-builder';
import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';
import { wrappedValidateAjvStorage } from 'rxdb/plugins/validate-ajv';
import { EnvironmentParams } from './environment.type';
// import { RxDBAdapterPlugin } from 'pouchdb-adapter-idb';
// // rxdb-utils imports
// import models from 'rxdb-utils/models';
// import collections from 'rxdb-utils/collections';
// import defaultValues from 'rxdb-utils/default-values';
// import timestamps from 'rxdb-utils/timestamps';
// import views from 'rxdb-utils/views';
// import select from 'rxdb-utils/select';
// import observables from 'rxdb-utils/observables';
// import hooks from 'rxdb-utils/hooks';
// import replication from 'rxdb-utils/replication';

import { RxDBAttachmentsPlugin } from 'rxdb/plugins/attachments';

export const environment: EnvironmentParams = {
  name: 'web-dev',
  production: false,
  isCapacitor: false,
  isServerSideRendering: false,
  multiInstance: false,
  // rxdbSyncUrl:
  //   'http://' +
  //   window.location.hostname +
  //   ':' +
  //   SYNC_PORT +
  //   '/' +
  //   DATABASE_NAME,
  addRxDBPlugins() {
    addRxPlugin(RxDBDevModePlugin);
    addRxPlugin(RxDBLeaderElectionPlugin);
    addRxPlugin(RxDBMigrationSchemaPlugin);
    addRxPlugin(RxDBJsonDumpPlugin);
    addRxPlugin(RxDBQueryBuilderPlugin);
    addRxPlugin(RxDBAttachmentsPlugin);
    // addRxPlugin(RxDBAdapterPlugin);

    // addRxPlugin(FirestoreReplicationPlugin);
    // addRxPlugin();
  },
  getRxStorage() {
    return wrappedValidateAjvStorage({
      storage: getRxStorageDexie(),
    });
  },
  //TODO - move to environment
  firebase: {
    apiKey: 'AIzaSyBJDK6_IywBCF8szL4gnT1wI2-NTTNxV-o',
    appId: '1:513010975118:web:c7a6ed5b092d8dbb87e4df',
    authDomain: 'dogarray-creatio.firebaseapp.com',
    databaseURL:
      'https://dogarray-creatio-default-rtdb.europe-west1.firebasedatabase.app',
    measurementId: 'G-DV9MJ51C1T',
    messagingSenderId: '513010975118',
    projectId: 'dogarray-creatio',
    storageBucket: 'dogarray-creatio.appspot.com',
  },
};
