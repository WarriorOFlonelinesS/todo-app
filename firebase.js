// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNjRP1xcPI3bDQ_LA-1wIFpmycrt-dcdI",
  authDomain: "todo-a-bc1a0.firebaseapp.com",
  databaseURL: "https://todo-a-bc1a0-default-rtdb.firebaseio.com",
  projectId: "todo-a-bc1a0",
  storageBucket: "todo-a-bc1a0.appspot.com",
  messagingSenderId: "75744575770",
  appId: "1:75744575770:web:04f3b600712f91d85eeca3",
  measurementId: "G-XRXL0YDXJF"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore();

