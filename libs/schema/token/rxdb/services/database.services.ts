import { Injectable, Injector, Signal } from '@angular/core';

// const projectId = 'my-project-id';
// const app = firebase.initializeApp({
//   projectId,
//   databaseURL: 'http://localhost:8080?ns=' + projectId,
// });
// const firestoreDatabase = getFirestore(app);
// const firestoreCollection = collection(firestoreDatabase, 'tree');
// import typings
import { RxHeroesCollections, RxHeroesDatabase } from '../RxDB';

import { createRxDatabase, RxReactivityFactory } from 'rxdb/plugins/core';
import { environment } from '../environments/environment';

import { DICTIONARY_SCHEMA } from '../schemas/dictionary';
import { TREE_SCHEMA } from '../schemas/tree-schema';
import {
  DATABASE_NAME,
  DICTIONARY_COLLECTION_NAME,
  TREE_COLLECTION_NAME,
} from '../shared';
import { createReactivityFactory } from './rxbd.reactiveity';

const collectionSettings = {
  // [HERO_COLLECTION_NAME]: {
  //   schema: HERO_SCHEMA,
  //   methods: {
  //     hpPercent(this: RxHeroDocument): number {
  //       return (this.hp / 100) * 100;
  //     },
  //   },
  //   sync: true,
  // },
  // [FEATURE_COLLECTION_NAME]: {
  //   schema: FEATURE_SCHEMA,
  //   methods: {
  //     // hpPercent(this: RxHeroDocument): number {
  //     //   return (this.hp / 100) * 100;
  //     // },
  //   },
  //   migrationStrategies: {
  //     // 1 means, this transforms data from version 0 to version 1
  //     1: function (oldDoc) {
  //       oldDoc.time = new Date(oldDoc.time).getTime(); // string to unix
  //       return oldDoc;
  //     },
  //   },
  //   sync: true,
  // },
  [TREE_COLLECTION_NAME]: {
    schema: TREE_SCHEMA,
    methods: {
      // hpPercent(this: RxHeroDocument): number {
      //   return (this.hp / 100) * 100;
      // },
    },
    // migrationStrategies: {
    //   // 1 means, this transforms data from version 0 to version 1
    //   // 1: function (oldDoc) {
    //   //   oldDoc.time = new Date(oldDoc.time).getTime(); // string to unix
    //   //   return oldDoc;
    //   // },
    //   // 2: function (oldDoc) {
    //   //   oldDoc.time = new Date(oldDoc.time).getTime(); // string to unix
    //   //   return oldDoc;
    //   // },
    // },
    sync: true,
  },
  [DICTIONARY_COLLECTION_NAME]: {
    schema: DICTIONARY_SCHEMA,
    methods: {
      // hpPercent(this: RxHeroDocument): number {
      //   return (this.hp / 100) * 100;
      // },
    },
    // migrationStrategies: {
    //   // 1 means, this transforms data from version 0 to version 1
    //   // 1: function (oldDoc) {
    //   //   oldDoc.time = new Date(oldDoc.time).getTime(); // string to unix
    //   //   return oldDoc;
    //   // },
    //   // 2: function (oldDoc) {
    //   //   oldDoc.time = new Date(oldDoc.time).getTime(); // string to unix
    //   //   return oldDoc;
    //   // },
    // },
    sync: true,
  },
};

// console.log('syncURL: ' + environment.rxdbSyncUrl);

function doSync(): boolean {
  if (environment.isServerSideRendering) {
    return false;
  }

  if (window.location.hash == '#nosync') {
    return false;
  }
  return true;
}

/**
 * creates the database
 */
async function _create(injector: Injector): Promise<RxHeroesDatabase> {
  environment.addRxDBPlugins();

  console.log('DatabaseService: creating database..');

  /**
   * Add the Reactivity Factory so that we can get angular Signals
   * instead of observables.
   * @link https://rxdb.info/reactivity.html
   */

  const reactivityFactory: RxReactivityFactory<Signal<any>> =
    createReactivityFactory(injector);

  // removeRxDatabase(DATABASE_NAME, environment.getRxStorage());
  const db = await createRxDatabase<RxHeroesCollections>({
    name: DATABASE_NAME,
    storage: environment.getRxStorage(),
    multiInstance: environment.multiInstance,
    reactivity: reactivityFactory,
    // password: 'myLongAndStupidPassword' // no password needed
  });
  console.log('DatabaseService: created database');

  if (!environment.isServerSideRendering) {
    // write to window for debugging
    (window as any)['db'] = db;
  }

  // show leadership in title
  if (environment.multiInstance) {
    db.waitForLeadership().then(() => {
      console.log('isLeader now');
      document.title = '♛ ' + document.title;
    });
  }

  // create collections
  console.log('DatabaseService: create collections');
  await db.addCollections(collectionSettings);

  // const projectId = 'dogarray-creatio';
  // const replicationState = replicateFirestore({
  //   replicationIdentifier: `https://firestore.googleapis.com/${projectId}`,
  //   collection: db.collections.tree,
  //   firestore: {
  //     projectId,
  //     database: firestoreDatabase,
  //     collection: firestoreCollection,
  //   },
  //   pull: {},
  //   push: {},
  //   /**
  //    * Either do a live or a one-time replication
  //    * [default=true]
  //    */
  //   live: true,
  //   /**
  //    * (optional) likely you should just use the default.
  //    *
  //    * In firestore it is not possible to read out
  //    * the internally used write timestamp of a document.
  //    * Even if we could read it out, it is not indexed which
  //    * is required for fetch 'changes-since-x'.
  //    * So instead we have to rely on a custom user defined field
  //    * that contains the server time which is set by firestore via serverTimestamp()
  //    * Notice that the serverTimestampField MUST NOT be part of the collections RxJsonSchema!
  //    * [default='serverTimestamp']
  //    */
  //   serverTimestampField: 'serverTimestamp',
  // });
  // replicationState.awaitInitialReplication();

  // .log('DatabaseService: add hooks');
  // db.collections.hero.preInsert(function (docObj: RxHeroDocumentType) {
  //   const color = docObj.color;
  //   return db.collections.hero
  //     .findOne({
  //       selector: {
  //         color,
  //       },
  //     })
  //     .exec()
  //     .then((has: RxHeroDocument | null) => {
  //       if (has != null) {
  //         alert('another hero already has the color ' + color);
  //         throw new Error('color already there');
  //       }
  //       return db;
  //     });
  // }, false);
  // db.collectionsreplicateFirestore();
  // sync with server
  if (doSync()) {
    console.log('DatabaseService: sync');

    // await Promise.all(
    //   Object.values(db.collections).map(async col => {
    //     try {
    //       // create the CouchDB database
    //       await fetch(environment.rxdbSyncUrl + col.name + '/', {
    //         method: 'PUT',
    //       });
    //     } catch (err) {}
    //   })
    // );
    /**
     * For server side rendering,
     * we just run a one-time replication to ensure the client has the same data as the server.
     */
    // if (environment.isServerSideRendering) {
    //   console.log(
    //     'DatabaseService: await initial replication to ensure SSR has all data'
    //   );
    //   const firstReplication = await replicateCouchDB({
    //     replicationIdentifier: 'couch-server-side-sync',
    //     collection: db.hero,
    //     url: environment.rxdbSyncUrl + db.hero.name + '/',
    //     live: false,
    //     pull: {},
    //     push: {},
    //   });
    //   await firstReplication.awaitInitialReplication();
    // }

    /**
     * we start a live replication which also sync the ongoing changes
     */
    // console.log('DatabaseService: start ongoing replication');
    // const ongoingReplication = replicateCouchDB({
    //   replicationIdentifier: 'couch-client-side-sync',
    //   collection: db.hero,
    //   url: environment.rxdbSyncUrl + db.hero.name + '/',
    //   live: true,
    //   pull: {},
    //   push: {},
    // });
    // ongoingReplication.error$.subscribe((err) => {
    //   console.log('Got replication error:');
    //   console.dir(err);
    //   console.error(err);
    // });
  }

  console.log('DatabaseService: created');

  return db as any;
}

let initState: null | Promise<any> = null;
let DB_INSTANCE: RxHeroesDatabase;

/**
 * This is run via APP_INITIALIZER in app.module.ts
 * to ensure the database exists before the angular-app starts up
 */
export async function initDatabase(injector: Injector) {
  if (!injector) {
    throw new Error('initDatabase() injector missing');
  }

  /**
   * When server side rendering is used,
   * The database might already be there
   */
  if (!initState) {
    console.log('initDatabase()');
    initState = _create(injector).then((db) => (DB_INSTANCE = db));
  }
  await initState;
}

@Injectable()
export class DatabaseService {
  get db(): RxHeroesDatabase {
    return DB_INSTANCE;
  }
}
