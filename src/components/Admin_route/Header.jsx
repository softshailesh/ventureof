import { Search } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white border-b px-6 py-4 flex justify-between items-center">
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
      <div className="flex items-center gap-3">
        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </header>
  );
};

export default Header;
