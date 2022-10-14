// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrl1ITisLCyoxwX6-9Z0w2tgUGJT36HIE",
  authDomain: "neumorpic-login-signup-page.firebaseapp.com",
  projectId: "neumorpic-login-signup-page",
  storageBucket: "neumorpic-login-signup-page.appspot.com",
  messagingSenderId: "80849132275",
  appId: "1:80849132275:web:be17e32d48b63fdcdbf586"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default  app;