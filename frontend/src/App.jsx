import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Details from "./pages/Details";
import PageNotFound from "./pages/PageNotFound";
import FolderList from "./components/folder/FolderList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/details" element={<Details />} />
      <Route path="/subject" element={<FolderList />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
