import axios from "axios";
import { Link } from "react-router-dom";
import { ToDoListContext } from "../../context/NeedAHelpContext";
import { GoLocation } from "react-icons/go";
import { BsFillCalendarMonthFill } from "react-icons/bs";
import { AiOutlineUnorderedList } from "react-icons/ai";
import HelperPrev from "./HelperPrev";
import { BsFillTrashFill } from "react-icons/bs";
import EditMyTask from "./EditMyTask";
import { useContext, useState, useEffect } from "react";

function MyTasks() {
  const [currentComponent, setCurrentComponent] = useState("Home");
  const { stateHelp, dispatchHelp } = useContext(ToDoListContext);
  const [helpReq, setHelpReq] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [acceptedReq, setAcceptedReq] = useState([]);
  const [acceptedOffer, setAcceptedOffer] = useState(
    stateHelp.helpAcceptedTask
  );
  const [isOpen, setIsOpen] = useState(false);
  const [currentProps, setCurrentProps] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("/needAHelp/getUserHelpReq");
      console.log(stateHelp.helpAcceptedTask);

      if (response.statusText === "OK") {
        dispatchHelp({
          type: "getUserTask",
          payload: response.data.getUserHelpReq,
        });

        setHelpReq(
          response.data.getUserHelpReq.filter(
            (item) => item.status !== "accepted"
          )
        );
        setAcceptedReq(
          response.data.getUserHelpReq
            .filter((item) => item.status === "accepted")
            .map((el) => {
              return {
                ...el,
                helper: JSON.parse(el.helper),
              };
            })
        );
        setAcceptedOffer(stateHelp.helpAcceptedTask);
      }
    };
    getData();
  }, []);
  const deleteItem = async (id) => {
    const response = await fetch("http://localhost:4001/needAHelp/delete", {
      method: "DELETE",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ id }),
    });
    const json = await response.json();
    if (json.statusText === "OK")
      dispatchHelp({
        type: "deleteItem",
        payload: id,
      });
  };
  const openModal = (helper) => {
    setCurrentProps(helper);
    setIsOpen(true);
  };
  return (
    <div className="h-full  p-8 bg-[#EDEAE5] ">
      {isOpen && (
        <div
          className="w-full h-full absolute -0 left-0 bg-black bg-opacity-25 z-10 flex items-center justify-center"
          onClick={() => setIsOpen(false)}
        >
          <HelperPrev helper={currentProps} />
        </div>
      )}
      <div className=" rounded-3xl  p-8 shadow-xl  bg-[#e4f1f2]">
        <div>
          <Link
            to="/home"
            onClick={() => setCurrentComponent("Home")}
            className="font-logo text-[20px] tracking-wide hover:text-[#feaa0c] p-1 rounded-full"
          >
            HelpMate
          </Link>
        </div>
        <div className="pl-8 pt-12 ">
          <h1>Your added tasks:</h1>
        </div>
        <div className=" flex flex-wrap gap-5">
          {helpReq.length != 0 ? (
            helpReq.map((el) => (
              <div
                key={el._id}
                className="my-4 p-6 bg-white border rounded-lg border-gray-200 max-w-[350px]rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="flex w-full justify-between mb-2">
                  <span className="flex justify-center items-center">
                    <AiOutlineUnorderedList className="text-slate-400 w-[14px] h-[14px] mr-2" />
                    <p className="text-slate-400 text-sm">{el.category}</p>
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
                <p className="mb-3 font-normal flex flex-wrap w-[300px] text-gray-700 dark:text-gray-400">
                  {el.description}
                </p>
                <div className="flex w-full justify-between flex-wrap mt-4">
                  <EditMyTask item={el} />
                  <span
                    onClick={() => deleteItem(el._id)}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    delete
                    <BsFillTrashFill className="ml-2" />
                  </span>
                </div>
              </div>
            ))
          ) : (
            <p className="px-10 pt-4 text-[red]">No data</p>
          )}
        </div>
        <p className="pl-8 pt-12">Accepted tasks:</p>
        <div className="flex gap-5 flex-row-3 flex-wrap ">
          {acceptedOffer.map((el) => (
            <div
              key={el._id}
              className="my-4 p-6 bg-white border border-gray-200 rounded-lg max-w-[350px] shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <div className="flex w-full justify-between flex-wrap mb-2">
                <span className="flex justify-center items-center">
                  <AiOutlineUnorderedList className="text-slate-400 w-[14px] h-[14px] mr-2" />
                  <p className="text-slate-400 text-sm">{el.category}</p>
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
              <p className="mb-3 font-normal text-slate-400 dark:text-gray-400">
                {el.description}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {el.helper.firstname}
              </p>
              <div className="flex w-full justify-between flex-wrap mt-4"></div>
            </div>
          ))}
        </div>
        <p className="pl-8 pt-12"> History:</p>
        <div className="flex gap-5 flex-row-3 flex-wrap pb-8">
          {acceptedReq.map((el) => (
            <div
              key={el._id}
              className="my-4 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <div className="flex w-full justify-between flex-wrap mb-2">
                <span className="flex justify-center items-center">
                  <AiOutlineUnorderedList className="text-slate-400 w-[14px] h-[14px] mr-2" />
                  <p className="text-slate-400 text-sm">{el.category}</p>
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
              <p className="mb-3 font-normal flex flex-wrap w-[300px] text-gray-700 dark:text-gray-400">
                {el.description}
              </p>
              <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                <h4 className="flex-inline flex-auto mx-4 text-sm ">
                  <span
                    className="text-[#026670] font-bold"
                    onClick={() => openModal(el.helper)}
                  >
                    Helper: {el.helper.username}
                  </span>
                </h4>
              </div>
              <div className="flex w-full justify-between flex-wrap mt-4">
                <span
                  onClick={() => deleteItem(el._id)}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <BsFillTrashFill className="ml-2" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyTasks;
