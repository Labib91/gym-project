// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATLQF10l6NzxeYh35qj8E90Z10RSBLg6Q",
  authDomain: "my--gym-project.firebaseapp.com",
  projectId: "my--gym-project",
  storageBucket: "my--gym-project.appspot.com",
  messagingSenderId: "501581373733",
  appId: "1:501581373733:web:14ce3e6f4c2c9ba974bacc",
  measurementId: "G-ERSBPP4EST"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;