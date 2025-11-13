import React, { useState } from "react";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import logo from "../../assets/venture_logo.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#ECF3F2] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-[70px] md:h-[112px]">
          {/* Logo */}
          <div className="flex items-center w-[200px] h-[56px]">
            <img src={logo} alt="VentureOF logo" className="h-full w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-5 xl:space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-[#87BC25] font-semibold whitespace-nowrap"
                  : "text-green-600 font-medium hover:text-green-700 whitespace-nowrap"
              }
            >
              About Us
            </NavLink>

            <NavLink
              to="/invest"
              className={({ isActive }) =>
                isActive
                  ? "text-[#87BC25] font-semibold whitespace-nowrap"
                  : "text-gray-800 hover:text-green-700 whitespace-nowrap"
              }
            >
              Invest
            </NavLink>

            <NavLink
              to="/raise-capital"
              className={({ isActive }) =>
                isActive
                  ? "text-[#87BC25] font-semibold whitespace-nowrap"
                  : "text-gray-800 hover:text-green-700 whitespace-nowrap"
              }
            >
              Raise Capital
            </NavLink>

            <NavLink
              to="/become-member"
              className={({ isActive }) =>
                isActive
                  ? "text-[#87BC25] font-semibold whitespace-nowrap"
                  : "text-gray-800 hover:text-green-700 whitespace-nowrap"
              }
            >
              Become A Member
            </NavLink>

            {/* Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-800 hover:text-green-700 whitespace-nowrap">
                Resources <FiChevronDown className="ml-1" />
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md w-40">
                <div className="mt-2">
                  <NavLink
                    to="/blog"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Blog
                  </NavLink>
                  <NavLink
                    to="/guides"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Guides
                  </NavLink>
                </div>
              </div>
            </div>

            <button className="bg-[#87BC25] text-white px-2 xl:px-4 py-2 rounded-md hover:bg-lime-700 transition whitespace-nowrap">
              Member Login
            </button>
            <button className="bg-[#87BC25] text-white px-2 xl:px-4 py-2 rounded-md hover:bg-lime-600 transition whitespace-nowrap">
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
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "block text-[#87BC25] font-semibold"
                  : "block text-green-600 font-medium"
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/invest"
              className={({ isActive }) =>
                isActive
                  ? "block text-[#87BC25] font-semibold"
                  : "block text-gray-800"
              }
            >
              Invest
            </NavLink>
            <NavLink
              to="/raise-capital"
              className={({ isActive }) =>
                isActive
                  ? "block text-[#87BC25] font-semibold"
                  : "block text-gray-800"
              }
            >
              Raise Capital
            </NavLink>
            <NavLink
              to="/become-member"
              className={({ isActive }) =>
                isActive
                  ? "block text-[#87BC25] font-semibold"
                  : "block text-gray-800"
              }
            >
              Become A Member
            </NavLink>
            <NavLink
              to="/resources"
              className={({ isActive }) =>
                isActive
                  ? "block text-[#87BC25] font-semibold"
                  : "block text-gray-800"
              }
            >
              Resources
            </NavLink>

            <button className="w-full bg-lime-600 text-white px-4 py-2 rounded-md hover:bg-lime-700">
              Member Login
            </button>
            <button className="w-full bg-lime-500 text-white px-4 py-2 rounded-md hover:bg-lime-600">
              Investment Marketplace
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
