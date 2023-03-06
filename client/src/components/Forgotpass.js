import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
function Forgotpass() {
  const [data, setData] = useState({
    emailOrUsername: "",
  });

  const handleSubmit = async () => {
    const response = await axios.post("/users/forgotpass", data);
    console.log("🚀 ~ handleLogin ~ response", response);
    if (response.data.success)
      alert(
        "We have send you an email with instruction about how to change your password"
      );
  };

  return (
    <div className="bg-[#E3DDDD] w-screen font-display ">
      <div className="flex justify-center container mx-auto my-auto w-screen h-screen items-center flex-col">
        <div className="max-w-[500px] min-w-[370px] md:w-3/4 shadow-2xl lg:w-1/2 flex flex-col items-center bg-slate-50 rounded-3xl pt-12 ">
          <div className="text-[#FAA03A] pb-4 font-bold items-center">
            <svg
              className="w-12 h-12 mx-auto pb-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
            <div className="text-center pb-3">Welcome at HelpMate!</div>
          </div>
          <div className="w-3/4 mb-6">
            <input
              type="email"
              name="email"
              value={data.emailOrUsername}
              onChange={(e) =>
                setData({ ...data, emailOrUsername: e.target.value })
              }
              placeholder="Email or username"
              className="w-full py-2 px-4 bg-[#f3f3f3] shadow-lg placeholder:font-semibold rounded-3xl hover:border-[#feaa0c] focus:outline-[#3B8A80] border-solid border-2 border-slate-300"
            />
          </div>

          <div className="w-3/4 mb-12">
            <button
              type="submit"
              onClick={handleSubmit}
              className="py-2 bg-[#3B8A80] w-full rounded-3xl mt-4 shadow-xl text-blue-50 font-bold hover:bg-[#70c2b7] active:bg-[#3d8f84]"
            >
              Send
            </button>
          </div>
          <div className="flex justify-center container mx-auto mb-10 text-slate-100 text-sm">
            <div className="flex flex-col sm:flex-row  justify-center md:w-1/2 items-center">
              <Link
                className="hover:text-[#FAA03A] font-bold text-[#488C82]"
                to="/login"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forgotpass;
