import { Route, Routes } from "react-router-dom";
import "./App.css";
import PublicRoutes from "./components/route_components/PublicRoutes";
import Aboutus from "./pages/AboutUs";
import InvestVenture from "./pages/InvestVenture";
import CapitalVenture from "./pages/CapitalVenture";
import BeMember from "./pages/BeMember";

function App() {
  return (
    <div className="max-w-[1350px] flex mx-auto">
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route path="/" element={<Aboutus />} />
          <Route path="/investVenture" element={<InvestVenture />} />
          <Route path="/capital-venture" element={<CapitalVenture />} />
          <Route path="/have-membership" element={<BeMember />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
