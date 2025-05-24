// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCH794U9yEsCzhO43Ak05ulYBdM8p3nhXI",
  authDomain: "mock-interview-with-ai-76da3.firebaseapp.com",
  projectId: "mock-interview-with-ai-76da3",
  storageBucket: "mock-interview-with-ai-76da3.firebasestorage.app",
  messagingSenderId: "469389400479",
  appId: "1:469389400479:web:ffa5a884c7b9d9678805aa",
  measurementId: "G-KK3V7TG6KT",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
