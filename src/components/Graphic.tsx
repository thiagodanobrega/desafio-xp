import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

import { cryptoApi } from "../services/cryptoApi";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface IGraphic {
  idCrypto: string;
}

function Graphic({ idCrypto }: IGraphic) {
  const api = cryptoApi();
  const [historicPrice, setHistoricPrice] = useState<number[][] | undefined>(
    []
  );
  const [days, setDays] = useState<number>(1);

  const fetchHistoricPrice = async () => {
    const historic = await api.fetchHistoricPrices(idCrypto, days);
    setHistoricPrice(historic);
  };

  useEffect(() => {
    fetchHistoricPrice();
  }, []);

  const data = {
    labels:
      historicPrice &&
      historicPrice.map((price) => {
        const date = new Date(price[0]);
        const time = `${date.getHours()}:${date.getMinutes()}`;
        return days === 1 ? time : date.toLocaleDateString();
      }),

    datasets: [
      {
        label: "Bitcoin",
        data:
          historicPrice && historicPrice.map((price) => Math.floor(price[1])),
        borderColor: "#EEBC1D",
      },
    ],
  };

  const options = {
    reponsive: true,
    elements: {
      point: {
        radius: 1,
      },
    },
  };

  return <div>{historicPrice && <Line options={options} data={data} />}</div>;
}

export default Graphic;
