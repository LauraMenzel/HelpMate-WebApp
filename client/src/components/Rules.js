import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Rules() {
  const [currentComponent, setCurrentComponent] = useState("Home");
  return (
    <div className=" bg-[#EDEAE5] p-8 font-display">
      <div className=" rounded-3xl shadow-xl pb-[80px]  bg-[#CCDEDD] ">
        <div className="pt-8 pb-8 pl-5 ">
          <Link
            to="/home"
            onClick={() => setCurrentComponent("Home")}
            className=" font-logo text-[20px]  tracking-wide hover:text-[#feaa0c] "
          >
            HelpMate
          </Link>
        </div>
        <div className="flex justify-center">
          <div className="w-[1000px]  bg-white">
            <div className="flex justify-center pt-[40px]">
              <p className="text-[60px] font-bold">No Place for HATE</p>
            </div>
            <div className="flex justify-center ">
              <img
                className=" w-11/12 h-1/2 "
                src="https://img.freepik.com/free-vector/people-crowd-diverse-characters-waving-hand_107791-14082.jpg?w=1480&t=st=1678898843~exp=1678899443~hmac=40fa8ecbe85afa945ba990806e6a04da68cfbd9a146df692274ea627e71f0285"
                alt=""
              />
            </div>
            <div className="flex justify-center bg-white pb-8 items-center">
              <div className="p-6 max-w-[550px] tracking-wider pl-[50px]">
                <p className="font-semibold">
                  Respectful behavior is expected at all times.
                </p>
                <p className="">
                  No discrimination of any kind will be tolerated.
                </p>
                <p className="font-semibold">
                  No hate speech or violence of any kind will be tolerated.
                </p>
                <p className="">
                  All users are expected to be inclusive and respectful of
                  diversity.
                </p>
                <p className="font-semibold">
                  All users must respect religious beliefs and practices.
                </p>
                <p className="">
                  All users must follow the terms and conditions of the app.
                </p>
                <p className="font-semibold">
                  Bullying or harassing behavior will not be tolerated.
                </p>
                <br />
                <p className="font-semibold text-red-500">
                  If any user fails to abide by these rules, their account may
                  be subject to suspension or termination.
                </p>
                <br />
                <p className="font-bold">
                  We strive to create a safe and respectful environment for all
                  users and any violation of the above mentioned rules will not
                  be tolerated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rules;
