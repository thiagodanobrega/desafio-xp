import { screen, fireEvent } from "@testing-library/react";
import React from "react";
import { describe, expect, test, vi } from "vitest";

import App from "../App";
import { AssetProvider } from "../contexts/Asset/AssetProvider";
import { AuthProvider } from "../contexts/Auth/AuthProvider";
import { CryptoProvider } from "../contexts/Crypto/CryptoProvider";
import { trendingCoins } from "../data/trendingCoins";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import * as apiAsset from "../services/assetApi";
import * as apiCrypto from "../services/cryptoApi";
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
    vi.spyOn(apiAsset, "getUserAssets").mockImplementation(() =>
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

  test("Verifica se a página renderiza o saldo do usuário", async () => {
    const userBalance = {
      id: 1,
      balance: 2000,
    };
    vi.spyOn(apiAsset, "getBalance").mockImplementation(() =>
      Promise.resolve(userBalance)
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

    const asset = await screen.findByText("R$ 2.000,00");
    expect(asset).toBeInTheDocument();
  });

  test("Verifica se é renderizado os trending coins", async () => {
    vi.spyOn(apiCrypto, "fetchTrendingCoins").mockImplementation(() =>
      Promise.resolve(trendingCoins)
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

    const coin = await screen.findAllByTestId("trending-coin");
    expect(coin).toBeTruthy();
  });

  test("Verifica se redireciona para página de notFound, após passar endereço incorreto", async () => {
    renderWithRouter(<NotFound />);
    const title = await screen.findByText(/Voltar para home/i);
    expect(title).toBeInTheDocument();
  });
});
