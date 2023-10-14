// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7FJ5-QMCkf9irUXJsBzrGRT3Qz_2N6OA",
  authDomain: "expert-signup.firebaseapp.com",
  projectId: "expert-signup",
  storageBucket: "expert-signup.appspot.com",
  messagingSenderId: "889944531565",
  appId: "1:889944531565:web:d6db82786cf62c565d5564"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth();

export default {app, auth};