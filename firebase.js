import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA0XmtyawFz1K3ZPXW2y-RjbCJZgv7C6U4",
  authDomain: "website-37698.firebaseapp.com",
  projectId: "website-37698",
  storageBucket: "website-37698.appspot.com",
  messagingSenderId: "206258570631",
  appId: "1:206258570631:web:1d7205782dcfc3926aff22",
  measurementId: "G-FCDN41NWR3"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth (app);
export const provider = new GoogleAuthProvider();