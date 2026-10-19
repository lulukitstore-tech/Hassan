importScripts("https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js","https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js");
firebase.initializeApp({
  apiKey: "AIzaSyAx8phPlSMe36ulKIrerboytUtaftaIQ3k",
  authDomain: "lulukit.firebaseapp.com",
  projectId: "lulukit",
  storageBucket: "lulukit.firebasestorage.app",
  messagingSenderId: "175915606077",
  appId: "1:175915606077:web:adce4e61432ffabc0b8a54"
});
firebase.messaging();
self.addEventListener("fetch", () => {});
