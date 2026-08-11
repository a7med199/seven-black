import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB2VpDwq1bmnuD4BtfMMQUPQeri5fyoG-o",
  authDomain: "seven-14202.firebaseapp.com",
  projectId: "seven-14202",
  storageBucket: "seven-14202.firebasestorage.app",
  messagingSenderId: "215608487838",
  appId: "1:215608487838:web:f4b8e124cfd8092873308f",
  measurementId: "G-871DBCE8GJ"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);