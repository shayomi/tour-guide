import React from "react";

import Comp1_image from "../assets/img/Inertia/1.jpg";
import Comp2_image from "../assets/img/Inertia/2.jpg";

const Comp1 = () => {
  return (
    <div className=" max-w-[1240px] px-12 mx-auto mt-12 lg:mt-24">
      <div className=" ">
        <div className=" flex flex-col lg:flex-row gap-y-6 justify-evenly ">
          <div className="flex flex-col gap-y-4 justify-start text-start font-primary max-w-[500px]  mx-auto  ">
            <div className=" mt-6 lg:mt-0">
              <img src={Comp1_image} alt="" className="rounded-lg" />
            </div>
            <div className="space-y-4 text-[#0c5030]">
              <p>
                Do you know that there are countries in Africa that offers
                similar things to what you can get in USA, CANADA, UK and other
                European countries?{" "}
              </p>
              <p>
                Yes, and one of such country is RWANDA: The Singapore of Africa
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-4 justify-start text-start font-primary max-w-[500px] mx-auto  ">
            <div className=" mt-6 lg:mt-0">
              <img src={Comp2_image} alt="" className="rounded-lg" />
            </div>
            <div className="space-y-4 text-[#0c5030]">
              <p>DID YOU KNOW?!!!!!</p>
              <p>
                KIGALI, the capital of RWANDA is the CLEANEST city in Africa!!!
              </p>
              <p>
                KIGALI, the capital of RWANDA is the SAFEST city in Africa!!!{" "}
              </p>

              <p>
                RWANDA IS 30DAYS VISA on arrival for every African and it's
                FREE!!!
              </p>
              <p>REGISTERING A BUSINESS IN RWANDA IS FREE!!!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comp1;
