// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDt9kmywkxHHV_RZcv1pzdwM_H-1nUorAc",
  authDomain: "e-ducando.firebaseapp.com",
  projectId: "e-ducando",
  storageBucket: "e-ducando.firebasestorage.app",
  messagingSenderId: "1027898920675",
  appId: "1:1027898920675:web:6eefefcf96fe60f3873fd6",
  measurementId: "G-LWHX3XBYW5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;