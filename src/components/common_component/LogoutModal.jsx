import React from "react";
import { LogOut, X } from "lucide-react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/slice/authSlice";
import { useNavigate } from "react-router-dom";

const LogoutModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    // ✅ FORCE CLEAN LOCALSTORAGE
    localStorage.removeItem("tokenId");
    localStorage.removeItem("user");
    localStorage.clear(); // optional but safest

    // ✅ REDUX LOGOUT
    dispatch(logout());

    // ✅ REDIRECT
    navigate("/login", { replace: true });
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-[340px] p-6 relative text-center">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
        >
          <X size={18} />
        </button>

        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
            <LogOut size={28} className="text-blue-600" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold mb-2">Logout</h3>
        <p className="text-sm text-gray-500 mb-6">
          Are you sure you want to logout?
        </p>

        {/* Action */}
        <button
          onClick={handleLogout}
          className="w-full py-2 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition cursor-pointer"
        >
          Yes
        </button>
      </div>
    </div>
  );
};

export default LogoutModal;
