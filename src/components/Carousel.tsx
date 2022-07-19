import axios from "axios";
import React, { useState, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { TrendingCoins } from "../services/cryptoApi";

interface ITrending {
  id: string;
  symbol: string;
  name: string;
  image: string;
  price_change_percentage_24h: number;
  current_price: number;
}
export default function Carousel() {
  const [trending, setTrending] = useState<ITrending[]>([]);

  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins());
    setTrending(data);
  };

  useEffect(() => {
    fetchTrendingCoins();
  }, []);
}
