import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDXJ7RyN22kOrjuXIQajAzEONWXh7CHk3U",
  authDomain: "examsnapauthentication.firebaseapp.com",
  projectId: "examsnapauthentication",
  storageBucket: "examsnapauthentication.appspot.com",
  messagingSenderId: "402187585717",
  appId: "1:402187585717:web:6fdba570619ccd9290d6fc",
  measurementId: "G-QF9PXHDBVE",
  databaseURL: "https://examsnapauthentication-default-rtdb.firebaseio.com",
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
