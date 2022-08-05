// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeL4lSU803PvciP2O016j9NSobY51B7Is",
  authDomain: "meruzee-332c0.firebaseapp.com",
  projectId: "meruzee-332c0",
  storageBucket: "meruzee-332c0.appspot.com",
  messagingSenderId: "485521241873",
  appId: "1:485521241873:web:49475105ac0e0958573eb0",
  measurementId: "G-TKCTK2X6NR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore();
