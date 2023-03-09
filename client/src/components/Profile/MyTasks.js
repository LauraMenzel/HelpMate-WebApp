import axios from "axios";
import { Link } from "react-router-dom";
import { ToDoListContext } from "../../context/NeedAHelpContext";
import { GoLocation } from "react-icons/go";
import { BsFillCalendarMonthFill } from "react-icons/bs";
import { AiOutlineUnorderedList } from "react-icons/ai";

import { BsFillTrashFill } from "react-icons/bs";
import EditMyTask from "./EditMyTask";
import { useContext, useState, useEffect } from "react";

function MyTasks() {
  const { stateHelp, dispatchHelp } = useContext(ToDoListContext);
  const [helpReq, setHelpReq] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [acceptedReq, setAcceptedReq] = useState([]);
  const [acceptedOffer, setAcceptedOffer] = useState(
    stateHelp.helpAcceptedTask
  );

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
  return (
    <div className="w-full h-full flex items-center flex-col">
      {helpReq.length != 0 ? (
        helpReq.map((el) => (
          <div
            key={el._id}
            className="my-4 w-11/12 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
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
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
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
        <p>No data</p>
      )}
      <div>
        <p>user has accepted yours helpOffer with:</p>
        {acceptedOffer.map((el) => (
          <div
            key={el._id}
            className="my-4 w-11/12 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
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
            <div className="flex w-full justify-between flex-wrap mt-4">
              <span
                onClick={() => deleteItem(el._id)}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <BsFillTrashFill className="ml-2" />
              </span>
            </div>
          </div>
        ))}
      </div>
      <div>
        <p> History:</p>
        {acceptedReq.map((el) => (
          <div
            key={el._id}
            className="my-4 w-11/12 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
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
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {el.description}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {el.helper.firstname}
            </p>
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
  );
}

export default MyTasks;
