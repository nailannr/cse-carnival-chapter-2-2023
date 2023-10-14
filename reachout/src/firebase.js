// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyA7FJ5-QMCkf9irUXJsBzrGRT3Qz_2N6OA",
  authDomain: "expert-signup.firebaseapp.com",
  projectId: "expert-signup",
  storageBucket: "expert-signup.appspot.com",
  messagingSenderId: "889944531565",
  appId: "1:889944531565:web:d6db82786cf62c565d5564"
};

export  const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);

//export default { app,auth};