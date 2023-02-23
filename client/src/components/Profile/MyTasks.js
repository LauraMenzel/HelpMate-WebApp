import axios from "axios";
import { Link } from "react-router-dom";
import { ToDoListContext } from "../../context/NeedAHelpContext";

import { useContext, useState, useEffect } from "react";

function MyTasks() {
  const { stateHelp, dispatchHelp } = useContext(ToDoListContext);
  const [helpReq, setHelpReq] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("/needAHelp/getUserHelpReq");
      console.log(response.data.getUserHelpReq);

      if (response.statusText === "OK") {
        dispatchHelp({
          type: "getUserTask",
          payload: response.data.getUserHelpReq,
        });
        setHelpReq(response.data.getUserHelpReq);
      }
    };
    getData();
  }, []);
  if (helpReq.length > 0) {
    return helpReq.map((el) => (
      <div
        key={el._id}
        className="flex flex-row w-100 space-x-4 items-center mt-12 text-[20px] font-display"
      >
        <h3>{el.place}</h3>
        <h3>{el.date}</h3>
        <h3>{el.description}</h3>
        <h3>{el.time}</h3>
      </div>
    ));
  } else return <p>asdasd</p>;
}

export default MyTasks;
