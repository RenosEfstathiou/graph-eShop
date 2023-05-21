import { Route, Routes } from "react-router-dom";
import "./App.css";

import PublicRoute from "./Layouts/PublicRoute";
import LayoutPublic from "./Layouts/LayoutPublic";
import Pages, { Paths } from "./Pages";
function App() {
  return (
    <Routes>
      <Route
        path={Paths.MOBILE_PHONES}
        element={
          <PublicRoute layout={LayoutPublic} page={<Pages.MobilePhones />} />
        }
      />
      <Route
        path={Paths.LANDING}
        element={<PublicRoute layout={LayoutPublic} page={<Pages.Landing />} />}
      />

      <Route
        path={Paths.CART}
        element={<PublicRoute layout={LayoutPublic} page={<Pages.Cart />} />}
      />
    </Routes>
  );
}

export default App;
