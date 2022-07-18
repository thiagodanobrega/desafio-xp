import React from "react";
import { Route, Routes } from "react-router-dom";

import AssetDetails from "./pages/AssetDetails";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import WithAuth from "./utils/WithAuth";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/home"
        element={
          <WithAuth>
            <Home />
          </WithAuth>
        }
      />
      <Route
        path="/asset/:id"
        element={
          <WithAuth>
            <AssetDetails />
          </WithAuth>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
