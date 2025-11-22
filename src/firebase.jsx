// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVmB0_WTBCousJYH9ES3BI7bQVH1G_R6A",
  authDomain: "tracking-fitness-c3f4b.firebaseapp.com",
  projectId: "tracking-fitness-c3f4b",
  storageBucket: "tracking-fitness-c3f4b.firebasestorage.app",
  messagingSenderId: "2478070259",
  appId: "1:2478070259:web:90944fbdabc57aaf2a5a86",
  measurementId: "G-GCVLHW0VHN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default firebaseConfig;