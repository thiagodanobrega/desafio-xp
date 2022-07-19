import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { AssetProvider } from "./contexts/Asset/AssetProvider";
import { AuthProvider } from "./contexts/Auth/AuthProvider";
import GlobalStyle from "./styles/global";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <AuthProvider>
      <AssetProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AssetProvider>
    </AuthProvider>
  </React.StrictMode>
);
