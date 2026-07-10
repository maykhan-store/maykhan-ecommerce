import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBzkjuwdEgeAm3jUgIQIurtdPvGX68iEnM",
  authDomain: "maykhan-9cf52.firebaseapp.com",
  projectId: "maykhan-9cf52",
  storageBucket: "maykhan-9cf52.firebasestorage.app",
  messagingSenderId: "719718532253",
  appId: "1:719718532253:web:376d45bc2a9b97a8a40074"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);