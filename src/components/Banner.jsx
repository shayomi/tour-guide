import React from "react";
import bannerimg from "../assets/img/bg/1.jpg";

const Videosection = () => {
  return (
    <div className="max-w-[1240px] px-12 mx-auto mt-12 lg:mt-24">
      <div className="">
        <div className=" flex flex-col lg:flex-row ">
          <div className="flex flex-col gap-y-4 justify-start mx-auto">
            <div className="bg-lightblue rounded-[20px] w-[300px]">
              <p className="py-3 px-4 text-md font-primary text-darkblue">
                Blueprint: On relocation to Rwanda
              </p>
            </div>
            <h1 className="h1 mt-4 justify-start text-start leading-11">
              Welcome to the Relocating to{" "}
              <span className="text-darkblue font-bold">Rwanda</span>:
              Blueprint!
            </h1>
          </div>
          <div className="max-w-[600px] mt-6 lg:mt-0 mx-auto">
            <img src={bannerimg} alt="" className="rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videosection;
