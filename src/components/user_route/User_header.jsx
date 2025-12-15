import React from "react";
import { Bell } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full h-14 bg-white border-b flex items-center justify-between px-6">
      <h1 className="text-lg font-semibold text-gray-800">Settings</h1>

      <div className="flex items-center gap-4">
        <Bell className="w-5 h-5 text-gray-600 cursor-pointer" />
        <img
          src="https://i.pravatar.cc/100"
          alt="User"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </header>
  );
};

export default Header;
