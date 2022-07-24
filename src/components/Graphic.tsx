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

import * as api from "../services/cryptoApi";

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
const daysDefualt = [1, 3, 7];

function Graphic({ idCrypto }: IGraphic) {
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
  }, [days]);

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
        label: "linha",
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

  return (
    <div>
      {historicPrice && (
        <>
          <Line options={options} data={data} />
          <div className="mt-2 flex justify-center gap-4">
            {daysDefualt.map((day) => (
              <button
                type="button"
                key={day}
                className={`text-xs font-bold px-2 py-1 rounded-md border focus:outline-none focus:border-zinc-300 focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-zinc-300 ${
                  days === day ? "bg-zinc-300 text-black" : "bg-background"
                }`}
                onClick={() => setDays(day)}
              >{`${day} D`}</button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Graphic;
