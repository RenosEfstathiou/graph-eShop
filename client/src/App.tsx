import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Containers/Navbar";
import PublicRoute from "./Layouts/PublicRoute";
import LayoutPublic from "./Layouts/LayoutPublic";
import Pages, { Paths } from "./Pages";
function App() {
  return (
    <Routes>
      <Route
        path={Paths.LANDING}
        element={<PublicRoute layout={LayoutPublic} page={<Pages.Landing />} />}
      />
    </Routes>
  );
}

export default App;
