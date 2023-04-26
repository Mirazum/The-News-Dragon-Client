// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9x8bLESvupuOCPIORmBvtJOVG-Z6z1ZU",
  authDomain: "the-news-dragon-8708f.firebaseapp.com",
  projectId: "the-news-dragon-8708f",
  storageBucket: "the-news-dragon-8708f.appspot.com",
  messagingSenderId: "438413605377",
  appId: "1:438413605377:web:9eaefd250fee55307d9e00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;