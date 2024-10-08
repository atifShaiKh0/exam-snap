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
import ProtectedRoute from "./ProtectedRoute.jsx";
import { AuthProvider } from "./authContext";
import Admin from "./pages/Admin.jsx";
import Test from "./pages/Test.jsx";

function App() {
  return (
    <AuthProvider>
      <ProtectedRoute>
        <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/subject" element={<FolderList />} />
        <Route path="/details" element={<Details />} />
        </Routes>
      </ProtectedRoute>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/test" element={<Test />} />


      </Routes>
    </AuthProvider>
  );
}

export default App;
