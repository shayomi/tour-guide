import React from "react";

import Comp5_image from "../assets/img/bg/3.jpg";
import Comp6_image from "../assets/img/Inertia/11.jpg";
import Comp7_image from "../assets/img/bg/2.png";

const Comp3 = () => {
  return (
    <div className=" max-w-[1240px] px-12 mx-auto mt-12 lg:mt-24">
      <div className="flex flex-col gap-y-4">
        <div className=" mt-6 lg:mt-0">
          <img src={Comp5_image} alt="" className="rounded-lg" />
        </div>
        <div className="flex flex-col gap-y-4 lg:flex-row gap-x-12 mx-auto mt-4">
          <div className=" mt-6 lg:mt-0 w-[400px] h-[400px] overflow-hidden mx-auto">
            <img src={Comp6_image} alt="" className="rounded-lg" />
          </div>
          <div className=" mt-6 lg:mt-0 max-w-[600px] h-[400px] overflow-hidden">
            <img src={Comp7_image} alt="" className="rounded-lg" />
          </div>
        </div>
        <div className="justify-start text-start font-primary text-[#0c5030]">
          <p>
            Look no further, this comprehensive course is designed to provide
            you with all the essential information and practical tips you need
            to make a smooth transition to this beautiful East African country.
          </p>
          <p>A tip of what you will get when you get this course!!!! </p>
        </div>
        <div className=" grid grid-cols-3 mt-4 text-start ml-3 lg:ml-6 text-[#0c5030]  ">
          <ul className="space-y-4 list-none md:list-disc font-primary text-[11px]  lg:text-[13px]">
            <li>Legal and Visa Requirements</li>
            <li>Cultural Adaptation</li>
            <li>Housing and Accommodation</li>
            <li>Healthcare System</li>
            <li> Education Options</li>
            <li> Employment Opportunities</li>
          </ul>
          <ul className="space-y-4 list-none md:list-discfont-primary text-[11px]  lg:text-[13px]">
            <li>Financial Planning</li>
            <li>Safety and Security</li>
            <li>Networking and Social Life</li>
            <li>Entrepreneurship and Business Setup</li>
            <li> Community Integration</li>
            <li> Navigating Bureaucracy</li>
          </ul>
          <ul className="space-y-4 list-none md:list-disc font-primary text-[11px]  lg:text-[13px]">
            <li>Maintaining Dual Culture Connection</li>
            <li>Future Outlook</li>
            <li>Housing and Accommodation</li>
            <li>Useful Links</li>
            <li> Essential Mobile Apps in Rwanda</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Comp3;
