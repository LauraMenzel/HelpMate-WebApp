import { BsPersonLinesFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { TbLanguage } from "react-icons/tb";
import { GoLocation } from "react-icons/go";
import { BsFillCalendarMonthFill } from "react-icons/bs";
import axios from "axios";
import { MdArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";
import {FaHandsHelping} from "react-icons/fa"

import noImg from "../../images/no-img.jpg";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "../../context/Context";

function EditProfile() {
  const { state, dispatch } = useContext(AppContext);
  const [fileData, setFiledata] = useState({
    url: "",
    file: null,
  });

  const [data, setData] = useState({
    username: state.user.username,
    firstname: state.user.firstname,
    lastname: state.user.lastname,
    email: state.user.email,
    city: state.user.city,
    age: state.user.age,
    phonenumber: state.user.phonenumber,
  });

  const handleSave = async () => {
    const formdata = new FormData();

    formdata.set("username", data.username);
    formdata.set("email", data.email);
    formdata.set("city", data.city);
    formdata.set("age", data.age);
    formdata.set("phonenumber", data.phonenumber);
    console.log(data);
    // formdata.set("image", fileData.file, "profileImage");

    const config = {
      Headers: { "content-type": "multipart/form-data" },
    };
    console.log(formdata.email);
    const response = await axios.post("/users/profile", data, config);
    console.log("🚀 ~ handleSave ~ response", response);

    if (response.data.success)
      dispatch({
        type: "userSaved",
        payload: response.data.user,
      });
  };

  const handleImageChange = (e) => {
    console.log("🚀 ~ handleImageChange ~ e", e.currentTarget.files[0]);

    setFiledata({
      url: URL.createObjectURL(e.currentTarget.files[0]),
      file: e.currentTarget.files[0],
    });
  }

  return (
    <div className="bg-[#E3DDDD] h-full">
      <div className="flex justify-start ml-[30px] max-w-[550px] min-w-[340px] md:w-3/4  lg:w-1/2  pt-8">
        <Link to="/home">
          <MdArrowBackIosNew className="hover:text-red-500 bg-white rounded-3xl  text-[30px]" />
        </Link>
      </div>

      <div className="flex w-full h-full justify-center items-center gap-[20px] flex-col">
        <img
          className="w-[150px] h-[150px] rounded-3xl mb-5 object-cover"
          src={fileData.url || noImg}
          alt="profilpicture"
        />
        <div className="flex items-center gap-[10px]">
          <BsPersonLinesFill className="text-slate-400 w-[40px] h-[40px] border-2 border-slate-400 rounded-3xl p-[3px]" />

          <input
            value={data.username}
            className="border-2 rounded-3xl border-slate-500 p-[5px] w-[200px] h-[40px]"
            onChange={(e) => setData({ ...data, username: e.target.value })}
          />
        </div>
        <div className="flex items-center gap-[10px]">
          <TbLanguage className="text-slate-400 w-[40px] h-[40px] border-2 border-slate-400 rounded-3xl p-[3px]" />

          <input
            value={data.firstname}
            className="border-2 border-slate-500 rounded-3xl p-[5px] w-[200px] h-[40px]"
            onChange={(e) => setData({ ...data, firstname: e.target.value })}
          />
        </div>
        <div className="flex items-center gap-[10px]">
          <FaHandsHelping className="text-slate-400 w-[40px] h-[40px] border-2 border-slate-400 rounded-3xl p-[3px]" />

          <input
            value={data.lastname}
            className="border-2 border-slate-500 rounded-3xl p-[5px] w-[200px] h-[40px]"
            onChange={(e) => setData({ ...data, lastname: e.target.value })}
          />
        </div>
        <div className="w-3/4 max-w-[150px] mb-12">
          <button
            onClick={handleSave}
            className="py-2 bg-[#3B8A80] w-full rounded-3xl 
              text-white font-bold hover:bg-[#70c2b7] active:bg-[#3d8f84]"
          >
            Update profile
          </button>
        </div>
      </div>
    </div>
  );
}


export default EditProfile;
