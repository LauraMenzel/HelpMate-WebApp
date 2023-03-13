import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AppContext } from "../context/Context";


function Register() {
  const { dispatch } = useContext(AppContext);

  const navigate = useNavigate();
  const [data, setData] = useState({
    emailOrUsername: "",
    password: "",
  });

  const handleLogin = async () => {
    const response = await axios.post("/users/login", data);
    console.log("🚀 ~ handleLogin ~ response", response);

    if (response.data.success) {
      dispatch({
        type: "login",
        payload: response.data.user,
      });

      navigate("/home");
    }
  };

  return (
    <div className="bg-[#E3DDDD] h-screen font-display sm:text-xl text-base md:flex ">
      <div
        className="relative overflow-hidden 
    md:flex w-[50%] items-center hidden bg-white"
      >
        <div className="flex justify-center w-screen h-screen items-center flex-col">
          <img
            className=" h-auto max-w-full p-8"
            src="https://img.freepik.com/free-photo/closeup-diverse-people-holding-hands_53876-47126.jpg?w=1380&t=st=1677840500~exp=1677841100~hmac=7c66def5de834a8a0ed6753a74e0398b7beb65a5e930bd81fd90c671568c2667"
            alt=""
          />
          <h1 className="text-black font-bold p-1 lg:text-xl text-base mx-auto font-sans">
            Experience the power of kindness with HelpMate.
          </h1>
          <p className="text-black mt-2 text-base lg:text-lg">
            Connecting those in need with those who care.
          </p>
          <p className="text-black mt-2 text-base lg:text-lg">
            Together we can make a difference!
          </p>
          <button
            type="submit"
            className="block w-28 bg-white hover:text-[#FAA03A] active:text-[#3d8f84] text-[#3B8A80] mt-4 py-2 rounded-2xl text-base lg:text-lg font-bold mb-2"
          >
            Read More
          </button>
        </div>
      </div>

      <div className="flex justify-center container mx-auto md:w-1/2 my-auto w-screen h-screen items-center flex-col">
        <div className="max-w-[500px] min-w-[250px]  text-[#828193] lg:w-1/2 flex flex-col sm:min-w-[350px] sm:max-w-[370px] md:min-w-[250px] items-center bg-white shadow-xl rounded-lg pt-12">
          <div className="text-slate-100 items-center mb-4 ">
            <svg
              className="w-12 h-12 text-[#feaa0c] mx-auto pb-3"
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
            <div className="text-center text-[20px] text-[#feaa0c] pb-3">
              Welcome to HelpMate!
            </div>
          </div>
          <div className="w-3/4 mb-6">
            <label
              className="block mb-2 text-base font-bold text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={data.emailOrUsername}
              onChange={(e) =>
                setData({ ...data, emailOrUsername: e.target.value })
              }
              placeholder="Email"
              className="w-full md:py-2 py-1 px-4 placeholder:text-base rounded-lg shadow hover:border-[#feaa0c] focus:outline-[#3B8A80]  border border-slate-300"
            />
          </div>

          <div className="w-3/4 mb-6">
            <label
              className="block mb-2 text-base font-bold text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              placeholder="Password"
              className="w-full md:py-2 py-1 px-4 placeholder:text-base shadow rounded-lg hover:border-[#feaa0c] focus:outline-[#3B8A80]  border border-slate-300"
            />
          </div>

          <div className="w-3/4 mb-12 mt-4">
            <button
              type="submit"
              onClick={handleLogin}
              className="md:py-2 py-1 bg-[#3B8A80] w-full rounded-3xl 
              text-white font-bold hover:bg-[#70c2b7] active:bg-[#3d8f84]"
            >
              Login
            </button>
          </div>

          <div className="flex justify-center container mx-auto  mb-10 text-white text-sm">
            <div className="flex flex-col justify-evenly gap-4  items-center">
              <Link
                className="hover:text-[#FAA03A] font-bold text-[#488C82]"
                to="/register"
              >
                Sign up
              </Link>

              <Link
                className="hover:text-[#FAA03A] font-bold text-[#488C82]"
                to="/forgotpass"
              >
                Forgot your password?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
