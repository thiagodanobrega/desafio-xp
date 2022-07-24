import { screen, fireEvent } from "@testing-library/react";
import React from "react";
import { describe, expect, test, vi } from "vitest";

import App from "../App";
import { AssetProvider } from "../contexts/Asset/AssetProvider";
import { AuthProvider } from "../contexts/Auth/AuthProvider";
import { CryptoProvider } from "../contexts/Crypto/CryptoProvider";
import Home from "../pages/Home";
import * as api from "../services/assetApi";
import renderWithRouter from "../utils/renderWithRouter";

describe("2 - Testando a tela de Home", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });
  test("Verifica se a página possui o título 'Minhas ações'", () => {
    renderWithRouter(<Home />);
    const title = screen.getByText(/Minhas ações/i);
    expect(title).toBeInTheDocument();
  });

  test("Verifica se a página renderiza os ativos do usuário", async () => {
    const userAsset = [
      {
        idAsset: 2,
        idUser: 1,
        name: "ethereum",
        quantity: 1,
        value: 100,
      },
    ];
    vi.spyOn(api, "getUserAssets").mockImplementation(() =>
      Promise.resolve(userAsset)
    );
    renderWithRouter(
      <AuthProvider>
        <AssetProvider>
          <CryptoProvider>
            <Home />
          </CryptoProvider>
        </AssetProvider>
      </AuthProvider>
    );

    const asset = await screen.findByTestId("userAsset-ethereum");
    expect(asset).toBeInTheDocument();
  });
});
