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
            <div className="flex justify-center ">
              <img
                className=" w-11/12 h-1/2 "
                src="https://img.freepik.com/free-vector/tiny-people-standing-near-prohibited-gesture-isolated-flat-illustration_74855-11132.jpg?w=1380&t=st=1679948040~exp=1679948640~hmac=393f45ecb2b03dcd7a542a213e5d12f51888dcf070e09c351475097d19835582"
                alt=""
              />
            </div>
            <div className="flex justify-center  bg-white pb-8 items-center">
              <div className="p-6 max-w-[550px] font-semibold tracking-wider pl-[50px]">
                <p className="text-center text-[35px] pb-8">Rules</p>
                <div className="flex flex-row gap-12">
                  <div>
                    <p className="pb-5 ">
                      Respectful behavior is expected at all times.
                    </p>
                    <p className="pb-5">
                      No discrimination of any kind will be tolerated.
                    </p>
                    <p className="pb-5">
                      No hate speech or violence of any kind will be tolerated.
                    </p>
                    <p className="pb-5">
                      All users are expected to be inclusive and respectful of
                      diversity.
                    </p>
                  </div>
                  <div>
                    <p className="pb-5">
                      All users must respect religious beliefs and practices.
                    </p>
                    <p className="pb-5">
                      All users must follow the terms and conditions of the app.
                    </p>
                    <p className="pb-5">
                      Bullying or harassing behavior will not be tolerated.
                    </p>
                  </div>
                </div>

                <br />
                <p className="font-semibold text-center text-red-500">
                  If any user fails to abide by these rules, their account may
                  be subject to suspension or termination.
                </p>
                <br />
                <p className="font-bold text-center">
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
