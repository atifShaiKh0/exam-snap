import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);

const SignInUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => console.log("Sign In Successful!"))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1 className="font-semibold text-4xl mb-9">Sign In Page Login Page</h1>
      <label className="pl-9">Email : </label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        placeholder="Enter your email here"
      />
      <label>Password : </label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        placeholder="Enter your password here"
      />
      <button
        onClick={signInUser}
        className="select-none mt-9 rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 block w-full transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      >
        Login In
      </button>
    </div>
  );
};

export default SignInUser;
