import { Routes, Route } from "react-router-dom";
import PublicRoutes from "./components/route_components/PublicRoutes";
import PrivateRoute from "./components/route_components/PrivateRoute";
import RoleRoute from "./components/route_components/RoleRoute";

/* 🌐 PUBLIC */
import Aboutus from "./pages/AboutUs";
import InvestVenture from "./pages/InvestVenture";
import CapitalVenture from "./pages/CapitalVenture";
import BeMember from "./pages/BeMember";
import PodcastVenture from "./pages/PodcastVenture";
import BlogVenture from "./pages/BlogVenture";
import PartnershipForm from "./pages/PartnershipForm";
import Login from "./components/common_component/Login";
import Register from "./pages/Register";

/* 👤 USER */
import SettingsLayout from "./components/SettingsLayout/SettingsLayout";

/* 🔐 ADMIN */
import AdminLogin from "./pages/AdminLogin";
import AdminLayout from "./components/AdminLayout/Layout";
import Dashboard from "./components/Dashboard";
import ContactQuery from "./components/ContactQuery";

function App() {
  return (
    <Routes>

      {/* 🌐 PUBLIC ROUTES */}
      <Route element={<PublicRoutes />}>
        <Route path="/" element={<Aboutus />} />
        <Route path="/investVenture" element={<InvestVenture />} />
        <Route path="/capital-venture" element={<CapitalVenture />} />
        <Route path="/have-membership" element={<BeMember />} />
        <Route path="/podcast" element={<PodcastVenture />} />
        <Route path="/blog" element={<BlogVenture />} />
        <Route path="/contact-us" element={<PartnershipForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* 🔐 ADMIN LOGIN */}
      <Route path="/admin/login" element={<AdminLogin />} />

      {/* 👤 USER ROUTES */}
      <Route element={<PrivateRoute />}>
        <Route element={<RoleRoute allowedRoles={["user"]} />}>
          <Route path="/dashboard" element={<SettingsLayout />} />
        </Route>
      </Route>

      {/* 🔒 ADMIN ROUTES */}
      <Route element={<PrivateRoute />}>
        <Route element={<RoleRoute allowedRoles={["admin"]} />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="contact-query" element={<ContactQuery />} />
          </Route>
        </Route>
      </Route>

    </Routes>
  );
}

export default App;
