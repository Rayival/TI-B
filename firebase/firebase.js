import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// config kamu (SUDAH BENAR)
const firebaseConfig = {
  apiKey: "AIzaSyBcQUOKF3xc0eAe524PiWDHKIpyXzkaf9s",
  authDomain: "menfes-tib.firebaseapp.com",
  projectId: "menfes-tib",
  storageBucket: "menfes-tib.firebasestorage.app",
  messagingSenderId: "939089354259",
  appId: "1:939089354259:web:b1ebb01144894faf31a9e6",
  measurementId: "G-QVJV7MSD7F"
}

// init app
const app = initializeApp(firebaseConfig)

// 🔥 INI YANG PENTING
export const db = getFirestore(app)