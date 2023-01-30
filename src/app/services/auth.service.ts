import { Injectable, NgZone } from '@angular/core';
import * as auth from 'firebase/auth';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { User } from '../shared/auth';
import { user } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  userData: any;

  constructor(
    public afStore: AngularFirestore,
    public ngFireAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ) {
    console.log('authservice');
    this.ngFireAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        // JSON.parse(localStorage.getItem('user') ?? '');
      } else {
        localStorage.setItem('user', '');
        // JSON.parse(localStorage.getItem('user') ?? '');
      }
    });
  }

  // Login in with email/password
  signIn(email: string, password: string) {
    return this.ngFireAuth.signInWithEmailAndPassword(email, password);
  }
  // Register user with email/password

  registerUser(email: string, password: string, userName = '') {
    return this.ngFireAuth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        userCredential.user?.updateProfile({
          displayName: userName
        });
      });
  }

  // Email verification when new user register
  sendVerificationMail() {
    return this.ngFireAuth.currentUser.then((user) => {
      return user?.sendEmailVerification().then(() => {
        this.router.navigate(['verify-email']);
      });
    });
  }

  // Recover password
  passwordRecover(passwordResetEmail: string) {
    return this.ngFireAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert(
          'Password reset email has been sent, please check your inbox.'
        );
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  // Returns true when user is looged in
  get isLoggedIn(): boolean {
    // const user = JSON.parse(localStorage.getItem('user') ?? '');
    const user = this.storedUser;
    return user !== null && user.emailVerified !== false ? true : false;
  }

  // Returns true when user's email is verified
  get isEmailVerified(): boolean {
    const user = this.storedUser;
    return user.emailVerified !== false ? true : false;
  }

  get userUid(): string | null {
   return this.storedUser?.uid ?? null;
  }

  get storedUser() {
    const item = localStorage.getItem('user');
    if (item) {
      const user = JSON.parse(item);
      return user;
    }
    return null;
  }

  // Sign in with Gmail
  googleAuth() {
    return this.authLogin(new auth.GoogleAuthProvider());
  }

  // Auth providers
  authLogin(provider: auth.GoogleAuthProvider) {
    return this.ngFireAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['dashboard']);
        });
        const user: User = {
          uid: result.user?.uid || '',
          email: result.user?.email || '',
          displayName: result.user?.displayName || '',
          photoURL: result.user?.photoURL || '',
          emailVerified: result.user?.emailVerified || false,
        }
        this.setUserData(user);
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  // Store user in localStorage
  setUserData(user: User) {
    if (!user) {
      return;
    }
    const userRef: AngularFirestoreDocument<any> = this.afStore.doc(
      `users/${user.uid}`
    );

    return userRef.set(user, {
      merge: true,
    });
  }

  // Sign-out
  signOut() {
    return this.ngFireAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    });
  }
}