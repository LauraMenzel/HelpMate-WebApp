import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AboutUs() {
  const [currentComponent, setCurrentComponent] = useState("Home");
  return (
    <div className="h-full p-8 bg-[#EDEAE5] pb-20 ">
      <div className="h-full">
        <div className="h-full w-full rounded-3xl shadow-xl  bg-gradient-to-b from-cyan-200 via-slate-100 to-slate-100 ">
          <div className="pt-8 pb-8 pl-5">
            <Link
              to="/home"
              onClick={() => setCurrentComponent("Home")}
              className=" font-logo text-[20px]  tracking-wide hover:text-[#feaa0c] "
            >
              HelpMate
            </Link>
          </div>
          <div className="flex justify-center">
            <div className="w-[1000px] h-[400px] rounded-3xl bg-white ">
              <div className="flex justify-center pt-[40px]">
                <p className="text-[60px]">about us</p>
              </div>
              
            </div>
          </div>
          <div className="p-6">
            <p>Here are instructions and rules for what this app is used for</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutUs;