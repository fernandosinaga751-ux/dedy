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
  apiKey: "GANTI_DENGAN_API_KEY_ANDA",
  authDomain: "NAMA_PROJECT.firebaseapp.com",
  projectId: "NAMA_PROJECT",
  storageBucket: "NAMA_PROJECT.appspot.com",
  messagingSenderId: "NOMOR_SENDER_ID",
  appId: "GANTI_DENGAN_APP_ID_ANDA"
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
