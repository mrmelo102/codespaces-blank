import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, setPersistence, browserLocalPersistence } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCnrU10K2NLYUPkLlqPzXoLhPMx5AqI3p4",
  authDomain: "sistema-clinica-b114b.firebaseapp.com",
  projectId: "sistema-clinica-b114b",
  storageBucket: "sistema-clinica-b114b.firebasestorage.app",
  messagingSenderId: "1039418928252",
  appId: "1:1039418928252:web:c7e1873f837ee74282edf9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

setPersistence(auth, browserLocalPersistence).catch((err) => {
  console.error("Erro na persistência:", err);
});