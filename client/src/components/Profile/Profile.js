import { FiUser } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { GoLocation } from "react-icons/go";
import { BsFillCalendarMonthFill } from "react-icons/bs";
import { IoMdLogOut } from "react-icons/io";
import { TiEdit } from "react-icons/ti";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { ToDoListContext } from "../../context/NeedAHelpContext";
import noImg from "../../images/no-img.jpg";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "../../context/Context";

function Profile() {
  const { state, dispatch } = useContext(AppContext);
  const { stateHelp, dispatchHelp } = useContext(ToDoListContext);
  const navigate = useNavigate();
  const [helpReq, setHelpReq] = useState([]);
  const [fileData, setFiledata] = useState({
    url: "",
    file: null,
  });

  const [data, setData] = useState({
    username: state.user.username,
    fullname: state.user.firstname + " " + state.user.lastname,
    email: state.user.email,
    city: state.user.city,
    age: state.user.age,
    phonenumber: state.user.phonenumber,
  });

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("/needAHelp/getUserHelpReq");
      console.log(response.data.getUserHelpReq);

      if (response.statusText === "OK")
        dispatchHelp({
          type: "getUserTask",
          payload: response.data.getUserHelpReq,
        });
      setHelpReq(stateHelp.userTask);
    };
    getData();
  }, []);

  console.log(helpReq);
  const logout = async () => {
    const response = await axios.get("/users/logout");
    console.log(response);
    dispatch({ type: "logout" });
    navigate("/");
  };

  return (
    <div className="flex w-full h-full justify-center items-center flex-col bg-[#EDEAE5] relative">
      <div className="absolute w-24 h-24 top-36 rounded-3xl">
        <img className="rounded-3xl" src={fileData.url || noImg} alt="" />
      </div>
      <div className="flex-none bg-[#EDEAE5] w-full h-48">
        <div onClick={logout}>
          <IoMdLogOut
            className="w-6 h-6 float-right fill-current mt-4 mr-4"
            color="#026670"
          />
        </div>
      </div>
      <div className="flex-1 bg-white w-full rounded-t-3xl">
        <Link to="/editprofile">
          <TiEdit
            className="w-6 h-6 float-right fill-current mt-4 mr-4"
            color="#026670"
          />
        </Link>
        <div className="flex flex-col items-center mt-14">
          <h3 className="text-[#026670] font-bold text-xl">{data.fullname}</h3>
          <h4 className="text-slate-500 italic text-sm">
            {data.city}, {data.age}.
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Profile;
