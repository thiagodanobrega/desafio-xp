// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { createContext } from "react";

export interface ITrending {
  id: string;
  symbol: string;
  name: string;
  image: string;
  price_change_percentage_24h: number;
  current_price: number;
}

export interface ICryptoContext {
  trendingCoins: ITrending[] | null;
}

export const CryptoContext = createContext({} as ICryptoContext);
