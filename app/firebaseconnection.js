// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDG31wEJLk4RD1m8EJgp-clIJUZLfmFM40",
  authDomain: "projeto-equipe-roca.firebaseapp.com",
  projectId: "projeto-equipe-roca",
  storageBucket: "projeto-equipe-roca.appspot.com",
  messagingSenderId: "1059141101515",
  appId: "1:1059141101515:web:97c2df958c0dfecc3c784e",
  measurementId: "G-52ZBF942P2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)

