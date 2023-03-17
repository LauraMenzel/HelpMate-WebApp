
import TheModal from "./HelpReqModal.js";
import AllHelpReq from "./AllHelpReq.js";
import { useEffect, useContext } from "react";
import axios from "axios";
import { AppContext } from "../context/Context.js";
import { ToDoListContext } from "../context/NeedAHelpContext.js";
function Home() {
  const { state } = useContext(AppContext);
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
    <div className="h-full p-8 bg-[#EDEAE5] pb-20 ">
      <div className=" h-full  ">
        <div className="h-full flex rounded-3xl shadow-xl  bg-gradient-to-b from-cyan-200 via-slate-100 to-slate-100  flex-col items-center">
          <div className="w-full h-[200px] bg-white rounded-t-3xl"></div>
          <div className="pt-12 pb-8">
            <TheModal />
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 justify-center">
            <AllHelpReq />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
