import React from "react";
import { Login } from "./Login";
import { Register } from "./Register";

export const LandingPage = () => {
  return (
    <div className="d-grid   justify-content-center align-items-center">
      <div>
        <Register />
      </div>
      <div>
        <Login />
      </div>
    </div>
  );
};
