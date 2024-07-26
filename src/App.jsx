import "./App.css";
import { Route, Routes } from "react-router-dom";

import { LandingPage } from "./components/LandingPage";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import EmailVerify from "./components/EmailVerify";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify-email" element={<EmailVerify />} />
      </Routes>
    </>
  );
};

export default App;
