import { IoMdLogOut } from "react-icons/io";
import { TiEdit } from "react-icons/ti";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import noImg from "../../images/no-img.jpg";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "../../context/Context";
import { ToDoListContext } from "../../context/NeedAHelpContext";
function Profile() {
  const { state, dispatch } = useContext(AppContext);
  const { stateHelp, dispatchHelp } = useContext(ToDoListContext);
  const navigate = useNavigate();
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
  useEffect(() => {
    stateHelp.userInProgressTask.forEach((task) => {
      task.helper = JSON.parse(task.helper);
    });
  }, []);
  const [inProgressTask, setInProgressTask] = useState(
    stateHelp.userInProgressTask
  );
  console.log(inProgressTask);

  const logout = async () => {
    const response = await axios.get("/users/logout");
    console.log(response);
    dispatch({ type: "logout" });
    navigate("/");
  };

  return (
    <div className="flex w-full h-full justify-center items-center flex-col bg-[#EDEAE5] relative">
      <div className="absolute w-24 h-24 top-36 rounded-3xl">
        <img className="rounded-3xl" src={fileData.url || noImg} alt="" />
      </div>
      <div className="flex-none bg-[#EDEAE5] w-full h-48">
        <div onClick={logout}>
          <IoMdLogOut
            className="w-6 h-6 float-right fill-current mt-4 mr-4"
            color="#026670"
          />
        </div>
      </div>
      <div className="flex-1 bg-white w-full rounded-t-3xl">
        <Link to="/editprofile">
          <TiEdit
            className="w-6 h-6 float-right fill-current mt-4 mr-4"
            color="#026670"
          />
        </Link>
        <div className="flex flex-col items-center mt-14">
          <h3 className="text-[#026670] font-bold text-xl">{data.fullname}</h3>
          <h4 className="text-slate-500 italic text-sm">
            {data.city}, {data.age}
          </h4>
          {inProgressTask.map((task) => {
            return (
              <div key={task._id}>
                <p>{task.place}</p>
                <p>{task.status}</p>
              </div>
            );
          })}
          <Link
            to="/mytasks"
            className="bg-yellow-600 hover:bg-[#FCE181]-700 text-white font-bold py-2 px-4 rounded"
          >
            Show my task
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Profile;
