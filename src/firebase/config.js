// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqY-8RLEpwyeKciDdrWwRM02Iw5S0o-zk",
  authDomain: "react-curso-7bfd0.firebaseapp.com",
  projectId: "react-curso-7bfd0",
  storageBucket: "react-curso-7bfd0.appspot.com",
  messagingSenderId: "416948272032",
  appId: "1:416948272032:web:2a022c9ba3517e79fb82c5",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
