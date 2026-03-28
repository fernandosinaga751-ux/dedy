// ╔══════════════════════════════════════════════════════════════╗
// ║  FIREBASE CONFIGURATION — PARTONGGOAN GKPS KRAKATAU SEKTOR 4 ║
// ║                                                              ║
// ║  CARA MENDAPATKAN CONFIG INI:                               ║
// ║  1. Buka https://console.firebase.google.com                 ║
// ║  2. Klik "Add project" → buat project baru                   ║
// ║     (contoh nama: partonggoan-gkps-s4)                       ║
// ║  3. Setelah project dibuat, klik ikon Web </> (Web App)      ║
// ║  4. Register app → copy config di bawah                      ║
// ║  5. Di Firebase Console → Build → Firestore Database          ║
// ║     → Create database → Start in production mode             ║
// ║  6. Ganti rules Firestore dengan:                            ║
// ║     rules_version = '2';                                     ║
// ║     service cloud.firestore {                                 ║
// ║       match /databases/{database}/documents {                 ║
// ║         match /{document=**} {                                ║
// ║           allow read, write: if true;                         ║
// ║         }                                                     ║
// ║       }                                                       ║
// ║     }                                                         ║
// ╚══════════════════════════════════════════════════════════════╝

const firebaseConfig = {
  apiKey: "AIzaSyAzJHGenZVN8RJOJycf-2hsk2vDHU2JF4c",
  authDomain: "sektor4-3c937.firebaseapp.com",
  projectId: "sektor4-3c937",
  storageBucket: "sektor4-3c937.firebasestorage.app",
  messagingSenderId: "425346338814",
  appId: "1:425346338814:web:37b0280bb0bdd39b85baaf",
  measurementId: "G-WKYZYCVGM0"
};

// Contoh config yang sudah diisi (HANYA CONTOH, ganti dengan milik Anda):
// const firebaseConfig = {
//   apiKey: "AIzaSyD_xxxxxxxxxxxxxxxxxxxxxxxxxxxx",
//   authDomain: "partonggoan-gkps-s4.firebaseapp.com",
//   projectId: "partonggoan-gkps-s4",
//   storageBucket: "partonggoan-gkps-s4.appspot.com",
//   messagingSenderId: "123456789012",
//   appId: "1:123456789012:web:abcdefgh12345678"
// };
