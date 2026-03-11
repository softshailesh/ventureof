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
import ScrollToTop from "./components/common_component/ScrollToTop";
import ContactView from "./pages/ContactView";
import MyProfile from "./components/MyProfile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Users from "./components/Users";
import RaiseCapital from "./components/user_route/RaiseCapital";
import Investors from "./components/user_route/Investors";
import InvestForm from "./pages/InvestForm";
import CapitalForm from "./pages/CapitalForm";

function App() {
  return (
    <>

      <ScrollToTop />
       <ToastContainer position="top-right" autoClose={3000} />
      <Routes>

        {/* 🌐 PUBLIC ROUTES */}
        <Route element={<PublicRoutes />}>
          <Route path="/" element={<Aboutus />} />
          <Route path="/invest" element={<InvestVenture />} />
           <Route path="/investor" element={<InvestForm />} />
             <Route path="/startup" element={<CapitalForm />} />
          <Route path="/raise-capital" element={<CapitalVenture />} />
          <Route path="/have-membership" element={<BeMember />} />
          <Route path="/podcast" element={<PodcastVenture />} />
          <Route path="/blog" element={<BlogVenture />} />
          <Route path="/contact-us" element={<PartnershipForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
           <Route path="/admin/login" element={<AdminLogin />} />
        </Route>

        {/* 🔐 ADMIN LOGIN */}
       

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
              <Route path="contacts/:id" element={<ContactView />} />
              <Route path="my-profile" element={<MyProfile />} />
               <Route path="user" element={<Users />} />
                <Route path="investors" element={<Investors />} />
                 <Route path="raisecapital" element={<RaiseCapital />} />
            </Route>
          </Route>
        </Route>

      </Routes>
    </>

  );
}

export default App;
