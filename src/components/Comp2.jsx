import React from "react";

import Comp3_image from "../assets/img/Inertia/3.jpg";
import Comp4_image from "../assets/img/Inertia/4.jpg";

const Comp2 = () => {
  return (
    <div className=" max-w-[1240px] px-12 mx-auto mt-12 lg:mt-24">
      <div className="">
        <div className=" flex flex-col lg:flex-row gap-y-6 justify-evenly ">
          <div className="flex flex-col gap-y-4 justify-start text-start font-primary max-w-[500px] mx-auto   ">
            <div className=" mt-6 lg:mt-0">
              <img src={Comp3_image} alt="" className="rounded-lg" />
            </div>
            <div className="space-y-4 text-[#0c5030]">
              <p className>DID YOU KNOW?!!!!!</p>
              <p>
                REGISTERING A BUSINESS IN RWANDA takes just 24HOURS or LESS!!!
              </p>
              <p>
                RWANDA MEDICAL SYSTEM IS SO GREAT AND STANDARD THAT, people go
                for MEDICAL TOURISM IN RWANDA!!!
              </p>

              <p>RWANDA has uninterrupted power and water supply!!!</p>
              <p>
                RWANDA is the FIRST country in Africa where DRONES are approved
                for logistics!!!{" "}
              </p>
              <p>RWANDA has the best roads networks!!!</p>
              <p>RWANDA has AMAZING BROADBAND, FIBRE and 5G internet!!! </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-4 justify-start text-start font-primary max-w-[500px]  mx-auto ">
            <div className=" mt-6 lg:mt-0">
              <img src={Comp4_image} alt="" className="rounded-lg" />
            </div>
            <div className="space-y-4 text-[#0c5030]">
              <p>DID YOU KNOW?!!!!!</p>
              <p>
                RWANDA has a vibrant Tourism sector that the economy is largely
                dependent on!!!
              </p>
              <p>
                RWANDA primary and secondary schools teach students in FRENCH
                AND ENGLISH!!!
              </p>

              <p>
                LOCAL and FOREIGN companies in RWANDA are looking for great
                talent from Most African Countries!!!
              </p>
              <p>
                Living in RWANDA gives you visa free access to some East African
                Countries!!!{" "}
              </p>
              <p>RWANDA is mostly a very cold Country all round the year!!!</p>
              <p>
                RELOCATING TO RWANDA gives your personal and business BRAND a
                great perception and integrity
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comp2;
