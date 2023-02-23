import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/Context";
import { MdNotifications } from "react-icons/md";
import { TbHandStop } from "react-icons/tb";
import axios from "axios";


function NavBar() {
  const navigate = useNavigate();

  const {dispatch } = useContext(AppContext);

  const handleLogout = async () => {
    const response = await axios.get("/users/logout");
    console.log("🚀 ~ handleLogout ~ response", response);

    dispatch({
      type: "logout",
    });

    navigate("/");
  };

  return (
    <div
      className="bg-white text-black
            w-full h-16 flex justify-center border-rounded
            items-center gap-[25px] text-[2rem]  cursor-pointer fixed left-0 bottom-0
            flex justify-center items-center rounded-t-3xl"
    >
      <Link to="/home">
        <FaHome className="hover:text-slate-600 text-[#828193]" />{" "}
      </Link>
      <Link to="/profile">
        <CgProfile className="hover:text-slate-600 text-[#feaa0c]" />{" "}
      </Link>
      <Link to="/notifications">
        <MdNotifications className="hover:text-slate-600 text-[#828193] cursor-pointer" />
      </Link>
      <Link to="/rules">
        <TbHandStop className="hover:text-slate-600 text-[#828193] cursor-pointer" />
      </Link>
    </div>
  );
}

export default NavBar;

