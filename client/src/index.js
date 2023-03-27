import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import EmailConfirm from "./components/EmailConfirm";
import Forgotpass from "./components/Forgotpass";
import ChangePassword from "./components/ChangePassword";
import ContextProvider from "./context/Context";
import ToDoListContextProvider from "./context/NeedAHelpContext";
import Profile from "./components/Profile/Profile.js";
import EditProfile from "./components/Profile/EditProfile.js";
import MyTasks from "./components/Profile/MyTasks.js";
import Home from "./components/HomePage.js";
import LoginLayout from "./layouts/LoginLayout";
import UserLayout from "./layouts/UserLayout";
import Rules from "./components/Rules";
import AboutUs from "./components/AboutUs";
import Landing from "./components/Landing";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <ToDoListContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<LoginLayout />}>
            <Route path="/landing" element={<Landing />} />
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
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/editprofile" element={<EditProfile />} />
            <Route path="/mytasks" element={<MyTasks />} />
          </Route>
        </Routes>

        <App />
      </BrowserRouter>
    </ToDoListContextProvider>
  </ContextProvider>
);
