// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD1-u_8ibfi7zyMKlRaclwhixZpfsKjZbQ",
    authDomain: "portfolio-f6b78.firebaseapp.com",
    projectId: "portfolio-f6b78",
    storageBucket: "portfolio-f6b78.appspot.com",
    messagingSenderId: "961059591010",
    appId: "1:961059591010:web:272fb118e43e08521ed23b",
    measurementId: "G-4TKGNJ2C71"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const analytics = getAnalytics(app)
