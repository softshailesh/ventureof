import { Outlet } from "react-router-dom";
import Header from "../Admin_route/Header";
import Sidebar from "../Admin_route/Sidebar";

const Layout = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6">
          <Outlet /> {/* ✅ YAHI SE CHILD ROUTES RENDER HONGE */}
        </main>
      </div>
    </div>
  );
};

export default Layout;
