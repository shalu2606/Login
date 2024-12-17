// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth}from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCXSUiUqBfvE3KCsXhW5Syd_NjOTD5BszY",
  authDomain: "learnbasic-6c909.firebaseapp.com",
  projectId: "learnbasic-6c909",
  storageBucket: "learnbasic-6c909.firebasestorage.app",
  messagingSenderId: "300480954334",
  appId: "1:300480954334:web:07c0d24b21e9a5b377a74f",
  measurementId: "G-SP8QR745RT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth