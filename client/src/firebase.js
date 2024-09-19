// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "utopia-75953.firebaseapp.com",
  projectId: "utopia-75953",
  storageBucket: "utopia-75953.appspot.com",
  messagingSenderId: "1067523440591",
  appId: "1:1067523440591:web:8aa859bdf73976a4805cba",
  measurementId: "G-75RJBRRH4D"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);