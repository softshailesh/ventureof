import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/venture-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-[#EEF1F5] py-10">
      <div className="max-w-2xl mx-auto px-4 text-center">
        {/* Logo */}
        <div className="flex justify-center m-auto items-center mb-4 w-[200px] h-[56px]">
          <Link to="/">
            <img src={logo} alt="VentureOF logo" className="h-full w-auto" />
          </Link>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-500 max-w-3xl mx-auto mb-6">
          VenturesYou takes a multi-layered approach to supporting startups and
          investors through the complex funding landscape and from early
          fundraising strategy to post-investment support ensuring entrepreneurs
          and investors achieve their goals effectively.
        </p>

       <div className="bg-white rounded-2xl py-6 shadow-sm mb-6 ">
         {/* Navigation */}
        <div className="flex justify-center gap-8 text-sm font-medium text-gray-700 mb-5">
          <a href="#" className="hover:text-orange-500">
            <Link to="/invest">Invest</Link>
          </a>
          <a href="#" className="hover:text-orange-500">
            <Link to="/raise-capital">Raise Capital</Link>
          </a>
          <a href="#" className="hover:text-orange-500">
            <Link to="/contact-us">Contact Us</Link>
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 ">
          {/* <a className="w-9 h-9 flex items-center justify-center rounded-full bg-green-700 text-white hover:opacity-90">
            <FaFacebookF size={14} />
          </a>
          <a className="w-9 h-9 flex items-center justify-center rounded-full bg-green-700 text-white hover:opacity-90">
            <FaInstagram size={14} />
          </a> */}
          <a
            className="w-9 h-9 flex items-center justify-center rounded-full bg-green-700 text-white hover:opacity-90"
            href="https://www.linkedin.com/company/venturesyou"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn size={14} />
          </a>
        </div>
       </div>

        {/* Policy Links */}
        {/* <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500 mb-4">
          <a href="#" className="hover:text-gray-700">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:text-gray-700">Terms & Condition</a>
          <span>|</span>
          <a href="#" className="hover:text-gray-700">Cookie Notice</a>
          <span>|</span>
          <a href="#" className="hover:text-gray-700">Copyright Policy</a>
          <span>|</span>
          <a href="#" className="hover:text-gray-700">Data Policy</a>
        </div> */}

        {/* Copyright */}
        <p className="text-xs text-gray-400">
          Copyright @ venturesyou 2024, Inc | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
