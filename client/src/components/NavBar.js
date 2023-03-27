import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdNotifications } from "react-icons/md";
import { TbHandStop } from "react-icons/tb";
import { ToDoListContext } from "../context/NeedAHelpContext";
import { IoMdLogOut } from "react-icons/io";

function NavBar() {
  const { stateHelp } = useContext(ToDoListContext);
  const [currentComponent, setCurrentComponent] = useState("Home");
  const [notifications, setNotifications] = useState(0);
  useEffect(() => {
    setNotifications(stateHelp.userInProgressTask.length);
  }, [stateHelp.userInProgressTask.length]);
  return (
    <div
      className="bg-white text-black shadow-xl
            w-full h-16 flex justify-center border-rounded
            items-center gap-[25px] text-[2rem]  cursor-pointer fixed left-0 bottom-0
            flex justify-center items-center rounded-t-3xl z-10"
    >
      <Link to="/home" onClick={() => setCurrentComponent("Home")}>
        <FaHome
          className={`hover:text-slate-600 rounded-3xl shadow-xl ${
            currentComponent === "Home" ? "text-[#feaa0c]" : "text-[#828193]"
          }`}
        />{" "}
      </Link>
      <Link to="/profile" onClick={() => setCurrentComponent("Profile")}>
        <CgProfile
          className={`hover:text-slate-600 rounded-3xl shadow-xl ${
            currentComponent === "Profile" ? "text-[#feaa0c]" : "text-[#828193]"
          }`}
        />{" "}
      </Link>
      <Link
        to="/notification"
        onClick={() => setCurrentComponent("Notifications")}
        className="flex items-center justify-center relative"
      >
        <MdNotifications
          className={`hover:text-slate-600 rounded-3xl shadow-xl ${
            currentComponent === "Notifications"
              ? "text-[#feaa0c]"
              : notifications > 0
              ? "text-[#D11A2A]"
              : "text-[#828193]"
          }`}
        />
        <p className="font-bold absolute -bottom-2  left-7 text-sm">
          {notifications}
        </p>
      </Link>
      <Link to="/login" onClick={() => setCurrentComponent("Login")}>
        <IoMdLogOut
          className={`hover:text-slate-600 rounded-3xl shadow-xl ${
            currentComponent === "Rules" ? "text-[#feaa0c]" : "text-[#828193]"
          }`}
        />
      </Link>
    </div>
  );
}

export default NavBar;
