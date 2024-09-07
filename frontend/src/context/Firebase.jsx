import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";

const FirebaseContext = createContext(null);

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

export const useFirebase = () => useContext(FirebaseContext);

export const firebaseApp = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(firebaseApp);

const googleProvider = new GoogleAuthProvider();

export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) setUser(user);
      else setUser(null);
    });
  });
  const signupUserWithEmailAndPassword = (email, password) =>
    createUserWithEmailAndPassword(firebaseAuth, email, password);

  const signinUserWithEmailAndPass = (email, password) =>
    signInWithEmailAndPassword(firebaseAuth, email, password);

  const signinWithGoogle = () => signInWithPopup(firebaseAuth, googleProvider);

  const isLoggedIn = user ? true : false;

  return (
    <FirebaseContext.Provider
      value={{
        signinWithGoogle,
        signupUserWithEmailAndPassword,
        signinUserWithEmailAndPass,
        isLoggedIn,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
