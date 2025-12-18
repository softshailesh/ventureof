import React, { useState } from "react";
import { User, FileText, ChevronDown, Lock } from "lucide-react";

const Sidebar = ({ active, setActive }) => {
  const [openProfile, setOpenProfile] = useState(false);

  return (
    <aside className="w-full md:w-64 bg-white border-r p-4 min-h-screen">
      {/* Settings Title */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
          ⚙️
        </div>
        <div>
          <h2 className="font-semibold">Settings</h2>
          <p className="text-sm text-gray-500">Update Settings</p>
        </div>
      </div>

      {/* Menu */}
      <nav className="space-y-2">

        {/* Documents */}
        <button
          onClick={() => setActive("documents")}
          className={`w-full flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium transition
            ${
              active === "documents"
                ? "bg-indigo-900 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
        >
          <FileText size={18} />
          Documents
        </button>

        {/* User Profile Dropdown */}
        <div>
          <button
            onClick={() => setOpenProfile(!openProfile)}
            className={`w-full flex items-center justify-between px-4 py-2 rounded-md text-sm font-medium transition
              ${
                active === "profile" || active === "change-password"
                  ? "bg-indigo-900 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
          >
            <div className="flex items-center gap-3">
              <User size={18} />
              User Profile
            </div>
            <ChevronDown
              size={16}
              className={`transition-transform ${
                openProfile ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Dropdown Items */}
          {openProfile && (
            <div className="ml-9 mt-1 space-y-1">
              <button
                onClick={() => setActive("profile")}
                className={`w-full text-left px-3 py-2 rounded-md text-sm transition
                  ${
                    active === "profile"
                      ? "bg-indigo-100 text-indigo-900"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
              >
                Profile Details
              </button>

              <button
                onClick={() => setActive("change-password")}
                className={`w-full text-left px-3 py-2 rounded-md text-sm transition
                  ${
                    active === "change-password"
                      ? "bg-indigo-100 text-indigo-900"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
              >
                <div className="flex items-center gap-2">
                  <Lock size={14} />
                  Change Password
                </div>
              </button>
            </div>
          )}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
