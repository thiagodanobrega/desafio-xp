import React, { useEffect, useState } from "react";

import { cryptoApi } from "../../services/cryptoApi";
import { CryptoContext, ITrending } from "./CryptoContext";

export function CryptoProvider({ children }: { children: JSX.Element }) {
  const [trendingCoins, setTrendingCoins] = useState<ITrending[] | null>(null);
  const api = cryptoApi();

  const fetchTrendingCoins = async () => {
    const trending = await api.fetchTrendingCoins();
    setTrendingCoins(trending);
  };

  useEffect(() => {
    fetchTrendingCoins();
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <CryptoContext.Provider value={{ trendingCoins }}>
      {children}
    </CryptoContext.Provider>
  );
}
