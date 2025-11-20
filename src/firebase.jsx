// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAVmB0_WTBCousJYH9ES3BI7bQVH1G_R6A",
  authDomain: "tracking-fitness-c3f4b.firebaseapp.com",
  projectId: "tracking-fitness-c3f4b",
  storageBucket: "tracking-fitness-c3f4b.firebasestorage.app",
  messagingSenderId: "2478070259",
  appId: "1:2478070259:web:90944fbdabc57aaf2a5a86",
  measurementId: "G-GCVLHW0VHN"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
