// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {Firestore, getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAy-UI_Wp_cDi3puis9a0AMsnATS9IcPp8",
  authDomain: "react-contact-9dc2a.firebaseapp.com",
  projectId: "react-contact-9dc2a",
  storageBucket: "react-contact-9dc2a.appspot.com",
  messagingSenderId: "773295773762",
  appId: "1:773295773762:web:9850b7f26bb16066b7f5db"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);