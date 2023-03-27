import { IoMdLogOut } from "react-icons/io";
import { TiEdit } from "react-icons/ti";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import noImg from "../../images/no-img.jpg";
import { useContext, useState } from "react";
import { AppContext } from "../../context/Context";
import { GoLocation } from "react-icons/go";

import DataTimePicker from "../DataTimePicker";

function Profile() {
  const { state, dispatch } = useContext(AppContext);
  const navigate = useNavigate();
  const [fileData, setFileData] = useState({
    url: state.user.image,
    file: null,
  });

  const [data, setData] = useState({
    username: state.user.username,
    fullname: state.user.firstname + " " + state.user.lastname,
    email: state.user.email,
    city: state.user.city,
    age: state.user.age,
    phonenumber: state.user.phonenumber,
    language: state.user.language,
    intro: state.user.intro,
    helpoffers: state.user.helpoffers,
  });

  const logout = async () => {
    const response = await axios.get("/users/logout");
    console.log(response);
    dispatch({ type: "logout" });
    navigate("/");
  };
  return (
    <div className="bg-[#EDEAE5] md:font-display md:p-12 md:w-full md:h-full">
      <div className="font-display w-full md:h-[90%] rounded-t-3xl ">
        <div className="bg-lime-500 h-40 relative flex justify-center rounded-3xl w-full">
          <img
            src="https://images.unsplash.com/photo-1521080755838-d2311117f767?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJsdWUlMjBtb3VudGFpbnxlbnwwfHwwfHw%3D&w=1000&q=80"
            className="absolute flex h-40 w-full rounded-t-xl justify-center"
            alt=""
          />
          {/*    <div>
            <Link
              to="/home"
              onClick={() => setCurrentComponent("Home")}
              className="absolute left-3 font-logo text-[20px] tracking-wide hover:text-[#feaa0c] p-1 rounded-full"
            >
              HelpMate
            </Link>
          </div> */}
          <div className="absolute right-3" onClick={logout}>
            <IoMdLogOut
              className="w-6 h-6 fill-current mt-4 "
              color="#026670"
            />
          </div>
          <div className="absolute -bottom-12 flex  items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
            <img
              className="h-full h-[150px] object-cover w-[150px] rounded-full"
              src={fileData.url || noImg}
              alt="profilpicture"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row bg-gradient-to-b from-white  to-orange-200 md:to-orange-100 via-orange-100  shadow-lg shadow-[#EDEAE5] rounded-b-3xl w-full h-[90%] p-5">
          <div className="flex flex-col  p-2 pt-8 items-center justify-center  w-full  md:w-8/12">
            <Link to="/editprofile">
              <TiEdit
                className="w-6 h-6  fill-current mt-4 absolute right-8 md:relative md:ml-60"
                color="#026670"
              />
            </Link>
            <div className="flex justify-center items-center">
              <p className="text-black font-bold tracking-wider  text-[35px]">
                {data.username}
              </p>
            </div>
            <span className="flex text-black items-center">
              <GoLocation className=" w-[14px] h-[14px] mr-1" />
              <p className=" text-[18px]">{data.city}</p>
            </span>
            <p className="italic p-2 pb-12 pt-8 ">"{data.intro}"</p>
            <div className="flex p-4 justify-center flex-col-2">
              <div className="pr-2 font-semibold min-w-[150px] tracking-wider ">
                <p>Age:</p>
                <p className="pt-4">E-mail:</p>
                <p className="pt-4">Phone:</p>
                <p>
                  <br /> Language skills:
                </p>
                <p>
                  {" "}
                  <br />
                </p>
                <p className="mt-10 md:mt-1 pt-50">Help offers: </p>
              </div>
              <div className="">
                <p className="">{data.age}</p>
                <p className="pt-4"> {data.email}</p>
                <p className="pt-4">Y{data.phonenumber}</p>
                <p>
                  <br />
                  {data.language}
                </p>
                <p>
                  <br />
                </p>
                <p p className="mt-1">
                  {data.helpoffers}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center flex-1">
            <DataTimePicker />
            <Link
              to="/mytasks"
              className="bg-[#feaa0c] hover:bg-[#70c2b7] active:bg-[#3d8f84] text-white font-bold  py-2 mb-20 md:py-2 px-4 rounded-3xl shadow "
            >
              Show my tasks
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
