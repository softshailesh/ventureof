import React, { useState } from "react";
import { User, FileText, ChevronDown, Lock, Menu, X } from "lucide-react";

const Sidebar = ({ active, setActive }) => {
  const [openProfile, setOpenProfile] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <>
      {/* ================= MOBILE TOP BAR ================= */}
      <div className="md:hidden flex items-center px-4 py-3 bg-white border-b">
        <button onClick={() => setOpenSidebar(true)}>
          <Menu className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      {/* ================= OVERLAY (MOBILE) ================= */}
      {openSidebar && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setOpenSidebar(false)}
        />
      )}

      {/* ================= SIDEBAR ================= */}
      <aside
        className={`
          fixed md:static top-0 left-0 z-50 md:z-auto
          w-64 bg-white shadow-md
          h-screen
          transform transition-transform duration-300
          ${openSidebar ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* INNER SCROLL AREA */}
        <div className="h-full p-4 overflow-y-auto">

          {/* CLOSE BUTTON (MOBILE) */}
          <div className="md:hidden flex justify-end mb-4">
            <button onClick={() => setOpenSidebar(false)}>
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* ================= TITLE ================= */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
              ⚙️
            </div>
            <div>
              <h2 className="font-semibold">Settings</h2>
              <p className="text-sm text-gray-500">Update Settings</p>
            </div>
          </div>

          {/* ================= MENU ================= */}
          <nav className="space-y-2">

            {/* ================= DOCUMENTS ================= */}
            <button
              onClick={() => {
                setActive("documents");
                setOpenProfile(false);   // 🔥 close dropdown
                setOpenSidebar(false);   // close mobile sidebar
              }}
              className={`w-full flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium cursor-pointer transition
                ${
                  active === "documents"
                    ? "bg-indigo-900 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
            >
              <FileText size={18} />
              Documents
            </button>

            {/* ================= MY PROFILE ================= */}
            <div>
              <button
                onClick={() => setOpenProfile((prev) => !prev)}
                className={`w-full flex items-center justify-between px-4 py-2 rounded-md text-sm font-medium transition
                  ${
                    active === "profile" || active === "change-password"
                      ? "bg-indigo-900 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
              >
                <div className="flex items-center gap-3 cursor-pointer cursor-pointer">
                  <User size={18} />
                  My Profile
                </div>
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    openProfile ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* ================= DROPDOWN ================= */}
              {openProfile && (
                <div className="ml-9 mt-1 space-y-1">
                  <button
                    onClick={() => {
                      setActive("profile");
                      setOpenProfile(false); // 🔥 close dropdown
                      setOpenSidebar(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm cursor-pointer transition
                      ${
                        active === "profile"
                          ? "bg-indigo-100 text-indigo-900"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                  >
                    Profile Details
                  </button>

                  <button
                    onClick={() => {
                      setActive("change-password");
                      setOpenProfile(false); // 🔥 close dropdown
                      setOpenSidebar(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm transition
                      ${
                        active === "change-password"
                          ? "bg-indigo-100 text-indigo-900"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                  >
                    <div className="flex items-center gap-2 cursor-pointer">
                      <Lock size={14} />
                      Change Password
                    </div>
                  </button>
                </div>
              )}
            </div>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
