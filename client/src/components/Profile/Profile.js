import { IoMdLogOut } from "react-icons/io";
import { TiEdit } from "react-icons/ti";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import noImg from "../../images/no-img.jpg";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "../../context/Context";
import { ToDoListContext } from "../../context/NeedAHelpContext";
import { ImCancelCircle } from "react-icons/im";
import { AiOutlineCheckCircle } from "react-icons/ai";
import HelperPrev from "./HelperPrev";
function Profile() {
  const { state, dispatch } = useContext(AppContext);
  const { stateHelp, dispatchHelp } = useContext(ToDoListContext);
  const navigate = useNavigate();
  const [fileData, setFiledata] = useState({
    url: "",
    file: null,
  });
  const [isOpen, setIsOpen] = useState(false);
  const [currentProps, setCurrentProps] = useState(null);
  const [data, setData] = useState({
    username: state.user.username,
    fullname: state.user.firstname + " " + state.user.lastname,
    email: state.user.email,
    city: state.user.city,
    age: state.user.age,
    phonenumber: state.user.phonenumber,
  });
  const [inProgressTask, setInProgressTask] = useState([]);
  useEffect(() => {
    setInProgressTask(
      stateHelp.userInProgressTask.map((el) => {
        return {
          ...el,
          helper: JSON.parse(el.helper),
        };
      })
    );
  }, []);
  const openModal = (helper) => {
    setCurrentProps(helper);
    setIsOpen(true);
  };
  console.log(inProgressTask);

  const logout = async () => {
    const response = await axios.get("/users/logout");
    console.log(response);
    dispatch({ type: "logout" });
    navigate("/");
  };

  return (
    <div className="flex w-full h-full justify-center items-center flex-col bg-[#EDEAE5] relative">
      {isOpen && (
        <div
          className="w-full h-full absolute top-0 left-0 bg-black bg-opacity-25 z-10 flex items-center justify-center"
          onClick={() => setIsOpen(false)}
        >
          <HelperPrev helper={currentProps} />
        </div>
      )}
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
      <div className="flex-1 bg-white w-full rounded-t-3xl overflow-auto">
        <Link to="/editprofile">
          <TiEdit
            className="w-6 h-6 float-right fill-current mt-4 mr-4"
            color="#026670"
          />
        </Link>
        <div className="flex flex-col items-center mt-14">
          <h3 className="text-[#026670] font-bold text-xl">{data.fullname}</h3>
          <h4 className="text-slate-500 italic text-sm">
            {data.city}, {data.age}
          </h4>
          {inProgressTask.map((task) => {
            return (
              <div
                className="inline-flex items-center justify-evenly my-4 w-11/12 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                key={task._id}
              >
                <img
                  className="rounded-3xl w-12 h-12 flex flex-initial"
                  src={fileData.url || noImg}
                  alt=""
                />
                <h4 className="flex-inline flex-auto mx-4 text-sm ">
                  <span onClick={() => openModal(task.helper)}>
                    {task.helper.username}{" "}
                  </span>
                  offer you help with {task.category}
                </h4>
                <div className="flex flex-nowrap flex-1 items-center ">
                  {" "}
                  <AiOutlineCheckCircle
                    className="w-8 h-8 mr-2"
                    color="#026670"
                  />
                  <ImCancelCircle className="w-7 h-7" color="#D11A2A" />
                </div>
              </div>
            );
          })}
          <Link
            to="/mytasks"
            className="bg-yellow-600 hover:bg-[#FCE181]-700 text-white font-bold py-2 px-4 rounded"
          >
            Show my task
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Profile;
