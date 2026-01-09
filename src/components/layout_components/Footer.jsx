import React from "react";
import phoneIcon from "../../assets/call_icon.svg";
import emailIcon from "../../assets/mail_icon.svg";
import locationIcon from "../../assets/location_icon.svg";
import logo from "../../assets/venture_logo.svg";
import instagram_iocn from "../../assets/instagram_icon.svg";
import facebook_icon from "../../assets/facebook_icon.svg";
import linkedin_icon from "../../assets/linked_icon.svg";
import location_dot from "../../assets/location_icon.svg";
import twiiter_icon from "../../assets/twiiter_icon.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="w-full  opacity-90 text-white relative overflow-hidden" style={{backgroundColor:"darkgrey"}}>
      {/* <div className="absolute inset-0 bg-black/60"></div> */}

      <div className="container relative px-6 md:px-12 lg:px-20 py-8">
        {/* ================= TOP CONTACT ICONS ================= */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-14 mb-20">

          <div className="flex items-start gap-4">
            <div className="p-5 border border-yellow-400 rounded-full flex items-center justify-center w-[98px] h-[98px]">
              <img src={phoneIcon} alt="phone" className="w-[50px]" />
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-1">Phone No</h3>
              <p className="text-gray-300 text-sm">+91 85245XXXX</p>
              <p className="text-gray-300 text-sm">+91 85245XXXX</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-5 border border-yellow-400 rounded-full flex items-center justify-center w-[98px] h-[98px]">
              <img src={emailIcon} alt="email" className="w-[50px]" />
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-1">Email Address</h3>
              <p className="text-gray-300 text-sm">Enquerydomain@uk.com</p>
              <p className="text-gray-300 text-sm">Enquerydomain@uk.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-5 border border-yellow-400 rounded-full flex items-center justify-center w-[98px] h-[98px]">
              <img src={locationIcon} alt="location" className="w-[30px]" />
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-1">Location</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                TDP Agency The Barn <br />
                Moat House Farm IP7 7DB
              </p>
            </div>
          </div>

        </div> */}

        {/* ================= MAIN FOOTER GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 xl:gap-24 mt-10 ">
          {/* ========== COLUMN 1: Heading + Text ========== */}
          <div className="flex flex-col pr-6">
            <img src={logo} alt="VENTUREOF Logo" className="w-[180px] mb-5" />

            <p className=" text-sm leading-relaxed mb-6 max-w-[280px]">
              VenturesYou takes a multi-layered approach to supporting startups
              and investors through the complex funding landscape and from early
              fundraising strategy to post-investment support ensuring
              entrepreneurs and investors achieve their goals effectively.
            </p>
            <div className="">
              <div className=" flex items-center gap-6">
                {/* <img src={facebook_icon} className="w-9 cursor-pointer" />
                <img src={instagram_iocn} className="w-9 cursor-pointer" />
                <img src={twiiter_icon} className="w-9 cursor-pointer" /> */}
                <a
                  href="https://www.linkedin.com/company/venturesyou"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={linkedin_icon}
                    className="w-9 cursor-pointer"
                    alt="LinkedIn"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* ========== COLUMN 2: Location + Social Icons ========== */}
          {/* <div className="flex flex-col   md:pt-20 pt-0">

            <div className="flex items-center gap-3 text-gray-300 text-sm mb-5">
              <img src={location_dot} className="w-5 h-5 opacity-90" />
              <span>Jaipur Rajasthan India 302021</span>
            </div>

            <div className="">
              <div className=" flex items-center gap-6">
                <img src={facebook_icon} className="w-9 cursor-pointer" />
                <img src={instagram_iocn} className="w-9 cursor-pointer" />
                <img src={twiiter_icon} className="w-9 cursor-pointer" />
                <img src={linkedin_icon} className="w-9 cursor-pointer" />
              </div>
            </div>

          </div> */}

          {/* ========== COLUMN 3: Quick Link Left + Right (Same Column) ========== */}
          <div className="pl-4">
            <h3 className="text-xl font-semibold mb-2 text-white">
              Quick Link
            </h3>
            <div className="w-24 h-[3px] bg-yellow-500 mb-6"></div>

            <div className="flex gap-12">
              {/* Left Quick Links */}
              <ul className="space-y-3  text-sm leading-7">
                {/* <li className="hover:text-white cursor-pointer text-[16px] font-normal "><a href="#whoweare">Who We Are</a></li> */}
                <li className="hover:text-white cursor-pointer text-[16px] font-normal">
                  <Link to="/invest">Invest</Link>
                </li>
                <li className="hover:text-white cursor-pointer text-[16px] font-normal">
                  <Link to="/raise-capital">Raise Capital</Link>
                </li>
                <li className="hover:text-white cursor-pointer text-[16px] font-normal">
                  <Link to="/contact-us">Contact Us</Link>
                </li>
                {/* <li className="hover:text-white cursor-pointer text-[16px] font-normal">Become A Member</li>
                <li className="hover:text-white cursor-pointer text-[16px] font-normal">Resources</li> */}
              </ul>

              {/* Right Quick Links */}
              <ul className="space-y-4 text-gray-300 text-sm leading-7 ">
                {/* <li className="hover:text-white cursor-pointer text-[16px] font-normal">Case Details</li>
                <li className="hover:text-white cursor-pointer text-[16px] font-normal">Pricing Plans</li>
                <li className="hover:text-white cursor-pointer text-[16px] font-normal">Service Details</li> */}
                {/* <li className="hover:text-white cursor-pointer text-[16px] font-normal">Contact Us</li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* ================= COPYRIGHT ================= */}
      <div className="text-center text-[#FFFFFF] text-[14px] font-medium mt-6 border-t border-gray-700 p-6">
        Copyright @ <a
  href="https://venturesyou.com/"
  target="_blank"
  rel="noopener noreferrer"
  // className="text-blue-400 hover:underline relative z-10"
>
  venturesyou
</a> 2024, Inc | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
