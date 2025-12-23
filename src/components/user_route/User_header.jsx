import React, { useState, useRef, useEffect } from "react";
import { Bell, LogOut, Menu } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/slice/authSlice";
import { useNavigate } from "react-router-dom";
import LogoutModal from "../common_component/LogoutModal";

// 👉 replace with your logo
import logo from "../../assets/venture_logo.svg";

const Header = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const dropdownRef = useRef(null);

  /* =========================
     PROFILE IMAGE
  ========================= */
  const profileImageUrl = user?.profile_image_url
    ? user.profile_image_url.startsWith("http")
      ? user.profile_image_url
      : `${import.meta.env.VITE_BASE_URL}${user.profile_image_url}`
    : "https://i.pravatar.cc/100";

  /* =========================
     CLOSE DROPDOWN ON OUTSIDE
  ========================= */
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
      <header className="w-full h-14 bg-white shadow-md flex items-center justify-between px-4 sm:px-6">
        
        {/* LEFT : LOGO */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo"
            className="h-8 w-auto object-contain"
          />
        </div>

        {/* RIGHT : ACTIONS */}
        <div
          className="relative flex items-center gap-3 sm:gap-4"
          ref={dropdownRef}
        >
          {/* Notification */}
          <Bell className="w-5 h-5 text-gray-600 cursor-pointer hidden sm:block" />

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

          {/* DROPDOWN */}
          {open && (
            <div className="absolute right-0 top-11 w-40 bg-white border rounded-xl shadow-lg py-2 z-40">
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

      {/* LOGOUT CONFIRMATION MODAL */}
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
