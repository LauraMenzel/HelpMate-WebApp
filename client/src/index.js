import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import EmailConfirm from "./components/EmailConfirm";
import Forgotpass from "./components/Forgotpass.js";
import ChangePassword from "./components/ChangePassword.js";
import ContextProvider from "./context/Context";
import ToDoListContextProvider from "./context/NeedAHelpContext";
import Profile from "./components/Profile/Profile.js";
import EditProfile from "./components/Profile/EditProfile.js";

import Home from "./components/HomePage.js";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <ToDoListContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/editprofile" element={<EditProfile />} />

          <Route path="/emailconfirm/:token" element={<EmailConfirm />} />
          <Route path="/forgotpass" element={<Forgotpass />} />
          <Route path="/changepassword/:token" element={<ChangePassword />} />
        </Routes>
        <App />
      </BrowserRouter>
    </ToDoListContextProvider>
  </ContextProvider>
);
