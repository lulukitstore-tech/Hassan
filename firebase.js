import {initializeApp} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import {getFirestore} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";
import {getAuth} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
// Console se apni key dobara match kar lena (screenshot se padhi hai)
const firebaseConfig = {
  apiKey: "AIzaSyAx8phPlSMe36ulKIrerboytUtaftaIQ3k",
  authDomain: "lulukit.firebaseapp.com",
  projectId: "lulukit",
  storageBucket: "lulukit.firebasestorage.app",
  messagingSenderId: "175915606077",
  appId: "1:175915606077:web:adce4e61432ffabc0b8a54",
  measurementId: "G-YTGCMLXJRK"
};
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
// 1) Firebase Console → Project settings → Cloud Messaging → Web Push certificates → Generate key pair → key yahan paste karo
export const VAPID = "BAgsx5HtpMIwIpnTn0hN8Ad1C8G7e7wrvDrYa8B7eCvR4-ZUfUOQz2hSCEZGpj2gfVnrGas6InMqag6n6sMvB14";
// 2) Cloudflare Worker ka URL yahan paste karo (worker.js deploy karne ke baad)
export const PUSH_URL = "https://odd-cloud-291a.lulukitstore.workers.dev";
