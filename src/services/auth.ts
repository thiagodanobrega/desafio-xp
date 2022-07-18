// import axios from "axios";
import { v4 as uuid } from "uuid";

import { ISignInData } from "../contexts/Auth/AuthContext";

// const api = axios.create({
//   baseURL: process.env.REACT_APP_API,
// });

const userTest = {
  email: "thiagons@live.com",
  password: "1234567",
};

// função que gera um delay
const delay = (amount = 750) =>
  // eslint-disable-next-line no-promise-executor-return
  new Promise((resolve) => setTimeout(resolve, amount));

// simulando requisição a api
export const useApi = () => ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  validateToken: async (token: string) => {
    await delay();
    return {
      user: {
        name: "Thiago Nóbrega",
        email: "thiagons@live.com",
      },
    };
    // const response = await api.post("/validateToken", { token });
    // return response.data;
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  sigIn: async ({ email, password }: ISignInData) => {
    await delay();
    if (userTest.email === email && userTest.password === password) {
      return {
        token: uuid(),
        user: {
          name: "Thiago Nóbrega",
          email: "thiagons@live.com",
        },
      };
    }
    return { error: "Deu ruim" };
    // const response = await api.post("/signin", { email, password });
    // return response.data;
  },
  logout: async () => {
    await delay();
    return { status: true };
    // const response = await api.post("/logout");
    // return response.data;
  },
});
