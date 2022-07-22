import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { AssetProvider } from "./contexts/Asset/AssetProvider";
import { AuthProvider } from "./contexts/Auth/AuthProvider";
import { CryptoProvider } from "./contexts/Crypto/CryptoProvider";
import GlobalStyle from "./styles/global";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <AuthProvider>
      <AssetProvider>
        <CryptoProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CryptoProvider>
      </AssetProvider>
    </AuthProvider>
  </React.StrictMode>
);
