import noImg from "../../images/no-img.jpg";

function HelperPrev(props) {
  console.log(props.helper);
  return (
    <div className="my-4 w-11/12 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img className="rounded-t-lg w-24 h-24" src={noImg} alt="" />
      <div className="p-5">
        <a href="#">
          <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.helper.firstname} {props.helper.lastname}
          </h4>
          <h5> {props.helper.birthdate}</h5>
          <h5>{props.helper.city}</h5>
          <h5> {props.helper.email}</h5>
          <h5> {props.helper.phonenumber}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
        <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Cancel
        </button>
      </div>
    </div>
  );
}

export default HelperPrev;
