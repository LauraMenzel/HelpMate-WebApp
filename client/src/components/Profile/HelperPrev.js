import noImg from "../../images/no-img.jpg";
import { MdOutlineEmail } from "react-icons/md";
import { ImPhone } from "react-icons/im";
import { TbLanguage } from "react-icons/tb";
import { GoLocation } from "react-icons/go";
import { FaHandsHelping } from "react-icons/fa";

function HelperPrev(props) {
  console.log(props.helper);
  return (
    <div className="bg-white p-2 w-[400px] shadow-lg shadow-black h-[780px] rounded-3xl">
      <div className="flex items-center  flex-col bg-white h-full  rounded-3xl bg-clip-border relative">
        <div className="relative flex justify-center rounded-3xl w-full  h-[150px]">
          <img
            src="https://images.unsplash.com/photo-1521080755838-d2311117f767?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJsdWUlMjBtb3VudGFpbnxlbnwwfHwwfHw%3D&w=1000&q=80"
            className="absolute flex h-[150px] w-full rounded-t-3xl justify-center"
            alt=""
          />

          <div className="absolute -bottom-12 flex  items-center justify-center rounded-full border-[4px] border-white  dark:!border-navy-700">
            <img
              className="rounded-full w-24 h-24 h-full object-cover"
              src={props.helper.image || noImg}
              alt="userprofilpicture"
            />
          </div>
        </div>
        <div className="flex flex-col items-center w-full justify-center  ">
          <div className="flex justify-center items-center ">
            <p className="text-black font-bold tracking-wider pt-12 text-[30px]">
              {props.helper.username}
            </p>
          </div>
          <span className="flex text-black  items-center">
            <GoLocation className=" w-[14px] h-[14px] mr-1" />
            <p className=" text-[18px]"> {props.helper.city}</p>
          </span>
          <div className=" mt-5 w-full">
            <p className="italic text-[#026670]  pb-6 text-center">
              "{props.helper.intro}"
            </p>

            <div className=" text-center bg-[#CCDEDD] mb-4 pb-4 w-[100%] relative overflow-x-auto">
              <table class="  ">
                <tr>
                  <td class="px-8 py-4 hidden font-semibold">Age</td>
                  <td class=" px-8 py-4">{props.helper.birthdate}</td>
                </tr>
                <tr className="">
                  <td class=" px-8 py-4 font-semibold ">
                    {" "}
                    <TbLanguage className="w-7 h-7 ml-10" />
                  </td>
                  <td class=" px-8 py-4">
                    {" "}
                    <h5>{props.helper.language}</h5>
                  </td>
                </tr>{" "}
                <tr className="">
                  <td class=" px-8 py-4 font-semibold ">
                    {" "}
                    <FaHandsHelping className="w-7 h-7 ml-10" />
                  </td>
                  <td class=" px-8 py-4">
                    {" "}
                    <h5>{props.helper.helpoffers}</h5>
                  </td>
                </tr>{" "}
              </table>
            </div>
          </div>
          <div className=" text-center rounded">
            {" "}
            <p className="px-8 py-4 text-[18px] tracking-wider font-semibold">
              Contact me via{" "}
            </p>
            <div className="flex items-center justify-center gap-6">
              <a
                href={"mailto:" + props.helper.email}
                className="mb-2 text-xl font-bold tracking-wide flex text-red-900 dark:text-white"
              >
                {" "}
                <MdOutlineEmail className=" w-7 h-7 " />
              </a>
              <a href={"tel:" + props.helper.phonenumber}>
                <h5 className="mb-2 text-xl font-bold tracking-wide text-blue-900 dark:text-white flex ">
                  <ImPhone className="w-6 h-6 " />
                </h5>
              </a>
            </div>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
            <button className="inline-flex items-center mt-6 px-6 py-3 tracking-wider text-md font-semibold text-center text-white bg-[#23B4C2] rounded-xl hover:bg-blue-800 focus:ring-4 focus:outline-none  mb-8">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelperPrev;
