import { Route, Routes } from "react-router-dom";
import "./App.css";
import Public_routes from "./components/route_components/PublicRoutes";
import Aboutus from "./pages/AboutUs";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Public_routes />}>
          <Route path="/" element={<Aboutus />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
