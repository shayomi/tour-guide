import React from "react";
import logo from "../assets/img/logo/logo_2.png";
import {
  FaTwitter,
  FaFacebook,
  FaInstagramSquare,
  FaWhatsapp,
  FaRegCopyright,
} from "react-icons/fa";
import { IconContext } from "react-icons";

const Footer = () => {
  const iconStyle = {
    color: "#0c5030",
    backgroundColor: "white",
    padding: "3px", // Adjust the padding as needed
    margin: "5px", // Adjust the margin as needed
    borderRadius: "100%", // Optional: add rounded corners
    display: "inline-block", // Optional: display icons in a row
    transition: "background-color 0.3s, color 0.3s", // Add smooth transition
  };

  const handleHover = () => {
    iconStyle.backgroundColor = "#0c5030";
    iconStyle.color = "white";
  };

  const handleMouseLeave = () => {
    iconStyle.backgroundColor = "white";
    iconStyle.color = "#0c5030";
  };

  return (
    <div className=" w-[100%] lg:w-[100%] mx-auto  bg-[#0c5030]">
      <div className="w-[90%] flex flex-col gap-y-4 py-12 mx-auto">
        <div className="flex flex-row justify-between items-center px-4 border-b-[1px] border-white-100 py-6">
          <div className="logo ">
            <img src={logo} alt="" className="max-w-[60px] lg:max-w-[90px]" />
          </div>
          <div className="icons flex flex-row gap-x-4">
            <a href="http://courses.inertiamedia-agency.com/#">
              <FaTwitter
                size={25}
                className="cursor-pointer"
                style={iconStyle}
                onMouseOver={handleHover}
                onMouseLeave={handleMouseLeave}
              />
            </a>
            <a href="http://courses.inertiamedia-agency.com/#">
              <FaFacebook
                size={25}
                className="cursor-pointer"
                style={iconStyle}
                onMouseOver={handleHover}
                onMouseLeave={handleMouseLeave}
              />
            </a>
            <a href="http://courses.inertiamedia-agency.com/#">
              <FaInstagramSquare
                size={25}
                className="cursor-pointer"
                style={iconStyle}
                onMouseOver={handleHover}
                onMouseLeave={handleMouseLeave}
              />
            </a>
            <a href="http://courses.inertiamedia-agency.com/#">
              <FaWhatsapp
                size={25}
                className="cursor-pointer"
                style={iconStyle}
                onMouseOver={handleHover}
                onMouseLeave={handleMouseLeave}
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col  gap-y-4 justify-center md:flex-row md:justify-between px-4 items-center pt-6">
          <span className="flex flex-row gap-x-2 items-center">
            <FaRegCopyright
              size={25}
              className="cursor-pointer"
              style={iconStyle}
              onMouseOver={handleHover}
              onMouseLeave={handleMouseLeave}
            />
            <p className="text-white font-primary text-[13px] font-medium">
              Copyright 2023, All Rights Reserved
            </p>
          </span>
          <div className="flex flex-row gap-x-4">
            <p className="text-white font-primary text-[13px] font-medium">
              Privacy Policy
            </p>
            <p className="text-white font-primary text-[13px] font-medium">
              Terms & Conditions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
