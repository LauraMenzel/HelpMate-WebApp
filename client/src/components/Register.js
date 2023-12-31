import helpmatelogo from "./../images/HelpMate.jpg";
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
  const [fileData, setFiledata] = useState({
    url: "",
    file: null,
  });
  const navigate = useNavigate();

  const handleRegister = async () => {
    const response = await axios.post("/users/register", data);
    console.log("🚀 ~ handleRegister ~ response", response);

    if (response.data.success) navigate("/login");
  };

  return (
    <div className="bg-[#E3DDDD] items-center flex font-display py-20 sm:text-xl text-base  ">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className=" xl:w-auto flex">
            <div className="xl:flex  xl:w-4/5 bg-white w-full hidden overflow-hidden relative rounded-l-lg  flex-col">
              <img
                className="max-w-full h-full bg-cover hidden xl:block rounded-l-lg "
                src="https://static.wixstatic.com/media/763bb8_714bd1aaa4064deba28a9e575fcf06c1~mv2.jpg/v1/fill/w_640,h_742,fp_0.47_0.73,q_85,usm_0.66_1.00_0.01,enc_auto/763bb8_714bd1aaa4064deba28a9e575fcf06c1~mv2.jpg"
                alt="happy people of different color and age standing together"
              />
              <div className="absolute bottom-0  left-0 right-0 px-6 py-2 bg-gray-800 opacity-70">
                <h3 className="text-xl text-white mt-4  font-bold">
                  GET REGISTERED NOW
                </h3>
                <p className="text-sm py-4 text-gray-300">
                  Join our community of helpers and those in need.
                </p>
              </div>
            </div>
            <div className="bg-white px-8 flex justify-center flex-col rounded-lg xl:rounded-l-none items-center  ">
              <p className="font-logo text-[30px] mt-4 md:mt-2 pb-6 tracking-wide ">
                HelpMate
              </p>

              <form className="px-8 pt-3 text:base bg-white rounded">
                <div className=" md:mr-2  md:mb-0">
                  <label
                    className="block mb-2 text-base font-bold text-gray-700"
                    htmlFor="username"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    name="user"
                    value={data.username}
                    onChange={(e) =>
                      setData({ ...data, username: e.target.value })
                    }
                    placeholder="Username"
                    className="w-full py-2 px-3 shadow rounded-lg placeholder:text-base hover:border-[#feaa0c] mb-4 focus:outline-orange-600 border border-slate-300"
                  />
                </div>
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label
                      className="block mb-2 text-base font-bold text-gray-700"
                      htmlFor="firstname"
                    >
                      First Name
                    </label>
                    <input
                      type="firstname"
                      name="firstname"
                      value={data.firstname}
                      onChange={(e) =>
                        setData({ ...data, firstname: e.target.value })
                      }
                      placeholder="First name"
                      className="w-full py-2 px-3 shadow rounded-lg placeholder:text-base hover:border-[#feaa0c]  focus:outline-orange-600 border-solid border border-slate-300"
                    />
                  </div>
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label
                      className="block mb-2 text-base font-bold text-gray-700"
                      htmlFor="lastname"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="Last name"
                      value={data.lastname}
                      onChange={(e) =>
                        setData({ ...data, lastname: e.target.value })
                      }
                      placeholder="Last name"
                      className="w-full py-2 px-3 shadow rounded-lg placeholder:text-base hover:border-[#feaa0c] focus:outline-orange-600 border border-slate-300"
                    />
                  </div>
                </div>
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label
                      className="block mb-2 text-base font-bold text-gray-700"
                      htmlFor="birthdate"
                    >
                      Date of birth
                    </label>
                    <input
                      type="text"
                      name="birthdate"
                      value={data.birthdate}
                      onChange={(e) =>
                        setData({ ...data, birthdate: e.target.value })
                      }
                      placeholder="Date of birth"
                      className="w-full py-2 px-3 shadow rounded-lg placeholder:text-base hover:border-[#feaa0c] focus:outline-orange-600 border border-slate-300"
                    />
                  </div>
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label
                      className="block mb-2 text-base font-bold text-gray-700"
                      htmlFor="city"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      name="City"
                      value={data.city}
                      onChange={(e) =>
                        setData({ ...data, city: e.target.value })
                      }
                      placeholder="City"
                      className="w-full py-2 px-3 shadow rounded-lg placeholder:text-base hover:border-[#feaa0c] focus:outline-orange-600 border  border-slate-300"
                    />
                  </div>
                </div>
                <div className="mb-4 md:mr-2 md:mb-0">
                  <label
                    className="block mb-2 text-base font-bold text-gray-700"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={(e) =>
                      setData({ ...data, email: e.target.value })
                    }
                    placeholder="Email"
                    className="w-full py-2 px-3 mb-4 placeholder:text-base rounded-lg shadow hover:border-[#feaa0c] focus:outline-orange-600 shadow border border-slate-300"
                  />
                </div>

                <div className="mb-4 md:mr-2 md:mb-0">
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
                    onChange={(e) =>
                      setData({ ...data, password: e.target.value })
                    }
                    placeholder="Password"
                    className="w-full py-2 px-3 mb-1 placeholder:text-base rounded-lg  hover:border-[#feaa0c] focus:outline-orange-600 border shadow border-slate-300"
                  />
                  <p className="text-xs italic mb-8 text-red-500">
                    Please choose a password.
                  </p>
                </div>

                <div className="mb-8 text-center">
                  <button
                    type="submit"
                    onClick={handleRegister}
                    className="w-full px-4 py-2 font-bold text-white bg-[#3B8A80] rounded-full hover:bg-[#70c2b7] active:bg-[#3d8f84]"
                  >
                    Register Account
                  </button>
                </div>
                <hr className="mb-6 mt-6 border-t" />
                <div className="text-center mb-6">
                  <Link
                    className="hover:text-[#FAA03A] text-base  text-[#488C82]"
                    to="/login"
                  >
                    Already have an account? Login!
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
