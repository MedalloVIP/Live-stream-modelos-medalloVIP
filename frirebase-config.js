// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDYlUKvUgStllAf8piIypRjHd6Wizx9_AQ",
  authDomain: "medallovip-bae9f.firebaseapp.com",
  databaseURL: "https://medallovip-bae9f-default-rtdb.firebaseio.com",
  projectId: "medallovip-bae9f",
  storageBucket: "medallovip-bae9f.appspot.com",
  messagingSenderId: "121043183852",
  appId: "1:121043183852:web:f7708f45ff01e2404c0c2f",
  measurementId: "G-ZH9C1H94R4"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

console.log("Firebase App inicializado correctamente");
