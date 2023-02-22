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
import { ToDoListContextProvider } from "./context/NeedAHelpContext";
import Profile from "./components/Profile.js";
import Home from "./components/HomePage.js";
import LoginLayout from "./layouts/LoginLayout";
import UserLayout from "./layouts/UserLayout";
import Rules from "./components/Rules"


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <ToDoListContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<LoginLayout />}>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/emailconfirm/:token" element={<EmailConfirm />} />
            <Route path="/forgotpass" element={<Forgotpass />} />
            <Route path="/changepassword/:token" element={<ChangePassword />} />
          </Route>

          <Route element={<UserLayout />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/home" element={<Home />} />
            <Route path="/rules" element={<Rules />} />
          </Route>

        </Routes>

        <App />
      </BrowserRouter>
    </ToDoListContextProvider>
  </ContextProvider>
);
