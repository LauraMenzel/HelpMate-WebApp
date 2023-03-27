import { ImCancelCircle } from "react-icons/im";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useContext, useState, useEffect } from "react";
import noImg from "../../images/no-img.jpg";
import { ToDoListContext } from "../../context/NeedAHelpContext";
import axios from "axios";
import HelperPrev from "./HelperPrev";

function TheNotifications() {
  const [inProgressTask, setInProgressTask] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [currentProps, setCurrentProps] = useState(null);
  const { stateHelp, dispatchHelp } = useContext(ToDoListContext);
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

  return (
    <div className="flex-1 bg-[#BCE3E8] h-[100%] shadow-xl shadow-shadow-500 rounded-lg mb-8 overflow-auto">
      {isOpen && (
        <div
          className="w-full h-full absolute -0 left-0 bg-black bg-opacity-25 z-10 flex items-center justify-center"
          onClick={() => setIsOpen(false)}
        >
          <HelperPrev helper={currentProps} />
        </div>
      )}
      <div className="flex flex-col p-4 items-center ">
        <p className="text-[24px] text-left p-4">People who offer you help </p>
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
              <h4 className="flex-inline flex-auto mx-4 text-sm ">
                <span
                  className="text-[#026670] font-bold"
                  onClick={() => openModal(task.helper)}
                >
                  {task.helper.username}{" "}
                </span>
                offers you help with {task.category}
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
      </div>
    </div>
  );
}

export default TheNotifications;
