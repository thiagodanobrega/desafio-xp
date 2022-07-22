import axios from "axios";

export const delay = (amount = 300) =>
  // eslint-disable-next-line no-promise-executor-return
  new Promise((resolve) => setTimeout(resolve, amount));

// simulando requisição a api
export const cryptoApi = () => ({
  fetchTrendingCoins: async () => {
    await delay();
    const { data } = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=BRL&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h"
    );

    return data;
  },

  fetchHistoricPrices: async (id: string, day: number | 30) => {
    await delay();
    const currency = "BRL";
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${day}`
    );

    return data.prices;
  },
});
