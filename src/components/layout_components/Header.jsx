import React, { useState } from "react";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { Link, NavLink, useNavigate } from "react-router";
import logo from "../../assets/venture_logo.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-[#ECF3F2] border-b border-gray-200 sticky top-0 z-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center gap-7 h-[70px] lg:h-[112px]">

          {/* Logo */}
          <div className="flex items-center w-[200px] h-[56px]">
            <Link to="/">
              <img src={logo} alt="VentureOF logo" className="h-full w-auto" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-5 xl:space-x-8">

            <Link to="/" className="text-gray-800 hover:text-green-700 whitespace-nowrap">
              About Us
            </Link>

            <Link to="/investVenture" className="text-gray-800 hover:text-green-700 whitespace-nowrap">
              Invest
            </Link>
            {/* <span onClick={() => navigate("/investVenture")}>Invest</span> */}
           {/* <NavLink to="/investVenture" className="text-gray-800 hover:text-green-700 whitespace-nowrap">  Invest</NavLink> */}
            <Link to="/capital-venture" className="text-gray-800 hover:text-green-700 whitespace-nowrap">
              Raise Capital
            </Link>

            <Link to="/have-membership" className="text-gray-800 hover:text-green-700 whitespace-nowrap">
              Become A Member
            </Link>

            {/* Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-800 hover:text-green-700 whitespace-nowrap">
                Resources <FiChevronDown className="ml-1" />
              </button>

              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md w-40">
                <div className="mt-2">
                 
                  <Link
                    to="/podcast"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#FBB91D]"
                  >
                    Podcast
                  </Link>
                  <Link
                    to="/blog"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#FBB91D]"
                  >
                    Blog
                  </Link>
                </div>
              </div>
            </div>

            <Link to="/contact-us" className="text-gray-800 hover:text-green-700 whitespace-nowrap">
              ContactUs
            </Link>

            <button
              onClick={() => navigate("/login")}
              className="bg-[#87BC25] text-white px-2 xl:px-4 py-2 rounded-md hover:bg-lime-700 transition whitespace-nowrap cursor-pointer"
            >
              Member Login
            </button>

            <button className="bg-[#87BC25] text-white px-2 xl:px-4 py-2 rounded-md hover:bg-lime-600 transition whitespace-nowrap cursor-pointer">
              Investment Marketplace
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-800"
            >
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden mt-1 space-y-2 pb-4 absolute z-[100] bg-[#ECF3F2] w-full left-0 px-4">

            <Link to="/" className="block text-gray-800">
              About Us
            </Link>

            <Link to="/invest" className="block text-gray-800">
              Invest
            </Link>

            <Link to="/raise-capital" className="block text-gray-800">
              Raise Capital
            </Link>

            <Link to="/become-member" className="block text-gray-800">
              Become A Member
            </Link>

            <Link to="/resources" className="block text-gray-800">
              Resources
            </Link>

            <button className="w-full bg-lime-600 text-white px-4 py-2 rounded-md hover:bg-lime-700 cursor-pointer">
              Member Login
            </button>

            <button className="w-full bg-lime-500 text-white px-4 py-2 rounded-md hover:bg-lime-600 cursor-pointer">
              Investment Marketplace
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
