// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase firebaseConfiguration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2cYv5mjM-0IY8C-PYWGWTHDChk2T6r2A",
  authDomain: "hospital-groupp2.firebaseapp.com",
  databaseURL: "https://hospital-groupp2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "hospital-groupp2",
  storageBucket: "hospital-groupp2.appspot.com",
  messagingSenderId: "380724818850",
  appId: "1:380724818850:web:d8efc14e18b0489aa9f8fb",
  measurementId: "G-L33R9HRRKM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export function getFirebaseConfig() {
    if (!firebaseConfig || !firebaseConfig.apiKey) {
      throw new Error('No Firebase firebaseConfiguration object provided.' + '\n' +
      'Add your web app\'s firebaseConfiguration object to firebase-firebaseConfig.js');
    } else {
      return firebaseConfig;
    }
  }