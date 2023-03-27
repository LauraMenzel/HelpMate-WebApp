import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AboutUs() {
  const [currentComponent, setCurrentComponent] = useState("Home");
  return (
    <div className=" p-8 bg-[#EDEAE5] ">
      <div className=" rounded-3xl p-10 overflow-hidden shadow-xl pb-[80px] bg-[#FCFAFB] ">
        <div className="pt-8 pb-8 pl-5">
          <Link
            to="/home"
            onClick={() => setCurrentComponent("Home")}
            className=" font-logo text-[20px]  tracking-wide hover:text-[#feaa0c] "
          >
            HelpMate
          </Link>
        </div>
        <div className="flex h-full  justify-center items-center ">
          <div className="w-[1000px] flex justify-center p-16 rounded-3xl bg-[#BCE3E8]">
            <div className=" max-w-[750px] pt-[40px]">
              <section className="overflow-hidden text-neutral-700">
                <div className="container mx-auto ">
                  <div className="-m-1 flex flex-wrap md:-m-2">
                    <div className="flex w-1/2 flex-wrap">
                      <div className="w-1/2 p-1 md:p-2">
                        <img
                          alt="gallery"
                          className="block h-full w-full rounded-lg object-cover object-center"
                          src="https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/rDtN98Qoishumwih/graphicstock-young-hipster-son-walking-with-disabled-father-in-wheelchair-on-wooden-bridge-at-park-pointing-finger-at-something-carer-assisting-disabled-senior-man_HunRDKIfb_thumb.jpg"
                        />
                      </div>
                      <div className="w-1/2 p-1 md:p-2">
                        <img
                          alt="gallery"
                          className="block h-full w-full rounded-lg object-cover object-center"
                          src="https://www.nia.nih.gov/sites/default/files/inline-images/legal-financial-paperwork-inline.jpg"
                        />
                      </div>
                      <div className="w-full p-1 md:p-2">
                        <img
                          alt="gallery"
                          className="block h-full w-full rounded-lg object-cover object-center"
                          src="https://media.istockphoto.com/id/871518740/photo/people-of-different-ages-and-nationalities-having-fun-together.jpg?s=612x612&w=0&k=20&c=8RW_kfcdLHs4sEo2nngwMT4zFmOBXSeCRlG-wrwR4BE="
                        />
                      </div>
                    </div>
                    <div className="flex w-1/2 flex-wrap">
                      <div className="w-full p-1 md:p-2">
                        <img
                          alt="gallery"
                          className="block h-full w-full rounded-lg object-cover object-center"
                          src="https://img.freepik.com/free-photo/medium-shot-people-planning-trip_23-2148925847.jpg?size=626&ext=jpg&uid=R96852185&ga=GA1.1.971768092.1676332792&semt=ais"
                        />
                      </div>
                      <div className="w-1/2 p-1 md:p-2">
                        <img
                          alt="gallery"
                          className="block h-full w-full rounded-lg object-cover object-center"
                          src="https://img.freepik.com/free-photo/senior-couple-harvesting-carrots_23-2148256687.jpg?w=1380&t=st=1679903334~exp=1679903934~hmac=13d329d313af015da8b901d38a176e7b62b936fab718a2607e613ba6c37c7a7a"
                        />
                      </div>
                      <div className="w-1/2 p-1 md:p-2">
                        <img
                          alt="gallery"
                          className="block h-full w-full rounded-lg object-cover object-center"
                          src="https://media.istockphoto.com/id/1225541439/photo/social-worker-is-visiting-a-senior-woman.jpg?b=1&s=170667a&w=0&k=20&c=JGY8w1bo3fBgNFEeOh3dJ0-3cXIlDyTwIf-i1MgoEbY="
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <p className="text-[40px] text-center tracking-wider pt-8 pb-5 font-bold">
                About Us
              </p>
              <div className="text-[20px]">
                <p className="pb-4">
                  This app is an online platform for connecting volunteers with
                  people who are in need of help.
                </p>
                <p className="pb-4">
                  It is a free, unpaid service that requires no special
                  education or qualifications to join.
                </p>
                <p className="pb-4">
                  This is not a dating app - it is designed to provide
                  assistance to those who need it, such as the elderly, disabled
                  people, refugees, immigrants, and anyone else who could use a
                  helping hand.
                </p>
                <p className="pb-4">
                  With this app, volunteers can easily offer their help and
                  those in need can easily find it, thus creating a stronger,
                  more connected community.
                </p>
                <p className="pb-7">
                  Specific examples of the type of help offered through this app
                  might include:
                </p>
                <ul className="list-disc pl-20 rounded-lg bg-white pr-[50px]">
                  <li className="pb-5 pt-5">
                    Providing transportation to medical appointments, groceries,
                    or other errands
                  </li>
                  <li className="pb-5">Offering emotional and moral support</li>
                  <li className="pb-5">
                    Assisting with tasks such as home repairs, gardening, or
                    shopping
                  </li>
                  <li className="pb-5">
                    Providing language lessons or tutoring
                  </li>
                  <li className="pb-5">
                    Assisting with administrative tasks such as filing paperwork
                    or helping with computer skills
                  </li>
                  <li className="pb-5">
                    Offering companionship for elderly people
                  </li>
                </ul>
              </div>
              <p> </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutUs;