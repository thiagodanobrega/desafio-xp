// import axios from "axios";

// const api = axios.create({
//   baseURL: process.env.REACT_APP_API,
// });

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
});
