import React from "react";
import footerLogo from "../assets/logo-text.png";
const Footer = () => {
  return (
    <footer className="mt-[40px] md:mt-[64px]">
      <div className="border border-[#F1F5F9] md:mb-[64px]" />
      <div className="md:px-[32px] px-[24px] container mx-auto">
        <div className="md:grid md:grid-cols-12 gap-4 ">
          {/*  */}
          <div className="md:col-span-5 text-center md:text-left mt-[32px]">
            <img src={footerLogo} alt="footerLogo" className="inline-block" />
            <p className="md:w-[500px] my-[12px] font-[400] text-[#64748B] text-[16px]">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className="font-semibold text-[#475569] text-[16px] space-x-[12px] mb-[15px] md:mb-[56px]">
              <a href="#">GitHub</a>
              <a href="#">Twitter </a>
              <a href="#">LinkedIn</a>
            </div>
          </div>

          {/* // product sewction */}
          <div className="col-span-2 hidden md:block">
            <h2 className="mb-[16px] font-bold text-[#0F172A]">PRODUCT</h2>
            <div className="text-[#64748B] space-y-2">
              <p>Home</p>
              <p>Technologies</p>
              <p>Projects</p>
            </div>
          </div>

          {/* // company sewction */}
          <div className="col-span-2 hidden  md:block">
            <h2 className="mb-[16px] font-bold text-[#0F172A]">COMPANY</h2>
            <div className="text-[#64748B] text-[15px] space-y-2">
              <p>About</p>
              <p>Contact</p>
              <p>Careers</p>
            </div>
          </div>

          {/* // legal sewction */}
          <div className="col-span-2 hidden md:block">
            <h2 className="mb-[16px] font-bold text-[#0F172A]">LEGAL</h2>
            <div className="text-[#64748B]  text-[15px] space-y-2">
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
            </div>
          </div>
        </div>

        <div className="border border-[#F1F5F9] " />
        <div className=" flex items-center mb-[48px] md:mt-[32px] mt-[16px]">
          <p className="text-sm text-[#94A3B8]">
            &copy; 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-5 ml-auto text-sm text-[#94A3B8]">
            <p>Privacy</p>
            <p>Terms </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
