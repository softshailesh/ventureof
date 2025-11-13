import React from "react";
import Header from "../layout_components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../layout_components/footer";

const PublicRoutes = () => {
  return (
    <div className="min-h-screen flex flex-col w-full">
      {/* Header Section */}
      <Header />

      {/* Page Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default PublicRoutes;
