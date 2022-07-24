// import axios from "axios";
import { v4 as uuid } from "uuid";

import { ISignInData } from "../contexts/Auth/AuthContext";

// const api = axios.create({
//   baseURL: process.env.REACT_APP_API,
// });

const userTest = {
  email: "test@email.com",
  password: "1234567",
};

// const storageToken = localStorage.getItem("authToken");
// if (storageToken) {
//   api.defaults.headers['Authorization'] = `Bearer ${storageToken}`;
// }

// função que gera um delay
export const delay = (amount = 750) =>
  // eslint-disable-next-line no-promise-executor-return
  new Promise((resolve) => setTimeout(resolve, amount));

// simulando requisição a api
export const useApi = () => ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  validateToken: async (token: string) => {
    await delay();
    if (token) {
      return {
        user: {
          id: 1,
          name: "Thiago Nóbrega",
          email: "teste@email.com",
        },
      };
    }
    return { error: "Deu ruim" };
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
          id: 1,
          name: "Thiago Nóbrega",
          email: "teste@email.com",
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
