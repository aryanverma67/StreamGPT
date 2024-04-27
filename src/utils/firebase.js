// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBQKkVE2Gzs5EvcHFLbqE0PF2_2InyNjI",
  authDomain: "streamgpt-b87d1.firebaseapp.com",
  projectId: "streamgpt-b87d1",
  storageBucket: "streamgpt-b87d1.appspot.com",
  messagingSenderId: "527767359999",
  appId: "1:527767359999:web:68861354d284dddfb0d7ca",
  measurementId: "G-N0W892DN81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();