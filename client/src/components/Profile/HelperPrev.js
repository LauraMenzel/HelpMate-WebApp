import noImg from "../../images/no-img.jpg";
import { MdOutlineEmail }from "react-icons/md";
import { ImPhone } from "react-icons/im";
import { TbLanguage } from "react-icons/tb";
import { GoLocation } from "react-icons/go";

function HelperPrev(props) {
  console.log(props.helper);
  return (
    <div className="my-4 flex flex-col items-center p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="">
        <img
          className="rounded-full w-24 h-24"
          src={props.helper.image || noImg}
          alt=""
        />
      </div>
      <div className="flex flex-col max-w-[500px] relative p-2 items-center justify-center ">
        <div className="flex justify-center items-center">
          <p className="text-black font-bold tracking-wider  text-[35px]">
            {props.helper.username}
          </p>
        </div>
        <span className="flex text-black pt-2 items-center">
          <GoLocation className=" w-[14px] h-[14px] mr-1" />
          <p className=" text-[18px]"> {props.helper.city}</p>
        </span>

        <p className="italic p-2 pb-5 pt-8 text-center">
          "{props.helper.intro}"
        </p>
        <div className=" text-center relative overflow-x-auto">
          <table class=" w-full ">
            <tr>
              <td class="px-8 py-4 hidden font-semibold">Age</td>
              <td class=" px-8 py-4">{props.helper.birthdate}</td>
            </tr>
            <tr>
              <td class=" px-8 py-4 font-semibold">
                {" "}
                <MdOutlineEmail className=" w-6 h-6 ml-10" />
              </td>
              <td class=" px-8 py-4">
                <a
                  href={"mailto:" + props.helper.email}
                  className="mb-2 text-xl font-bold tracking-wide text-red-900 dark:text-white"
                >
                  {props.helper.email}
                </a>
              </td>
            </tr>
            <tr>
              <td class=" px-8 py-4 font-semibold">
                <ImPhone className="w-6 h-6 ml-10" />
              </td>
              <td class=" px-8 py-4">
                <a href={"tel:" + props.helper.phonenumber}>
                  <h5 className="mb-2 text-xl font-bold tracking-wide text-blue-900 dark:text-white">
                    {props.helper.phonenumber}
                  </h5>
                </a>
              </td>
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
          </table>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
          <button className="inline-flex items-center mt-6 px-6 py-3 tracking-wider text-md font-semibold text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default HelperPrev;
