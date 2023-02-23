import axios from "axios";
import { useEffect, useState } from "react";
function AllHelpReq() {
  const [data, setData] = useState("");
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("/needAHelp/getAllHelpReq");
      console.log(":rakete: ~ getData ~ response", response);

      if (response.statusText === "OK") setData(response.data.tasks);
      /* context.dispatch({
            type: "getTodo",
            payload: data.todos,
          }); */
    };
    getData();
  }, []);
  if (data.length > 0) {
    return data.map((el) => (
      <div
        key={el._id}
        className="flex flex-row w-100 space-x-4 items-center  text-[20px] font-display"
      >
        <h3>{el.place}</h3>
        <h3>{el.date}</h3>
        <h3>{el.description}</h3>
        <h3>{el.time}</h3>
      </div>
    ));
  } else return <p>asdasd</p>;
}

export default AllHelpReq;
