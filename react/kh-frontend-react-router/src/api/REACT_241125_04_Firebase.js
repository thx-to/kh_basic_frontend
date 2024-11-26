import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBhaqjGfeQRJaNK-kNI21j8Eq145HSc6gU",
  authDomain: "kh-basic-frontend-react-f5a7b.firebaseapp.com",
  projectId: "kh-basic-frontend-react-f5a7b",
  storageBucket: "kh-basic-frontend-react-f5a7b.firebasestorage.app",
  messagingSenderId: "663123133988",
  appId: "1:663123133988:web:49cac0ff017606a27d7ab1",
  measurementId: "G-H7FKKR9NRG",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();
