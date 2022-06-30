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
  apiKey: "AIzaSyCHg-QOVc45GdHN8zN1gc8FM0ZTw-uOUhQ",
  authDomain: "fir-rps-e9a00.firebaseapp.com",
  databaseURL: "https://fir-rps-e9a00-default-rtdb.firebaseio.com",
  projectId: "fir-rps-e9a00",
  storageBucket: "fir-rps-e9a00.appspot.com",
  messagingSenderId: "1039088106664",
  appId: "1:1039088106664:web:ec24797f55486a9a79569d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

export { set, ref, onValue, push, remove, getDatabase };
