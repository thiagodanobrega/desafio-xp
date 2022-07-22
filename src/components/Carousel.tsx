import React, { useContext } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { CryptoContext } from "../contexts/Crypto/CryptoContext";

export default function Carousel() {
  const { trendingCoins } = useContext(CryptoContext);
  const items =
    trendingCoins &&
    trendingCoins.map((coin) => {
      const profit = coin?.price_change_percentage_24h >= 0;
      return (
        <div className="flex flex-col items-center text-white text-sm">
          <img src={coin?.image} alt={coin.name} className="h-8" />
          <span>
            {coin?.symbol}
            &nbsp;
            <span
              style={{
                color: profit ? "rgb(14, 203, 129)" : "red",
                fontWeight: 500,
              }}
            >
              {profit && "+"}
              {coin?.price_change_percentage_24h?.toFixed(2)}%
            </span>
          </span>
          <span className="text-base font-bold">
            {coin?.current_price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </div>
      );
    });

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };

  return (
    <div className="flex w-[calc(100vw-2rem)] md:w-[50rem] absolute -bottom-9 items-center h-2/4">
      {trendingCoins && (
        <AliceCarousel
          mouseTracking
          infinite
          autoPlayInterval={1000}
          animationDuration={1500}
          disableDotsControls
          disableButtonsControls
          responsive={responsive}
          items={!items ? [] : items}
          autoPlay
        />
      )}
    </div>
  );
}
