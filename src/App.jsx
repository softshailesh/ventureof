import { Route, Routes } from "react-router-dom";
import "./App.css";
import PublicRoutes from "./components/route_components/PublicRoutes";
import Aboutus from "./pages/AboutUs";
import InvestVenture from "./pages/InvestVenture";
import CapitalVenture from "./pages/CapitalVenture";
import BeMember from "./pages/BeMember";
import PodcastVenture from "./pages/PodcastVenture";
import BlogVenture from "./pages/BlogVenture";
import PartnershipForm from "./pages/PartnershipForm";
import Login from "./components/common_component/Login";
import Register from "./pages/Register";
import SettingsLayout from "./components/SettingsLayout/SettingsLayout";
import PrivateRoute from "./components/route_components/PrivateRoute";

function App() {
  return (
    <div >
      <Routes className="max-w-[1350px] flex mx-auto">
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
      </Routes>

      <Routes element={<PrivateRoute />}>
        <Route path="/dashboard" element={<SettingsLayout />} />
      </Routes>

    </div>
  );
}

export default App;
