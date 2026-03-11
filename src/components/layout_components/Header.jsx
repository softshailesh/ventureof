import React, { useState } from "react";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { Link, useNavigate } from "react-router";
import logo from "../../assets/venture-logo.jpg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false); // Mobile dropdown
  const navigate = useNavigate();

  return (
    <nav className="header-section bg-[#ECF3F2] border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto relative">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center w-[200px] h-[56px]">
            <Link to="/">
              <img src={logo} alt="VentureOF logo" className="h-full w-auto" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-5 xl:space-x-8">
            <Link
              to="/invest"
              className="text-gray-800 hover:text-green-700 whitespace-nowrap"
            >
              Invest
            </Link>
            <Link
              to="/raise-capital"
              className="text-gray-800 hover:text-green-700 whitespace-nowrap"
            >
              Raise Capital
            </Link>
            {/* <Link to="/have-membership" className="text-gray-800 hover:text-green-700 whitespace-nowrap">
              Become A Member
            </Link> */}

            {/* Desktop Dropdown */}

            <Link
              to="/contact-us"
              className="text-gray-800 hover:text-green-700 whitespace-nowrap"
              // onClick={() => navigate("/contact-us")}
              // className="bg-[#42b87c] text-white px-2 xl:px-4 py-2 rounded-md hover:bg-lime-700 transition whitespace-nowrap cursor-pointer"
            >
              Contact Us
            </Link>
            <button
              onClick={() => navigate("/investor")}
              className="bg-[#42b87c] text-white px-2 xl:px-4 py-2 rounded-md hover:bg-lime-700 transition whitespace-nowrap cursor-pointer"
            >
              Investor
            </button>
            <button
              onClick={() => navigate("/startup")}
              className="bg-[#42b87c] text-white px-2 xl:px-4 py-2 rounded-md hover:bg-lime-700 transition whitespace-nowrap cursor-pointer"
            >
              Startup Funding
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
          <div className="lg:hidden mt-1 space-y-2 pb-4 absolute z-[100] bg-[#ECF3F2] w-full left-0 px-4 shadow-md rounded-b-md">
            <Link
              to="/invest"
              className="block text-gray-800 lg:px-4 py-2 rounded hover:bg-green-100"
              onClick={() => setMenuOpen(false)}
            >
              Invest
            </Link>

            <Link
              to="/raise-capital"
              className="block text-gray-800 lg:px-4 py-2 rounded hover:bg-green-100"
              onClick={() => setMenuOpen(false)}
            >
              Raise Capital
            </Link>

            {/* <Link
              to="/have-membership"
              className="block text-gray-800 px-4 py-2 rounded hover:bg-green-100"
              onClick={() => setMenuOpen(false)}
            >
              Become A Member
            </Link> */}

            <Link
              to="/contact-us"
              className="block text-gray-800 lg:px-4 py-2 rounded hover:bg-green-100"
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </Link>

            <button
              onClick={() => navigate("/investor")}
              className="block bg-lime-600 text-white px-4 py-2 rounded-md hover:bg-lime-700 cursor-pointer"
            >
              Investor
            </button>
            <button
              onClick={() => navigate("/startup")}
                // className="block text-gray-800 px-4 py-2 rounded hover:bg-green-100"
              className="block bg-lime-600 text-white px-4 py-2 rounded-md hover:bg-lime-700 cursor-pointer"
            >
              Startup Funding
            </button>

            {/* <button
              onClick={() => {
                navigate("/contact-us");
                setMenuOpen(false);
              }}
              className="w-full bg-lime-600 text-white px-4 py-2 rounded-md hover:bg-lime-700 cursor-pointer"
            >
              Contact Us
            </button> */}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
