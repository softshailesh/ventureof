import { Route, Routes } from "react-router-dom";
import "./App.css";
import PublicRoutes from "./components/route_components/PublicRoutes";
import Aboutus from "./pages/AboutUs";

function App() {
  return (
    <div className="max-w-[1350px] flex mx-auto">
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route path="/" element={<Aboutus />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
