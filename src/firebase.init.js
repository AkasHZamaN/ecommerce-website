// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBV_dx6AMF6O_1e4rAcqw4imDMS9rPBUNU",
  authDomain: "ecommerce-website-dd413.firebaseapp.com",
  projectId: "ecommerce-website-dd413",
  storageBucket: "ecommerce-website-dd413.appspot.com",
  messagingSenderId: "301459421917",
  appId: "1:301459421917:web:5dca263c87490234443934"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;