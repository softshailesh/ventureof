import React, { useState } from "react";
import Header from "../user_route/User_header";
import Sidebar from "../user_route/User_Sidebar";
import User_dashboard from "../common_component/User_dashboard";
import ProfileBasicInfo from "../common_component/ProfileBasicInfo";
import ChangePassword from "../common_component/ChangePassword";

const SettingsLayout = () => {
  const [active, setActive] = useState("documents");

  return (
    <div className="h-full bg-gray-100 w-full">
      {/* Header */}
      <Header />

      {/* Body */}
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <Sidebar active={active} setActive={setActive} />

        {/* Content */}
        <main className="flex-1 p-6">

          {active === "documents" && (
            <User_dashboard />
          )}


          {active === "profile" && (    
            <ProfileBasicInfo />
          )}

          {active === "change-password" && <ChangePassword />}

        </main>
      </div>
    </div>
  );
};

export default SettingsLayout;
