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
    helpoffers: state.user.helpoffers,
    intro: state.user.intro,
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
    console.log(stateHelp);
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
    console.log(task);
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
    <div className="bg-[#EDEAE5] h-full p-8">
      <div className="bg-white shadow-lg shadow-[#EDEAE5] rounded-3xl">
        <div className="flex items-center flex-col bg-white mx-auto rounded-3xl bg-clip-border relative mb-4">
          {isOpen && (
            <div
              className="w-full h-full absolute -0 left-0 bg-black bg-opacity-25 z-10 flex items-center justify-center"
              onClick={() => setIsOpen(false)}
            >
              <HelperPrev helper={currentProps} />
            </div>
          )}

          <div className="relative flex justify-center rounded-3xl w-full mb-12 h-60">
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
                className="h-full h-[150px] w-[150px] rounded-full"
                src={fileData.url || noImg}
                alt="profilpicture"
              />
            </div>
          </div>
        </div>

        <div className="flex-1 bg-white w-full shadow-xl shadow-shadow-500  rounded-3xl overflow-auto">
          <Link to="/editprofile">
            <TiEdit
              className="w-6 h-6 float-right fill-current mt-4 mr-4"
              color="#026670"
            />
          </Link>
          <div className="flex flex-col items-center mt-14">
            <h3 className="text-[#026670] font-bold text-xl">
              {data.fullname}
            </h3>
            <h4 className="text-slate-500 italic text-sm">
              {data.city}, {data.age}
              {data.email}
            </h4>
            <h4>{data.language}</h4>
            <h4>{data.intro}</h4>
            <h4>{data.helpoffers}</h4>
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
                    <span
                      className="text-[#026670] font-bold"
                      onClick={() => openModal(task.helper)}
                    >
                      {task.helper.username}{" "}
                    </span>
                    offer you help with {task.category}
                  </h4>
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
            <Link
              to="/mytasks"
              className="bg-[#feaa0c] mt-2 hover:bg-[#70c2b7] active:bg-[#3d8f84] text-white font-bold py-2 px-4 rounded-3xl shadow-xl mb-20"
            >
              Show my task
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
