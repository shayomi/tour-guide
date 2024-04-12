import React from "react";

import Comp6_image from "../assets/img/Inertia/11.jpg";
import Comp7_image from "../assets/img/bg/2.png";

const Comp4 = () => {
  return (
    <div className=" max-w-[1240px] px-12 mx-auto mt-12 lg:mt-24">
      <div className="">
        <div className=" flex flex-col lg:flex-row gap-y-6 justify-evenly ">
          <div className="flex flex-col gap-y-4 justify-start text-start font-primary max-w-[500px] mx-auto   ">
            <div className=" mt-6 lg:mt-0 w-[500px] h-[400px] overflow-hidden">
              <img src={Comp6_image} alt="" className="rounded-lg" />
            </div>
            <h1 className="h2">
              Yes, and one of such country is{" "}
              <span className="text-[#0c5030] ">RWANDA: </span>The Singapore of
              Africa.
            </h1>
            <div className="space-y-4 text-[#0c5030]">
              <p>
                KIGALI, the capital of RWANDA is the CLEANEST city in Africa!!!
              </p>
              <p>
                KIGALI, the capital of RWANDA is the SAFEST city in Africa!!!
              </p>

              <p>
                RWANDA IS 30DAYS VISA on arrival for every African and it's
                FREE!!!
              </p>
              <p>REGISTERING A BUSINESS IN RWANDA IS FREE!!!</p>
            </div>
          </div>
          <div className="flex flex-col gap-y-4 justify-start text-start font-primary max-w-[500px]  mx-auto ">
            <div className=" mt-6 lg:mt-0">
              <img src={Comp7_image} alt="" className="rounded-lg" />
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

export default Comp4;
