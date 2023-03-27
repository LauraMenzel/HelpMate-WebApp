import helpmatelogo from "./../images/HelpMate.jpg";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AppContext } from "../context/Context";

function Register() {
  const { dispatch } = useContext(AppContext);
const [fileData, setFiledata] = useState({
  url: "",
  file: null,
});
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
    <div className="bg-[#E3DDDD]  h-screen font-display sm:text-xl text-base md:flex ">
      <div
        className="relative overflow-hidden 
    md:flex w-[50%] items-center hidden bg-white"
      >
        <div className="flex justify-center w-screen h-screen items-center flex-col">
          <img
            className=" object-contain"
            src="https://www.beiersdorf.de/~/media/Beiersdorf/sustainability/society/overview/Beiersdorf-society-teaser-new.png?rx=0&ry=0&rw=940&rh=528&mw=940&hash=A7C99DB3C4914C08A8627E478530FF10"
            alt="happy people of different color and age standing together"
          />
          <h1 className="text-black font-bold pt-4 lg:text-xl text-base font-sans">
            Experience the power of kindness with HelpMate.
          </h1>
          <p className="text-black mt-2 text-base lg:text-lg">
            Connecting those in need with those who care.
          </p>
          <p className="text-black mt-2 text-base lg:text-lg">
            Together we can make a difference!
          </p>
          
        </div>
      </div>

      <div className="flex justify-center container mx-auto md:w-1/2 my-auto w-screen h-screen items-center flex-col">
        <div className="max-w-[500px] min-w-[250px]  text-[#828193] flex flex-col sm:min-w-[350px] sm:max-w-[370px] md:min-w-[250px] items-center bg-white shadow-xl rounded-lg ">
          <div className="text-slate-100 items-center ">
            <img
              className="w-[350px] h-[350px]"
              src={fileData.url || helpmatelogo}
              alt="logo"
            />
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
              className="md:py-2 py-1 bg-[#FAA03A] w-full rounded-3xl 
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
