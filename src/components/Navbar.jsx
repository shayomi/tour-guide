import React from "react";
import logo from "../assets/img/logo/logo_1.png";
import { BsTelephone } from "react-icons/bs";
import { MdWhatsapp } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="w-[95%] lg:W-[95%] mx-auto mt-6  ">
      <div className="flex flex-row px-0 md:px-3 mx-auto  h-[60px] items-center justify-between font-primary">
        <div className="logo ">
          <img src={logo} alt="" className="max-w-[60px] lg:max-w-[90px]" />
        </div>
        <div className="flex flex-row gap-x-4 items-center">
          <div className="">
            <BsTelephone size={24} />
          </div>
          <span className="font-primary text-[11px] lg:text-sm">
            <p>For Inquiries</p>
            <a href="tel:  +2507 9013 7970" target="_blank">
              +2507 9013 7970
            </a>
          </span>
          <a href="https://wa.link/857kj5">
            <MdWhatsapp size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
