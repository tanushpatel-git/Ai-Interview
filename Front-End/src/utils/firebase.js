
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'


const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "ai-interview-login.firebaseapp.com",
    projectId: "ai-interview-login",
    storageBucket: "ai-interview-login.firebasestorage.app",
    messagingSenderId: "175773813357",
    appId: "1:175773813357:web:eeea673795084fefe00d64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();
