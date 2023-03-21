import onlylogo from "./../images/HelpMate_withoutText.jpg";
import noImg from "./../images/no-img.jpg";
import homeImg from "./../images/homeImage.jpg";
import TheModal from "./HelpReqModal.js";
import AllHelpReq from "./AllHelpReq.js";
import { useEffect, useContext, useState } from "react";
import axios from "axios";
import { AppContext } from "../context/Context.js";
import { ToDoListContext } from "../context/NeedAHelpContext.js";

import { Link } from "react-router-dom";
function Home() {
  const { state } = useContext(AppContext);
  const [currentComponent, setCurrentComponent] = useState("Home");
  const [fileData, setFiledata] = useState({
    url: state.user.image,
    file: null,
  });

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

  const { dispatchHelp } = useContext(ToDoListContext);
  useEffect(() => {
    const getData = async () => {
      // here filtered all task and show all except yours in home page
      const response = await axios.get("/needAHelp/getAllHelpReq");

      let offerHelpAccepted = [];
      let filteredData = [];
      if (response.statusText === "OK") {
        filteredData = response.data.tasks.filter(
          (item) => item.owner === state.user._id && item.status === "inProgres"
        );
        offerHelpAccepted = response.data.tasks.filter((item) => {
          return (
            item.helper &&
            JSON.parse(item.helper)._id === state.user._id &&
            item.status === "accepted"
          );
        });
      }
      dispatchHelp({
        type: "getInProgressUserTask",
        payload: filteredData,
      });
      dispatchHelp({
        type: "getHelpAcceptedTask",
        payload: offerHelpAccepted,
      });
    };
    getData();
  }, []);

  return (
    <div className=" p-8 bg-[#EDEAE5] font-display pb-20 ">
      <div className=" h-full  ">
        <div className="h-full flex rounded-3xl shadow-xl bg-[#FAD6BA] flex-col items-center">
          <nav className="w-full h-[100px] bg-[#FCFAFB] flex justify-between rounded-t-3xl">
            <div className="items-center rounded-full  p-4 ">
              <ul className="flex flex-col lg:flex-row list-none mr-auto">
                <li className="flex items-center">
                  <img
                    className="h-full h-[50px]  object-cover w-[50px] rounded-full"
                    src={fileData.url || noImg}
                    alt="profilpicture"
                  />
                </li>
                <li className="flex items-center pl-4">
                  <p>Hello </p>
                  <h3 className="text-[#026670] pl-1 font-bold ">
                    {data.username}
                  </h3>
                </li>
              </ul>
            </div>

            <div className="p-4">
              <div className="flex  p-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 pt-0.5 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  className="ml-2 outline-1 outline rounded-lg py-1 px-4 bg-transparent font-"
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search..."
                />
              </div>
            </div>
            <div className=" py-4 pr-5">
              <img className="w-[80px] h-[45px] " src={onlylogo} alt="logo" />
              <p className="font-logo pl-2 text-[14px]">HelpMate</p>
            </div>
          </nav>{" "}
          <div className="items-center bg-[#FCFAFB] w-full p-4 py-12 dark:!border-navy-700">
            <ul className="flex flex-col justify-center lg:flex-row list-none ">
              <li className="flex pl-5 ">
                <div className="flex">
                  <ul className=" pr-16">
                    <li className="flex   "></li>

                    <li>
                      <p className="text-[23px]  pl-5">Willkommen</p>
                    </li>
                    <li>
                      <p className="text-[20px] font-semibold pl-20 ">
                        Powitanie
                      </p>
                    </li>
                    <li>
                      <p className="text-[20px] pl-[150px] ">Bi xêr hatî</p>
                    </li>
                    <li>
                      <p className="text-[20px] pl-[40px] ">اهلا وسهلا</p>
                    </li>
                    <li>
                      <p className="text-[20px] pl-[60px] ">いらっしゃいませ</p>
                    </li>
                    <li>
                      <p className="text-[20px] font-semibold pl-[140px] ">
                        Bienvenido
                      </p>
                    </li>
                    <li>
                      <p className="text-[23px] pl-16 pr-2">Powitanie</p>
                    </li>
                    <li>
                      <p className="text-[20px] pl-2">Ласкаво просимо</p>
                    </li>
                    <li>
                      <p className="text-[20px] font-medium pl-10 ">歡迎</p>
                    </li>
                    <li>
                      <p className="text-[20px] pl-20 ">καλως ΗΡΘΑΤΕ</p>
                    </li>
                    <li>
                      <p className="text-[20px] font-semibold pl-[50px]">
                        خوش آمدید
                      </p>
                    </li>
                    <li>
                      <p className="text-[20px] pl-[2px]">ברוכים הבאים</p>
                    </li>
                    <li>
                      <p className="text-[20px] pl-[20px]">Karibu</p>
                    </li>
                    <li>
                      <p className="text-[20px] pl-[70px]">Nau mai haere mai</p>
                    </li>
                    <li>
                      <p className="text-[20px] font-semibold pl-[50px]">
                        Fáilte
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="">
                  <img
                    className="h-[500px] object-contain hidden md:flex"
                    src={homeImg}
                    alt="differentpeoplepicture"
                  />
                </div>
              </li>
            </ul>
          </div>
          <div className="pt-12 pb-8">
            <TheModal />
          </div>
          <div className="grid grid-cols-1 gap-6 pb-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 justify-center">
            <AllHelpReq />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
