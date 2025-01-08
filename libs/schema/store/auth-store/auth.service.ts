import { inject, Injectable } from '@angular/core';
import {
  Auth,
  FacebookAuthProvider,
  GoogleAuthProvider,
  IdTokenResult,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  TwitterAuthProvider,
  User,
  connectAuthEmulator,
} from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { ComponentStore } from '@ngrx/component-store';

import { from, Observable, of } from 'rxjs';
import { AuthUtils, SimpleUser } from './auth.utils';

interface AuthState {
  authenticated: boolean;
  token: string;
  user: SimpleUser;
}
const initialUser = {
  avatar: '/assets/images/avatars/guest.png',
  email: '',
  id: '',
  name: 'Guest',
};
@Injectable({
  providedIn: 'root',
})
export class AuthService extends ComponentStore<AuthState> {
  private firestore = inject(Firestore);
  auth = inject(Auth);

  // const auth = getAuth();

  // inject(Auth);
  readonly user$ = this.select(state => state.user);
  readonly user = this.selectSignal(state => state.user);
  readonly token = this.selectSignal(state => state.token);
  readonly authenticated = this.selectSignal(state => state.authenticated);
  /**
   * Constructor
   */
  constructor() {
    const cachedToken = localStorage.getItem('accessToken') ?? '';
    const cachedUser = AuthUtils.getUserFromToken(cachedToken, 100);
    super({
      authenticated: cachedUser ? true : false,
      token: cachedUser ? cachedToken : '',
      user: cachedUser || initialUser,
    });
    connectAuthEmulator(this.auth, 'http://127.0.0.1:9099');

    this.auth.onAuthStateChanged(user => {
      if (user) {
        // console.log('USER', user);
        this.setLogined(user);
        // const ref = localStorage.getItem('ref');
        // if (ref) {
        //   // user from another user

        //   const cityRef = doc(this.firestore, 'refs', user.uid);
        //   getDoc(cityRef).then(docSnap => {
        //     if (docSnap.exists()) {
        //       // console.log('Document data:', docSnap.data());
        //       localStorage.removeItem('ref');
        //       this.setLogined(user);
        //     } else {
        //       setDoc(cityRef, { ref: ref }).then(() => {
        //         // console.log('Document written with ID: ', user.uid);
        //         localStorage.removeItem('ref');
        //         this.setLogined(user);
        //       });
        //     }
        //   });
        // } else {
        //   this.setLogined(user);
        // }
      } else {
        this.updateState({
          authenticated: false,
          token: '',
          user: initialUser,
        });
      }
      this.setRefreshAccessToken();
    });
  }

  setLogined(user: User | null) {
    this.auth.currentUser?.getIdToken().then(token => {
      this.updateState({
        authenticated: true,
        token: token,
        user: user
          ? {
              avatar: user.photoURL,
              email: user.email,
              id: user.uid,
              name: user.displayName,
            }
          : initialUser,
      });
    });
  }

  readonly updateState = this.updater((state, newState: AuthState) => {
    localStorage.setItem('accessToken', newState.token);
    return {
      ...state,
      ...newState,
    };
  });
  check(): Observable<boolean> {
    // Check if the user is logged in
    if (this.authenticated()) {
      return of(true);
    }

    // Check the access token availability
    if (!this.token()) {
      return of(false);
    }

    // Check the access token expire date
    if (AuthUtils.isTokenExpired(this.token())) {
      return of(false);
    }

    // If the access token exists and it didn't expire, sign in using it
    return of(true);
    // return this.signInUsingToken();
  }

  /**
   * Forgot password
   *
   * @param email
   */
  forgotPassword(email: string): Observable<any> {
    // return this._httpClient.post('api/auth/forgot-password', email);
    return of(null);
  }

  // -----------------------------------------------------------------------------------------------------
  loginWithGoogle(): Observable<any> {
    return from(signInWithPopup(this.auth, new GoogleAuthProvider()));
  }

  updateToken = this.updater((state, token: string) => {
    localStorage.setItem('accessToken', token);
    return {
      ...state,
      token,
    };
  });

  refreshAccessToken(): void {
    if (this.auth.currentUser) {
      this.auth.currentUser
        .getIdTokenResult(true)
        .then((result: IdTokenResult) => {
          localStorage.setItem('accessToken', result.token);

          this.updateToken(result.token);

          this.setRefreshAccessToken();
        });
    }
  }
  /**
   * Reset password
   *
   * @param password
   */
  resetPassword(password: string): Observable<any> {
    // return this._httpClient.post('api/auth/reset-password', password);
    return of(null);
  }

  setRefreshAccessToken(): void {
    const expDate = AuthUtils.getTokenExpirationDate(this.token());

    if (!expDate) {
      return;
    }
    const expDiff = expDate.valueOf() - new Date().valueOf();
    if (expDiff > 0) {
      setTimeout(() => {
        this.refreshAccessToken();
      }, expDiff - 10 * 1000);
      return;
    }
    this.refreshAccessToken();
  }

  /**
   * Sign in
   *
   * @param credentials
   */
  signInV2(credentials: { email: string; password: string }): Observable<any> {
    return from(
      signInWithEmailAndPassword(
        this.auth,
        credentials.email,
        credentials.password,
      ),
    );
  }

  signInWithApple(): Observable<any> {
    return from(signInWithPopup(this.auth, new GoogleAuthProvider()));
  }

  signInWithFacebook(): Observable<any> {
    return from(signInWithPopup(this.auth, new FacebookAuthProvider()));
  }

  signInWithTwitter(): Observable<any> {
    return from(signInWithPopup(this.auth, new TwitterAuthProvider()));
  }

  /**
   * Sign out
   */
  signOut(): Observable<any> {
    return of(signOut(this.auth));
  }

  /**
   * Sign up
   *
   * @param user
   */
  signUp(user: {
    company: string;
    email: string;
    name: string;
    password: string;
  }): Observable<any> {
    // return this._httpClient.post('api/auth/sign-up', user);
    return of(null);
  }
}
