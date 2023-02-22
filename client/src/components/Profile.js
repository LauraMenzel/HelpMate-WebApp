import { FiUser } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { GoLocation } from "react-icons/go";
import { BsFillCalendarMonthFill } from "react-icons/bs";
import axios from "axios";
import { Link } from "react-router-dom";
import noImg from "../images/no-img.jpg";
import { useContext, useState } from "react";
import { AppContext } from "../context/Context";

function Profile() {
  const { state, dispatch } = useContext(AppContext);

  const [fileData, setFiledata] = useState({
    url: "",
    file: null,
  });


  const [data, setData] = useState({
    username: state.user.username,
    fullname: state.user.firstname + " " + state.user.lastname,
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

    formdata.set("image", fileData.file, "profileImage");

    const config = {
      Headers: { "content-type": "multipart/form-data" },
    };

    const response = await axios.post("/users/profile", formdata, config);
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
  };


    return (
      <div className="flex w-full justify-center items-center gap-[20px] bg-neutral-100 flex-col mt-[30px]">
        <Link className="hover:text-red-500" to="/home">
          go to home
        </Link>
        <div className="flex items-center gap-[10px]">
          <FiUser className="text-slate-400 w-[40px] h-[40px] border-2 border-slate-400 rounded-md p-[3px]" />

          <input
            value={data.username}
            className="border-2 border-slate-500 p-[5px] w-[200px] h-[40px]"
            disabled
          />
        </div>
        <div className="flex items-center gap-[10px]">
          <FiUser className="text-slate-400 w-[40px] h-[40px] border-2 border-slate-400 rounded-md p-[3px]" />

          <input
            value={data.fullname}
            className="border-2 border-slate-500 p-[5px] w-[200px] h-[40px]"
            disabled
          />
        </div>

        <div className="flex items-center gap-[10px]">
          <HiOutlineMail className="text-slate-400 w-[40px] h-[40px] border-2 border-slate-400 rounded-md p-[3px]" />

          <input
            value={data.email}
            className="border-2 border-slate-500 p-[5px] w-[200px] h-[40px]"
            placeholder=""
            disabled
          />
        </div>
        <div className="flex items-center gap-[10px]">
          <HiOutlineMail className="text-slate-400 w-[40px] h-[40px] border-2 border-slate-400 rounded-md p-[3px]" />

          <input
            value={data.phonenumber}
            className="border-2 border-slate-500 p-[5px] w-[200px] h-[40px]"
            placeholder=""
            disabled
          />
        </div>

        <div className="flex items-center gap-[10px]">
          <GoLocation className="text-slate-400 w-[40px] h-[40px] border-2 border-slate-400 rounded-md p-[3px]" />

          <input
            value={data.city}
            onChange={(e) => setData({ ...data, city: e.target.value })}
            className="border-2 border-slate-500 p-[5px] w-[200px] h-[40px]"
            placeholder=""
          />
        </div>

        <div className="flex items-center gap-[10px]">
          <BsFillCalendarMonthFill className="text-slate-400 w-[40px] h-[40px] border-2 border-slate-400 rounded-md p-[3px]" />

          <input
            value={data.age}
            onChange={(e) => setData({ ...data, age: e.target.value })}
            className="border-2 border-slate-500 p-[5px] w-[200px] h-[40px]"
            placeholder=""
          />
        </div>

        <label className="cursor-pointer">
          Select your profile image
          <input type="file" className="hidden" onChange={handleImageChange} />
        </label>
        <img
          className="w-[300px] h-[300px] rounded-md object-cover"
          src={fileData.url || noImg}
          alt=""
        />

        <button onClick={handleSave}>I need help</button>

       
      </div>
    );
  };

export default Profile;
