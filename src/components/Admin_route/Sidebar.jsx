import { NavLink } from "react-router-dom";
import { LayoutDashboard, Mail, Users } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-md roubd px-4 py-6">
      {/* Logo */}
      <div className="text-2xl font-bold text-orange-600 mb-8">
        SINGHTEK
      </div>

      {/* Menu */}
      <nav className="space-y-2">
        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-lg ${isActive ? "bg-indigo-100 text-indigo-600" : "text-gray-600"
            }`
          }
        >
          <LayoutDashboard size={18} />
          Dashboard
        </NavLink>

        <NavLink
          to="/admin/contact-query"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-lg ${isActive ? "bg-indigo-100 text-indigo-600" : "text-gray-600"
            }`
          }
        >
          <Mail size={18} />
          Contact Enquiry
        </NavLink>

        <NavLink
          to="/admin/user"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-lg ${isActive ? "bg-indigo-100 text-indigo-600" : "text-gray-600"
            }`
          }
        >
          <Users size={18} />
          Users
        </NavLink>

      </nav>
    </aside>
  );
};

export default Sidebar;
