// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js";
import {
  getDatabase,
  set,
  ref,
  onValue,
  push,
  remove,
} from "https://www.gstatic.com/firebasejs/9.6.5/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAYif0zWMdY9yo3c743Lr-8_8dajP8t2EI",
  authDomain: "rspapp-403fb.firebaseapp.com",
  databaseURL: "https://rspapp-403fb-default-rtdb.firebaseio.com",
  projectId: "rspapp-403fb",
  storageBucket: "rspapp-403fb.appspot.com",
  messagingSenderId: "390106880270",
  appId: "1:390106880270:web:e7d9d978a19ec58f6d9f5f",
  measurementId: "G-HSZ49QZ2S2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

export { set, ref, onValue, push, remove, getDatabase };
