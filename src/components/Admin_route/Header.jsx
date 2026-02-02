import React, { useState } from "react";
import { Search, LogOut } from "lucide-react";
import LogoutModal from "../common_component/LogoutModal";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);

  const handleLogoutConfirm = () => {
    console.log("Logged out");
    setShowLogoutPopup(false);
    // yahan redux / api logout laga sakte ho
  };

  return (
    <>
      <header className="bg-white shadow-sm px-6 py-4 flex justify-between items-center relative">
        {/* Search */}
        <div className="relative w-1/3">
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none"
          />
        </div>

        {/* Profile */}
        <div className="relative">
          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
            className="w-10 h-10 rounded-full cursor-pointer"
            onClick={() => setOpen(!open)}
          />

          {/* LOGOUT DROPDOWN */}
          {open && (
            <div className="absolute right-0 mt-3 w-40 bg-white border rounded-xl shadow-lg py-2 z-50">
              <button
                onClick={() => {
                  setOpen(false);
                  setShowLogoutPopup(true);
                }}
                className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50"
              >
                <LogOut size={16} />
                Logout
              </button>
            </div>
          )}
        </div>
      </header>

      {/* LOGOUT MODAL */}
      {showLogoutPopup && (
        <LogoutModal
          onConfirm={handleLogoutConfirm}
          onClose={() => setShowLogoutPopup(false)}
        />
      )}
    </>
  );
};

export default Header;
