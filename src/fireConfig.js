// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMaNaDe2JfgF3im4jQURufFsHmyHCfG4Y",
  authDomain: "prueba-39650.firebaseapp.com",
  projectId: "prueba-39650",
  storageBucket: "prueba-39650.appspot.com",
  messagingSenderId: "957753148124",
  appId: "1:957753148124:web:e64ee23b073a37784aea19",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
