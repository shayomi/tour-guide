import React from "react";
import { useRef } from "react";
import Video from "../assets/video/rwanda-vid.mp4";
import Comp5_image from "../assets/img/bg/3.jpg";
import Comp6_image from "../assets/img/Inertia/rwanda-pic.png";
import Comp7_image from "../assets/img/Inertia/rwanda-pic2.png";

const Review = () => {
  const videoRef = useRef(null);

  const handleContextMenu = (e) => {
    e.preventDefault();
    alert("Right-clicking is disabled on this video.");
  };
  return (
    <div className=" w-full max-w-[1440px] mx-auto mt-12 lg:mt-24">
      <div className=" flex flex-col gap-6 ">
        <div className=" bg-black ">
          <div className=" flex flex-col gap-y-4 justify-center mx-auto font-primary max-w-[500px]  py-6   ">
            <div className=" mt-6 lg:mt-0 ">
              <video
                ref={videoRef}
                className=""
                src={Video}
                controls
                controlsList="nodownload"
                onContextMenu={handleContextMenu}
              ></video>
            </div>
            <div className=" text-white">
              <p>See what Abisola said</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-4 lg:flex-row gap-x-12 mx-auto mt-12">
          <div className=" mt-6 lg:mt-0 max-w-[400px] overflow-hidden mx-auto">
            <img src={Comp6_image} alt="" className="rounded-lg" />
          </div>
          <div className=" mt-6 lg:mt-0 max-w-[400px]  overflow-hidden">
            <img src={Comp7_image} alt="" className="rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
