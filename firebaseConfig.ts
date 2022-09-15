// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBeh2x2j-sHDP6psp70EZvTAS8bFDZUMhE",
	authDomain: "plant-disease-detection-346209.firebaseapp.com",
	projectId: "plant-disease-detection-346209",
	storageBucket: "plant-disease-detection-346209.appspot.com",
	messagingSenderId: "1036339638912",
	appId: "1:1036339638912:web:9bb54fe3a4d63bff0b6c65",
	measurementId: "G-E67LF2ZM9Q"
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const analytics = getAnalytics(app)
