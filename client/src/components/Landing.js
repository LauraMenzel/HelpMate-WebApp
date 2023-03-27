import onlylogo from "./../images/HelpMate_withoutText.jpg";
import howApp from "./../images/howApp.jpg";
import homeImg from "./../images/homeImage.jpg";
import { useEffect, useContext, useState } from "react";
import axios from "axios";
import { AppContext } from "../context/Context.js";
import { ToDoListContext } from "../context/NeedAHelpContext.js";
import { Link } from "react-router-dom";

function Landing() {
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
      <div className="h-full flex rounded-3xl shadow-xl bg-white flex-col items-center">
        <nav className="w-full h-[100px] bg-[#FCFAFB] flex justify-between rounded-t-3xl">
          <div className="items-center rounded-full p-4 ">
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="flex items-center pl-4">
                <Link to="/login">
                  <p className="text-[#068389]  p-2 font-semibold active:underline decoration-2 underline-offset-4 focus:ring-4 ">
                    LOGIN
                  </p>{" "}
                </Link>
              </li>
              <li className="flex items-center pl-4">
                <Link to="/register">
                  <p className="text-[#00AACC] hover:text-[#00AACC] p-2 font-semibold active:underline decoration-2 underline-offset-4 focus:ring-4 ">
                    SIGN IN
                  </p>{" "}
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:flex hidden items-center "></div>

          <div className=" py-4 pr-5">
            <img className="w-[80px] h-[45px] " src={onlylogo} alt="logo" />
            <p className="font-logo pl-2 text-[14px]">HelpMate</p>
          </div>
        </nav>{" "}
        <div className="items-center bg-[#FCFAFB] w-full pb-10 pt-4 dark:!border-navy-700">
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
                    <p className="text-[20px] pl-16 pr-2">Powitanie</p>
                  </li>
                  <li>
                    <p className="text-[45px] font-semibold  pl-10">WELCOME</p>
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
      </div>
      <div className="">
        <div className="grid-cols-3 p-16 space-y-2 bg-[#FEC9A9] lg:space-y-0 lg:grid lg:gap-16 lg:grid-rows-3">
          <div className=" rounded">
            <img
              className="rounded-xl"
              src="https://img.freepik.com/free-photo/new-employees-taking-corporate-training-newcomers_1262-15010.jpg?size=626&ext=jpg&uid=R96852185&ga=GA1.1.971768092.1676332792&semt=ais"
              alt="image"
            />
          </div>
          <div className="w-full col-span-2 flex justify-end row-span-2  p-10 pt-20 rounded">
            <div className="flex flex-col  max-w-[900px] p-4  dark:!border-navy-700">
              <p className="text-[47px] pr-10  xl:text-right text-center  font-semibold tracking-wider">
                About Us
              </p>

              <p className=" xl:pr-10  tracking-wider  xl:text-right text-center pt-8 pb-5 text-[35px]">
                This app provides an easy way to connect volunteers and people
                in need. It allows volunteers to search and find opportunities
                to help, while those in need can access the help they need.
                Together, we can make the world a better place, one person at a
                time.
              </p>
              <p className=" xl:text-right text-center  pt-10">
                <Link
                  className="  text-[25px] mr-10 w-[100px] font-bold rounded-xl bg-[#FEAC06] shadow-lg px-7 py-3"
                  to="/aboutus"
                >
                  Read more
                </Link>
              </p>
            </div>
          </div>
          <div className="w-full rounded">
            <img
              className="w-full rounded-xl"
              src="https://img.freepik.com/free-photo/merry-biracial-couple-having-walk-summer-day-african-american-man-caucasian-woman-wheelchairs-embankment-fooling-around-love-relationship-happiness-concept_74855-22202.jpg?size=626&ext=jpg&uid=R96852185&ga=GA1.1.971768092.1676332792&semt=ais"
              alt="image"
            />
          </div>
          <div className="w-full rounded">
            <img
              className="w-full rounded-xl"
              src="https://media.istockphoto.com/id/1092115166/photo/home-nurse-taking-care-of-senior-woman.jpg?s=612x612&w=0&k=20&c=_M4cWhc9DqJClAL8RrorbHo-ygf6nkzCrhruZyosCfo="
              alt="image"
            />
          </div>
          <div className="w-full rounded">
            <img
              className=" w-full rounded-xl"
              src="https://img.freepik.com/free-photo/young-adult-helping-disabled-friend_23-2149433051.jpg?size=626&ext=jpg&uid=R96852185&ga=GA1.1.971768092.1676332792&semt=ais"
              alt="image"
            />
          </div>
          <div className="w-full rounded">
            <img
              className="w-full rounded-xl"
              src="https://st2.depositphotos.com/1075946/10139/i/450/depositphotos_101390240-stock-photo-elderly-woman-with-young-woman.jpg"
              alt="image"
            />
          </div>
        </div>
      </div>
      <div className=" lg:text-left text-center bg-[#FFFFFF] rounded-b-3xl p-16 dark:!border-navy-700">
        <p className="text-[35px] font-semibold p-5 tracking-wider">
          How Our App <span className="text-[#FEAB35] ">Work?</span>
        </p>

        <p className="p-5  text-[20px] ">
          Make A Difference - Join Now And Be a Part of Something Bigger
        </p>
        <div className=" items-center justify-center flex  ">
          <div className="flex justify-center p-5 flex-col">
            <div className="flex flex-wrap gap-8  ">
              <div className="max-w-sm p-8 bg-[#FEDAAE] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="py-3 ">
                  <p className=" border flex justify-center items-center text-xl bg-gray-300 bg-opacity-30 rounded-full w-[30px] h-[30px]">
                    1
                  </p>
                </div>

                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Create An Account
                </h5>

                <p className="mb-3 font-normal text-xl text-gray-700 dark:text-gray-400">
                  Become a part of our community and register now. Fill your
                  profile and start today!
                </p>
                <Link to="/register">
                  <p className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">
                    Sign in
                  </p>
                </Link>
              </div>
              <div className="max-w-sm p-8 bg-[#F8F7F7] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="py-3 ">
                  <p className=" border flex bg-gray-300 bg-opacity-30 justify-center items-center text-xl rounded-full w-[30px] h-[30px]">
                    2
                  </p>
                </div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Read the Rules
                </h5>

                <p className="mb-3 font-normal text-xl text-gray-700 dark:text-gray-400">
                  We have rules on this platform that everyone should follow.
                  Please read them carefully
                </p>
                <Link to="/rules">
                  <p className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">
                    Read more
                  </p>
                </Link>
              </div>
              <div className="max-w-sm p-8 bg-[#C3FEFE] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="py-3 ">
                  <p className=" border flex justify-center bg-gray-300 bg-opacity-30 items-center text-xl rounded-full w-[30px] h-[30px]">
                    3
                  </p>
                </div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Create A Task
                </h5>

                <p className="mb-3 font-normal text-xl text-gray-700 dark:text-gray-400">
                  Now you can create a task where you need help with, or you can
                  have a look who needs help and show them your interest.
                </p>
              </div>
              <div className="max-w-sm p-8 bg-[#C8CCF9] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="py-3 ">
                  <p className=" border flex justify-center items-center text-xl bg-gray-300 bg-opacity-30 rounded-full w-[30px] h-[30px]">
                    4
                  </p>
                </div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Accept A Task
                </h5>

                <p className="mb-3 font-normal text-xl text-gray-700 dark:text-gray-400">
                  OR reseive a message from the person offering to help you. Now
                  you can start to communicating the meeting.
                </p>
              </div>
            </div>
          </div>
          <div className="w-[90%] items-center justify-center hidden lg:flex">
            <img
              className="object-contain pb-8 rounded-xl"
              src={howApp} alt="computer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
