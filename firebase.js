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
