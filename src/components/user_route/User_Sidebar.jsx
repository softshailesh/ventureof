import React from "react";
import { User, FileText } from "lucide-react";

const Sidebar = ({ active, setActive }) => {
  return (
    <aside className="w-full md:w-64 bg-white border-r p-4">
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
        <button
          onClick={() => setActive("profile")}
          className={`w-full flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium transition
            ${
              active === "profile"
                ? "bg-indigo-900 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
        >
          <User size={18} />
          User Profile
        </button>

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
      </nav>
    </aside>
  );
};

export default Sidebar;
