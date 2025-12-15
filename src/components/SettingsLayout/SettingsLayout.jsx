import React, { useState } from "react";
import Header from "../user_route/User_header";
import Sidebar from "../user_route/User_Sidebar";

const SettingsLayout = () => {
  const [active, setActive] = useState("profile");

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <Header />

      {/* Body */}
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <Sidebar active={active} setActive={setActive} />

        {/* Content */}
        <main className="flex-1 p-6">
          {active === "profile" && (
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold mb-4">User Profile</h2>
              <p className="text-gray-600">
                User profile details will be shown here.
              </p>
            </div>
          )}

          {active === "documents" && (
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold mb-4">Documents</h2>
              <p className="text-gray-600">
                Uploaded documents will be shown here.
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default SettingsLayout;
