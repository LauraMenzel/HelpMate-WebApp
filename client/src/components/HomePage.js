import onlylogo from "./../images/HelpMate_withoutText.jpg";
import noImg from "./../images/no-img.jpg";
import homeImg from "./../images/homeImage.jpg";
import TheModal from "./HelpReqModal.js";
import AllHelpReq from "./AllHelpReq.js";
import { useEffect, useContext, useState } from "react";
import axios from "axios";
import { AppContext } from "../context/Context.js";
import { ToDoListContext } from "../context/NeedAHelpContext.js";

function Home() {
  const { state } = useContext(AppContext);
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
    <div className="h-full  p-8 bg-[#EDEAE5] font-display flex flex-col">
      <div className=" w-full h-[67px] md:h-[120px] bg-white flex justify-between rounded-t-3xl ">
        <div className="flex justify-evenly h-[100px] w-[250px] md:h-[150px]  md:w-[290px] pt-3">
          <div className="h-[80px] w-[80px] md:h-[90px]  md:w-[90px] absolute md:top-8 md:left-8 top-6 left-6">
            <img
              className=" rounded-full md:p-4 p-6 mb-10 "
              src={fileData.url || noImg}
              alt="profilpicture"
            />
          </div>

          <div className="h-[150px]  w-[140px] pl-2">
            <p className="text-sm md:text-lg  md:pt-2">Hello </p>
            <p className="text-[#026670] md:text-lg font-bold text-sm">
              {data.username}!
            </p>
          </div>
        </div>

        <div className="h-[120px] hidden md:flex md:w-[680px] md:justify-center object-cover md:mr-20 ">
          <img className="" src={homeImg} alt="differentpeoplepicture" />
        </div>
        <div className="flex flex-col items-center py-3 md:py-4 pr-5">
          <img
            className=" w-[35px] h-[25px] md:w-[85px] md:h-[65px] "
            src={onlylogo}
            alt="logo"
          />
          <p className="font-logo pl-2 text-[12px] md:text-[14px]">HelpMate</p>
        </div>
      </div>
      <div className="md:h-full relative flex rounded-b-3xl shadow-xl  bg-[#e4f1f2] flex-col items-center overflow-y-auto">
        <div className="pt-12 pb-8">
          <TheModal />
        </div>
        <div className="">
          <AllHelpReq />
        </div>
      </div>
    </div>
  );
}

export default Home;
