// firebase-config.js (ES Modules con CDN)
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';

const firebaseConfig = {
  apiKey: "AIzaSyCtuepHop5O_yUVsqN4_-92ylxI0zecKdw",
  authDomain: "nc-nails-oficial-1cc5e.firebaseapp.com",
  projectId: "nc-nails-oficial-1cc5e",
  storageBucket: "nc-nails-oficial-1cc5e.firebasestorage.app",
  messagingSenderId: "291913584521",
  appId: "1:291913584521:web:6eb334b3546097f8349b58",
  measurementId: "G-9QJ1R8P9B9"
};

export const app = initializeApp(firebaseConfig);
export const db  = getFirestore(app);
