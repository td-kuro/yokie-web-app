// Firebase Authentication helpers. Not used by the public site yet; ready for an
// admin area or customer accounts. Import lazily (`await import(...)`) so the Auth
// SDK only loads on pages that need it.
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
} from 'firebase/auth';
import { getFirebaseApp } from './firebase';

function getFirebaseAuth() {
  return getAuth(getFirebaseApp());
}

export async function signIn(email, password) {
  const credential = await signInWithEmailAndPassword(getFirebaseAuth(), email, password);
  return credential.user;
}

export function signOut() {
  return firebaseSignOut(getFirebaseAuth());
}

/** Calls `callback(user | null)` whenever the sign-in state changes. Returns an unsubscribe function. */
export function subscribeToAuthChanges(callback) {
  return onAuthStateChanged(getFirebaseAuth(), callback);
}

export function getCurrentUser() {
  return getFirebaseAuth().currentUser;
}

/**
 * Whether the user has the `admin` custom claim. Useful for showing admin UI only —
 * actual permissions are enforced by Security Rules, not by this check.
 */
export async function hasAdminClaim(user) {
  const tokenResult = await user.getIdTokenResult();
  return tokenResult.claims.admin === true;
}
