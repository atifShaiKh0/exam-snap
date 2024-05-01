import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { app } from "./firebase";
import React, { useState, useEffect } from "react";
import SignupPage from "./pages/Signup";
import SignInUser from "./pages/SignInUser";
import "./App.css";
import Navbar from "./components/Navbar";
import Details from "./pages/Details";

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        console.log("You are logged out");
        setUser(null);
      }
    });
  }, []);

  if (user === null) {
    return (
      <div>
        <h1 className="text-3xl font-semibold">This is home page </h1>
        <div className="grid items-center justify-center  h-screen">
          <SignupPage />
          <SignInUser />
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div>
        <h1>Hello {user.email}</h1>
        <button onClick={() => signOut(auth)}>Logout</button>
        {/* <Link to={}>Detials</Link> */}
        <BrowserRouter>
          <Routes>
            <Route path="/details" element={<Details />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
