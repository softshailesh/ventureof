import React, { useState, useRef, useEffect } from "react";
import { Bell, LogOut } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/slice/authSlice";
import { useNavigate } from "react-router-dom";
import LogoutModal from "../common_component/LogoutModal";


const Header = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const dropdownRef = useRef(null);

  // ✅ IMAGE URL
  const profileImageUrl = user?.profile_image_url
    ? user.profile_image_url.startsWith("http")
      ? user.profile_image_url
      : `${import.meta.env.VITE_BASE_URL}${user.profile_image_url}`
    : "https://i.pravatar.cc/100";

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogoutConfirm = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <>
      <header className="w-full h-14 bg-white border-b flex items-center justify-between px-6">
        <h1 className="text-lg font-semibold text-gray-800">
          Settings
        </h1>

        <div className="relative flex items-center gap-4" ref={dropdownRef}>
          <Bell className="w-5 h-5 text-gray-600 cursor-pointer" />

          {/* Avatar */}
          <img
            src={profileImageUrl}
            alt="User"
            className="w-8 h-8 rounded-full object-cover cursor-pointer border"
            onClick={() => setOpen(!open)}
            onError={(e) => {
              e.currentTarget.src = "https://i.pravatar.cc/100";
            }}
          />

          {/* 🔽 Logout Dropdown */}
          {open && (
            <div className="absolute right-0 top-12 w-40 bg-white border rounded-xl shadow-lg py-2 z-40">
              <button
                onClick={() => {
                  setOpen(false);
                  setShowLogoutPopup(true);
                }}
                className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <LogOut size={16} />
                Log Out
              </button>
            </div>
          )}
        </div>
      </header>

      {/* 🔥 Logout Confirmation Popup */}
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
