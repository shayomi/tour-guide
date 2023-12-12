import { useRef } from "react";
import React from "react";

import Video from "../assets/video/video.mp4";

const Banner = () => {
  //   const fullScreenVideoRef = useRef(null);
  //   toggleFullScreen = () => {
  //     var el = document.getElementById("full-screenVideo");
  //     if (el.requestFullscreen) {
  //       el.requestFullscreen();
  //     } else if (el.msRequestFullscreen) {
  //       el.msRequestFullscreen();
  //     } else if (el.mozRequestFullScreen) {
  //       el.mozRequestFullScreen();
  //     } else if (el.webkitRequestFullscreen) {
  //       el.webkitRequestFullscreen();
  //     }
  //   };

  const videoRef = useRef(null);

  const handleContextMenu = (e) => {
    e.preventDefault();
    alert("Right-clicking is disabled on this video.");
  };
  return (
    <div className=" w-[98%] lg:w-[95%] mx-auto mt-12 lg:mt-24">
      <div className="">
        <div className=" flex flex-col lg:flex-row gap-y-6 gap-x-12 ">
          <div className="flex flex-col gap-y-4 justify-start text-start font-primary max-w-[600px] mx-auto lg:hidden ">
            <p>
              Are you considering relocating to another Country for a better
              life and opportunities?{" "}
            </p>
            <p>
              Has it been difficult for you to successfully relocate to highly
              competitive countries like USA, CANADA AND UK?{" "}
            </p>
            <p>Is the cost of relocating abroad a problem? </p>
            <p>Have you been denied visa once or many times? </p>
          </div>
          <div className="max-w-[500px] justify-center mx-auto ">
            <video
              ref={videoRef}
              className=""
              src={Video}
              controls
              controlsList="nodownload"
              onContextMenu={handleContextMenu}
            ></video>
          </div>
          <div className="hidden lg:flex flex-col gap-y-4 justify-start text-start font-primary order-1 ">
            <p>
              Are you considering relocating to another Country for a better
              life and opportunities?{" "}
            </p>
            <p>
              Has it been difficult for you to successfully relocate to highly
              competitive countries like USA, CANADA AND UK?{" "}
            </p>
            <p>Is the cost of relocating abroad a problem? </p>
            <p>Have you been denied visa once or many times? </p>
            <p>
              Do you know that there are countries in Africa that offers similar
              things to what you can get in USA, CANADA, UK and other European
              countries?{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
