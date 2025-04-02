// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {initializeAuth, getReactNativePersistence} from 'firebase/auth' 
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQPuINf3mcOzJmg6CXV-zPdIx9xBQq2Hg",
  authDomain: "csym030-6742f.firebaseapp.com",
  projectId: "csym030-6742f",
  storageBucket: "csym030-6742f.firebasestorage.app",
  messagingSenderId: "655591104346",
  appId: "1:655591104346:web:e60b81a5191a3acd9b1d63",
  measurementId: "G-EHK0369GQE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {persistence: getReactNativePersistence(AsyncStorage)});
export const db = getFirestore(app)
const analytics = getAnalytics(app);