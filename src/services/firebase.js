import { getApp, getApps, initializeApp } from 'firebase/app';

// Browser (client) config only. These values are public by design — never put
// service-account keys or other admin credentials in frontend code.
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

export const isFirebaseConfigured = Boolean(firebaseConfig.apiKey && firebaseConfig.projectId && firebaseConfig.appId);

/** Returns the shared Firebase app, initialising it on first use. */
export function getFirebaseApp() {
  if (!isFirebaseConfigured) {
    throw new Error(
      'Firebase is not configured. Copy .env.example to .env.local and fill in the VITE_FIREBASE_* values.',
    );
  }
  return getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
}
