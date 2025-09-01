// firebase-config.js
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import { getFirestore, collection, addDoc, serverTimestamp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';

const firebaseConfig = {
  apiKey: "AIzaSyCtuepHop5O_yUVsqN4_-92ylxI0zecKdw",
  authDomain: "nc-nails-oficial-1cc5e.firebaseapp.com",
  projectId: "nc-nails-oficial-1cc5e",
  storageBucket: "nc-nails-oficial-1cc5e.firebasestorage.app",
  messagingSenderId: "291913584521",
  appId: "1:291913584521:web:6eb334b3546097f8349b58",
  measurementId: "G-9QJ1R8P9B9"
};

const app = initializeApp(firebaseConfig);
const db  = getFirestore(app);

// Exponer una API global sencilla
window.DB = {
  guardarReserva: async ({ nombre, telefono, servicio, fecha, mensaje }) => {
    const clean = {
      nombre:   String(nombre||'').trim(),
      telefono: String(telefono||'').trim(),
      servicio: String(servicio||'').trim(),
      // el input type="date" devuelve YYYY-MM-DD
      fecha:    String(fecha||'').trim(),
      mensaje:  String(mensaje||'').trim(),
      estado:   'pendiente',
      createdAt: serverTimestamp()
    };
    // validaciones mínimas
    for (const k of ['nombre','telefono','servicio','fecha']) {
      if (!clean[k]) throw new Error(`Falta el campo: ${k}`);
    }
    return addDoc(collection(db, 'reservas'), clean);
  }
};

console.log('Firebase listo:', firebaseConfig.projectId);
