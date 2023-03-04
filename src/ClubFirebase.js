// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: proccess.env.REACT_APP_API_KEY,
  authDomain: proccess.env.REACT_APP_AUTH_DOMAIN,
  projectId: proccess.env.REACT_APP_PROJECT_ID,
  storageBucket: proccess.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: proccess.env.REACT_APP_MESSAGIN_ID,
  appId: proccess.env.REACT_APP_APP_ID,
  measurementId: proccess.env.REACT_APP_MEASURMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);