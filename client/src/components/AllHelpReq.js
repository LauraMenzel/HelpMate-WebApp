import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { ToDoListContext } from "../context/NeedAHelpContext";
import { GoLocation } from "react-icons/go";
import { BsFillCalendarMonthFill } from "react-icons/bs";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { AppContext } from "../context/Context";
import { RiHandHeartFill } from "react-icons/ri";
function AllHelpReq() {
  const [data, setData] = useState("");

  const { stateHelp, dispatchHelp } = useContext(ToDoListContext);
  const { state } = useContext(AppContext);

  useEffect(() => {
    const getData = async () => {
      // here filtered all task and show all except yours in home page
      const response = await axios.get("/needAHelp/getAllHelpReq");

      let filteredData = [];
      if (response.statusText === "OK") {
        filteredData = response.data.tasks.filter(
          (item) => item.owner !== state.user._id && item.status === "open"
        );

        setData(filteredData);
      }
      dispatchHelp({
        type: "getAllTasks",
        payload: filteredData,
      });
    };
    getData();
  }, []);
  console.log(stateHelp);
  const setHelper = async (task) => {
    const editedTask = {
      ...task,
      status: "inProgres",
      helper: JSON.stringify(state.user),
    };
    const response = await axios.post("/needAHelp/edit", editedTask);
    if (response.success) {
      dispatchHelp({
        type: "setTaskHelper",
        payload: editedTask,
      });
      console.log(response);
    }
    console.log(editedTask);
  };
  if (data.length > 0) {
    return data.map((el) => (
      <div
        key={el._id}
        className="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl"
      >
        <div className="flex w-full justify-between flex-wrap mb-2">
          <span className="flex justify-center items-center">
            
            <p className="mb-2 text-2xl font-semibold  text-gray-900 dark:text-white border-2 rounded-full p-2">
              {el.category}
            </p>
          </span>
          <span className="flex justify-center items-center">
            <GoLocation className="text-slate-400 w-[14px] h-[14px] mr-2" />
            <p className="text-slate-400 text-sm">{el.place}</p>
          </span>
          <span className="flex justify-center items-center">
            <BsFillCalendarMonthFill className="text-slate-400 w-[14px] h-[14px] mr-2" />
            <p className="text-slate-400 text-sm">
              {el.date}, {el.time}
            </p>
          </span>
        </div>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {el.description}
        </p>
        <div
          onClick={() => setHelper(el)}
          className="flex w-full mt-4"
        >
          <span className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            I`m interested
            <RiHandHeartFill className="ml-2" />
          </span>
        </div>
      </div>
    ));
  } else return <p>No data</p>;
}

export default AllHelpReq;
