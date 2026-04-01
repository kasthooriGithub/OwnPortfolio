import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4xllMp25_KA_7SV9mDlPBFjsZt4F3EoE",
  authDomain: "myportfolio-589bb.firebaseapp.com",
  projectId: "myportfolio-589bb",
  storageBucket: "myportfolio-589bb.firebasestorage.app",
  messagingSenderId: "931784525580",
  appId: "1:931784525580:web:c3ca7e142d900bbf0f6b29",
  measurementId: "G-W0XFBEQ9HV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;
const db = getFirestore(app);

export { app, analytics, db };
