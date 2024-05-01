import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import googleImage from "../../public/googleImge.webp";
import { app } from "../firebase";
import Details from "./Details";
import "./signup.css";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then(
      (value = alert("Success"))
    );
  };

  const signupWithGoogle = () => {
    signInWithPopup(auth, googleProvider);
  };

  return (
    <div className="p-0 m-0 align-center justify-center  rounded-sm h-screen bg-black text-white">
      <h1 className="font-semibold uppercase text-4xl mb-9 m-8">
        Sign Up If You Don't have Account
      </h1>
      <div className="flex flex-col tracking-wide m-8 testing">
        <input
          className="bg-gray-700 
          input rounded-md p-3"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          required
          placeholder="Enter your email here"
        />

        <input
          className="bg-gray-700 rounded-md p-3 mt-5 input"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          required
          placeholder="Enter your password here"
        />
      </div>
      <div className="grid">
        <button onClick={createUser} className="buttonColor">
          Sign Up
        </button>
        <button
          onClick={signupWithGoogle}
          className="buttonColor mt-5 position gap-3"
        >
          <img
            className="image bg-transparent"
            src={googleImage}
            alt="google image"
          />
          Sign up with google
        </button>
      </div>
    </div>
  );
};

export default SignupPage;
