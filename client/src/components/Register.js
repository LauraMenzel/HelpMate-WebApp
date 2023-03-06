import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    city: "",
    phonenumber: "",
    age: "",
    uploadphoto: "",
  });

  const navigate = useNavigate();

  const handleRegister = async () => {
    const response = await axios.post("/users/register", data);
    console.log("🚀 ~ handleRegister ~ response", response);

    if (response.data.success) navigate("/login");
  };

  return (
    <div className="bg-[#E3DDDD]  font-display sm:text-xl text-base md:flex ">
      <div
        className="relative  overflow-hidden 
    md:flex  items-center h-1/2 justify-center hidden bg-white"
      >
        <div className="flex justify-center  h-screen items-center flex-col">
          <img
            className=" h-auto max-w-full p-8 rounded-lg overflow-hidden"
            src="https://www.beiersdorf.de/~/media/Beiersdorf/sustainability/society/overview/Beiersdorf-society-teaser-new.png?rx=0&ry=0&rw=940&rh=528&mw=940&hash=A7C99DB3C4914C08A8627E478530FF10"
            alt=""
          />
          <h1 className="text-black relative font-bold lg:text-xl text-base mx-auto font-sans">
            Join our community of helpers and those in need.
          </h1>
          <p className="text-black mt-2 text-base lg:text-lg"></p>
          <p className="text-black mt-2 text-base lg:text-lg">
            Get registered now!
          </p>
        </div>
      </div>

      <div className="flex justify-center pt-8 container  mx-auto my-auto w-screen items-center flex-col">
        <div className="max-w-[500px] min-w-[250px] md:w-3/4  lg:w-1/2 flex flex-col items-center bg-slate-50 shadow-xl rounded-3xl pt-12">
          <div className="text-slate-100 mb-4 items-center">
            <svg
              className="w-10  text-[#feaa0c] mx-auto "
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
            <div className="text-center text-[#feaa0c] pt-3  text-[20px] pb-3">
              Sign up
            </div>
          </div>
          <div className="w-3/4 mb-6">
            <input
              type="text"
              name="user"
              value={data.username}
              onChange={(e) => setData({ ...data, username: e.target.value })}
              placeholder="Username"
              className="w-full py-2 px-4 bg-[#f3f3f3] placeholder:font-semibold rounded-3xl  hover:border-[#feaa0c] focus:outline-orange-600 border-solid border-2 border-slate-300"
            />
          </div>
          <div className="w-3/4 mb-6">
            <input
              type="firstname"
              name="firstname"
              value={data.firstname}
              onChange={(e) => setData({ ...data, firstname: e.target.value })}
              placeholder="First name"
              className="w-full py-2 px-4 bg-[#f3f3f3] placeholder:font-semibold rounded-3xl  hover:border-[#feaa0c]  focus:outline-orange-600 border-solid border-2 border-slate-300"
            />
          </div>
          <div className="w-3/4 mb-6">
            <input
              type="text"
              name="Last name"
              value={data.lastname}
              onChange={(e) => setData({ ...data, lastname: e.target.value })}
              placeholder="Last name"
              className="w-full py-2 px-4 bg-[#f3f3f3] placeholder:font-semibold rounded-3xl  hover:border-[#feaa0c] focus:outline-orange-600 border-solid border-2 border-slate-300"
            />
          </div>
          <div className="w-3/4 mb-6">
            <input
              type="text"
              name="birthdate"
              value={data.birthdate}
              onChange={(e) => setData({ ...data, birthdate: e.target.value })}
              placeholder="Date of birth"
              className="w-full py-2 px-4 bg-[#f3f3f3] placeholder:font-semibold rounded-3xl  hover:border-[#feaa0c] focus:outline-orange-600 border-solid border-2 border-slate-300"
            />
          </div>
          <div className="w-3/4 mb-6">
            <input
              type="text"
              name="City"
              value={data.city}
              onChange={(e) => setData({ ...data, city: e.target.value })}
              placeholder="City"
              className="w-full py-2 px-4 bg-[#f3f3f3] placeholder:font-semibold rounded-3xl  hover:border-[#feaa0c] focus:outline-orange-600 border-solid border-2 border-slate-300"
            />
          </div>
          <div className="w-3/4 mb-6">
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              placeholder="Email"
              className="w-full py-2 px-4 bg-[#f3f3f3] placeholder:font-semibold rounded-3xl  hover:border-[#feaa0c] focus:outline-orange-600 border-solid border-2 border-slate-300"
            />
          </div>
          <div className="w-3/4 mb-6">
            <input
              type="text"
              name="phonenumber"
              value={data.phonenumber}
              onChange={(e) =>
                setData({ ...data, phonenumber: e.target.value })
              }
              placeholder="Phone"
              className="w-full py-2 px-4 bg-[#f3f3f3] placeholder:font-semibold rounded-3xl  hover:border-[#feaa0c] focus:outline-orange-600 border-solid border-2 border-slate-300"
            />
          </div>

          <div className="w-3/4 mb-6">
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              placeholder="Password"
              className="w-full py-2 px-4 bg-[#f3f3f3] placeholder:font-semibold rounded-3xl  hover:border-[#feaa0c] focus:outline-orange-600 border-solid border-2 border-slate-300"
            />
          </div>

          <div className="w-3/4 mt-4 mb-5">
            <button
              type="submit"
              onClick={handleRegister}
              className="py-2 bg-[#3B8A80]  w-full rounded-3xl text-white font-bold hover:bg-[#70c2b7] active:bg-[#3d8f84]"
            >
              Sign Up
            </button>
          </div>
          <Link
            className="hover:text-[#FAA03A]  mb-7 font-bold text-[#488C82]"
            to="/login"
          >
            Back to login
          </Link>
        </div>

        <div className="flex justify-center container mx-auto mt-10 mb-10 text-slate-100 text-sm">
          <div className="flex flex-col sm:flex-row  justify-between md:w-1/2 items-center"></div>
        </div>
      </div>
    </div>
  );
}

export default Register;
