import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAEvNcawZl3uQZxLSUfzHAhUI6D_gfRyNQ",
  authDomain: "email-5c5b6.firebaseapp.com",
  projectId: "email-5c5b6",
  storageBucket: "email-5c5b6.firebasestorage.app",
  messagingSenderId: "817159230973",
  appId: "1:817159230973:web:c648313f98ce37a9c47594",
  measurementId: "G-81Z402Y30C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app, "default");
