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
import { GoLocation } from "react-icons/go";
import HelperPrev from "./HelperPrev";
function Profile() {
  const [currentComponent, setCurrentComponent] = useState("Home");
  const { state, dispatch } = useContext(AppContext);
  const { stateHelp, dispatchHelp } = useContext(ToDoListContext);
  const navigate = useNavigate();
  const [fileData, setFileData] = useState({
    url: state.user.image,
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
    language: state.user.language,
    intro: state.user.intro,
    helpoffers: state.user.helpoffers,
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

  const rejectedTask = async (task) => {
    const editedTask = {
      ...task,
      status: "open",
      helper: "",
    };
    const response = await axios.post("/needAHelp/edit", editedTask);
    if (response.statusText === "OK") {
      dispatchHelp({
        type: "setTaskHelper",
        payload: editedTask,
      });
      dispatchHelp({
        type: "deleteHelper",
        payload: task._id,
      });
    }
    const editedList = inProgressTask.filter((item) => item._id !== task._id);
    setInProgressTask(editedList);
  };
  const acceptedTask = async (task) => {
    const editedTask = {
      ...task,
      status: "accepted",
      helper: JSON.stringify(task.helper),
    };
    const response = await axios.post("/needAHelp/edit", editedTask);
    if (response.statusText === "OK") {
      dispatchHelp({
        type: "deleteHelper",
        payload: task._id,
      });
    }
    const editedList = inProgressTask.filter((item) => item._id !== task._id);
    setInProgressTask(editedList);
  };

  const logout = async () => {
    const response = await axios.get("/users/logout");
    console.log(response);
    dispatch({ type: "logout" });
    navigate("/");
  };
  return (
    <div className="bg-[#EDEAE5] font-display p-12">
      <div className="bg-white shadow-lg shadow-[#EDEAE5] rounded-3xl">
        <div className="flex items-center flex-col bg-white mx-auto rounded-3xl mb-12 bg-clip-border relative">
          {isOpen && (
            <div
              className="w-full h-full absolute -0 left-0 bg-black bg-opacity-25 z-10 flex items-center justify-center"
              onClick={() => setIsOpen(false)}
            >
              <HelperPrev helper={currentProps} />
            </div>
          )}

          <div className="relative flex justify-center rounded-3xl w-full  h-60">
            <img
              src="https://images.unsplash.com/photo-1521080755838-d2311117f767?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJsdWUlMjBtb3VudGFpbnxlbnwwfHwwfHw%3D&w=1000&q=80"
              className="absolute flex h-60 w-full rounded-t-xl justify-center"
              alt=""
            />
            <div>
              <Link
                to="/home"
                onClick={() => setCurrentComponent("Home")}
                className="absolute left-3 font-logo text-[20px] tracking-wide hover:text-[#feaa0c] p-1 rounded-full"
              >
                HelpMate
              </Link>
            </div>
            <div className="absolute right-3" onClick={logout}>
              <IoMdLogOut
                className="w-6 h-6 fill-current mt-4 "
                color="#026670"
              />
            </div>

            <div className="absolute -bottom-12 flex  items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
              <img
                className="h-full h-[150px] object-cover w-[150px] rounded-full"
                src={fileData.url || noImg}
                alt="profilpicture"
              />
            </div>
          </div>
          <div className="flex mb-12 text-[#026670] flex-col">
            <Link to="/editprofile">
              <TiEdit
                className="w-6 h-6 float-right fill-current mt-4 mr-4"
                color="#026670"
              />
            </Link>
            <div className="flex flex-col max-w-[500px] relative p-2 items-center justify-center mt-8">
              <div className="flex justify-center items-center">
                <p className="text-black font-bold tracking-wider  text-[35px]">
                  {data.username}
                </p>
              </div>
              <span className="flex text-black items-center">
                <GoLocation className=" w-[14px] h-[14px] mr-1" />
                <p className=" text-[18px]">{data.city}</p>
              </span>
              <p className="italic p-2 pb-12 pt-8 text-center">"{data.intro}"</p>
              <div className=" text-center relative overflow-x-auto">
                <table class=" w-full ">
                  <tr>
                    <td class="px-8 py-4 font-semibold">Age</td>
                    <td class=" px-8 py-4">{data.age}</td>
                  </tr>
                  <tr>
                    <td class=" px-8 py-4 font-semibold">E-mail</td>
                    <td class=" px-8 py-4">{data.email}</td>
                  </tr>
                  <tr>
                    <td class=" px-8 py-4 font-semibold">Phone</td>
                    <td class=" px-8 py-4">{data.phonenumber}</td>
                  </tr>
                  <tr className="">
                    <td class=" px-8 py-4 font-semibold ">Language skills</td>
                    <td class=" px-8 py-4">{data.language}</td>
                  </tr>{" "}
                  <tr>
                    <td class=" px-8 py-4 font-semibold">Help offers</td>
                    <td class=" px-8 py-4">{data.helpoffers}</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>

          <div className="flex-1  w-fit bg-[#BCE3E8] shadow-xl shadow-shadow-500 rounded-lg mb-8 overflow-auto">
            <div className="flex flex-col p-6 items-center ">
              <p className="text-[24px] text-left font-sans tracking-wider p-4">
                People who offer you help{" "}
              </p>
              {inProgressTask.map((task) => {
                return (
                  <div
                    className="inline-flex items-center justify-evenly my-4 w-11/12 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                    key={task._id}
                  >
                    <img
                      className="rounded-3xl w-12 h-12 flex flex-initial"
                      src={task.helper.image || noImg}
                      alt=""
                    />
                    <div className="flex-inline mx-4 text-md ">
                      <span
                        className="text-[#026670] font-bold"
                        onClick={() => openModal(task.helper)}
                      >
                        {task.helper.username}{" "}
                      </span>
                      <span>offers you help with your task </span>
                      <span className="font-semibold font-sans text-[16px]">
                        {task.category}
                      </span>
                    </div>
                    <div className="flex flex-nowrap flex-1 items-center ">
                      {" "}
                      <AiOutlineCheckCircle
                        className="w-8 h-8 mr-2"
                        color="#026670"
                        onClick={() => {
                          acceptedTask(task);
                        }}
                      />
                      <ImCancelCircle
                        className="w-7 h-7"
                        color="#D11A2A"
                        onClick={() => {
                          rejectedTask(task);
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex-1 w-fit max-w-[480px] p-4 shadow-shadow-500 rounded-lg mb-8 overflow-auto">
            <div className="flex-1 w-auto rounded-lg mb-8 overflow-auto">
              <div className="flex flex-col p-4 items-center mt-10">
                <p className="text-[24px] text-center p-4">
                  Have a look into the tasks you already created{" "}
                </p>
                <Link
                  to="/mytasks"
                  className="bg-[#feaa0c] mt-2 hover:bg-[#70c2b7] active:bg-[#3d8f84] text-white font-bold py-2 px-4 rounded-3xl shadow-xl mb-20"
                >
                  Show my tasks
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
