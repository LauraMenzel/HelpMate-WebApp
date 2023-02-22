import TheModal from "./HelpReqModal.js";
import AllHelpReq from "./AllHelpReq.js";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="w-full h-full flex items-center  bg-neutral-100 justify-center items-center gap-[20px] flex-col mt-[30px]">
      <Link className="hover:text-red-500" to="/profile">
        go to profile
      </Link>
      <TheModal />
      <AllHelpReq />
    </div>
  );
}

export default Home;
