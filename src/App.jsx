import "./App.css";
import { Route, Routes } from "react-router-dom";

import { Register } from "./components/Register";
import { Login } from "./components/Login";
import EmailVerify from "./components/EmailVerify";
import { Home } from "../Home";
import { Hero } from "./layout/Hero";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Hero" element={<Hero />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify-email" element={<EmailVerify />} />
      </Routes>
    </>
  );
};

export default App;
