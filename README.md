# ✝ Partonggoan GKPS Krakatau Sektor 4

Aplikasi web manajemen partonggoan (ibadah rumah tangga) GKPS Krakatau Sektor 4, Tahun 2026.

---

## 🔐 Login Admin

| Username | Password |
|----------|----------|
| `admin` | `partonggoan2026` |

---

## 📋 Fitur Aplikasi

### Halaman Publik (Absen)
- Tampil jadwal Kamis mendatang otomatis (sesuai zona waktu)
- Absen anggota: ✅ Hadir / ❌ Tidak Hadir
- Input Galangan 1, 2, 3
- Kirim data → langsung masuk ke dashboard admin
- Setelah selesai: tampil ringkasan + jadwal Kamis berikutnya

### Menu Admin
- **Dashboard** — statistik & jadwal mendatang
- **Data Anggota** — tambah/edit/hapus, detail kehadiran & tugas
- **Jadwal Partonggoan** — semua Kamis 2026, edit/hapus, export PDF & Foto
- **Daftar Hadir** — tabel per bulan, toggle hadir, export Excel
- **Laporan Partonggoan** — edit jumlah hadir manual, galangan, export PDF & Foto & Excel

---

## 🚀 CARA DEPLOY (Step by Step)

### LANGKAH 1 — Buat Firebase Project

1. Buka [https://console.firebase.google.com](https://console.firebase.google.com)
2. Klik **"Add project"**
3. Nama project: `partonggoan-gkps-s4` (atau sesuka Anda)
4. Nonaktifkan Google Analytics (opsional) → **Create project**
5. Setelah selesai, klik ikon **"</>"** (Web App)
6. App nickname: `Partonggoan Web` → **Register app**
7. **Copy seluruh `firebaseConfig`** yang muncul

### LANGKAH 2 — Setup Firestore Database

1. Di Firebase Console, klik **Build → Firestore Database**
2. Klik **"Create database"**
3. Pilih **"Start in production mode"** → Next
4. Pilih region terdekat (asia-southeast1 = Singapore) → **Enable**
5. Klik tab **Rules** → Ganti dengan:
   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /{document=**} {
         allow read, write: if true;
       }
     }
   }
   ```
6. Klik **Publish**

### LANGKAH 3 — Edit `firebase-config.js`

Buka file `firebase-config.js`, ganti isinya dengan config Firebase Anda:

```js
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "partonggoan-gkps-s4.firebaseapp.com",
  projectId: "partonggoan-gkps-s4",
  storageBucket: "partonggoan-gkps-s4.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};
```

### LANGKAH 4 — Upload ke GitHub

1. Buka [https://github.com](https://github.com) → login atau daftar
2. Klik **"New repository"**
   - Name: `partonggoan-gkps-s4`
   - Public atau Private (keduanya bisa)
   - Klik **Create repository**
3. Di halaman repository kosong, klik **"uploading an existing file"**
4. Upload semua file:
   - `index.html`
   - `firebase-config.js`
   - `vercel.json`
   - `firestore.rules`
   - `README.md`
5. Commit changes → **Commit directly to main**

### LANGKAH 5 — Deploy ke Vercel

1. Buka [https://vercel.com](https://vercel.com) → login dengan GitHub
2. Klik **"New Project"**
3. Pilih repository `partonggoan-gkps-s4` → **Import**
4. Framework Preset: **Other** (biarkan default)
5. Klik **Deploy**
6. Tunggu ±30 detik → selesai!
7. URL akan seperti: `https://partonggoan-gkps-s4.vercel.app`

### LANGKAH 6 — Custom Domain (Opsional)

Di Vercel → Settings → Domains → Add domain Anda (misal: `partonggoan.gkps-krakatau.org`)

---

## 🔄 Update Aplikasi

Jika ada perubahan kode:
1. Edit file di GitHub (klik file → ikon pensil)
2. Commit → Vercel otomatis deploy ulang dalam ±30 detik

---

## 🏗️ Struktur Data Firebase (Firestore)

```
/anggota/{id}
  - nama: string
  - alamat: string
  - jumlahKeluarga: number
  - ord: number (urutan)

/jadwal/{id}
  - tanggal: string (YYYY-MM-DD)
  - alamat: string
  - tuanRumah: string
  - pengkhotbah: string
  - sibasaDoding: string
  - paragenda: string
  - ord: number

/hadir/{id}
  - jadwalId: string
  - anggotaId: string
  - tanggal: string
  - hadir: boolean

/laporan/{id}
  - jadwalId: string
  - tanggal: string
  - jumlahHadir: number
  - galangan1: number
  - galangan2: number
  - galangan3: number
```

---

## 📞 Catatan

- Jadwal Kamis Jan–Nov 2026 **dibuat otomatis** saat pertama kali app diakses
- Data absen publik **langsung tersinkron** ke dashboard admin (real-time Firebase)
- Jika Firebase belum dikonfigurasi, data tersimpan di **localStorage** (hanya di browser tersebut)
- Password admin dapat diubah di file `index.html` baris: `const AU = 'admin', AP = 'partonggoan2026';`
