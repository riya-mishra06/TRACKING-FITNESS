// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUK0LK1E_wDrHYVu685PoekNUxcyxHmTE",
  authDomain: "tracking-fitness-28049.firebaseapp.com",
  projectId: "tracking-fitness-28049",
  storageBucket: "tracking-fitness-28049.firebasestorage.app",
  messagingSenderId: "125118067749",
  appId: "1:125118067749:web:12883580134a62f422fbcc",
  measurementId: "G-WYR05NG2BP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);