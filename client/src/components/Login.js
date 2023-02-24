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
    <div className="bg-[#E3DDDD] w-screen  ">
      <div className="flex justify-center container mx-auto  my-auto w-screen h-screen items-center flex-col">
        <div className="text-slate-100 items-center">
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
            Welcome at social app!
          </div>
        </div>

        <div className="max-w-[550px] md:w-3/4  text-[#828193] lg:w-1/2 flex flex-col items-center bg-white shadow-xl rounded-3xl pt-12">
          <div className="w-3/4 mb-6">
            <input
              type="email"
              name="email"
              value={data.emailOrUsername}
              onChange={(e) =>
                setData({ ...data, emailOrUsername: e.target.value })
              }
              placeholder="Email"
              className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded-3xl hover:ring-1 hover:ring-gray-600 outline-slate-500 border-solid border-2 border-slate-300"
            />
          </div>

          <div className="w-3/4 mb-6">
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              placeholder="Password"
              className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded-3xl hover:ring-1 hover:ring-gray-600 outline-slate-500  border-solid border-2 border-slate-300"
            />
          </div>

          <div className="w-3/4 mb-12">
            <button
              type="submit"
              onClick={handleLogin}
              className="py-4 bg-[#3B8A80] w-full rounded-3xl 
              text-white font-bold hover:bg-[#70c2b7]"
            >
              LOGIN
            </button>
          </div>
        </div>
        <div className="flex justify-center container mx-auto mt-6 mb-10 text-white text-sm">
          <div className="flex flex-col sm:flex-row  justify-between md:w-1/2 items-center">
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
  );
}

export default Register;
