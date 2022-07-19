import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDfZWfbwoa4ZeqUX3FqFdW5uxy14MuqreQ",
  authDomain: "auth-context-train.firebaseapp.com",
  projectId: "auth-context-train",
  storageBucket: "auth-context-train.appspot.com",
  messagingSenderId: "334294450786",
  appId: "1:334294450786:web:45d970665b5d5a2ff7073b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);