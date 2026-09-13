import React from "react";
import navLogo from "../../assets/logo-text.png";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  return (
    <nav className="shadow-xs sticky top-0 z-50 bg-[#FFFFFF]">
      <div className="md:flex items-center justify-between container mx-auto p-[15px] grid grid-cols-3">
        <HiMenu className="text-[#7B7171] w-[40px] h-[40px] md:hidden" />

        <img
          src={navLogo}
          alt="navLogo"
          className="md:w-[136px] md:h-[32px] w-[122px] h-[29px] "
        />

        {/* navigations link */}
        <div className="md:flex justify-center items-center gap-[29px] text-[14px] text-[#475569] hidden md:block">
          <a href="#" className="text-[#DB2777]">
            Home
          </a>
          <a href="#">Technologies</a>
          <a href="#">Projects</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        {/* buttons */}
        <div className="md:space-x-[10px] ">
          <button className="btn border-none bg-transparent text-[#4B5563] md:text-[14px] text-[12px] font-bold">
            Sign In
          </button>
          <button className="btn bg-[#D91B7E] md:px-[20px] md:py-[10px] px-[15px] py text-[#FFFFFF] rounded-[30px] text-[12px] md:text-[14px] font font-semibold">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
