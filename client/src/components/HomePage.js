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

      let filteredData = [];
      if (response.statusText === "OK") {
        filteredData = response.data.tasks.filter(
          (item) => item.owner === state.user._id && item.status === "inProgres"
        );
      }
      dispatchHelp({
        type: "getInProgressUserTask",
        payload: filteredData,
      });
    };
    getData();
  }, []);

  return (
    <div className="w-full h-full flex items-center  bg-neutral-100 justify-center items-center gap-[20px] flex-col mt-[30px] pb-[30px]">
      <TheModal />
      <AllHelpReq />
    </div>
  );
}

export default Home;
