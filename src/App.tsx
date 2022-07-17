import React from "react";
import { Route, Routes } from "react-router-dom";

import AssetDetails from "./pages/AssetDetails";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/asset/:id" element={<AssetDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
