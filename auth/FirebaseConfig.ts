import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBE95YhtaK78iexGZl3YXFwtd3UT_rYKPI",
  authDomain: "famicare-e900b.firebaseapp.com",
  projectId: "famicare-e900b",
  storageBucket: "famicare-e900b.appspot.com",
  messagingSenderId: "561818249104",
  appId: "1:561818249104:web:7e77c2c5f6cebbad147515"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);