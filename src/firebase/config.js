import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBY0rapes-vrj9abMlPYfK1733uuJm_Rzg",
  authDomain: "book-list-with-firebase-fb58e.firebaseapp.com",
  projectId: "book-list-with-firebase-fb58e",
  storageBucket: "book-list-with-firebase-fb58e.appspot.com",
  messagingSenderId: "630274074807",
  appId: "1:630274074807:web:eb47748c5ca3004d0c0532"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);