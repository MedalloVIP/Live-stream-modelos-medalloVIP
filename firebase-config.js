// Importa las funciones necesarias de los SDKs de Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

// Configuración de tu proyecto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD7pcnepnqnTng3e88Wr_XcGGc6GDKlTU4",
  authDomain: "medallovip-bae9f.firebaseapp.com",
  databaseURL: "https://medallovip-bae9f-default-rtdb.firebaseio.com",
  projectId: "medallovip-bae9f",
  storageBucket: "medallovip-bae9f.appspot.com",
  messagingSenderId: "97246331560",
  appId: "1:97246531560:web:64be84a8c9dece26741e5d"
  measurementId: "G-BCLXS4R2B3"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Verificación en consola
console.log("Firebase inicializado correctamente");
export { app };
