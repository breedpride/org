
import { merge } from 'lodash-es';
import { Lookup_FirebaseAuthProvider } from '@bh/db/config';
import { FirebaseAuthProvider_Field } from './firebaseauthprovider';
export const FirebaseAuthProvider_FirebaseAuthProvider = merge({}, FirebaseAuthProvider_Field, Lookup_FirebaseAuthProvider );
