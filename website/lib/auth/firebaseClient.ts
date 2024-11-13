import firebase, { FirebaseOptions } from "firebase/app";
import "firebase/auth";
import { Firestore } from "@google-cloud/firestore";

// Firebase configuration variables loaded from environment variables
const clientCredentials: FirebaseOptions = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// If Firebase isn't already initialized, initialize it using the above credentials.
if (!firebase.getApps().length) {
  firebase.initializeApp(clientCredentials);
}
const firestore = new Firestore();

export default { firestore, firebase };
