// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCMaNaDe2JfgF3im4jQURufFsHmyHCfG4Y",
  authDomain: "prueba-39650.firebaseapp.com",
  projectId: "prueba-39650",
  storageBucket: "prueba-39650.appspot.com",
  messagingSenderId: "957753148124",
  appId: "1:957753148124:web:e64ee23b073a37784aea19",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
